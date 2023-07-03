// on click, push that button value to an array for numbers
// add functions to operator buttons
// leave off button alone for now
// on click, whatever button is pressed add to output box

const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');

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

        let value = button.textContent;

        updateOutput(value);

    })
})

function updateOutput(value) {
    output.textContent = value;
}
