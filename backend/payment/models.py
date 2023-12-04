from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Transactions(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=20, primary_key=True)
    a0_sheets = models.SmallIntegerField(default=0)
    a1_sheets = models.SmallIntegerField(default=0)
    a2_sheets = models.SmallIntegerField(default=0)
    a3_sheets = models.SmallIntegerField(default=0)
    a4_sheets = models.SmallIntegerField(default=0)
    total_cost = models.DecimalField(verbose_name="Total cost in USD", decimal_places=2, max_digits=5)
    status = models.CharField(max_length=20, default="INCOMPLETED")
    date = models.DateTimeField(auto_now_add=True)