from django.urls import path

from . import views
from .views import RegisterView,LoginView,UserView,LogoutView

urlpatterns = [
  path('', views.api_overview, name='api-overview'), # our-domain.com/meetups

  #products
  path('product-list/',views.product_list,name='product-list'),
  path('product-create/',views.product_create,name='product-create'),
  path('product-update/<str:pk>',views.product_update,name='product-update'),
  path('product-item/<str:pk>',views.product_item,name='product-item'),
  path('product-delete/<str:pk>',views.product_delete,name='product-delete'),
  path('productdetails-category/<str:cat>',views.productdetails_category,name='productdetails-category'),

  #news
  path('health-news/',views.news,name='health-news'),

  #onlineconsult
  path('consult-list/',views.consult_list,name='consult-list'),
  path('consult-item/<str:cat>',views.consult_item,name='consult-item'),
  path('doctor-list/',views.doctor_list,name='doctor-list'),
  path('doctordetails-item/<str:pk>',views.doctordetails_item,name='doctordetails-item'),
  path('doctordetails-category/<str:cat>',views.doctordetails_category,name='doctordetails-category'),
  path('user-list/',views.userform_list,name='user-list'),
  path('user-create/',views.user_create,name='user-create'),
  path('user-update/<str:pk>',views.user_update,name='user-update'),
  path('user-item/<str:pk>',views.userform_item,name='user-item'),
  path('user-delete/<str:pk>',views.user_delete,name='user-delete'),
  
  #signup/register
  path('register',RegisterView.as_view()),
  path('login',LoginView.as_view()),
  path('user',UserView.as_view()),
  path('logout',LogoutView.as_view()),

  #contact
  path('contact-list/',views.contact_list,name='contact-list'),
  path('contact-create/',views.contact_create,name='contact-create'),
  path('contact-update/<str:pk>',views.contact_update,name='contact-update'),
  path('contact-item/<str:pk>',views.contact_item,name='contact-item'),
  path('contact-delete/<str:pk>',views.contact_delete,name='contact-delete'),

]