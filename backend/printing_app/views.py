from django.views import View
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import status
from . import models
from .models import PrintingActivity
from print_auth.models import CampusUser
from django.contrib.auth.models import User
from . import serializers
from .serializers import PrintingActivitySerializer
from django.conf import settings
from print_auth.utils import is_admin
import os
from datetime import datetime
import pytz
from docx2pdf import convert
import subprocess
from .pre_check import pre_check
import re
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
from pathlib import Path
import pandas as pd
import requests
import json
from django.conf import settings
# Create your views here

class FileValidate(View):
    """ Validate the file sent from users.

        After validating the file, metadata about the files, including:
            - campus id of the user who sent it
            - name of the file
            - file extension
            - directory of the file stored in the system
        ... should be stored in the database.

        Responses: a JSON-based data including these fields is returned
        to the client:
            - result: either "success" of "failure".
    """

    http_method_names = ['post']

    def post(self, request):
        pass

class PrintFile(View):
    """
        Revalidate the file and start the printing process.
    """

    http_method_names = ['get']

    def get(self, request):
        pass

class GetExtensions(APIView):
    def get(self, request):
        if not (settings.FRONTEND_DEV or request.user.is_authenticated):
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        extensions = models.Extension.objects.all()
        serializer = serializers.ExtensionSerializer(extensions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GetLocations(APIView):
    """ Retrieve all locations.

        Response's payloads:
            A list of JSON-formatted object that have these fields:
                + campus: str, campus name (CS1, CS2)
                + building: str, building name
                + floor: int
                + room_code: str
    """

    def get(self, request):
        if not (settings.FRONTEND_DEV or request.user.is_authenticated):
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        locations = models.PrinterLocation.objects.all()
        serializer = serializers.PrinterLocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PrintActivity(APIView):
    """ Retrieve print activities. """

    def get(self, request):
        query_params = dict(request.GET)
        for key, val in query_params.items():
            query_params[key] = val[0]

        if not (settings.FRONTEND_DEV or request.user.is_authenticated):
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        user_is_admin = is_admin(request.user)

        if "id" in query_params:
            # Get printing history of a specific user
            if not (settings.FRONTEND_DEV or request.user.id == int(query_params["id"]) or user_is_admin):
                return Response(status=status.HTTP_401_UNAUTHORIZED)

            user = None

            try:
                user = User.objects.get(pk=int(query_params["id"])) if (settings.FRONTEND_DEV or user_is_admin) else request.user
            except CampusUser.DoesNotExist:
                return Response({"error": "No user"}, status=status.HTTP_400_BAD_REQUEST)


            activities = PrintingActivity.objects.filter(user=user)
            serializer = PrintingActivitySerializer(activities, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif settings.FRONTEND_DEV or user_is_admin:
            # Get printing history of all users, only administrators are allowed to access
            print_activities = PrintingActivity.objects.all()
            serializer = PrintingActivitySerializer(print_activities, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_401_UNAUTHORIZED)

#base dir path to store files
BASE_DIR = Path(__file__).resolve().parent.parent
BASE_DIR = os.path.join(BASE_DIR, 'data')

def perform_print(request):
    if not (settings.FRONTEND_DEV or request.user.is_authenticated):
        return HttpResponse(status=401)

    if request.method == "POST" and request.FILES['filename']:
        #time
        tz_VN = pytz.timezone('Asia/Ho_Chi_Minh') 
        datetime_VN = datetime.now(tz_VN) 
        format_date = str(datetime_VN).replace(" ","")
        format_date = format_date.replace(".","")
        format_date = format_date.replace(":",'')
        
        #create filepath and store file

        file = request.FILES['filename']
        file_path = os.path.join(BASE_DIR, 'documents')
        file_url = file_path
        fs = FileSystemStorage(location = file_path,base_url = file_url)
        username = request.user.username if not settings.FRONTEND_DEV else "admin"
        fs.save(request.user.username + format_date + file.name,file)
        uploaded_file_url = fs.url(file.name)
        
        #split file ext and calculate size
        document_path = os.path.join(file_path, request.user.username + format_date + file.name)
        file_stats = ""
        with open(document_path,"rb"):
            file_stats = os.stat(document_path)
        file_size = file_stats.st_size / 1024
        temp, file_ext = os.path.splitext(os.path.join(document_path))


        #Perform print action
        
        if ((file_ext == ".doc") or (file_ext == ".docx")):
            convert(document_path, temp + ".pdf")
                
            os.remove(document_path)
            document_path = temp + ".pdf"

        #print options
        pages_print = request.POST["pages_print"]
        printer_name = request.POST["printer_name"]
        orient = request.POST["orient"] 
        side = request.POST["side"] #one-sided, two-sided-long-edge, two-sided-short-edge
        page_size = request.POST["page_size"]
        num_copies = request.POST["num_copies"]
        #pre_check
        check_info = [] #if pre_check return false, it will store error, if true, it store page_count at index 0, and new pages print at index 1

        if pre_check(document_path, pages_print,check_info, request.user, 
                     datetime_VN, file.name, num_copies, side) == False:
            return HttpResponse(json.dumps(check_info), status=400)
        else:
            new_pages = check_info[1]
            print(new_pages)
        #Linux path covert:
            linux_document_path = document_path.replace("\\","//")
            linux_document_path = linux_document_path.replace("C:","c")

            print(linux_document_path)

            proc= subprocess.Popen(['wsl','-u','root','-d','Ubuntu','cd','/mnt',
                                     ';','lp','-d','{}'.format(printer_name),'-o','media={}'.format(page_size),
                                     '-n','{}'.format(num_copies),'-o',
                                     'sides={}'.format(side),'-o','page-ranges={}'.format(new_pages),
                                     '{}'.format(linux_document_path)], 
                                     stdout= subprocess.PIPE, stderr=subprocess.PIPE, shell = True)
            

            (result, error) = proc.communicate()
            result = result.decode()
            
            
            if result.find("request id is") != -1:
                job_id = int(re.findall("\d+",result)[0]) - 1

                #save history
                
                if side == 'one-sided':
                    two_sided = False

                if settings.FRONTEND_DEV and not request.user.is_authenticated:
                    return HttpResponse("In thành công!",content_type="text/plain")

                p = PrintingActivity(user = request.user, printer_name = 
                                     printer_name,date = datetime_VN, file_name = file.name,
                                     file_ext = file_ext.replace(".",""), pape_count = check_info[0],
                                     sheet_type = page_size, job_id = job_id, two_sided = two_sided)
                p.save()
                return HttpResponse("In thành công!",content_type="text/plain")
            else:
                return HttpResponse("Không thực hiện được tác vụ in.",content_type="text/plain")
    

def check_print_status_success(request):
    if request.method == "POST":
        url = 'http://localhost:631/jobs?which_jobs=all'
        html = requests.get(url).content
        df_list = pd.read_html(html)
        df = df_list[-1]

        for i in range(PrintingActivity.objects.all().count()):
            row = PrintingActivity.objects.all()[i]
            if row.status == False:
                if str(df.iloc[[row.job_id]]["State"]).find("completed") != -1:
                    row.status = True
                    row.job_id = -1
                    row.save()

        return HttpResponse("kiem trang trang thai thanh cong",content_type="text/plain")

class MainPage(View):
    def get(self, request):
        return render(request, 'index.html')

class OfficerPage(View):
    def get(self, request):
        return render(request, 'officer.html')

class PricingPage(View):
    def get(self, request):
        return render(request, 'pricing.html')

class SupportPage(View):
    def get(self, request):
        return render(request, 'support.html')

class TestPrinting(View):
    def get(self, request):
        return render(request, 'print.html')