//! selecting clear and delete Button
const clearAllBtn = document.querySelector(".clearAll");
const deleteNumberBtn = document.querySelector(".deleteNumber");

//!display text
const resultDisplay = document.querySelector(".containerResult");

//!targeting all numbers:
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const number0 = document.querySelector(".number0")


function pushValue(e){
    calculation.push(e.target.value)
    resultDisplay.textContent = calculation.join("")
}

//?==================
//* onclick events
//?==================
number1.onclick = (e) => pushValue(e)
number2.onclick = (e) => pushValue(e)
number3.onclick = (e) => pushValue(e)
number4.onclick = (e) => pushValue(e)
number5.onclick = (e) => pushValue(e)
number6.onclick = (e) => pushValue(e)
number7.onclick = (e) => pushValue(e)
number8.onclick = (e) => pushValue(e)
number9.onclick = (e) => pushValue(e)
number0.onclick = (e) => pushValue(e)

//?==================
//* delete & clear
//?==================
deleteNumberBtn.addEventListener("click",deleteLastNumber)
clearAllBtn.addEventListener("click",clearAll)


let calculation = []
resultDisplay.textContent = 0


function clearAll(){
    calculation = []
    resultDisplay.textContent = 0
};

function deleteLastNumber(){
    calculation.pop()
    resultDisplay.textContent = calculation.join("")
}




function runCalc(){
    clearAll()
    deleteLastNumber()
    
};

runCalc()