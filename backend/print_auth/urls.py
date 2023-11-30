from django.urls import path
from . import views

urlpatterns = [
    path("fetch-user-info/", views.FetchUserInfo.as_view()),
]

