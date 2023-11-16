from django.shortcuts import render
from django.views import View
from django.http import HttpRequest, HttpResponse

# Create your views here.

class Printers(View):
    def get(self, request: HttpRequest):
        """ Retrieve all printers.

        Endpoint Returns:
            A JSON-formatted list of objects, each object includes the
            following fields:
                -   "locations": printer's location, has the following fields:
                        + "campus": str
                        + "building_name": str
                        + "floor": int
                        + "room_code": str
                -   "name": new name for a printer
                -   "description": new description for a printer
                -   "status": printer's status
        """
        return HttpResponse("Not implemented.", content_type='text/plain')

    def post(self, request: HttpRequest):
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

    def put(self, request: HttpRequest):
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