from django.urls import path

from . import views
from .views import RegisterView,LoginView,UserView,LogoutView

urlpatterns = [
  path('', views.api_overview, name='api-overview'), # our-domain.com/meetups

  #products
  path('product-list/',views.product_list,name='product-list'),
  path('product-create/',views.product_create,name='product-create'),
  path('product-update/<str:pk>',views.product_update,name='product-update'),
  path('product-item/<str:title>',views.product_item,name='product-item'),
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
  path('user-cart/<str:id>',views.user_cart,name='user-cart'),
  path('user-id/<str:email>',views.user_id,name="user-id"),

  #contact
  path('contact-list/',views.contact_list,name='contact-list'),
  path('contact-create/',views.contact_create,name='contact-create'),
  path('contact-update/<str:pk>',views.contact_update,name='contact-update'),
  path('contact-item/<str:pk>',views.contact_item,name='contact-item'),
  path('contact-delete/<str:pk>',views.contact_delete,name='contact-delete'),


  #cart
  path('cart-list/',views.cart_list,name='cart-list'),
  path('cart-create/',views.cart_create,name='cart-create'),
  # path('cart-update/<str:pk>',views.cart_update,name='cart-update'),
  path('user-cart-list/<str:id>',views.user_cart_list,name='user-cart-list'),
  path('cart-delete/<str:title>',views.cart_delete,name='cart-delete'),
  path('cart-item/<str:title>/<str:id>',views.cart_item,name='cart-item'),

  #repository
  path('repo-list/<str:pk>',views.repo_list,name='repo-list'),
  path('repo-create/',views.repo_create,name='repo-create'),
  path('repo-update/<str:pk>',views.repo_update,name='repo-update'),
  path('repo-item/<str:pk>',views.repo_item,name='repo-item'),
  path('repo-delete/<str:title>',views.repo_delete,name='repo-delete'),

]