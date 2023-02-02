const clearAllBtn = document.querySelector(".clearAll");
const deleteNumberBtn = document.querySelector(".deleteNumber");

const allBtn = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".containerResult")

let calculation = []
resultDisplay.textContent = 0



function evaluateThrough(){
    allBtn.forEach(button =>{
        button.onclick = (event) =>{
            calculation.push(event.target.value)
            resultDisplay.textContent = calculation.join("")
        }
    })
}

function clearAll(){
    calculation = []
}
clearAllBtn.addEventListener("click",clearAll)

function runCalc(){
    evaluateThrough()
    clearAll()
}

runCalc()