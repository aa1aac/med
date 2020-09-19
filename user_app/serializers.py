from rest_framework import serializers

from user_app.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['user_id', 'email', 'full_name', 'blood_group']


class DonorUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['blood_group', 'full_name', 'email']