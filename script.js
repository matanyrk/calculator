const display = document.getElementById('calscreen');
const numberButtons = document.querySelectorAll('.keys');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const allClearButton = document.getElementById('allclear');
const eraseButton = document.getElementById('erase');
let currentNumber = document.getElementById('currentnumber');
let previousNumber = document.getElementById('previousnumber');
let numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
let currentAction = '';
currentNumber.textContent = '';


// function that operates the calculator and each of it's buttons

numberButtons.forEach((button) => addEventListener('click', (event) => {
    if(!event.target.closest('button'))
    {
        return
    } else {
const key = event.target;
const keyValue = key.textContent;
const { type } = key.dataset;


if (type === 'number'){
    addNumber(keyValue);
} else if (type === 'operator'){
    currentAction = key.textContent;
    addAction(key.textContent);
    addToPrev(currentNumber.textContent, currentAction);
    currentNumber.textContent = '';
} else if (type === 'equals'){
    if (currentAction === '/' && currentNumber === 0){
        alert ("You can't divide by 0");
        return;
    }
        else{
            operate (currentAction, currentNumber.textContent, previousNumber.textContent);

        }


}
    }
}));


// Event listener for the delete button

eraseButton.addEventListener('click', deleteNumber);

// Calculator functions

function deleteNumber(){
currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1);
}

function resetScreen(){
    currentNumber = '';
    currentAction = null;

}

function addNumber(number){
currentNumber.textContent += number;
}

function addToPrev(number, action){
    previousNumber.textContent = number + ' ' + action;
}

function addAction(action){
    if (action !== '='){
    currentAction === action;
    } else return
}

// BASIC OPERATIONS

function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply (a , b){
    return a * b;
}

function divide (a , b){
    return a / b;
}

function deleteNumber (){
currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1);
}



function clear (){
    currentNumber.textContent = '0';
    currentAction = null;
    number1 = '';
    number2 = '';
}

function operate (action, a, b){
    let result;
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a);
    console.log(b);
    switch (action){
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b;
            break;
        case 'X':
            result = a * b;
        break;
        case '/':
            result = b / a;
            break;
        case 'AC':
            result = '';
            break;
        case '<':
            deleteNumber (currentNumber);
        default:
            return null;
    }

this.currentNumber = result;
currentNumber.textContent = result;
}



