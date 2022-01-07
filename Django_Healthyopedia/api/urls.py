from django.urls import path

from . import views

urlpatterns = [
  path('', views.api_overview, name='api-overview'), # our-domain.com/meetups

  #products
  path('product-list/',views.product_list,name='product-list'),
  path('product-create/',views.product_create,name='product-create'),
  path('product-update/<str:pk>',views.product_update,name='product-update'),
  path('product-item/<str:pk>',views.product_item,name='product-item'),
  path('product-delete/<str:pk>',views.product_delete,name='product-delete'),

  #news
  path('health-news/',views.news,name='health-news'),

  #onlineconsult
  path('consult-list/',views.consult_list,name='consult-list'),
  path('consult-item/<str:pk>',views.consult_item,name='consult-item'),
  path('doctor-list/',views.doctor_list,name='doctor-list'),
  path('doctordetails-item/<str:pk>',views.doctordetails_item,name='doctordetails-item'),
  path('doctordetails-category/<str:cat>',views.doctordetails_category,name='doctordetails-category'),
  path('user-list/',views.userform_list,name='user-list'),
  path('user-create/',views.user_create,name='user-create'),
  path('user-update/<str:pk>',views.user_update,name='user-update'),
  path('user-item/<str:pk>',views.userform_item,name='user-item'),
  path('user-delete/<str:pk>',views.user_delete,name='user-delete'),
  
]