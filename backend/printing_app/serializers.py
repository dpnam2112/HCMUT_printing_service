from rest_framework import serializers
from .models import PrinterLocation, Printer, Extension, PrintingActivity
from print_auth.serializers import UserSerializer

class PrinterLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrinterLocation
        fields = ['campus', 'building_name', 'floor', 'room_code']

    def save(self, **kwargs):
        """Create or update the printer location instance."""
        return PrinterLocation.objects.create(**self.validated_data)


class PrinterSerializer(serializers.ModelSerializer):
    location = PrinterLocationSerializer()

    class Meta:
        model = Printer
        fields = ['id', 'location', 'name', 'manufacturer', 'description']


    def save(self, **kwargs):
        """Create or update the printer instance."""
        location_data = self.validated_data.pop('location')
        location_serializer = PrinterLocationSerializer(data=location_data)
        if location_serializer.is_valid():
            location = location_serializer.save()
            self.validated_data['location'] = location
        return Printer.objects.create(**self.validated_data)

class ExtensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Extension
        fields = ('status', 'name', 'ext')

class PrintingActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = PrintingActivity
        fields = ('date', 'user', 'printer_name', 'file_name', 'file_ext', 'page_count', 'two_sided', 'sheet_type')