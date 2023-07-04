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

    comma.addEventListener ("click", insertComma);
    function insertComma() {
        display.textContent += ".";
    };

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

    equal.addEventListener("click", function() {
        if (selectedOperation === "multiply") {
            secondNumber = Number(display.textContent);
            display.textContent = parseFloat((firstNumber * secondNumber).toFixed(2));
        } else if (selectedOperation === "subtract") {
            secondNumber = Number(display.textContent);
            display.textContent = parseFloat((firstNumber - secondNumber).toFixed(2));
        } else if (selectedOperation === "divide") {
            secondNumber = Number(display.textContent);
            display.textContent = parseFloat((firstNumber / secondNumber).toFixed(2));
        } else if (selectedOperation === "percent") {
            secondNumber = Number(display.textContent);
            display.textContent = parseFloat(((firstNumber / 100) * secondNumber).toFixed(2));
        } else {
            secondNumber = Number(display.textContent);
            display.textContent = parseFloat((firstNumber + secondNumber).toFixed(2));
        }
    });
