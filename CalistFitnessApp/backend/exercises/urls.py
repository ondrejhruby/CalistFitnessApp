from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_exercise, name='create_exercise'),
    path('list/', views.get_exercises, name='get_exercises'),
]