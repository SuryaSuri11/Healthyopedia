
from django.db import models

# Create your models here.
class Product(models.Model):
  title=models.CharField(max_length=400)
  category=models.CharField(max_length=400)
  price = models.DecimalField(max_digits=6, decimal_places=2)
  quantity=models.CharField(max_length=400)
  composition=models.TextField()
  description=models.TextField()
  uses=models.TextField()
  benefits=models.TextField()
  sideEffects=models.TextField()
  safetyAdvice=models.TextField()
  hwToUse=models.TextField()
  works=models.TextField()
  faq=models.TextField()
  img1=models.ImageField(upload_to='images')
  img2=models.ImageField(upload_to='images' ,blank=True)
  img3=models.ImageField(upload_to='images' ,blank=True)
  img4=models.ImageField(upload_to='images' ,blank=True)