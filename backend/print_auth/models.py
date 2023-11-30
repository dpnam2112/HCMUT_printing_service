from django.db import models
from django.conf import settings

# Create your models here.

class CampusUser(models.Model):
    base_user = models.OneToOneField(to=settings.AUTH_USER_MODEL, unique=True, on_delete=models.CASCADE)
    id = models.CharField(max_length=10, unique=True, primary_key=True)
    page_balance = models.PositiveIntegerField(default=100)