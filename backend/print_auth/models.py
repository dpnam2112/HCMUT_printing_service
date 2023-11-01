from django.db import models

# Create your models here.

class CampusUser(models.Model):
    username = models.CharField(max_length=20, unique=True)
    id = models.CharField(max_length=10, unique=True, primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    page_balance = models.PositiveIntegerField(default=0)