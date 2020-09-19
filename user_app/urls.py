from django.urls import include, path
from .views import UserDetailView

urlpatterns = [
    path('signup/', include('rest_auth.registration.urls')),
    path('', include('rest_auth.urls')),
    path('me/', UserDetailView.as_view()),
]

