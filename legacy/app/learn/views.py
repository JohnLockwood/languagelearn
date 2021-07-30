from django.shortcuts import render


def index(request):
    return render(request, 'learn/index.html')


def page(request, slug):
    return render(request, f"learn/pages/{slug}.html")


def page_one(request):
    return render(request, 'learn/page_one.html')