let currentValue = "" ;
let previousValue = "" ;
let operator = undefined ;

let currentScreen = document.querySelector(".currentScreen");
let previousScreen = document.querySelector(".previousScreen");

let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let decimal = document.querySelector("#decimal");
let equal = document.querySelector("#equal");

let operators = document.querySelectorAll("#operator");
let numbers = document.querySelectorAll("#number");

//event listeners

numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent);
}));

decimal.addEventListener("click", addDecimal )

operators.forEach((operator) => operator.addEventListener("click" , function(e){
    handleOperator(e.target.textContent);
}));

clear.addEventListener("click" , function(e){
    previousValue = "";
    currentValue = "";
    operator = undefined;
    currentScreen.textContent = "";
    previousScreen.textContent = "";
})

equal.addEventListener("click", calculate );

del.addEventListener("click",removeNum);

//functions 

function handleNumber(num){
    if(currentValue.length <= 12) currentValue += num;
    currentScreen.textContent = currentValue;
}

function addDecimal(){
    if(!currentValue.includes(".")) currentValue += ".";
    currentScreen.textContent = currentValue;
}

function handleOperator(op){
    if(currentValue === "") return
    if(previousValue !== "")
       calculate()
    operator = op;
    previousValue = currentValue;
    previousScreen.textContent = previousValue+" "+operator+" ";
    currentValue = "";
    currentScreen.textContent = currentValue;
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if ( isNaN(previousValue) && isNaN(currentValue))
        return
    if(operator === "+")
        previousValue += currentValue;
    else if(operator === "-")
        previousValue -= currentValue;
    else if(operator === "*")
        previousValue *= currentValue;
    else if(operator === "/")
        previousValue /= currentValue;

    previousValue = previousValue.toString()
    currentValue = currentValue.toString();
    operator = undefined;

    //previousScreen.textContent += currentValue;
    currentScreen.textContent = previousValue;

    currentValue = previousValue;
}

function removeNum(){
    currentValue = currentValue.slice(0,-1);
    currentScreen.textContent = currentValue;
}