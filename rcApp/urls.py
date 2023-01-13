from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name='index'),
	path('getCPrediction', views.getCPrediction, name='getCPrediction'),
	path('getRPrediction', views.getRPrediction, name='getRPrediction')
]