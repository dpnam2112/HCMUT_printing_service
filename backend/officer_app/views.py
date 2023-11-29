from django.shortcuts import render
from django.views import View
from rest_framework.views import APIView
from django.http import HttpRequest, HttpResponse
from rest_framework.response import Response
from printing_app.models import Printer
from printing_app.serializers import PrinterSerializer

# Create your views here.

class Printers(APIView):
    def get(self, request):
        """ Retrieve all printers.

        Endpoint Returns:
            A JSON-formatted list of objects, each object includes the
            following fields:
                -   "location": printer's location, has the following fields:
                        + "campus": str
                        + "building_name": str
                        + "floor": int
                        + "room_code": str
                -   "name": new name for a printer
                -   "description": new description for a printer
                -   "status": printer's status
        """

        all_printers = Printer.objects.all()
        serialized = PrinterSerializer(all_printers, many=True)
        return Response(serialized.data)

    def post(self, request):
        """ Add one or more printers.

            Request payloads: A JSON list of objects that have the following fields:
                -   "locations": printer's location, has the following fields:
                        + "campus": str
                        + "building_name": str
                        + "floor": int
                        + "room_code": str
                -   "name": new name for a printer
                -   "description": new description for a printer
                -   "status": printer's status

            Endpoint returns:
                Return a JSON text representing the update result.
        """
        return HttpResponse("Not implemented.", content_type="text/plain")

    def put(self, request):
        """ Update one or more printers.

        Request payloads: A JSON list of objects that have the following fields:
            -   "locations": printer's location, has the following fields:
                    + "campus": str
                    + "building_name": str
                    + "floor": int
                    + "room_code": str
            -   "name": new name for a printer
            -   "description": new description for a printer
            -   "id": printer's ID (Only appears if the operation is `UPDATE`)
            -   "status": printer's status

        Endpoint returns:
            Return a JSON text representing the update result.
        """
        return HttpResponse("Not implemented.", content_type="text/plain")

class RemovePrinters(View):
    def post(self, request: HttpRequest):
        """ Delete printers whose IDs are in the request payload.

        Request payload: A JSON list of printer IDs.

        Returns:
            Return a JSON text representing the deletion result.
        """
        return HttpResponse("Not implemented.", content_type="text/plain")

class Location(View):
    def get(self, request):
        pass