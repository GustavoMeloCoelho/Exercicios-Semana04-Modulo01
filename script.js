function addition(event) {
    event.preventDefault();
    const number1 = parseInt(document.getElementById("input-number1").value); 
    const number2 = parseInt(document.getElementById("input-number2").value); 
    let operationResult;
    if(document.getElementById("radio-sum").checked){
        operationResult = number1+number2;
    }

    if(document.getElementById("radio-subtraction").checked){
        operationResult = number1-number2;
    }

    if(document.getElementById("radio-multiply").checked){
        operationResult = number1*number2;
    }

    if(document.getElementById("radio-divide").checked){
        operationResult = number1/number2;
    }
    
    document.getElementById("result").innerHTML = "Resultadooo: "+operationResult;
}   

document.getElementById("form-calculator").addEventListener("submit", addition);


