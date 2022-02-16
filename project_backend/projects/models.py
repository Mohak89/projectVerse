from django.db import models
from authentication.models import User
# Create your models here.


class Project(models.Model):
    id              = models.BigAutoField(primary_key=True)
    created         = models.DateTimeField(auto_now_add=True, null=True)
    owner           = models.ForeignKey(User,related_name='project_list', on_delete=models.CASCADE)
    project_title   = models.CharField(max_length=50)
    project_desc    = models.CharField(max_length=200)
    project_link    = models.URLField(blank=True, null=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.project_title
    
