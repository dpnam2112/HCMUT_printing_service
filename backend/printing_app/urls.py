from django.urls import path
from . import views
from officer_app.views import Printers

urlpatterns = [
    path("file-validate/", views.FileValidate.as_view()),
    path("get-printers/", Printers.as_view()),
    path("", views.PrintFile.as_view()),
]