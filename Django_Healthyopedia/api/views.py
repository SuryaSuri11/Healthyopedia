# Create your views here.
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import serializers

from api.serializers import ProductSerializer,consultationcategorySerializer,DoctorconsultationSerializer,consultationformSerializer
from .models import Product,consultationcategory,Doctorconsultation,consultationform
from rest_framework.decorators import api_view
from rest_framework.response import Response



# #news 
from newsapi import NewsApiClient
from django.http import JsonResponse


# Create your views here.

@api_view(['GET'])
def api_overview(request):
  url_list={
    "product_list":'/product-list/',
    "product_item":'/product-item/',
    'product_update':'/product-update/',
    "product_create":'/product-create/',
    "product_delete":'/product-delete/',
    "health_news":'/health-news/',
    "consult_list":'/consult-list/',
    "consult_item":'/consult-item/',
    "doctor_list":'/doctor-list/',
    "doctordetails_item":'/doctordetails-item/',
    "doctordetails_category":'/doctordetails-category/',
    "userform_list":'/userform-list/',
    "userform_item":'/userform-item/',
    'user_update':'/user-update/',
    "user_create":'/user-create/',
    "user_delete":'/user-delete/',
  }
  return Response(url_list)

#get all data
@api_view(['GET'])
def product_list(request):
  productlst=Product.objects.all()
  serializer=ProductSerializer(productlst,many=True)
  return Response(serializer.data)

#get a specific item
@api_view(['GET'])
def product_item(request,pk):
  login_item=Product.objects.get(id=pk)
  serializer=ProductSerializer(login_item,many=False)
  return Response(serializer.data)


#create a item
@api_view(['POST'])
def product_create(request):
  serializer=ProductSerializer(data=request.data)

  if serializer.is_valid():
    serializer.save()
  
  return Response(serializer.data)

#to delete a item
@api_view(['DELETE'])
def product_delete(request,pk):
  login_item=Product.objects.get(id=pk)
  login_item.delete()

  return Response("ITEM DELETED SUCCESSFULLY")

#to update an item
@api_view(['POST'])
def product_update(request,pk):
  login_item=Product.objects.get(id=pk)
  serializer=ProductSerializer(instance=login_item,data=request.data)

  if serializer.is_valid():
    serializer.save()

  return Response(serializer.data)


def news(request):
  newsapi = NewsApiClient(api_key='64592e96d9f4454ea620d7778ad005b9')
  all_articles = newsapi.get_top_headlines(language='en',category='health')
  return JsonResponse(all_articles) 


#get all data
@api_view(['GET'])
def consult_list(request):
  consult=consultationcategory.objects.all()
  serializer=consultationcategorySerializer(consult,many=True)
  return Response(serializer.data)

#get a specific item
@api_view(['GET'])
def consult_item(request,pk):
  consult_item=consultationcategory.objects.get(id=pk)
  serializer=consultationcategorySerializer(consult_item,many=False)
  return Response(serializer.data)

#get all data
@api_view(['GET'])
def doctor_list(request):
  doctor=Doctorconsultation.objects.all()
  serializer=DoctorconsultationSerializer(doctor,many=True)
  return Response(serializer.data)

#get a specific item based on primary key
@api_view(['GET'])
def doctordetails_item(request,pk):
  doctor_item=Doctorconsultation.objects.get(id=pk)
  serializer=DoctorconsultationSerializer(doctor_item,many=False)
  return Response(serializer.data)

#get a specific item based on consultation category
@api_view(['GET'])
def doctordetails_category(request,cat):
  doctor_item=Doctorconsultation.objects.filter(category=cat)
  serializer=DoctorconsultationSerializer(doctor_item,many=True)
  return Response(serializer.data)

#get all data
@api_view(['GET'])
def userform_list(request):
  userform=consultationform.objects.all()
  serializer=consultationformSerializer(userform,many=True)
  return Response(serializer.data)

#get a specific item
@api_view(['GET'])
def userform_item(request,pk):
  user_item=consultationform.objects.get(id=pk)
  serializer=consultationformSerializer(user_item,many=False)
  return Response(serializer.data)

@api_view(['POST'])
def user_create(request):
  serializer=consultationformSerializer(data=request.data)

  if serializer.is_valid():
    serializer.save()
  
  return Response(serializer.data)

@api_view(['DELETE'])
def user_delete(request,pk):
  user_item=consultationform.objects.get(id=pk)
  user_item.delete()

  return Response("ITEM DELETED SUCCESSFULLY")

#to update an item
@api_view(['POST'])
def user_update(request,pk):
  user_item=consultationform.objects.get(id=pk)
  serializer=consultationformSerializer(instance=user_item,data=request.data)

  if serializer.is_valid():
    serializer.save()

  return Response(serializer.data)