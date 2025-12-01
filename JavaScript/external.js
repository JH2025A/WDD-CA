function submitButtonL(){
		const choice = document.querySelectorAll("input.answer:checked");
		if (choice.length===9){
			alert("working");
		//Set answer counter
		let answerA=0;
		let answerB=0;
		let answerC=0;
		//create a list of all inputs with a class of answerA that has been checked
		const a = document.querySelectorAll("input.answerA:checked");
			/*code used for testing
			alert("working");//test
			alert(a.length);//amount of times option A was selected*/
		//create a list of all inputs with a class of answerB that has been checked
		const b = document.querySelectorAll("input.answerB:checked");
			/*code used for testing
			alert("working");//test
			alert(b.length);//amount of times option B was selected*/
		//create a list of all inputs with a class of answerC that has been checked
		const c = document.querySelectorAll("input.answerC:checked");
			/*code used for testing
			alert("working");//test
			alert(c.length);//amount of times option C was selected*/
		
		answerA = a.length;
		answerB = b.length;
		answerC = c.length;
		}
		else{
			
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
			
			if (choiceQ1.length!=1){
				q1Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ2.length!=1){
				q2Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ3.length!=1){
				q3Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ4.length!=1){
				q4Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ5.length!=1){
				q5Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ6.length!=1){
				q6Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ7.length!=1){
				q7Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ8.length!=1){
				q8Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			if (choiceQ9.length!=1){
				q9Err.textContent = "Don't forget to answer this question!";
				isValid=false;
			}
			
			
			if (isValid==="true") {
                alert("Form submitted successfully!");
                return true;
            }
			else {
                return false; 
            }

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
function submitButtonS(){
		
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
			alert("Form submitted successfully!");
			return true;
		} else {
			return false; 
		}
	
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