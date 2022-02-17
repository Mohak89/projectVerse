from django import views
from rest_framework import status
from rest_framework import permissions, generics

from rest_framework.decorators import api_view, permission_classes # new
from rest_framework.response import Response # new
from rest_framework.reverse import reverse # new

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
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # new


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # new


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # new


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