// for multiple operator equations, conduct first calculation, 
// update runEquation and output total to display, then use that value as newFirst
// as a in next runEquation to make more complex calculations.

let firstNum = 0;
let secondNum = 0;
let newFirst = 0;
let value = 0;
let arr = [];
let operator = '';
const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

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
            output.textContent = '';
            arr = [];
            firstNum = 0;
            secondNum = 0;
            value = 0; 
        } else {
            button.onclick = getValue(button);
            output.textContent = reduceArray(arr);
        } 
    })
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.onclick = transformButton();
        setTimeout(resetButton, 100);

        function transformButton() {
            button.style.transform = "scale(0.97)";
            button.style.transition = "transform 0.2 ease";
            button.style.border = "2px solid white";
            
        }
        
        function resetButton() {
            button.style.transform = "scale(1.0)";
            button.style.border = "none";
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
};



function runEquation(a, b, operator) {
    switch(operator) {
        case '+':
            newFirst = a + b;
            return newFirst;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '/':
            return a / b;
        case '^':
            return Math.pow(a, b);
    }
}

