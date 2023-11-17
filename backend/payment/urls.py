from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("create_order/", views.CreateOrder.as_view()),
    path("capture_order/", views.CaptureOrder.as_view())
]