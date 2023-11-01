from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from django.views import View
import django_cas_ng.decorators as cas_decorators

# Create your views here.

class FileValidate(View):
    """
        Validate the file sent from users.

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