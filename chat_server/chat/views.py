from rest_framework.viewsets import ModelViewSet
from .models import Room
from .ser import RoomSerializer

# Create your views here.

class RoomViewSet(ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    filterset_fields = ['user']
