from rest_framework import serializers
from dataclasses import dataclass

@dataclass
class Amount:
    currency_code: str
    value: float

class AmountSerializer(serializers.Serializer):
    currency_code = serializers.CharField(max_length=10)
    value = serializers.FloatField()

@dataclass
class Breakdown:
    item_total: Amount

class BreakdownSerializer(serializers.Serializer):
    item_total = AmountSerializer()

@dataclass
class ExtendedAmount(Amount):
    breakdown: Breakdown

class ExtendedAmountSerializer(AmountSerializer):
    breakdown = BreakdownSerializer()

@dataclass
class Item:
    name: str
    quantity: int
    unit_amount: Amount

class ItemSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=10)
    quantity = serializers.IntegerField()
    unit_amount = AmountSerializer()

@dataclass
class PurchaseUnit:
    amount: Amount
    items: list[Item]

class PurchaseUnitSerializer(serializers.Serializer):
    amount = ExtendedAmountSerializer()
    items = ItemSerializer(many=True)

@dataclass
class CreateOrderPayload:
    intent: str
    purchase_units: list[PurchaseUnit]

class CreateOrderPayloadSerializer(serializers.Serializer):
    intent = serializers.CharField(max_length=10)
    purchase_units = PurchaseUnitSerializer(many=True)