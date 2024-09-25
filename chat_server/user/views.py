from rest_framework.response import Response
from rest_framework.generics import RetrieveAPIView,CreateAPIView
from rest_framework import status

from .ser import UserSerializer

# Create your views here.
class RegisterView(CreateAPIView):
    permission_classes = ()
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

class InfoView(RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        # 获取当前用户
        return self.request.user