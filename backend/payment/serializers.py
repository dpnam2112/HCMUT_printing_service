from rest_framework import serializers
from .models import Transactions
from print_auth.serializers import UserSerializer

class TransactionsSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Transactions
        fields = ['user', 'transaction_id', 'a0_sheets', 'a1_sheets', 'a2_sheets', 'a3_sheets', 'a4_sheets', 'total_cost', 'status', 'date']