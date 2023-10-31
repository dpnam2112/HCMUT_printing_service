from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class PrinterLocation(models.Model):
    # Values of this field should be values defined in enums module in this package
    campus = models.CharField(max_length=20)
    building_name = models.CharField(max_length=20)
    floor = models.PositiveSmallIntegerField()
    room_code = models.CharField(max_length=3)

    class Meta:
        unique_together = ['campus', 'building_name', 'room_code']

class Printer(models.Model):
    location = models.ForeignKey(PrinterLocation, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, unique=True)
    manufacturer = models.CharField(max_length=20)
    description = models.CharField(max_length=100)

class CampusUser(models.Model):
    username = models.CharField(max_length=20, unique=True)
    id = models.CharField(max_length=10, unique=True, primary_key=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    page_balance = models.PositiveIntegerField(default=0)

class FileMetadata(models.Model):
    user_id = models.ForeignKey(CampusUser, on_delete=models.CASCADE)
    file_name = models.CharField(max_length=20)
    file_type = models.CharField(max_length=5)
    file_hash = models.CharField(max_length=64)
    upload_date = models.DateTimeField(auto_now_add=True)