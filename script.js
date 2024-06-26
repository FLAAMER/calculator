function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return "x/0 is impossile";
    } else {
        return num1/num2;
    }
}

let num1
let num2
let operator

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "×") {
        return multiply(num1, num2)
    } else if (operator === "÷") {
        return divide(num1, num2)
    }
}

let calcNumberButtons = document.querySelectorAll("div.calc-button.number")
calcNumberButtons = Array.from(calcNumberButtons)

calcNumberButtons.forEach((button) => button.addEventListener("click", () => {
    if (displayValue.textContent === "0" || displayValue.textContent === num1) {
        displayValue.textContent = button.textContent
        console.log(num1)
    } else {
        displayValue.textContent += button.textContent
}}))

calcNumberButtons.forEach((button) => button.addEventListener("click", () => {
    operationButtons.forEach((button) => {
        button.style.backgroundColor = "#FF9500"
        button.style.color = "white"
    })
}))

let displayValue = document.querySelector("div#display-number")
let calcButtons = document.querySelectorAll("div.calc-button")

let decimal = document.querySelector("div#decimal")
decimal.addEventListener("click", () => {
    if (!Array.from(displayValue.textContent).includes("."))
        displayValue.textContent += "."
})

let clearButton = document.querySelector("div#clear")
clearButton.addEventListener("click", () => {
    displayValue.textContent = "0"
    num1 = ""
    operator = ""
    num2 = ""
    operationButtons.forEach((button) => {
        button.style.backgroundColor = "#FF9500"
        button.style.color = "white"
    })
})

let invertButton  = document.querySelector("div#invert")
invertButton.addEventListener("click", () => {
    if (displayValue.textContent === "0") {   
    } else {
        displayValue.textContent *= -1
        console.log(parseInt(displayValue.textContent))
    }
})

let percentButton = document.querySelector("div#percent")
percentButton.addEventListener("click", () => displayValue.textContent /= 100)

let equalButton = document.querySelector("div.equal")
equalButton.addEventListener("click", () => {
    operationButtons.forEach((button) => {
        button.style.backgroundColor = "#FF9500"
        button.style.color = "white"
    })
})


let operationButtons = document.querySelectorAll("div.operation")
operationButtons = Array.from(operationButtons)

operationButtons.forEach((button) => button.addEventListener("click", () => {
    if (operator === "+" || operator === "-" || operator === "×" || operator === "÷") {
        num2 = displayValue.textContent
        displayValue.textContent = operate(num1 , operator, num2)
        console.log(".")
    }
}))

operationButtons.forEach((button) => button.addEventListener("click", () => {
    num1 = displayValue.textContent
    operator = button.textContent
    num2 = "TBD"
    console.log(num1)
    equalButton.addEventListener("click", () => {
        if (num2 === "TBD") {
            num2 = displayValue.textContent
            displayValue.textContent = Math.round((operate(num1 , operator, num2) + Number.EPSILON)*10000)/10000
            operator = ""
        }
    })}))


operationButtons.forEach((button) => button.addEventListener("click", () => {
    operationButtons.forEach((button) => {
        button.style.backgroundColor = "#FF9500"
        button.style.color = "white"
    })
    button.style.backgroundColor = "white"
    button.style.color = "#FF9500"
}))

let backspaceButton = document.querySelector("div#backspace")
backspaceButton.addEventListener("click", () => {
    displayValue.textContent = (Array.from(displayValue.textContent).slice(0, -1).join(""))
    if (displayValue.textContent === "") {
        displayValue.textContent = 0
    }
})

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "1":
            document.querySelector("div#one").click()
            break;
        case "2":
            document.querySelector("div#two").click()
            break;
        case "3":
            document.querySelector("div#three").click()
            break;
        case "4":
            document.querySelector("div#four").click()
            break;
        case "5":
            document.querySelector("div#five").click()
            break;
        case "6":
            document.querySelector("div#six").click()
            break;
        case "7":
            document.querySelector("div#seven").click()
            break;
        case "8":
            document.querySelector("div#eight").click()
            break;
        case "9":
            document.querySelector("div#nine").click()
            break;
        case "0":
            document.querySelector("div#zero").click()
            break;
        case ".":
            document.querySelector("div#decimal").click()
            break;
        case "+":
            document.querySelector("div#add").click()
            break;
        case "-":
            document.querySelector("div#subtract").click()
            break;
        case "*":
            document.querySelector("div#multiply").click()
            break;
        case "/":
            document.querySelector("div#divide").click()
            break;
        case "Enter":
            document.querySelector("div#equal").click()
            break;
        case "Backspace":
            document.querySelector("div#backspace").click()
            break;
        default:
            break;
    }
})