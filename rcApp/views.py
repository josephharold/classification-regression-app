from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
import matplotlib.pyplot as plt
import joblib
import pandas as pd

classificationModel = joblib.load('D:\School\\4th Year\ITD105\ITD105-FinalProj\webapp\\rcProject\\rcApp\\model.aiml')
classficationPred = {0: 'water is not Potable', 1: 'water is Potable'}
regressionModel = joblib.load('D:\School\\4th Year\ITD105\ITD105-FinalProj\webapp\\rcProject\\rcApp\\model5.aiml')

@csrf_exempt
def getRPrediction(request):
	if(request.method=="POST"):
		expenses = request.POST.get('marketingExpenses', 'default')
		expenses = float(expenses)
		inputs = [[expenses]]
		predicted = regressionModel.predict(inputs)
		predicted = round(predicted[0],2)
		res = {'prediction': predicted}	
		# res = {'prediction': 'helloworld'}
		return JsonResponse(res, safe=False)
	dct = {}
	dct['data'] = 'data'
	return JsonResponse(dct , safe=False)

@csrf_exempt
def getCPrediction(request):
	if(request.method=="POST"):
		ph = request.POST.get('ph', 'default')
		hardness = request.POST.get('hardness', 'default')
		solids = request.POST.get('solids', 'default')
		chloramines = request.POST.get('chloramines', 'default')
		sulfate = request.POST.get('sulfate', 'default')
		conductivity = request.POST.get('conductivity', 'default')
		organic_carbon = request.POST.get('organic_carbon', 'default')
		trihalomethanes = request.POST.get('trihalomethanes', 'default')
		turbidity = request.POST.get('turbidity', 'default')

		ph = float(ph)
		hardness = float(hardness)
		solids = float(solids)
		chloramines = float(chloramines)
		sulfate = float(sulfate)
		conductivity = float(conductivity)
		organic_carbon = float(organic_carbon)
		trihalomethanes = float(trihalomethanes)
		turbidity = float(turbidity)

		inputs = [[ph, hardness, solids, chloramines, sulfate, conductivity, organic_carbon, trihalomethanes, turbidity]]
		predicted = classificationModel.predict(inputs)
		predicted = classficationPred[predicted[0]]
	
		res = {'prediction': predicted}	
		return JsonResponse(res, safe=False)
	dct = {}
	dct['data'] = 'data'
	return JsonResponse(dct , safe=False)

@csrf_exempt
def index(request):
	return render(request, 'index.html')

