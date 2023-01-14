//* get numbers and signs

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
    
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    console.log(event.target.value);
  });
});