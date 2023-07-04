    const percent = document.getElementById("percent");
    const clearLast = document.getElementById("clearLast");
    const clearAll = document.getElementById("clearAll");
    const comma = document.getElementById("comma");
    const divide = document.getElementById("divide");
    const multiply = document.getElementById("multiply");
    const add = document.getElementById("add");
    const subtract = document.getElementById("subtract");
    const equal = document.getElementById("equal");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const zero = document.getElementById("zero");
    let display = document.getElementById("display");

    comma.addEventListener ("click", insertComma);
    function insertComma() {
        display.textContent += ".";
    };

    const numberButtons = document.querySelectorAll("#keyboard .number");
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick);
});

function handleNumberClick(event) {
  var clickedElement = event.target;
  
  if (clickedElement.classList.contains("number")) {
    var numberText = clickedElement.textContent.trim();
    display.textContent += numberText;
  }
}

    
    let firstNumber = document.getElementById("display").value;
    let secondNumber = document.getElementById("display").value;
    let selectedOperation = null;

    clearAll.addEventListener ("click", deleteAll);
    function deleteAll() {
        window.location.reload()
    };

    clearLast.addEventListener ("click", deleteLast);
    function deleteLast() {
        let x = display.textContent;
        display.textContent = x.slice(0, -1);
    };

    percent.addEventListener ("click", operationPercent);
    function operationPercent() {
        firstNumber = Number(display.textContent);
        display.textContent = "";
        return selectedOperation = "percent";
    };

    multiply.addEventListener ("click", operationMultiply);
    function operationMultiply() {
        firstNumber = Number(display.textContent);
        display.textContent = "";
        return selectedOperation = "multiply";
    };

    add.addEventListener ("click", operationAdd);
    function operationAdd() {
        firstNumber = Number(display.textContent);
        display.textContent = "";
        return selectedOperation = "addiction";
    };

    subtract.addEventListener ("click", operationSub);
    function operationSub() {
        firstNumber = Number(display.textContent);
        display.textContent = "";
        return selectedOperation = "subtract";
    };

    divide.addEventListener ("click", operationDiv);
    function operationDiv() {
        firstNumber = Number(display.textContent);
        display.textContent = "";
        return selectedOperation = "divide";
    };

    equal.addEventListener ("click", function() {
        if (selectedOperation === "multiply") {
            secondNumber = display.textContent;
            let operand = Number(secondNumber);
            display.textContent = firstNumber * operand;
        } else if (selectedOperation === "subtract") {
            secondNumber = display.textContent;
            let operand = Number(secondNumber);
            display.textContent = firstNumber - operand;
        } else if (selectedOperation === "divide") {
            secondNumber = display.textContent;
            let operand = Number(secondNumber);
            display.textContent = firstNumber / operand;
        } else if (selectedOperation === "percent") {
            secondNumber = display.textContent;
            let operand = Number(secondNumber);
            display.textContent = ((firstNumberPercent/100) * secondNumber);
        } else {
            secondNumber = display.textContent;
            let operand = Number(secondNumber)
            display.textContent = firstNumber + operand;
        }
    });

    