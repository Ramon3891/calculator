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
    one.addEventListener ("click", numberOne);
    two.addEventListener ("click", numberTwo);
    three.addEventListener ("click", numberThree);
    four.addEventListener ("click", numberFour);
    five.addEventListener ("click", numberFive);
    six.addEventListener ("click", numberSix);
    seven.addEventListener ("click", numberSeven);
    eight.addEventListener ("click", numberEight);
    nine.addEventListener ("click", numberNine);
    zero.addEventListener ("click", numberZero);
    
    let firstNumberAdd = document.getElementById("display").value;
    let firstNumberSub = document.getElementById("display").value;
    let firstNumberMultiply = document.getElementById("display").value;
    let firstNumberDivide = document.getElementById("display").value;
    let secondNumber = document.getElementById("display").value;
   
    function insertComma() {
        display.textContent += ".";
    };

    function numberOne() {
        display.textContent += "1";
    };

    function numberTwo() {
        display.textContent += "2";
    };

    function numberThree() {
        display.textContent += "3";
    };

    function numberFour() {
        display.textContent += "4";
    };

    function numberFive() {
        display.textContent += "5";
    };

    function numberSix() {
        display.textContent += "6";
    };

    function numberSeven() {
        display.textContent += "7";
    };

    function numberEight() {
        display.textContent += "8";
    };

    function numberNine() {
        display.textContent += "9";
    };

    function numberZero() {
        display.textContent += "0";
    };

    multiply.addEventListener ("click", operationMultiply);
    function operationMultiply() {
        firstNumberMultiply = Number(display.textContent);
        display.textContent = "";
        return firstNumberMultiply;
    };

    add.addEventListener ("click", operationAdd);
    function operationAdd() {
        firstNumberAdd = Number(display.textContent);
        display.textContent = "";
        return firstNumberAdd;
    };

    subtract.addEventListener ("click", operationSub);
    function operationSub() {
        firstNumberSub = Number(display.textContent);
        display.textContent = "";
        return firstNumberSub;
    };

    divide.addEventListener ("click", operationDiv);
    function operationDiv() {
        firstNumberDivide = Number(display.textContent);
        display.textContent = "";
        return firstNumberDivide;
    };

    equal.addEventListener ("click", function() {
        if (firstNumberMultiply != undefined) {
            resultMultiply ();
        } else if (firstNumberSub != undefined) {
            resultSub ();
        } else if (firstNumberDivide != undefined) {
            resultDivide ();
        }   else {
            resultAdd ();
        }
    });

    
    function resultMultiply () {
        secondNumber = Number(display.textContent);
        display.textContent = firstNumberMultiply * secondNumber;
    };

    function resultDivide () {
        secondNumber = Number(display.textContent);
        display.textContent = firstNumberDivide / secondNumber;
    };

    function resultAdd () {
        secondNumber = Number(display.textContent);
        display.textContent = firstNumberAdd + secondNumber;
    };

    function resultSub () {
        secondNumber = Number(display.textContent);
        display.textContent = firstNumberSub - secondNumber;
    };

    