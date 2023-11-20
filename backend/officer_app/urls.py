from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("printers/", views.Printers.as_view()),
    path("remove-printers/", views.RemovePrinters.as_view()),
]