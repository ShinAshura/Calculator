let operand1 = 0;
let operand2 = 0;
let operator = '';
let result = 0;

const add = function (a, b) {
    return a + b;
}

const substract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '−') {
        return substract(a, b);
    }
    if (operator === '×') {
        return multiply(a, b);
    }
    if (operator === '÷') {
        return divide(a, b);
    }
}

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        if (button.textContent === '0' || button.textContent === '1' || button.textContent === '2' || button.textContent === '3' || button.textContent === '4' || button.textContent === '5' || button.textContent === '6' || button.textContent === '7' || button.textContent === '8' || button.textContent === '9') {
            if (operand1 === 0) {
                operand1 = Number(button.textContent);
                display.textContent = operand1;
                console.log(typeof operand1);
            }
            else if (operand1 !== 0 && operator === '') {
                console.log(typeof operand1);
                operand1 = operand1 * 10 + Number(button.textContent);
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator !== '') {
                if (operand2 === 0) {
                    operand2 = Number(button.textContent);
                    display.textContent = `${operand1} ${operator} ${operand2}`;
                }
                else if (operand2 !== 0) {
                    operand2 = operand2 * 10 + Number(button.textContent);
                    display.textContent = `${operand1} ${operator} ${operand2}`;
                }
            }
        }
        else if (button.textContent === '+' || button.textContent === '−' || button.textContent === '×' || button.textContent === '÷') {
            if (operand1 !== 0 && operand2 === 0 && operator === '') {
                operator = button.textContent;
                display.textContent = `${operand1} ${button.textContent}`;
            }
            else if (result !== 0) {
                operand1 = result;
                operator = button.textContent;
                result = 0;
                display.textContent = `${operand1} ${button.textContent}`;
            }
            else if (operand1 !== 0 && operator !== '') {
                if (operator === '÷' && operand2 === 0) {
                    console.log(operand2);
                    display.textContent = 'Cannot divide by zero';
                    operand1 = 0;
                    operand2 = 0;
                    operator = '';
                }
                else {
                    operand1 = operate(operator, operand1, operand2);
                    console.log(operand1);
                    operand2 = 0;
                    operator = button.textContent;
                    display.textContent = `${operand1} ${operator}`;
                }
            }
        }
        else if (button.textContent === 'C') {
            operand1 = 0;
            operand2 = 0;
            operator = '';
            display.textContent = 0;
        }
        else if (button.textContent === '⌫') {
            if (operand2 === 0 && operand1 !== 0 && operator === '') {
                operand1 = Math.floor(operand1 / 10);
                display.textContent = operand1;
            }
            if (operand1 !== 0 && operand2 !== 0) {
                operand2 = Math.floor(operand2 / 10);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
        }
        else if (button.textContent === '=' && operand1 !== 0 && operand2 !== 0) {
            result = operate(operator, operand1, operand2);
            display.textContent = result;
            operand1 = 0;
            operand2 = 0;
            operator = '';
        }
        else if (button.textContent === '=' && operand1 !== 0 && operand2 === 0 && operator === '÷') {
            // result = operate(operator, operand1, operand2);
            display.textContent = 'Cannot divide by zero';
            operand1 = 0;
            operand2 = 0;
            operator = '';
        }
    });
});