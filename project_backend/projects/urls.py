from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from projects import views

urlpatterns = [
    path('', views.api_root),
    path('projects/',views.ProjectList.as_view(), name = 'project_list')    ,
    path('projects/<int:pk>/',views.ProjectDetail.as_view(),name = 'project_detail'),
    path('users',views.UserList.as_view(),name = 'user_list')    ,
    path('users/<int:pk>/',views.UserDetail.as_view(),name = 'user_detail'),
    
]
urlpatterns = format_suffix_patterns(urlpatterns)