from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from .serializers import SignupSerializer
# # JWT
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated


class SignupView(CreateAPIView):
    model = get_user_model()
    serializer_class = SignupSerializer
    permission_classes = [
        AllowAny,
    ]

# class HelloView(APIView):
#     permission_classes = (IsAuthenticated,)
    
#     def get(self, request):
#         content = {'message': 'Hello, World!'}
#         return Response(content)
