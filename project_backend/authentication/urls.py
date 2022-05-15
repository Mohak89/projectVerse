from django.urls import path, include
# Setup the URLs and include login URLs for the browsable API.

from authentication.views import UserList, UserDetails, GroupList

urlpatterns = [
 path('users/', UserList.as_view()),
    path('users/<pk>/', UserDetails.as_view()),
    path('groups/', GroupList.as_view()),   
]