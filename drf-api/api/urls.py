from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from api.views import TaskViewSet, UserViewSet, ManageUserView

router = routers.DefaultRouter()
router.register('task', TaskViewSet)
router.register('user', UserViewSet)

urlpatterns = [
    path('myself/', ManageUserView.as_view(), name='myself'),
    path('', include(routers.urls)),
]