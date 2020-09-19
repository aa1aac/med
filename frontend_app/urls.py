from django.urls import path

from .views import index_view

app_name = 'frontend'

urlpatterns = [
    path('', index_view, name="page"),
]

