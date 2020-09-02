from django.urls import path
from . import views

urlpatterns = [
    path('cifar10/',views.cifar10.as_view()),

]
