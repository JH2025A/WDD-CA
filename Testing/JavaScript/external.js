//this code was heavily inspired by the form validation code from class provided to us by Emer Thornbury
//first two functions are for the larger size screens
function submitButtonL(){
	const choiceQ1 = document.querySelectorAll("input.q1:checked");
	const choiceQ2 = document.querySelectorAll("input.q2:checked");
	const choiceQ3 = document.querySelectorAll("input.q3:checked");
	const choiceQ4 = document.querySelectorAll("input.q4:checked");
	const choiceQ5 = document.querySelectorAll("input.q5:checked");
	const choiceQ6= document.querySelectorAll("input.q6:checked");
	const choiceQ7 = document.querySelectorAll("input.q7:checked");
	const choiceQ8 = document.querySelectorAll("input.q8:checked");
	const choiceQ9 = document.querySelectorAll("input.q9:checked");
	//for error messages on largger form
	const q1Err = document.getElementById("q1-error");
	const q2Err = document.getElementById("q2-error");
	const q3Err = document.getElementById("q3-error");
	const q4Err = document.getElementById("q4-error");
	const q5Err = document.getElementById("q5-error");
	const q6Err = document.getElementById("q6-error");
	const q7Err = document.getElementById("q7-error");
	const q8Err = document.getElementById("q8-error");
	const q9Err = document.getElementById("q9-error");
	
	//error text large forms
	q1Err.textContent = "";
	q2Err.textContent = "";
	q3Err.textContent = "";
	q4Err.textContent = "";
	q5Err.textContent = "";
	q6Err.textContent = "";
	q7Err.textContent = "";
	q8Err.textContent = "";
	q9Err.textContent = "";
	
	let isValid=true;
	//https://www.w3schools.com/js/js_operators.asp for what operator to use
	if (choiceQ1.length!==1){
		q1Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ2.length!==1){
		q2Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ3.length!==1){
		q3Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ4.length!==1){
		q4Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ5.length!==1){
		q5Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ6.length!==1){
		q6Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ7.length!==1){
		q7Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ8.length!==1){
		q8Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	if (choiceQ9.length!==1){
		q9Err.textContent = "Don't forget to answer this question!";
		isValid=false;
	}
	
	
	if (isValid===true) {
		let answerA=0;
		let answerB=0;
		let answerC=0;
		let answerD=0;
		let answerE=0;
		//create a list of all inputs with a class of answerA that has been checked
		const a = document.querySelectorAll("input.answerA:checked");
			/*code used for testing*/
			alert("working");//test
			alert(a.length);//amount of times option A was selected
		//create a list of all inputs with a class of answerB that has been checked
		const b = document.querySelectorAll("input.answerB:checked");
			/*code used for testing*/
			alert("working");//test
			alert(b.length);//amount of times option B was selected
		//create a list of all inputs with a class of answerC that has been checked
		const c = document.querySelectorAll("input.answerC:checked");
			/*code used for testing*/
			alert("working");//test
			alert(c.length);//amount of times option C was selected
		const d = document.querySelectorAll("input.answerD:checked");
			/*code used for testing*/
			alert("working");//test
			alert(d.length);//amount of times option D was selected
		const e = document.querySelectorAll("input.answerE:checked");
			alert("working");//test
			alert(e.length);//amount of times option E was selected
		//learnt how to call a nodeList from https://developer.mozilla.org/en-US/docs/Web/API/NodeList and https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length
		alert("Form submitted successfully!");
		return true;
	}
	else {
		return false; 
	}



		
}
function resetErrorsL() {
	//larger form
	document.getElementById("q1-error").textContent = "";
	document.getElementById("q2-error").textContent = "";
	document.getElementById("q3-error").textContent = "";
	document.getElementById("q4-error").textContent = "";
	document.getElementById("q5-error").textContent = "";
	document.getElementById("q6-error").textContent = "";
	document.getElementById("q7-error").textContent = "";
	document.getElementById("q8-error").textContent = "";
	document.getElementById("q9-error").textContent = "";
}
//next two functions for smaller screens
function submitButtonS(){
	var answerA=0;
	var answerB=0;
	var answerC=0;
	var answerD=0;
	var answerE=0;
	const chosen1 = document.getElementById("1q").value;
	const chosen2 = document.getElementById("2q").value;
	const chosen3 = document.getElementById("3q").value;
	const chosen4 = document.getElementById("4q").value;
	const chosen5 = document.getElementById("5q").value;
	const chosen6 = document.getElementById("6q").value;
	const chosen7 = document.getElementById("7q").value;
	const chosen8 = document.getElementById("8q").value;
	const chosen9 = document.getElementById("9q").value;
	

	const chosen1Err = document.getElementById("q1Error");
	const chosen2Err = document.getElementById("q2Error");
	const chosen3Err = document.getElementById("q3Error");
	const chosen4Err = document.getElementById("q4Error");
	const chosen5Err = document.getElementById("q5Error");
	const chosen6Err = document.getElementById("q6Error");
	const chosen7Err = document.getElementById("q7Error");
	const chosen8Err = document.getElementById("q8Error");
	const chosen9Err = document.getElementById("q9Error");		
	
	chosen1Err.textContent = "";
	chosen2Err.textContent = "";
	chosen3Err.textContent = "";
	chosen4Err.textContent = "";
	chosen5Err.textContent = "";
	chosen6Err.textContent = "";
	chosen7Err.textContent = "";
	chosen8Err.textContent = "";
	chosen9Err.textContent = "";
	let isValid = true;
	if (chosen1 === "") {
		chosen1Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen2 === "") {
		chosen2Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen3 === "") {
		chosen3Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen4 === "") {
		chosen4Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen5 === "") {
		chosen5Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen6 === "") {
		chosen6Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen7 === "") {
		chosen7Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen8 === "") {
		chosen8Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (chosen9 === "") {
		chosen9Err.textContent = "Don't forget to answer this question!";
		isValid = false;
	}
	if (isValid) {
		if (chosen1 ==="a"){
			answerA++;
		}
		if (chosen1 ==="b"){
			answerB++;
		}
		if (chosen1 ==="c"){
			answerC++;
		}
		if (chosen1 ==="d"){
			answerD++;
		}
		if (chosen1 ==="e"){
			answerE++;
		}
		
		if (chosen2 ==="a"){
			answerA++;
		}
		if (chosen2 ==="b"){
			answerB++;
		}
		if (chosen2 ==="c"){
			answerC++;
		}
		if (chosen2 ==="d"){
			answerD++;
		}
		if (chosen2 ==="e"){
			answerE++;
		}
		
		if (chosen3 ==="a"){
			answerA++;
		}
		if (chosen3 ==="b"){
			answerB++;
		}
		if (chosen3 ==="c"){
			answerC++;
		}
		if (chosen3 ==="d"){
			answerD++;
		}
		if (chosen3 ==="e"){
			answerE++;
		}
		
		if (chosen4 ==="a"){
			answerA++;
		}
		if (chosen4 ==="b"){
			answerB++;
		}
		if (chosen4 ==="c"){
			answerC++;
		}
		if (chosen4 ==="d"){
			answerD++;
		}
		if (chosen4 ==="e"){
			answerE++;
		}
		
		if (chosen5 ==="a"){
			answerA++;
		}
		if (chosen5 ==="b"){
			answerB++;
		}
		if (chosen5 ==="c"){
			answerC++;
		}
		if (chosen5 ==="d"){
			answerD++;
		}
		if (chosen5 ==="e"){
			answerE++;
		}
		
		if (chosen6 ==="a"){
			answerA++;
		}
		if (chosen6 ==="b"){
			answerB++;
		}
		if (chosen6 ==="c"){
			answerC++;
		}
		if (chosen6 ==="d"){
			answerD++;
		}
		if (chosen6 ==="e"){
			answerE++;
		}
		
		if (chosen7 ==="a"){
			answerA++;
		}
		if (chosen7 ==="b"){
			answerB++;
		}
		if (chosen7 ==="c"){
			answerC++;
		}
		if (chosen7 ==="d"){
			answerD++;
		}
		if (chosen7 ==="e"){
			answerE++;
		}
		
		if (chosen8 ==="a"){
			answerA++;
		}
		if (chosen8 ==="b"){
			answerB++;
		}
		if (chosen8 ==="c"){
			answerC++;
		}
		if (chosen8 ==="d"){
			answerD++;
		}
		if (chosen8 ==="e"){
			answerE++;
		}
		
		if (chosen9 ==="a"){
			answerA++;
		}
		if (chosen9 ==="b"){
			answerB++;
		}
		if (chosen9 ==="c"){
			answerC++;
		}
		if (chosen9 ==="d"){
			answerD++;
		}
		if (chosen9 ==="e"){
			answerE++;
		}
		alert(answerA);
		alert(answerB);
		alert(answerC);
		alert(answerD);
		alert(answerE);
		var highestAnswer="";
		if (answerA>answerB){
			highestAnswer="answerA";
			if (answerA>answerC){
				if(answerA>answerD){
					if (answerA>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE"
						alert(highestAnswer)
					}
				}
				else{
					highestAnswer="answerD";
					if (answerD>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE"
						alert(highestAnswer)
					}
				}
			}
			else{
				highestAnswer="answerC";
				if (answerC>answerD){
					if (answerC>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE"
						alert(highestAnswer)
					}
				}
				else{
					highestAnswer="answerD";
					if (answerD>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE"
						alert(highestAnswer)
					}
				}
			}
		}
		else{
			highestAnswer="answerB";
			if (answerB>answerC){
				if (answerB>answerD){
					if (answerB>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE";
						alert(highestAnswer);
					}
				}
				else{
					highestAnswer="answerD"
					if (answerD>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE";
						alert(highestAnswer);
					}
				}
			}
			else{
				highestAnswer="answerC";
				if (answerC>answerD){
					if (answerC>answerE){
						alert(highestAnswer);
					}
					else{
						highestAnswer="answerE"
						alert(highestAnswer);
					}
				}
				else{
					highestAnswer="answerD";
					if (answerD>answerE){
						alert(highestAnswer);
						
					}
					else{
						highestAnswer="answerE";
						alert(highestAnswer);
					}
				}
			}
		}
		
		
		alert("Form submitted successfully");
		
		return true;
	} else {
		return false; 
	}
	/* Code for hide and show: https://www.w3schools.com/css/css_display_visibility.asp */
	
}
function resetErrorsS() {
	document.getElementById("q1Error").textContent = "";
	document.getElementById("q2Error").textContent = "";
	document.getElementById("q3Error").textContent = "";
	document.getElementById("q4Error").textContent = "";
	document.getElementById("q5Error").textContent = "";
	document.getElementById("q6Error").textContent = "";
	document.getElementById("q7Error").textContent = "";
	document.getElementById("q8Error").textContent = "";
	document.getElementById("q9Error").textContent = "";
}
function displayResultsJH{
	document.getElementById(highestAnswer).style.display = "block";
}