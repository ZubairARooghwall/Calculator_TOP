// important variables
let display = " ";
let prevDisplay = " ";
let operator = " ";
let displayNumber = document.getElementById("now");
let displayPrevNum = document.getElementById("previous");

// function that populated the display area
// add an event listener
let buttonsNumber = document.querySelectorAll(".btn");
buttonsNumber.forEach((item) => {
    //add keyboard support done by GitHub Copilot
    document.addEventListener("keydown", (e) => {
        if (e.key == item.textContent) {
            item.click();
        } else if (e.key == "Enter") {
            document.getElementById("enter").click();
        } else if (e.key == "c" || e.key == "C") {
            document.getElementById("clear").click();
        }
    });

    item.addEventListener("click", (e) => {
        console.log(e);
        if (
            item.textContent != "+" &&
            item.textContent != "-" &&
            item.textContent != "*" &&
            item.textContent != "/" &&
            item.textContent != "Clear" &&
            item.textContent != "="
        ) {
            let entered = false;
            if (item.textContent == ".") {
                if (display.includes(".")) {
                } else {
                    entered = true;
                    display += item.textContent;
                }
            } else {
                display += item.textContent;
            }
            console.log(`Display check: ${display}`);
            displayNumber.textContent = display;
            console.log(`Output check: ${displayNumber.textContent}`);
        } else if (
            item.textContent == "+" ||
            item.textContent == "-" ||
            item.textContent == "*" ||
            item.textContent == "/"
        ) {
            let newOperator = item.textContent;
            console.log(`Operator check: ${prevDisplay} ${operator} ${display}`);
            displayPrevNum.textContent = `${prevDisplay} ${newOperator}`;

            if (prevDisplay == " " && display != " ") {
                prevDisplay = display;
                displayPrevNum.textContent = `${prevDisplay} ${newOperator}`;
                display = " ";
                displayNumber.textContent = " ";
            }
            if (prevDisplay != " ") {
                if (display != " ") {
                    prevDisplay =
                        Math.round(
                            operate(Number(prevDisplay), Number(display), operator) * 10000
                        ) / 10000;
                    displayPrevNum.textContent = `${prevDisplay} ${newOperator}`;
                    display = " ";
                    displayNumber.textContent = " ";
                }
            }
            operator = item.textContent;
        } else if (item.textContent == "Clear") {
            operator = " ";
            display = " ";
            prevDisplay = " ";
            displayNumber.textContent = " ";
            displayPrevNum.textContent = " ";
        } else if (item.textContent == "=") {
            if (display != " " && prevDisplay != " " && operator != " ") {
                prevDisplay =
                    Math.round(
                        operate(Number(prevDisplay), Number(display), operator) * 10000
                    ) / 10000;
                displayNumber.textContent = prevDisplay;
                displayPrevNum.textContent = prevDisplay;
                display = " ";
            }
        }
    });
});

//take in numbers and an operator
function operate(num1, num2, operator) {
    let result;
    if (operator == "+") result = add(num1, num2);
    else if (operator == "-") result = subtract(num1, num2);
    else if (operator == "*") result = multiply(num1, num2);
    else if (operator == "/") result = divide(num1, num2);

    return result;
}

//functions for operations
//Don't reference them
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
    return num1 / num2;
}
