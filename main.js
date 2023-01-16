//* calculation display
const calculation = document.querySelector(".calculation")
calculation.textContent += []


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
    return calculation.map(value =>{
        if(calculation.value.includes("1")){
            console.log("hello")
        }
    })

}


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", event => {
      calculation.textContent += event.target.value;
    });
  });


operate()