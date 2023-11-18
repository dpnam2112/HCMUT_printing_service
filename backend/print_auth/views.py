from django.shortcuts import render
from django.views import View

# Create your views here.

class FetchUserInfo(View):
    """
        If users are not logged in before, redirect them to CAS authentication page.

        If users are logged in before, return user's information based on sessions
        set by cas client. The returned data is in JSON format and has the following
        fields:
            - first_name: str
            - last_name: str
            - campus_id: str
            - username: str

        If the user is logged in the first time, data about users are stored in
        the database.
    """

    http_method_names = ['get']

    def get(self, request, format=None):
        pass
