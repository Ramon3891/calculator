let firstNumber = "";
let secondNumber = "";
let operator = null;

const numberButtons = document.querySelectorAll("#keyboard .number");
numberButtons.forEach(button => {
  button.addEventListener("click", handleNumberClick);
});

window.addEventListener('keydown', function(event) {
  let keyPressed = event.key; 

  if (keyPressed >= '0' && keyPressed <= '9') {
    handleKeyPress(keyPressed);
  } else if (keyPressed === '+' || keyPressed === '-' || keyPressed === '*' || keyPressed === '/' || keyPressed === '%') {
    handleOperatorKey(keyPressed);
  } else if (keyPressed === '.' || keyPressed === ',') {
    insertComma();
  } else if (keyPressed === 'Enter') {
    calculateResult();
  }
});

function handleNumberClick(event) {
  let clickedElement = event.target;

  if (clickedElement.classList.contains("number")) {
    let numberText = clickedElement.textContent.trim();
    display.textContent += numberText;
  }
}

function handleKeyPress(key) {
  if (key >= '0' && key <= '9') {
    display.textContent += key;
  }
}

comma.addEventListener("click", insertComma);
function insertComma() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.';
  }
}

clearAll.addEventListener ("click", deleteAll); // A page refresh is the simpler solution for that
function deleteAll() {
        window.location.reload()
};

clearLast.addEventListener("click", deleteLast);
function deleteLast() {
  let x = display.textContent;
  display.textContent = x.slice(0, -1);
}

const operatorButtons = document.querySelectorAll(
  ".operator:not(#equal, #comma, #clearAll, #clearLast)"
  // style.css requires these divs to have the class 'operator'
  );
operatorButtons.forEach(opBut => {
  opBut.addEventListener("click", handleOperator);
});

function handleOperator(event) {
  let clickedOperator = event.target;

  if (clickedOperator.classList.contains("operator")) {
    operator = clickedOperator.textContent.trim();
    firstNumber = Number(display.textContent);
    display.textContent = "";
  }
}

function handleOperatorKey(key) {
  if (key === '/') {
    operator = "÷";
  } else {
    operator = key;
  }
  firstNumber = Number(display.textContent);
  display.textContent = "";
}

equal.addEventListener("click", calculateResult);
function calculateResult() {
  secondNumber = Number(display.textContent);
  let result;

  if (operator === "*" || operator === "X") {
    result = firstNumber * secondNumber;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
  } else if (operator === "/" || operator === "÷") {
    result = firstNumber / secondNumber;
  } else if (operator === "%") {
    result = (firstNumber / 100) * secondNumber;
  } else {
    result = firstNumber + secondNumber;
  }

  display.textContent = parseFloat(result.toFixed(2));
}
