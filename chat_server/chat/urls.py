from rest_framework.routers import DefaultRouter
from . import views

from django.urls import path, include

router = DefaultRouter()
router.register(r'room', views.RoomViewSet, basename='room')

urlpatterns = [
    path('', include(router.urls)),
]

