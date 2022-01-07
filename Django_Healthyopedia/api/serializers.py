from rest_framework import fields, serializers
from .models import Product,consultationcategory,Doctorconsultation,consultationform

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

