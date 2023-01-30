let currentValue = "" ;
let previousValue = "" ;
let operator = "" ;

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
    currentScreen.textContent = currentValue;
}));

decimal.addEventListener("click",function(){
    addDecimal();
})

operators.forEach((operator) => operator.addEventListener("click" , function(e){
    handleOperator(e.target.textContent);
}));

clear.addEventListener("click" , function(e){
    previousValue = "";
    currentValue = "";
    operator = "";
    currentScreen.textContent = "";
    previousScreen.textContent = "";
})

equal.addEventListener("click", function(){
    calculate();
    
});



//functions 

function handleNumber(num){
    if(currentValue.length <= 10) currentValue += num;
}

function addDecimal(){
    if(!currentValue.includes(".")) currentValue += ".";
    currentScreen.textContent = currentValue;
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    previousScreen.textContent = previousValue+" "+op;
    currentValue = "";
    currentScreen.textContent = currentValue;
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if(operator!=""){
        if(operator === "+")
            previousValue += currentValue;
        else if(operator === "-")
            previousValue -= currentValue;
        else if(operator === "*")
            previousValue *= currentValue;
        else if(operator === "/")
            previousValue /= currentValue;
    }
    
    previousValue = previousValue.toString()
    currentValue = currentValue.toString();

    currentValue ="";
    previousScreen.textContent = "";
    currentScreen.textContent = previousValue;
}