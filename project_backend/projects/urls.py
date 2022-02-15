from django.urls import path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from projects import views

urlpatterns = [
    path('projects/',views.ProjectList.as_view())    ,
    path('projects/<int:pk>/',views.ProjectDetail.as_view()),
    path('users',views.UserList.as_view())    ,
    path('users/<int:pk>/',views.UserDetail.as_view()),
    
]
urlpatterns = format_suffix_patterns(urlpatterns)