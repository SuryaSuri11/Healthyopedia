from rest_framework import fields, serializers
from .models import Login

class LoginSerializer(serializers.ModelSerializer):
  class Meta:
    model=Login
    fields='__all__'

