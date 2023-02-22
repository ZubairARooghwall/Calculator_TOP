// important variables
let display = " ";
let prevDisplay = " ";
let operator = " ";
let displayNumber = document.getElementById("now");
let displayPrevNum = document.getElementById("previous");



// function that populated the display area
// add an event listener
let buttonsNumber = document.querySelectorAll(".btn");
buttonsNumber.forEach((item) =>{
    
    item.addEventListener('click', (e) =>{
        console.log(e);
        if(item.textContent != "+" && item.textContent != "-" && item.textContent != "*" && item.textContent != "/" && item.textContent != "Clear" && item.textContent != "="){
            display += item.textContent;
            console.log(`Display check: ${display}`);
            displayNumber.textContent = display;
            console.log(`Output check: ${displayNumber.textContent}`);
        }else{
            let prevOperator;
            operator = item.textContent;
            console.log(`Operator check: ${operator}`);
            // displayPrevNum.textContent = `${prevDisplay} ${operator}`;
            if(item.textContent == "+" || item.textContent == "-" || item.textContent == "*"  || item.textContent == "/" ){
                


                if(prevDisplay == " "){
                    
                    prevDisplay = display;
                    display = " ";
                    displayNumber.textContent = " ";
                }
                if(prevDisplay != " "){
                    prevDisplay = operate(Number(prevDisplay), Number(display), operator);
                    // displayPrevNum.textContent = `${prevDisplay} ${operator}`;
                    display = " ";
                    displayNumber.textContent = " ";


                }
                



            }else if(item.textContent == "Clear"){
                display = " ";
                prevDisplay = " ";
                displayNumber.textContent = " ";
                displayPrevNum.textContent = " ";
            }else if(item.textContent == "="){
                



            }



        }


    });

});





//take in numbers and an operator
function operate(num1, num2, operator){
    let result;
    if(operator == "+") result = add(num1, num2);
    else if(operator == "-") result = subtract(num1, num2);
    else if(operator == "*") result = multiply(num1, num2);
    else if(operator == "/") result = divide(num1, num2);

    return result;
}


//functions for operations
//Don't reference them
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}