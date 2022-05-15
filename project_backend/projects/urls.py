from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from projects import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.api_root),
    path('projects/',views.ProjectList.as_view(), name = 'project_list')    ,
    path('projects/<int:id>/',views.ProjectDetail.as_view(),name = 'project_detail'),
    # defined in AUTHENTIDATIONS APP view
    # path('users/',views.UserList.as_view(),name = 'user_list')    ,
    # path('users/<int:pk>/',views.UserDetail.as_view(),name = 'user_detail'),
    path('users/<int:pk>/projects',views.UserProjectsList.as_view(),name = 'user_project_detail')
    
] + static(settings.MEDIA_URL, document_root = 'MEDIA_ROOT')


urlpatterns = format_suffix_patterns(urlpatterns)