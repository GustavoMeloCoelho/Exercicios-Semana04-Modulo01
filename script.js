function addition(event) {
    event.preventDefault();
    const number1 = parseInt(document.getElementById("input-number1").value); 
    const number2 = parseInt(document.getElementById("input-number2").value); 
    const resultado = number1+number2;
    document.getElementById("result").innerHTML = "Resultado: "+resultado;
}   

document.getElementById("form-calculator").addEventListener("submit", addition);


