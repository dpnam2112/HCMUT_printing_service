from django.shortcuts import render
from django.views import View
from rest_framework.views import APIView
from django.http import HttpRequest, HttpResponse
from rest_framework.response import Response
from printing_app.models import Printer, PrinterLocation, Extension
from printing_app.serializers import PrinterSerializer, PrinterLocationSerializer, ExtensionSerializer
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.core.exceptions import MultipleObjectsReturned
import json

# Create your views here.

class Printers(APIView):
    def get(self, request):
        """ Retrieve all printers.

        URL parameters (Used to filter printers based on 
        the specified location, Optional):
            + campus: codename of the campus ("CS1" or "CS2")
            + building: codename of the building
            + floor: floor number
            + room_code: room number

        Endpoint Returns:
            A JSON-formatted list of objects, each object includes the
            following fields:
                -   "id":  printer's id
                -   "location": printer's location, has the following fields:
                        + "campus": str
                        + "building_name": str
                        + "floor": int
                        + "room_code": str
                -   "name": new name for a printer
                -   "description": new description for a printer
                -   "status": printer's status
        """

        location = None
        query_params = dict(request.GET)
        for k, v in query_params.items():
            query_params[k] = v[0]

        if 'floor' in query_params:
            try:
                query_params['floor'] = int(query_params['floor'])
            except Exception as e:
                pass

        try:
            location = PrinterLocation.objects.get(**query_params)
        except Exception as e:
            pass

        printers = None
        if location:
            printers = Printer.objects.filter(location=location)
        else:
            printers = Printer.objects.all()

        serialized = PrinterSerializer(printers, many=True)
        return Response(serialized.data)

    def put(self, request):
        """ Add one or more printers.

            Request payloads: A JSON list of objects that have the following fields:
                -   "location": printer's location, has the following fields:
                        + "campus": str
                        + "building_name": str
                        + "floor": int
                        + "room_code": str
                -   "name": new name for a printer
                -   "manufacturer": name of manufacturer
                -   "description": new description for a printer
                -   "status": indicate printer's status

            Endpoint returns:
                Return a JSON text representing the update result.
        """
        
        printers = json.loads(request.body)
        for printer in printers:
            location_data = printer['location']
            location = None
            try:
                location = PrinterLocation.objects.get(**location_data)
            except PrinterLocation.DoesNotExist:
                return Response("Location does not exist.", status=status.HTTP_400_BAD_REQUEST)
            except MultipleObjectsReturned:
                return Response("Error in database: unique constraint failed in PrinterLocation",
                                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            printer['location'] = location
            if Printer.objects.filter(name=printer['name']).exists():
                return Response("Printer's name already exists.", status=status.HTTP_400_BAD_REQUEST)

            new_printer = Printer.objects.create(**printer)

        return Response("Printers created successfully", status=status.HTTP_201_CREATED)

    def post(self, request):
        """ Update one or more printers.

        Request payloads: A JSON list of objects that have the following fields:
            -   "locations": printer's location, has the following fields:
                    + "campus": str
                    + "building_name": str
                    + "floor": int
                    + "room_code": str
            -   "name": new name for a printer
            -   "description": new description for a printer
            -   "id": printer's ID

        Endpoint returns:
            Return a JSON text representing the update result.
        """
        printers = json.loads(request.body)
        for printer in printers:
            location_data = printer['location']
            location = None
            try:
                location = PrinterLocation.objects.get(**location_data)
            except PrinterLocation.DoesNotExist:
                return Response("Location does not exist.", status=status.HTTP_400_BAD_REQUEST)
            except MultipleObjectsReturned:
                return Response("Error in database: unique constraint failed in PrinterLocation",
                                    status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            printer['location'] = location

            try:
                Printer.objects.filter(id=printer["id"]).update(**printer)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response("Update printers successfully", status=status.HTTP_201_CREATED)

class RemovePrinters(APIView):
    def post(self, request):
        """ Delete printers whose IDs are in the request payload.

        Request payload in JSON format:
            printer_ids: list of printer ids to be deleted

        Returns:
            Return a JSON text representing the deletion result.
        """
        try:
            printer_ids = request.data.get('printer_ids', [])
            Printer.objects.filter(id__in=printer_ids).delete()
            return Response({"message": "Printers deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ActivateExt(APIView):
    def post(self, request):
        """ Deactivate or activate extensions.
        
        Request payloads: in JSON format
            + activate: either true or false, if activate = true,
            activate all extensions in the extension list.
            + ext: list of extensions (e.g: ['docx', 'xlsx'])
        """
        try:
            activate = request.data.get('activate')
            exts = request.data.get('ext', [])
            for ext in exts:
                ext_obj = Extension.objects.get(pk=ext)
                ext_obj.status = activate
                ext_obj.save()
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_200_OK)