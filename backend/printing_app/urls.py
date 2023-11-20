from django.urls import path
from . import views

urlpatterns = [
    path("file-validate", views.FileValidate.as_view()),
    path("", views.PrintFile.as_view()),
]