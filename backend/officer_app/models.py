from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Officer(models.Model):
    base_user = models.ForeignKey(User, unique=True)