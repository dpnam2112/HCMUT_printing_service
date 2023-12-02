from django.db import models
from django.conf import settings

# Create your models here.

class CampusUser(models.Model):
    base_user = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    campus_id = models.CharField(max_length=10, unique=True, primary_key=True)
    page_balance = models.PositiveIntegerField(default=100)

class Extension(models.Model):
    status = models.BooleanField()
    name = models.CharField(max_length=20)
    ext = models.CharField(max_length=20, primary_key=True)