from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Room(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,help_text='用户id')
    name = models.CharField(max_length=255, help_text='房间名')
    is_active = models.BooleanField(default=False,help_text='是否激活')
    is_attachment = models.BooleanField(default=False,help_text='是否为附件房间')
    created_at = models.DateTimeField(auto_now_add=True,help_text='创建时间')
    updated_at = models.DateTimeField(auto_now=True,help_text='更新时间')