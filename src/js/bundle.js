import '../styles/main.css'
import axios from 'axios';
// const container = document.getElementById('container');
// container.innerHTML = 'helloworld';

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

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
	
	// axios.post('create_note/', data) // 4
	//  .then(res => alert("Form Submitted")) // 5
	//  .catch(errors => console.log(errors)) // 6
	axios.post('http://127.0.0.1:8000/getCPrediction', data)
		.then(res=> console.log(res.data))
		.catch(err=>console.log(err))
}
const classificationButton = document.getElementById("classificationButton")
classificationButton.addEventListener('click', ()=>{fetchCPrediction()})