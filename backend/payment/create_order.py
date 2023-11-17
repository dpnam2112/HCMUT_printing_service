from rest_framework import serializers
from dataclasses import dataclass

@dataclass
class Amount:
    currency_code: str
    value: int

class AmountSerializer(serializers.Serializer):
    currency_code = serializers.CharField(max_length=10)
    value = serializers.IntegerField()

@dataclass
class PurchaseUnit:
    amount: Amount

class PurchaseUnitSerializer(serializers.Serializer):
    amount = AmountSerializer()

@dataclass
class CreateOrderPayload:
    intent: str
    purchase_units: list[PurchaseUnit]

class CreateOrderPayloadSerializer(serializers.Serializer):
    intent = serializers.CharField(max_length=10)
    purchase_units = PurchaseUnitSerializer(many=True)