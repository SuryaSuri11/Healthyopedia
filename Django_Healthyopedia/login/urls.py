from django.urls import path
from .import views


urlpatterns = [
  path('', views.login_overview, name='login-overview'), # our-domain.com/meetups
  path('login-list/',views.login_list,name='login-list'),
  path('login-create/',views.login_create,name='login-create'),
  path('login-update/<str:pk>/',views.login_update,name='login-update'),
  path('login-item/<str:pk>',views.login_item,name='login-item'),
  path('login-delete/<str:pk>',views.login_delete,name='login-delete'),
]