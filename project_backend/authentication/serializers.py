from rest_framework import serializers
from django.contrib.auth.models import Group
from authentication.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ("__all__")
        fields = ("id","username", "email",
        "first_name", "last_name", "is_active", "date_joined")

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ("name", )



