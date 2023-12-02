from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Officer(User):
    class Meta:
        proxy = True
        permissions = [("officer_app_access", "Officer app access")]
