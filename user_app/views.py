from django.shortcuts import render
from user_app.serializers import UserSerializer, DonorUserSerializer, UserUpdateSerializer, EmailSerializer
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import CustomUser
import os
import smtplib


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

    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        serializer = UserUpdateSerializer(request.user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)


class SendNotificationView(APIView):
    
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, email):
        try:
            receiver = CustomUser.objects.get(email=email)
        except:
            raise Http404('No user found with such email')
        address = os.environ.get('EMAIL_HOST_USER')
        password = os.environ.get('EMAIL_HOST_PASSWORD')

        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.ehlo()
            smtp.starttls()
            smtp.ehlo()

            smtp.login(address, password)

            subject = '[Raktadaan] Someone is asking for blood help.'
            body = (f'Hello, you are getting this email because {request.user.email} is in urgent need of your blood. '
                    'Save a life by donating your blood.')

            msg = f'subject:{subject}\n\n{body}'

            smtp.sendmail(address, receiver, msg)

        return Response(status=status.HTTP_200_OK)

       

