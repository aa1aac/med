from rest_framework import serializers

from user_app.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['user_id', 'email', 'username', 'blood_group']


class DonorUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['blood_group', 'username', 'email']


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta: 
        model = CustomUser
        fields = ['blood_group']
    
    def validate(self, data):
        if len(data) > 1 or 'blood_group' not in data:
            raise serializers.ValidationError("Values other than blood_group were provided")
        return data
