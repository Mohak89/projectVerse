from dataclasses import field
from rest_framework import serializers
from authentication.models import User

from projects.models import Project

# --------------------------------------------------------------------------------------------------------
# --------------------------------------------------------------------------------------------------------


# PROJECT SERIALIZER
class ProjectSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source = 'owner.username')
    class Meta:
        model = Project
        fields = "__all__"
        lookup_field = 'id'

# USER SERIALIZER (with project-list)
class UserSerializer(serializers.ModelSerializer):
    '''
        -> adding project list to the user serializer
        -> the 'project_list' adds the primarykey realation of one 'user' to many 'PROJECTS'
    '''
    project_list    = serializers.PrimaryKeyRelatedField(many=True, 
                                                         queryset=Project.objects.all()
                                                        )  
    class Meta:
        model       = User
        fields      =('id', 'username', 'project_list')
