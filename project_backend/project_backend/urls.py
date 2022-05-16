"""project_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from argparse import Namespace
from django.urls import path, include
# Additionally included
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets    #django-restframework imports
from django.contrib.auth import get_user_model
from django.contrib import admin
admin.autodiscover()

# from projects.models import Project



# Routers provide an easy way of automatically determining the URL conf.
# router = routers.DefaultRouter()
# router.register(r'users',UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('', include('projects.urls')),
    path('admin/', admin.site.urls),
    # path('api-auth/', include('rest_framework.urls')), # new
    path('api/', include('projects.urls')),
    path('api/o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('auth-a/', include('authentication.urls'),),
]
