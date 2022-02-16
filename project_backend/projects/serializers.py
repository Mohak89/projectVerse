from dataclasses import field
from rest_framework import serializers
from authentication.models import User

from projects.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source = 'owner.username')
    class Meta:
        model = Project
        fields = [
            'id',
            'owner',
            'project_title',
            'project_desc',
            'project_link'
        ]
        lookup_field = 'id'

class UserSerializer(serializers.ModelSerializer):
    # the 'snippet' adds the primarykey realation of one 'user' to many 'SNIPPETS'
    project_list    = serializers.PrimaryKeyRelatedField(many=True, queryset=Project.objects.all())
    class Meta:
        model       = User
        fields      =('id', 'username', 'project_list')