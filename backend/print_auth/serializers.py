from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import CampusUser

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class CampusUserSerializer(serializers.ModelSerializer):
    base_user = UserSerializer()

    class Meta:
        model = CampusUser
        fields = ['id', 'page_balance', 'base_user']

    def create(self, validated_data):
        base_user_data = validated_data.pop('base_user')
        base_user = User.objects.create(**base_user_data)
        campus_user = CampusUser.objects.create(base_user=base_user, **validated_data)
        return campus_user

    def update(self, instance, validated_data):
        base_user_data = validated_data.pop('base_user')
        base_user_serializer = UserSerializer(instance.base_user, data=base_user_data, partial=True)
        if base_user_serializer.is_valid():
            base_user_serializer.save()

        instance.page_balance = validated_data.get('page_balance', instance.page_balance)
        instance.save()
        return instance