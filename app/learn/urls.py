from django.urls import path

from . import views

app_name = 'learn'  # Namespaces the views

urlpatterns = [
    # Non-generic views for now.
    path('', views.index, name='index'),
    path('/page-one', views.page_one, name='page_one'),
    path('/page/<slug:slug>', views.page, name='page')
]