from django.db import models
from authentication.models import User
# Create your models here.

# PROJECT BASE MODEL
class Project(models.Model):
    status = (
        ('active', 'active'),
        ('completed', 'Complete'),
        ('jai', 'Just An Idea'),
    )
    id              = models.BigAutoField(primary_key=True)
    created         = models.DateTimeField(auto_now_add=True, null=True)
    owner           = models.ForeignKey(User,related_name='project_list', on_delete=models.CASCADE)
    project_title   = models.CharField(max_length=50)
    project_desc    = models.CharField(max_length=200)
    project_link    = models.URLField(blank=True, null=True)
    project_status  = models.CharField(max_length=12, choices=status, default='active',blank=True, null=True)
    # project_img = models.FileField(verbose_name="Project Image", upload_to="projects/")
    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.project_title
    
