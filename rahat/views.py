from django.shortcuts import render


def index(request):
    return render(request, 'rahat/whole-site.html')
