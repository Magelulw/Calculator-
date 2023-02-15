# Calculator🐉
const calculationText = document.querySelector(".calculation");
console.log(calculationText)
const buttons = document.querySelectorAll("button");

const clear = document.querySelector(".clearAll");
const deleteValue = document.querySelector(".deleteNumber");

let calculation = [];
let calculationValue = 0;

buttons.onclick = (value) => 

function evaluateThrough() {
    let newCalculation = [];

    buttons.forEach((button) => {
        button.onclick = (event) => {
            newCalculation.push(event.target.value);
            calculationText.textContent = newCalculation.join("");
            calculation = newCalculation;
            calculationValue = newCalculation.join("");
            console.log(calculation);
        };
    });
}

function operate() {
    evaluateThrough();
    if (String(calculationValue).includes("4")) {
        console.log("red");
    }
    return calculationValue;
}

//! clears all
function clearAll() {
    calculation = [];
    calculationValue = 0;
    calculationText.textContent = "0";
}

clear.addEventListener("click", clearAll);

operate();









const array = document.querySelector(".array")
const deleteLast = document.querySelector(".deleteLast")

let calc = [1,1,2,1,9]


let people = ["james","harry","lewis","gabriel"]

array.textContent = calc.join("")
deleteLast.addEventListener("click",() =>{


    calc.pop()
    array.textContent = calc.join("")
})
