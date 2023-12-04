from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Transactions

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = ['user', 'transaction_id', 'a0_sheets', 'a1_sheets', 'a2_sheets', 'a3_sheets', 'a4_sheets', 'total_cost', 'status', 'date']