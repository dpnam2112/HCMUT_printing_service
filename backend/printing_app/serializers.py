from rest_framework import serializers
from models import PrinterLocation, Printer

class PrinterLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrinterLocation
        fields = ['campus', 'building_name', 'floor', 'room_code']

class PrinterSerializer(serializers.ModelSerializer):
    location = PrinterLocationSerializer()

    class Meta:
        model = Printer
        fields = ['location', 'name', 'manufacturer', 'description']