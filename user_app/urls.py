from django.urls import include, path
from .views import UserDetailView

urlpatterns = [
    path('api/v1/user/signup/', include('rest_auth.registration.urls')),
    path('api/v1/user/', include('rest_auth.urls')),
    path('api/v1/user/me/', UserDetailView.as_view()),
]

