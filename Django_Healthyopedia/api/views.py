# Create your views here.
from django import http
from django.http import response
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import serializers
from rest_framework import views
from rest_framework.settings import IMPORT_STRINGS
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed

from .serializers import UserSerializer

from api.serializers import ProductSerializer,consultationcategorySerializer,DoctorconsultationSerializer,consultationformSerializer,ContactSerializer,RepositorySerializer,CartSerializer
from .models import  Product,consultationcategory,Doctorconsultation,consultationform,User,Contact,Repository,CartItems

from rest_framework.decorators import api_view
from rest_framework.response import Response
import jwt,datetime



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
    "productdetails_category":"productdetails-category/",
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
    "contact_list":'/contact-list/',
    "contact_item":'/contact-item/',
    'contact_update':'/contact-update/',
    "contact_create":'/contact-create/',
    "contact_delete":'/contact-delete/', 
    "login":'/login/',
    "register":'/register/',
    "logout":'/logout/',
    "user_cart":'/user-cart/', 
    'cart_create':'cart-create',
    'cart_list':'cart-list',
    'cart_delete':'cart-delete',
    'cart_item':'cart-item',
    'user_cart_list':'user-cart-list',
    "repo_list":'/repo-list/',
    "repo_item":'/repo-item/',
    "user_id":"/user-id",
    'repo_update':'/repo-update/',
    "repo_create":'/repo-create/',
    "repo_delete":'/repo-delete/', 
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
def product_item(request,title):
  login_item=Product.objects.get(title=title)
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

@api_view(['GET'])
def productdetails_category(request,cat):
  product_item=Product.objects.filter(organcategory=cat)
  serializer=ProductSerializer(product_item,many=True)
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
def consult_item(request,cat):
  consult_item=consultationcategory.objects.get(category=cat)
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
  print(serializer)
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

#contact

#get all data
@api_view(['GET'])
def contact_list(request):
  contact_list=Contact.objects.all()
  serializer=ContactSerializer(contact_list,many=True)
  return Response(serializer.data)

#get a specific item
@api_view(['GET'])
def contact_item(request,pk):
  contact_item=Contact.objects.get(id=pk)
  serializer=ContactSerializer(contact_item,many=False)
  return Response(serializer.data)

@api_view(['POST'])
def contact_create(request):
  serializer=ContactSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)

@api_view(['DELETE'])
def contact_delete(request,pk):
  Contact_item=Contact.objects.get(id=pk)
  Contact_item.delete()

#to update an item
@api_view(['POST'])
def contact_update(request,pk):
  contact_item=Contact.objects.get(id=pk)
  serializer=ContactSerializer(instance=contact_item,data=request.data)

  if serializer.is_valid():
    serializer.save()

  return Response(serializer.data)
  
class RegisterView(APIView):
  def post(self,request):
    serializer=UserSerializer(data=request.data)
    crt=serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)

class LoginView(APIView):
  def post(self,request):
    email=request.data['email']
    password=request.data['password']
    user=User.objects.filter(email=email).first()

    if user is None:
      raise AuthenticationFailed('User not found!')
    
    if not user.check_password(password):
      raise AuthenticationFailed('Incorrect password!')

    payload={
      'id':user.id,
      'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=60),
      'iat':datetime.datetime.utcnow()
    }

    token=jwt.encode(payload,'secret',algorithm='HS256')

    response=Response()
    response.set_cookie(key='jwt',value=token,httponly=True)
    response.data={
      'jwt':token
    }
    return response

class UserView(APIView):
  def get(self,request):
    token=request.COOKIES.get('jwt')

    if not token:
      raise AuthenticationFailed('No tokens')
    
    try:
      payload=jwt.decode(token,'secret',algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
      raise AuthenticationFailed('Unauthenticated!')

    user=User.objects.filter(id=payload['id']).first()
    serializer=UserSerializer(user)
    return Response(serializer.data)

#get a specific item
@api_view(['GET'])
def user_cart(request,id):
  cart_items=CartItems.objects.filter(user=id)
  serializer=CartSerializer(cart_items,many=True)
  return Response(serializer.data)


class LogoutView(APIView):
  def post(self,request):
    response=Response()
    response.delete_cookie('jwt')
    response.data={
      'message':'success'
    }

    return response

#get user id
@api_view(['GET'])
def user_id(request,email):
  user_item=User.objects.get(email=email)
  serializer=UserSerializer(user_item,many=False)
  return Response(serializer.data)


#repository

@api_view(['GET'])
def repo_list(request,pk):
  repo_list=Repository.objects.filter(user=pk)
  serializer=RepositorySerializer(repo_list,many=True)
  return Response(serializer.data)

#Cart items

# #get all data
@api_view(['GET'])
def cart_list(request):
  productlst=CartItems.objects.all()
  serializer=CartSerializer(productlst,many=True)
  return Response(serializer.data)


# #create a item
@api_view(['POST'])
def cart_create(request):
  serializer=CartSerializer(data=request.data)

  if serializer.is_valid():
    serializer.save()
  
  return Response(serializer.data)

 #to delete a item
@api_view(['DELETE'])
def cart_delete(request,title):
 cart_item=CartItems.objects.filter(title=title).first()
 cart_item.delete()

 return Response("ITEM DELETED SUCCESSFULLY")


#get cart item
@api_view(['GET'])
def cart_item(request,title,id):
  cart_item=CartItems.objects.get(title=title,user=id)
  serializer=CartSerializer(cart_item,many=False)
  return Response(serializer.data)

#get cart list based on user
@api_view(['GET'])
def user_cart_list(request,id):
  cart_item=CartItems.objects.filter(user=id)
  serializer=CartSerializer(cart_item,many=True)

#get a specific item
@api_view(['GET'])
def repo_item(request,pk):
  repo_item=Repository.objects.get(id=pk)
  serializer=RepositorySerializer(repo_item,many=False)
  return Response(serializer.data)

@api_view(['POST'])
def repo_create(request):
  serializer=RepositorySerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)


#to delete an repo
@api_view(['DELETE'])
def repo_delete(request,title):
  repo_item=Repository.objects.get(title=title)
  repo_item.delete()

  return Response("ITEM DELETED SUCCESSFULLY")




#to update an item
@api_view(['POST'])
def repo_update(request,pk):
  repo_item=Repository.objects.get(id=pk)
  serializer=RepositorySerializer(instance=repo_item,data=request.data)

  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data)
