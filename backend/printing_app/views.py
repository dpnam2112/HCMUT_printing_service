from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
import models
import serializers

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
        all_locations = models.PrinterLocation.objects.all()
        serialized = serializers.PrinterLocation(all_locations, many=True)
        return Response(serialized.data)