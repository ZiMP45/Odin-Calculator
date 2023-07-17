// Limited on how the calculator function works. Will only update the value once the equals
// is pressed and even then, you can only do one operation at a time rather than constantly updating 
// the value. Look into either using an object somehow, or break the whole thing down into much simpler pieces.
// https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/
// Classes also seem to be recurring theme on things I've looked into.
// Right now, my brain is just not there after vacation.

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
let firstNum = 0;
let secondNum = 0;
let newFirst = 0;
let value = 0;
let arr = [];
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            operator = button.textContent;
            firstNum = reduceArray(arr);
            arr = [];
        } else if (button.classList.contains('equal')) {
            secondNum = reduceArray(arr);
            if (newFirst == '0') {
                runEquation(parseInt(firstNum), parseInt(secondNum), operator);
            } else {
                runEquation(parseInt(newFirst), parseInt(secondNum), operator);
            }
            
            output.textContent = newFirst;
        } else if (button.classList.contains('allClear')) {
            clearValues();
        } else {
            button.onclick = getValue(button);
            output.textContent = reduceArray(arr);
        } 
    })
})

function getValue(button) {
    value = button.dataset.key
    arr.push(value);
}

function reduceArray(arr) {
    let joinedValues = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    return joinedValues;
}

function clearValues() {
    output.textContent = '';
    arr = [];
    firstNum = 0;
    secondNum = 0;
    newFirst = 0;
    value = 0;
}


function runEquation(a, b, operator) {
    switch(operator) {
        case '+':
            newFirst = a + b;
            break;
        case '-':
            newFirst = a - b;
            break;
        case 'x':
            newFirst = a * b;
            break;
        case '/':
            newFirst = a / b;
            break;
        case '^':
            newFirst = Math.pow(a, b);
            break;
    }
}

