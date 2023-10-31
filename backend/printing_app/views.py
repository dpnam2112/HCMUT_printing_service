from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
import django_cas_ng.decorators as cas_decorators

# Create your views here.

@cas_decorators.login_required
def index(request: HttpRequest):
    print(request.session['attributes'])
    return HttpResponse("Not implemented yet.")