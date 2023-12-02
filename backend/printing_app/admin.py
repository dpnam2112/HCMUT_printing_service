from django.contrib import admin
from .models import Printer, PrinterLocation, Extension, PrintingActivity

# Register your models here.

admin.site.register(Printer)
admin.site.register(PrinterLocation)
admin.site.register(Extension)
admin.site.register(PrintingActivity)

