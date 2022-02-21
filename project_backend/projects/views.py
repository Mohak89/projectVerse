from cgitb import lookup
from django import views
from rest_framework import status
from rest_framework import permissions, generics
from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes # new
from rest_framework.response import Response # new
from rest_framework.reverse import reverse # new

from django.shortcuts import get_list_or_404, get_object_or_404 #new----------------

from authentication.models import User
from projects.models import Project
from projects.serializers import ProjectSerializer, UserSerializer
from projects.permissions import IsOwnerOrReadOnly
# --------------------------------------------------------------------------------------
@api_view(['GET']) # new
@permission_classes((permissions.AllowAny,))
def api_root(request, format=None):
    # permission_class = [permissions.AllowAny,]
    return Response({
        'users': reverse('user_list', request=request, format=format),
        'projects': reverse('project_list', request=request, format=format)
    })


# class ApiRoot(generics.GenericAPIView):
#     name = 'api-root'
#     def get(self, request, *args, **kwargs):
#         return Response({
#             'users': reverse("user-list", request=request,format=format),
#             'projects': reverse("project-list", request=request,format=format),
#             # 'robots': reverse(RobotList.name, request=request)
#             })    

# listing all Projects using 'ListCreateAPIView'
class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # new
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# listing details of a Project using 'RetrieveUpdateDestroyAPIView'
class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    # queryset = get_list_or_404(Project.objects.all())
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # new
    lookup_field = 'id'

    def get_object(self):
        id_ = self.kwargs.get("id")
        return get_object_or_404(Project, id = id_)
        # return JsonResponse(status=404, data={'status':'false','message':message})

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # new


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # new


class UserProjectsList(generics.ListCreateAPIView):
    # queryset = User.objects.get()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # new

    def get_queryset(self):
        try:
            return get_list_or_404(Project.objects.filter(owner=self.kwargs.get("pk")))
        except Project.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    # def get_object_list(self):
    #     try:
    #         return Project.objects.filter(owner=self.kwargs.get("pk"))
    #     except Project.DoesNotExist:
    #         return Response(status=status.HTTP_404_NOT_FOUND)
        # id_ = self.kwargs.get("pk")
        # return get_list_or_404(Project, id = id_)

    
    
    # def get_object(self):
        

# ---------------------------------------------------------------------------------------
# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]

# Create your views here.

# class HomeView(APIView):
#     permission_classes = (permissions.AllowAny,)
#     def get(self, request):
#         obj = Project.objects
#         context = {
#                     "all_homeview": obj.all()
#                     }
#         return render(request, "home.html", context)