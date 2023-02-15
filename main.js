const clearAllBtn = document.querySelector(".clearAll");
const deleteNumberBtn = document.querySelector(".deleteNumber");

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");

//todo write all numbers and add eventListeners

const allBtn = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".containerResult");

let calculation = []
resultDisplay.textContent = 0





// function clearAll(){
//     calculation = []
// };

function deleteLastNumber(){
    calculation.pop()
    resultDisplay.textContent = calculation.join("")
}




deleteNumberBtn.addEventListener("click",deleteLastNumber)
// clearAllBtn.addEventListener("click",clearAll)

function runCalc(){
    evaluateThrough()
    deleteLastNumber()
    // clearAll()
};

runCalc()