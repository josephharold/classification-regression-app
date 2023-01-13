import '../styles/main.css'
import axios from 'axios';

const classPredPanel = document.getElementById('classPredPanel')
const regressPredPanel = document.getElementById('regressPredPanel')
const classificationButton = document.getElementById("classificationButton")
const regressButton = document.getElementById("regressionButton")

classificationButton.addEventListener('click', ()=>{fetchCPrediction()})
regressButton.addEventListener('click', ()=>{fetchRPrediction()})

const fetchCPrediction = async ()=>{
	event.preventDefault()
	let data = new FormData(); // 2
	data.append("ph", document.getElementById('ph').value)  
	data.append("hardness", document.getElementById('hardness').value)  
	data.append("solids", document.getElementById('solids').value)  
	data.append("chloramines", document.getElementById('chloramines').value)  
	data.append("sulfate", document.getElementById('sulfate').value)  
	data.append("conductivity", document.getElementById('conductivity').value)  
	data.append("organic_carbon", document.getElementById('organic_carbon').value)  
	data.append("trihalomethanes", document.getElementById('trihalomethanes').value)  
	data.append("turbidity", document.getElementById('turbidity').value)  
	data.append("csrfmiddlewaretoken", '{{csrf_token}}') // 3
	axios.post('http://127.0.0.1:8000/getCPrediction', data)
		.then(res=> updatePredPanel('classification', res.data.prediction ))
		.catch(err=>console.log(err))
}
const fetchRPrediction = async ()=>{
	event.preventDefault()
	let data = new FormData(); // 2
	data.append("marketingExpenses", document.getElementById('marketingExpenses').value)  
	data.append("csrfmiddlewaretoken", '{{csrf_token}}') // 3
	axios.post('http://127.0.0.1:8000/getRPrediction', data)
		.then(res=> updatePredPanel('regression', res.data.prediction ))
		.catch(err=>console.log(err))
}


const updatePredPanel = (modelType, textNode)=>{
	console.log('updates')
	if(modelType === 'classification'){
		classPredPanel.innerHTML = textNode;	
	}else if(modelType === 'regression'){
		regressPredPanel.innerHTML = textNode;	
	}
}
