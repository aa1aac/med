from django.shortcuts import render
from user_app.serializers import UserSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response


class UserDetailView(APIView):

    def get(self, request, format=None):
        return Response(UserSerializer(request.user).data)

