let operand1 = 0;
let operand2 = 0;
let operator = '';
let result = 0;
let lengthCounter = 0;

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

const modulo = function (a, b) {
    return a % b;
}

const operate = function (operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '−' || operator === '-') {
        return substract(a, b);
    }
    if (operator === '×' || operator === '*') {
        return multiply(a, b);
    }
    if (operator === '÷' || operator === '/') {
        return divide(a, b);
    }
    if (operator === '%') {
        return modulo(a, b);
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
            }
            else if (operand1 !== 0 && operator === '' && ((operand1.toString()).includes('.'))) {
                operand1 = operand1 + Number(button.textContent);
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator === '' && !((operand1.toString()).includes('.'))) {
                operand1 = operand1 * 10 + Number(button.textContent);
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator !== '') {
                if (operand2 === 0) {
                    operand2 = Number(button.textContent);
                    display.textContent = `${operand1} ${operator} ${operand2}`;
                }
                else if (operand2 !== 0 && !((operand2.toString()).includes('.'))) {
                    operand2 = operand2 * 10 + Number(button.textContent);
                    display.textContent = `${operand1} ${operator} ${operand2}`;
                }
                else if (operand2 !== 0 && ((operand2.toString()).includes('.'))) {
                    operand2 = operand2 + Number(button.textContent);
                    display.textContent = `${operand1} ${operator} ${operand2}`;
                }
            }
        }
        else if (button.textContent === '+' || button.textContent === '−' || button.textContent === '×' || button.textContent === '÷' || button.textContent === '%') {
            if (operand1 !== 0 && operand2 === 0 && operator === '') {
                operator = button.textContent;
                display.textContent = `${operand1} ${button.textContent}`;
            }
            else if (operand1 !== 0 && operand2 === 0 && operator !== '') {
                operator = button.textContent;
                display.textContent = `${operand1} ${operator}`;
            }
            else if (result !== 0) {
                operand1 = result;
                operator = button.textContent;
                result = 0;
                display.textContent = `${operand1} ${button.textContent}`;
            }
            else if (operand1 !== 0 && operator !== '') {
                if (operator === '÷' && operand2 === 0) {
                    display.textContent = 'Cannot divide by zero';
                    operand1 = 0;
                    operand2 = 0;
                    operator = '';
                }
                else {
                    // operand1 = (operate(operator, Number(operand1), Number(operand2))).toFixed(7);
                    operand1 = operate(operator, Number(operand1), Number(operand2));
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
            result = 0;
            display.textContent = 0;
        }
        else if (button.textContent === '⌫') {
            if (operand2 === 0 && operand1 !== 0 && operator === '' && !((operand1.toString()).includes('.'))) {
                operand1 = Math.floor(operand1 / 10);
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operand2 !== 0 && !((operand2.toString()).includes('.'))) {
                operand2 = Math.floor(operand2 / 10);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
            else if (operand1 !== 0 && operator === '' && ((operand1.toString()).includes('.'))) {
                operand1 = operand1.slice(0, operand1.length - 1);
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator !== '' && operand2 !== 0 && ((operand2.toString()).includes('.'))) {
                operand2 = operand2.slice(0, operand2.length - 1);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
        }
        else if (button.textContent === '=' && operand1 !== 0 && operand2 !== 0) {
            // result = (operate(operator, Number(operand1), Number(operand2))).toFixed(12);
            result = operate(operator, Number(operand1), Number(operand2));
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
        else if (button.textContent === '.') {
            if (operand1 === 0) {
                operand1 = operand1 + button.textContent;
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator === '' && !((operand1.toString()).includes('.'))) {
                operand1 = operand1 + button.textContent;
                display.textContent = operand1;
            }
            else if (operand1 !== 0 && operator !== '' && operand2 === 0) {
                operand2 = operand2 + button.textContent;
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
            else if (operand1 !== 0 && operator !== '' && operand2 !== 0 && !((operand2.toString()).includes('.'))) {
                operand2 = operand2 + button.textContent;
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
        }
    });
});




document.addEventListener('keydown', function (e) {
    if (e.code === 'Numpad0' || e.code === 'Numpad1' || e.code === 'Numpad2' || e.code === 'Numpad3' || e.code === 'Numpad4' || e.code === 'Numpad5' || e.code === 'Numpad6' || e.code === 'Numpad7' || e.code === 'Numpad8' || e.code === 'Numpad9') {
        if (operand1 === 0) {
            operand1 = Number(e.key);
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operator === '' && !(operand1.toString()).includes('.')) {
            operand1 = operand1 * 10 + Number(e.key);
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operator === '' && ((operand1.toString()).includes('.'))) {
            operand1 = operand1 + Number(e.key);
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operator !== '') {
            if (operand2 === 0) {
                operand2 = Number(e.key);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
            else if (operand2 !== 0 && !((operand2.toString()).includes('.'))) {
                operand2 = operand2 * 10 + Number(e.key);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
            else if (operand2 !== 0 && ((operand2.toString()).includes('.'))) {
                operand2 = operand2 + Number(e.key);
                display.textContent = `${operand1} ${operator} ${operand2}`;
            }
        }
    }

    else if (e.code === 'NumpadAdd' || e.code === 'NumpadSubtract' || e.code === 'NumpadMultiply' || e.code === 'NumpadDivide') {
        if (operand1 !== 0 && operand2 === 0 && operator === '') {
            operator = e.key;
            display.textContent = `${operand1} ${e.key}`;
        } 
        else if (operand1 !== 0 && operand2 === 0 && operator !== '') {
            operator = e.key;
            display.textContent = `${operand1} ${operator}`;
        }
        else if (result !== 0) {
            operand1 = result;
            operator = e.key;
            result = 0;
            display.textContent = `${operand1} ${e.key}`;
        }
        else if (operand1 !== 0 && operator !== '') {
            if (operator === '÷' && operand2 === 0) {
                display.textContent = 'Cannot divide by zero';
                operand1 = 0;
                operand2 = 0;
                operator = '';
            }
            else if (operand1 !== 0 && operand2 !== 0 && operator !== '') {
                // operand1 = (operate(operator, Number(operand1), Number(operand2))).toFixed(7);
                operand1 = operate(operator, Number(operand1), Number(operand2));
                operand2 = 0;
                operator = e.key;
                display.textContent = `${operand1} ${operator}`;
            }
        }
    }
    else if (e.code === 'Escape') {
        operand1 = 0;
        operand2 = 0;
        result = 0;
        operator = '';
        display.textContent = 0;
    }
    else if (e.code === 'Backspace') {
        if (operand2 === 0 && operand1 !== 0 && operator === '' && !((operand1.toString()).includes('.'))) {
            operand1 = Math.floor(operand1 / 10);
            display.textContent = operand1;
        }
        else if (operand2 === 0 && operand1 !== 0 && operator === '' && ((operand1.toString()).includes('.'))) {
            operand1 = operand1.slice(0, operand1.length - 1);
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operand2 !== 0 && !((operand2.toString()).includes('.'))) {
            operand2 = Math.floor(operand2 / 10);
            display.textContent = `${operand1} ${operator} ${operand2}`;
        }
        else if (operand1 !== 0 && operand2 !== 0 && ((operand2.toString()).includes('.'))) {
            operand2 = operand2.slice(0, operand2.length - 1);
            display.textContent = `${operand1} ${operator} ${operand2}`;
        }
    }
    else if (operand1 !== 0 && operand2 !== 0 && (e.code === 'NumpadEnter' || e.code === 'Enter')) {
        // result = (operate(operator, Number(operand1), Number(operand2))).toFixed(11);
        result = operate(operator, Number(operand1), Number(operand2));
        display.textContent = result;
        operand1 = 0;
        operand2 = 0;
        operator = '';
    }
    else if (operand1 !== 0 && operand2 === 0 && operator === '÷' && (e.code === 'NumpadEnter' || e.code === 'Enter')) {
        // result = operate(operator, operand1, operand2);
        display.textContent = 'Cannot divide by zero';
        operand1 = 0;
        operand2 = 0;
        operator = '';
    }
    else if (e.code === 'NumpadDecimal') {
        if (operand1 === 0) {
            operand1 = operand1 + e.key;
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operator === '' && !((operand1.toString()).includes('.'))) {
            operand1 = operand1 + e.key;
            display.textContent = operand1;
        }
        else if (operand1 !== 0 && operator !== '' && operand2 === 0) {
            operand2 = operand2 + e.key;
            display.textContent = `${operand1} ${operator} ${operand2}`;
        }
        else if (operand1 !== 0 && operator !== '' && operand2 !== 0 && !((operand2.toString()).includes('.'))) {
            operand2 = operand2 + e.key;
            display.textContent = `${operand1} ${operator} ${operand2}`;
        }
    }
});