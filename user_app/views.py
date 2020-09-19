from django.shortcuts import render
from user_app.serializers import UserSerializer, DonorUserSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .models import CustomUser


class UserDetailView(APIView):

    def get(self, request, format=None):
        return Response(UserSerializer(request.user).data)


class DonorListView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        queryset = CustomUser.objects.filter(wants_to_donate=True)
        serializer = DonorUserSerializer(queryset, many=True)
        return Response(serializer.data) 


class CompatibleDonorListView(APIView):

    permission_classes = [permissions.IsAuthenticated]

    def get(self, requests, blood_group, format=None):
        queryset = CustomUser.objects.filter(blood_group=blood_group)
        serializer = DonorUserSerializer(queryset, many=True)
        return Response(serializer.data)