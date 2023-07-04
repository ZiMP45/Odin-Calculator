// on click, push that button value to an array for numbers
// add functions to operator buttons
// leave off button alone for now
// on click, whatever button is pressed add to output box

let firstNum = 0;
let secondNum = 0;
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
            output.textContent = runEquation(parseInt(firstNum), parseInt(secondNum), operator);
        } else {
            button.onclick = getValue();
            output.textContent = reduceArray(arr);
        }
        
        function getValue() {
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
                    return a + b;
                case '-':
                    return a - b;
                case 'x':
                    return a * b;
                case '/':
                    return a / b;
            }
        }
    })
})



// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.onclick = transformButton();
//         setTimeout(resetButton, 100);

//         function transformButton() {
//             button.style.transform = "scale(0.97)";
//             button.style.transition = "transform 0.2 ease";
//             button.style.border = "2px solid white";
//         }

//         function resetButton() {
//             button.style.transform = "scale(1.0)";
//             button.style.border = "none";
//         }
//     })
// })

