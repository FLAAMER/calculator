function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

let num1
let num2
let operator

function operate(num1, operator, num2) {
    if (operator === "+") {
        add(num1, num2)
    } else if (operator === "-") {
        subtract(num1, num2)
    } else if (operator === "*") {
        multiply(num1, num2)
    } else if (operator === "/") {
        
    }
}

let calcNumberButtons = document.querySelectorAll("div.calc-button.number")
calcNumberButtons = Array.from(calcNumberButtons)

calcNumberButtons.forEach((button) => button.addEventListener("click", () => {
    if (document.querySelector("div#display-number").textContent === "0") {
        document.querySelector("div#display-number").textContent = button.textContent
    } else {
        document.querySelector("div#display-number").textContent += button.textContent
    }
}))

let displayValue
console.log(displayValue)
let calcButtons = document.querySelectorAll("div.calc-button")

calcButtons.forEach((button) => button.addEventListener("click", () => displayValue = document.querySelector("div#display-number").textContent))

let decimal = document.querySelector("div#decimal")
decimal.addEventListener("click", () => {if (!Array.from(displayValue).includes(".")) document.querySelector("div#display-number").textContent += "."})