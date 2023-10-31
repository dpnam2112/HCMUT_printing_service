from django.db import models
from django.contrib.auth.models import User

class CampusProfile(models.Model):
    base_user = models.OneToOneField(User, on_delete=models.CASCADE, to_field="username")
    campus_id = models.CharField(max_length=10, unique=True, null=True)