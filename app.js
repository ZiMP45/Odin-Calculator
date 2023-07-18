const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
const history = document.querySelector('.history');
let firstNum = 0;
let secondNum = 0;
let total = 0;
let value = 0;
let arr = [];
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        calculator(button);
    })
})

function calculator(button) {
    if (button.classList.contains('operator')) {
        operator = button.textContent;
        firstNum = reduceArray(arr);
        arr = [];
    } else if (button.classList.contains('equal')) {
        secondNum = reduceArray(arr);
        
        if (total == '0') {
            runEquation(parseInt(firstNum), parseInt(secondNum), operator);
        } else {
            runEquation(parseInt(total), parseInt(secondNum), operator);
        }
        
        output.textContent = total;
        firstNum = total;
        secondNum = 0;
        arr = [];
    } else if (button.classList.contains('allClear')) {
        allClear();
    } else {
        button.onclick = getValue(button);
        output.textContent = reduceArray(arr);
    } 
}

function getValue(button) {
    value = button.dataset.key
    arr.push(value);
}

function reduceArray(arr) {
    let joinedValues = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return joinedValues;
}

function allClear() {
    output.textContent = '';
    history.textContent = '';
    arr = [];
    firstNum = 0;
    secondNum = 0;
    total = 0;
    value = 0;
}

function clearValues () {
    firstNum = 0;
    secondNum = 0;
    total = 0;
    arr = [];
    operator = '';
}

function runEquation(a, b, operator) {
    switch(operator) {
        case '+':
            total = a + b;
            return total;
        case '-':
            total = a - b;
            break;
        case 'x':
            total = a * b;
            break;
        case '/':
            total = a / b;
            break;
        case '^':
            total = Math.pow(a, b);
            break;
    }
}

