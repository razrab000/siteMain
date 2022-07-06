from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.Main),
    path('about', views.About, name="about"),
    path('price', views.Price, name="price"),
    path('background', views.Background, name="background"),
    path('send_message', views.Send_message, name="send_message")
]
