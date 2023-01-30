# Calculator🐉
This is a calculator that I created with HTML, CSS and Js


function getDigits(){
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            calculation.push(event.target.value)
            calculationText.textContent = calculation.join("")
        });
      });
}




function add(a,b){
    return a + b
}
function subtract(a,b){
    return a - b
}
function multiply(a,b){
    return a * b
}
function divide(a,b){
    return a / b
}


function operate(num1,num2){
    getDigits()
}


function deleteNumber(arr){
    arr.split("")
}