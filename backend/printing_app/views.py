from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models
from .models import PrintingActivity
from print_auth.models import CampusUser
from . import serializers
from .serializers import PrintingActivitySerializer

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
        locations = models.PrinterLocation.objects.all()
        serializer = serializers.PrinterLocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PrintActivity(APIView):
    """ Retrieve print activities. """

    def get(self, request):
        query_params = dict(request.GET)
        for key, val in query_params.items():
            query_params[key] = val[0]

        if "id" in query_params:
            try:
                user = CampusUser.objects.get(campus_id=id)
            except CampusUser.DoesNotExist:
                return Response({"error": "No user"}, status=status.HTTP_400_BAD_REQUEST)

            activities = PrintingActivity.objects.filter(campus_id=query_params["id"])
            serializer = PrintingActivitySerializer(activities, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)

        print_activities = PrintingActivity.objects.all()
        serializer = PrintingActivitySerializer(print_activities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)