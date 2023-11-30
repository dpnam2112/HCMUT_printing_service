from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("create-order/", views.CreateOrder.as_view()),
    path("capture-order/", views.CaptureOrder.as_view())
]