
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


class consultationcategory(models.Model):
  category=models.CharField(max_length=20,primary_key=True)
  categoryimage=models.ImageField(upload_to='images')
  categorydescription=models.CharField(max_length=100)
  categorydiseases=models.CharField(max_length=100)
  faqquestion1=models.TextField()
  faqanswer1=models.TextField()
  faqquestion2=models.TextField(blank=True)
  faqanswer2=models.TextField(blank=True)
  faqquestion3=models.TextField(blank=True)
  faqanswer3=models.TextField(blank=True)
  faqquestion4=models.TextField(blank=True)
  faqanswer4=models.TextField(blank=True)



class Doctorconsultation(models.Model):
  doctorimage=models.ImageField(upload_to='images')
  doctorid=models.IntegerField(primary_key=True)
  doctorname=models.CharField(max_length=20)
  category=models.ForeignKey(consultationcategory, on_delete=models.CASCADE)
  fees=models.DecimalField(max_digits=5,decimal_places=2)
  educationdetails=models.CharField(max_length=50)

class consultationform(models.Model):
  username=models.CharField(max_length=20)
  doctorid=models.ForeignKey(Doctorconsultation, on_delete=models.CASCADE)
  useremail=models.EmailField()
  phoneno=models.IntegerField()
  Age=models.IntegerField()
  message=models.TextField(blank=True)

