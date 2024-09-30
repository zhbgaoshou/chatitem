from datetime import  timedelta
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Room
from .ser import RoomSerializer

from django.utils import timezone

# Create your views here.

class RoomViewSet(ModelViewSet):
    pagination_class = None
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    filterset_fields = ['user','is_active']
    
    @action(detail=False, methods=['get'])
    def categorized(self, request):

        user = request.user
        now = timezone.now()
        today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
        yesterday_start = today_start - timedelta(days=1)
        three_days_ago_start = today_start - timedelta(days=3)
        today_end = today_start + timedelta(days=1)

        # 获取过滤条件范围内的所有数据
        start_time = three_days_ago_start
        end_time = today_end
        rooms = Room.objects.filter(created_at__gte=start_time, created_at__lt=end_time, user=user).order_by('-created_at')

        # 在内存中对查询结果进行分类
        today_rooms = []
        yesterday_rooms = []
        three_days_ago_rooms = []


        for room in rooms:
            if today_start <= room.created_at < today_end:
                today_rooms.append(room)
            elif yesterday_start <= room.created_at < today_start:
                yesterday_rooms.append(room)
            elif three_days_ago_start <= room.created_at < yesterday_start:
                three_days_ago_rooms.append(room)


        # 序列化数据
        today_serializer = RoomSerializer(today_rooms, many=True)
        yesterday_serializer = RoomSerializer(yesterday_rooms, many=True)
        three_days_ago_serializer = RoomSerializer(three_days_ago_rooms, many=True)


        return Response({
            'today': {'date':'今天','data':today_serializer.data},
            'yesterday': {'date':'昨天','data':yesterday_serializer.data},
            'three_days_ago': {'date':'三天前','data':three_days_ago_serializer.data},
        })
