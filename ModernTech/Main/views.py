from django.shortcuts import render, redirect
from .forms import *
BOT_TOKEN = '5597625973:AAFYCYSlqyxC-OSz_UBe1d4nuzjouYj9Nts'
# Create your views here.
def Main(request):
    return render(request, 'main/main.html')
def About(request):
    return render(request, 'main/about.html')
def Price(request):
    return render(request, 'main/price.html')
def Background(request):
    return render(request, 'main/background.html')
def Send_message(request):
    print('open new site')
    return render(request, 'main/about.html')
