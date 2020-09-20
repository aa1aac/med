from django.shortcuts import render
from user_app.serializers import UserSerializer, DonorUserSerializer, UserUpdateSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import CustomUser


class UserDetailView(APIView):

    def get(self, request, format=None):
        return Response(UserSerializer(request.user).data)


class DonorListView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        queryset = CustomUser.objects.exclude(blood_group="").exclude(user_id=request.user.user_id)
        serializer = DonorUserSerializer(queryset, many=True)
        return Response(serializer.data) 


class CompatibleDonorListView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, blood_group, format=None):
        queryset = CustomUser.objects.filter(blood_group=blood_group).exclude(user_id=request.
                                             user.user_id)
        serializer = DonorUserSerializer(queryset, many=True)
        return Response(serializer.data)


class UpdateUserDetailView(APIView):

    def put(self, request):
        serializer = UserUpdateSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

