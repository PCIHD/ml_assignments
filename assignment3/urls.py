from django.urls import path
from . import views

urlpatterns = [
    path('cats&dogs/',views.Catsanddogs.as_view()),



]
