from django.shortcuts import render
from .models import Model_image
from .serializers import MODEL_serializer
from rest_framework import generics
from rest_framework.parsers import FormParser
from rest_framework.response import Response
from rest_framework import status
# Create your views here.


class cifar10(generics.ListCreateAPIView):
    queryset = Model_image.objects.all()
    serializer_class = MODEL_serializer

def post(self,request,*args,**kwargs):
        if(request.method=="POST"):
            image_serializer = MODEL_serializer(data=request.data)
            if(image_serializer.is_valid()):
                print("got image")
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)




