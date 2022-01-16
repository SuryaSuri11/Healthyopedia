from rest_framework import fields, serializers
from .models import Product,consultationcategory,Doctorconsultation,consultationform,User,Contact
from api import models

class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model=Product
    fields='__all__'


class consultationcategorySerializer(serializers.ModelSerializer):
  class Meta:
    model=consultationcategory
    fields='__all__'


class DoctorconsultationSerializer(serializers.ModelSerializer):
  class Meta:
    model=Doctorconsultation
    fields='__all__'

class consultationformSerializer(serializers.ModelSerializer):
  class Meta:
    model=consultationform
    fields='__all__'


class ContactSerializer(serializers.ModelSerializer):
  class Meta:
    model=Contact
    fields='__all__'
    
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model=User
    fields=['id','username','email','password']
    extra_kwargs={
      'password':{'write_only':True}
    }

  def create(self,validated_data):
    password=validated_data.pop('password',None)
    instance=self.Meta.model(**validated_data)
    if password is not None:
      instance.set_password(password)
    instance.save()
    return instance

