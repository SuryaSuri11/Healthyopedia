from django.db import models
from django import forms
from django.forms import widgets

# Create your models here.
class Login(models.Model):
    email=models.EmailField()
    password=models.CharField(max_length=20)