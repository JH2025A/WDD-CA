//this code was heavily inspired by the form validation code from class provided to us by Emer Thornbury
//learnt about querySelectorAll() from https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//first two functions are for the larger size screens
function submitButtonL(){
	const choiceQ1JH = document.querySelectorAll("input.q1JH:checked");
	const choiceQ2JH = document.querySelectorAll("input.q2JH:checked");
	const choiceQ3JH = document.querySelectorAll("input.q3JH:checked");
	const choiceQ4JH = document.querySelectorAll("input.q4JH:checked");
	const choiceQ5JH = document.querySelectorAll("input.q5JH:checked");
	const choiceQ6JH = document.querySelectorAll("input.q6JH:checked");
	
	
	//for error messages on largger form
	const q1ErrJH = document.getElementById("q1-ErrorJH");
	const q2ErrJH = document.getElementById("q2-ErrorJH");
	const q3ErrJH = document.getElementById("q3-ErrorJH");
	const q4ErrJH = document.getElementById("q4-ErrorJH");
	const q5ErrJH = document.getElementById("q5-ErrorJH");
	const q6ErrJH = document.getElementById("q6-ErrorJH");
	
	
	//error text large forms
	q1ErrJH.textContent = "";
	q2ErrJH.textContent = "";
	q3ErrJH.textContent = "";
	q4ErrJH.textContent = "";
	q5ErrJH.textContent = "";
	q6ErrJH.textContent = "";
	
	
	let isValidJH=true;
	//https://www.w3schools.com/js/js_operators.asp for what operator to use
	if (choiceQ1JH.length!==1){
		q1ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	if (choiceQ2JH.length!==1){
		q2ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	if (choiceQ3JH.length!==1){
		q3ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	if (choiceQ4JH.length!==1){
		q4ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	if (choiceQ5JH.length!==1){
		q5ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	if (choiceQ6JH.length!==1){
		q6ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH=false;
	}
	
	const correctAnswerPickedJH = document.querySelectorAll("input.correctJH:checked");

	
	
	if (isValidJH===true) {
		
		//learnt how to call a nodeList from https://developer.mozilla.org/en-US/docs/Web/API/NodeList and https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length
		alert("You got " + correctAnswerPickedJH.length + " out of 6 right!");
		
	
		return true;
	}
	else {
		return false; 
	}



		
}
function resetErrorsL() {
	//larger form
	document.getElementById("q1-ErrorJH").textContent = "";
	document.getElementById("q2-ErrorJH").textContent = "";
	document.getElementById("q3-ErrorJH").textContent = "";
	document.getElementById("q4-ErrorJH").textContent = "";
	document.getElementById("q5-ErrorJH").textContent = "";
	document.getElementById("q6-ErrorJH").textContent = "";
}
//next two functions for smaller screens
function submitButtonSJH(){
	const chosen1JH = document.getElementById("1qJH").value;
	const chosen2JH = document.getElementById("2qJH").value;
	const chosen3JH = document.getElementById("3qJH").value;
	const chosen4JH = document.getElementById("4qJH").value;
	const chosen5JH = document.getElementById("5qJH").value;
	const chosen6JH = document.getElementById("6qJH").value;
	
	

	const chosen1ErrJH = document.getElementById("q1ErrorJH");
	const chosen2ErrJH = document.getElementById("q2ErrorJH");
	const chosen3ErrJH = document.getElementById("q3ErrorJH");
	const chosen4ErrJH = document.getElementById("q4ErrorJH");
	const chosen5ErrJH = document.getElementById("q5ErrorJH");
	const chosen6ErrJH = document.getElementById("q6ErrorJH");
	
	
	chosen1ErrJH.textContent = "";
	chosen2ErrJH.textContent = "";
	chosen3ErrJH.textContent = "";
	chosen4ErrJH.textContent = "";
	chosen5ErrJH.textContent = "";
	chosen6ErrJH.textContent = "";
	
	let isValidJH = true;
	
	if (chosen1JH === "") {
		chosen1ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	if (chosen2JH === "") {
		chosen2ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	if (chosen3JH === "") {
		chosen3ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	if (chosen4JH === "") {
		chosen4ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	if (chosen5JH === "") {
		chosen5ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	if (chosen6JH === "") {
		chosen6ErrJH.textContent = "Don't forget to answer this question!";
		isValidJH = false;
	}
	
	const correctAnswerPickedJH = document.querySelectorAll("option.correctJH:checked");
	
		
	if (isValidJH) {
		alert("You got " + correctAnswerPickedJH.length + " out of 6 right!");
		return true;
	}
	else {
		return false; 
	}


}
function resetErrorsSJH() {
document.getElementById("q1ErrorJH").textContent = "";
document.getElementById("q2ErrorJH").textContent = "";
document.getElementById("q3ErrorJH").textContent = "";
document.getElementById("q4ErrorJH").textContent = "";
document.getElementById("q5ErrorJH").textContent = "";
document.getElementById("q6ErrorJH").textContent = "";

}