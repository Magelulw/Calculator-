//* calculation display
const calculation = document.querySelector(".calculation")
const buttons = document.querySelectorAll("button");

const clear = document.querySelector(".clearAll")
const deleteValue = document.querySelector(".deleteNumber")

calculation.textContent = []

function getDigits(){
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            console.log(event.target)
          calculation.textContent += event.target.value;
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


function operate(){
    getDigits()
}

function clearAll(){
    calculation.textContent = ""
}

clear.addEventListener("click",clearAll)

deleteValue.addEventListener("click",() =>{
    calculation.textContent.split("").reverse().join("")
})



operate()