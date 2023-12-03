from django.shortcuts import render
from django.views import View
from django.http import  HttpResponse, HttpResponseRedirect
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status 
from django.contrib.auth.models import User
from .models import CampusUser
from django.db import models
from .serializers import CampusUserSerializer
from django_cas_ng.decorators import login_required
from django.conf import settings

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

    def get(self, request):
        # TODO: Check if user is an administrator

        user = request.user
        if not settings.FRONTEND_DEV and (not user or not user.is_authenticated):
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        profile = None
        if not CampusUser.objects.filter(base_user=user).exists():
            profile = CampusUser.objects.create(base_user=user, page_balance=500)
        else:
            try:
                profile = CampusUser.objects.get(base_user=user)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        serializer = CampusUserSerializer(profile)
        return Response(serializer.data)