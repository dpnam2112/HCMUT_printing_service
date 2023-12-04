from django.contrib import admin
from django.urls import path
from . import views
from payment.views import GetTransactions

urlpatterns = [
    path("printers/", views.Printers.as_view()),
    path("remove-printers/", views.RemovePrinters.as_view()),
    path("activate-ext/", views.ActivateExt.as_view()),
    path("transactions/", GetTransactions.as_view())
]