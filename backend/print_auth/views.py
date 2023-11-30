from django.shortcuts import render
from django.views import View
from django.http import  HttpResponse, HttpResponseRedirect
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from . import models as print_auth_models
from django.db import models
from .serializers import CampusUserSerializer
import logging
from django.conf import settings

logger = logging.getLogger(__name__)

class FetchUserInfo(APIView):
    """
        If users are logged in, return user's information based on session's attributes
        set by cas client (django-cas-ng). The returned data is in JSON format and has the
        following fields:
            - id: int, which is the campus id of the user
            - page_balance: int
            - base_user: A JSON object representing information of the campus account.
                + id: int
                + username: str
                + first_name: str
                + last_name: str
                + email: str
    """

    campus_user_model = print_auth_models.CampusUser
    authentication_classes = [SessionAuthentication]

    def login_first_time(self, campus_id):
        """ Check if the user is logged in the first time. """
        try:
            return not print_auth_models.CampusUser.objects.get(pk=campus_id)
        except Exception as e:
            return True

    def new_campus_profile(self, request):
        """ Create new campus profile for users who are logged in the first time. """
        return self.campus_user_model.objects.create(
            base_user=request.user,
            id=request.session["attributes"]["campus_id"],
        )


    def get(self, request):
        # TODO: Check if user is an administrator

        # Additional attributes for campus user
        campus_add_attrs = ['campus_id']
        for attr in campus_add_attrs:
            if attr not in request.session['attributes']:
                return HttpResponse(status=500)

        campus_id = request.session["attributes"]["campus_id"]

        profile = None

        if self.login_first_time(campus_id):
            profile = self.new_campus_profile(request)
        else:
            profile = self.campus_user_model.objects.get(pk=campus_id)

        if settings.CAS_USE_TEST_ACCOUNT:
            profile.base_user.first_name, profile.base_user.last_name = 'John', 'Doe'
            profile.base_user.email = 'johndoe@hcmut.edu.vn'

        # TODO: Log the logging-in activity of users

        serializer = CampusUserSerializer(profile)
        return Response(serializer.data)

class Login(View):
    def get(self, request):
        return HttpResponseRedirect(redirect_to="/")

class Logout(View):
    def get(self, request):
        return HttpResponse("Not implemented", content_type='text/plain')