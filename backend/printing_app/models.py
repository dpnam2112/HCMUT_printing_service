from django.db import models
from print_auth.models import CampusUser
from django.conf import settings

# Create your models here.

class PrinterLocation(models.Model):
    # Values of this field should be values defined in enums module in this package
    campus = models.CharField(max_length=20)
    building_name = models.CharField(max_length=20)
    floor = models.PositiveSmallIntegerField()
    room_code = models.CharField(max_length=3)

    class Meta:
        unique_together = ['campus', 'building_name', 'floor', 'room_code']

class Printer(models.Model):
    location = models.ForeignKey(PrinterLocation, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    manufacturer = models.CharField(max_length=20)
    description = models.CharField(max_length=100)
    status = models.BooleanField(default=True)

class FileMetadata(models.Model):
    user_id = models.ForeignKey(CampusUser, on_delete=models.CASCADE)
    file_name = models.CharField(max_length=20)
    file_type = models.CharField(max_length=5)
    file_hash = models.CharField(max_length=64)
    upload_date = models.DateTimeField(auto_now_add=True)

class Extension(models.Model):
    status = models.BooleanField(default=False)
    ext = models.CharField(max_length=20, primary_key=True)
    name = models.CharField(max_length=20)

class PrintingActivity(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    printer_name = models.CharField(max_length=200)
    file_name = models.CharField(max_length=200)
    file_ext = models.CharField(max_length=6)
    page_count = models.PositiveIntegerField()
    two_sided = models.BooleanField(default=False)
    sheet_type = models.CharField(max_length=2)
    status = models.BooleanField(default=False)
    job_id = models.IntegerField(default=False)
