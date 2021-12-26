# Create your views here.
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import serializers

from api.serializers import ProductSerializer
from .models import Product
from rest_framework.decorators import api_view
from rest_framework.response import Response

# #news 
# from newsapi import NewsApiClient
# from django.http import JsonResponse


# Create your views here.

@api_view(['GET'])
def api_overview(request):
  url_list={
    "product_list":'/product-list/',
    "product_item":'/product-item/',
    'product_update':'/product-update/',
    "product_create":'/product-create/',
    "product_delete":'/product-delete/'
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


# def news(request):
#   newsapi = NewsApiClient(api_key='64592e96d9f4454ea620d7778ad005b9')
#   all_articles = newsapi.get_top_headlines(language='en',category='health')
#   return JsonResponse(all_articles) 
  

