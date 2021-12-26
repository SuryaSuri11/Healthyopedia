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
  # path('health-news/',views.news,name='health-news')
]