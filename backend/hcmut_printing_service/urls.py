"""hcmut_printing_service URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
import django_cas_ng.views
from officer_app.views import Printers
from print_auth.views import FetchUserInfo
from printing_app.views import GetLocations
from printing_app.views import GetExtensions
from printing_app.views import PrintActivity
from printing_app.views import MainPage, OfficerPage, PricingPage, SupportPage, perform_print, TestPrinting
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/perform-print/', perform_print),
    path('accounts/login/', django_cas_ng.views.LoginView.as_view(), name='cas_ng_login'),
    path('accounts/logout/', django_cas_ng.views.LogoutView.as_view(), name='cas_ng_logout'),
    path("api/officer/", include('officer_app.urls')),
    path("api/printers/", Printers.as_view()),
    path("api/payment/", include('payment.urls')),
    path("api/print-auth/", include("print_auth.urls")),
    path("api/location/", GetLocations.as_view()),
    path("api/get-ext/", GetExtensions.as_view()),
    path("api/activity/", PrintActivity.as_view()),
    path("api/user-info/", FetchUserInfo.as_view()),

    # Routes for rendering static pages
    path("", MainPage.as_view()),
    path("officer/", OfficerPage.as_view()),
    path("test-print/", TestPrinting.as_view()),
    path("pricing/", PricingPage.as_view()),
    path("support/", SupportPage.as_view())
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    static_folders = [
        'static/css', 
        'static/chunks', 
        'static/chunks/pages', 
        'static/chunks/css/', 
        'assets/images/']
    for folder in static_folders:
        urlpatterns += static(f"{settings.STATIC_URL}{folder}", document_root=f"{settings.STATIC_ROOT}{folder}")