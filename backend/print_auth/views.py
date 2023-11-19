from django.shortcuts import render
from django.views import View
from django.http import HttpRequest, HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from . import models as print_auth_models
from django.db import models
from .serializers import CampusUserSerializer
import logging

logger = logging.getLogger(__name__)


class FetchUserInfo(APIView):
    """
        If users are not logged in before, redirect them to CAS authentication page.

        If users are logged in before, return user's information based on sessions
        set by cas client. The returned data is in JSON format and has the following
        fields:
            - first_name: str
            - last_name: str
            - campus_id: str
            - username: str
            - page_balance: int

        If the user is logged in the first time, data about users are stored in
        the database.
    """

    campus_user_model = print_auth_models.CampusUser

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
        if not request.user.is_authenticated:
            return HttpResponse("Not authenticated.", content_type="text/plain")

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

        serializer = CampusUserSerializer(profile)
        return Response(serializer.data)