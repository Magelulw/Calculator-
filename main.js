//?=================================
//* selecting clear & delete Button
//?=================================
const clearAllBtn = document.querySelector(".clearAll");
const deleteNumberBtn = document.querySelector(".deleteNumber");

//?==================
//! display text
//?==================
const resultDisplay = document.querySelector(".containerResult");

//?========================
//* targeting all numbers:
//?========================
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const number6 = document.querySelector(".number6");
const number7 = document.querySelector(".number7");
const number8 = document.querySelector(".number8");
const number9 = document.querySelector(".number9");
const number0 = document.querySelector(".number0");
const decimalPoint = document.querySelector(".decimalPoint");


//?========================
//! calculation symbols
//?========================
const divisionSymbol = document.querySelector(".division");
const multiplicationSymbol = document.querySelector(".multiplication");
const addSymbol = document.querySelector(".addition");
const subtractionSymbol = document.querySelector(".subtraction");
const showEndResult = document.querySelector(".calculatedResult");


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
decimalPoint.onclick = (e) => pushValue(e)

addSymbol.onclick = (e) => pushValue(e)
divisionSymbol.onclick = (e) => pushValue(e)
multiplicationSymbol.onclick = (e) => pushValue(e)
subtractionSymbol.onclick = (e) => pushValue(e)
showEndResult.onclick = (e) => pushValue(e)


function pushValue(e){
    const value = e.target.value;

    if(value == "+" || value == "-" || value == "*" || value == "/"){
        const operator = value

        const operand1 = calculation.join("")

        calculation = []

        resultDisplay.textContent = operand1

        currentOperation = {
            operator,
            operand1
        };

    }        
    else{
        calculation.push(value)
        resultDisplay.textContent = calculation.join("")
    }
}

showEndResult.onclick = (e) => {
    const operand2 = calculation.join("");

    if(currentOperation && currentOperation.operator && currentOperation.operand1){
        const result = operation(currentOperation.operator, currentOperation.operand1, operand2)

            resultDisplay.textContent = result
            calculation = []
            currentOperation.operand1 = result
    }
}



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
    if(calculation.length == 1 ){
        resultDisplay.textContent = "0"
    }
    else{
        calculation.pop()
        resultDisplay.textContent = calculation.join("")
    }

    
}


//?==================
//* operations
//?==================

// !I want to implement these functions

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



function operation(operator, a, b){
    a = Number(a)
    b = Number(b)

    switch(operator) {
        case "+":
            return add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return multiply(a,b)
        case "/":
            return divide(a,b)
        default:
            return null
    }
}

//?==================
//* run calculation
//?==================

function runCalc(){
    clearAll()
    deleteLastNumber()

    currentOperation = {
        operator: null,
        operand1: null
    };
};

runCalc()