from django.db import models
from django.conf import settings

# Create your models here.

class CampusUser(models.Model):
    base_user = models.OneToOneField(to=settings.AUTH_USER_MODEL, primary_key=True, on_delete=models.CASCADE)
    page_balance = models.PositiveIntegerField(default=100)
    is_admin = models.BooleanField(default=False)

class Extension(models.Model):
    status = models.BooleanField()
    name = models.CharField(max_length=20)
    ext = models.CharField(max_length=20, primary_key=True)