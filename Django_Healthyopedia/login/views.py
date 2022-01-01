
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import serializers

import login

from .serializers import LoginSerializer
from .models import Login
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def login_overview(request):
  super_list={
    "login_list":'/login-list/',
    "login_item":'/login-item/',
    'login_update':'/login-update/',
    "login_create":'/login-create/',
    "login_delete":'/login-delete/'
  }
  return Response(super_list)

#get all data
@api_view(['GET'])
def login_list(request):
  login=Login.objects.all()
  serializer=LoginSerializer(login,many=True)
  return Response(serializer.data)

 #get a specific item
@api_view(['GET'])
def login_item(request,pk):
 items=Login.objects.get(id=pk)
 serializer=LoginSerializer(items,many=False)
 return Response(serializer.data)


#create a item
@api_view(['POST'])
def login_create(request):
  serializer=LoginSerializer(data=request.data)
  if serializer.is_valid():
       serializer.save()
  return     Response(serializer.data)

#to delete a item
@api_view(['DELETE'])
def login_delete(request,pk):
    login_item=Login.objects.get(id=pk)
    login_item.delete()

    return Response("ITEM DELETED SUCCESSFULLY")

#to update an item
@api_view(['POST'])
def login_update(request,pk):
    login_item=Login.objects.get(id=pk)
    serializer=LoginSerializer(instance=login_item,data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

  

