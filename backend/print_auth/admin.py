from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Extension)
admin.site.register(models.CampusUser)