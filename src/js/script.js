document.addEventListener('DOMContentLoaded', () => {
    const previousOperandElement = document.getElementById('previous-operand');
    const currentOperandElement = document.getElementById('current-operand');
    const numberButtons = document.querySelectorAll('[id^="one"], [id^="two"], [id^="three"], [id^="four"], [id^="five"], [id^="six"], [id^="seven"], [id^="eight"], [id^="nine"], [id^="zero"]');
    const operationButtons = document.querySelectorAll('.operation');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');
    const deleteButton = document.getElementById('delete');
    const decimalButton = document.getElementById('decimal');

    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;
    let resetScreen = false;

    function updateDisplay() {
        currentOperandElement.innerText = currentOperand;
        if (operation != null) {
            previousOperandElement.innerText = `${previousOperand} ${operation}`;
        } else {
            previousOperandElement.innerText = previousOperand;
        }
    }

    function appendNumber(number) {
        if (currentOperand === '0' || resetScreen) {
            currentOperand = number;
            resetScreen = false;
        } else {
            currentOperand += number;
        }
    }

    function addDecimal() {
        if (resetScreen) {
            currentOperand = '0.';
            resetScreen = false;
            return;
        }
        if (currentOperand.includes('.')) return;
        if (currentOperand === '') {
            currentOperand = '0';
        }
        currentOperand += '.';
    }

    function chooseOperation(op) {
        if (currentOperand === '' && previousOperand === '') return;
        if (currentOperand === '') {
            operation = op;
            return;
        }
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '−':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        currentOperand = computation.toString();
        operation = undefined;
        previousOperand = '';
        resetScreen = true;
    }

    function clear() {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
    }

    function deleteNumber() {
        if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
            currentOperand = '0';
        } else {
            currentOperand = currentOperand.slice(0, -1);
        }
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.innerText);
            updateDisplay();
        });
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            chooseOperation(button.innerText);
            updateDisplay();
        });
    });

    equalsButton.addEventListener('click', () => {
        compute();
        updateDisplay();
    });

    clearButton.addEventListener('click', () => {
        clear();
        updateDisplay();
    });

    deleteButton.addEventListener('click', () => {
        deleteNumber();
        updateDisplay();
    });

    decimalButton.addEventListener('click', () => {
        addDecimal();
        updateDisplay();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            appendNumber(e.key);
            updateDisplay();
        } else if (e.key === '.') {
            addDecimal();
            updateDisplay();
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            let op;
            switch (e.key) {
                case '+': op = '+'; break;
                case '-': op = '−'; break;
                case '*': op = '×'; break;
                case '/': op = '÷'; break;
            }
            chooseOperation(op);
            updateDisplay();
        } else if (e.key === 'Enter' || e.key === '=') {
            compute();
            updateDisplay();
        } else if (e.key === 'Backspace') {
            deleteNumber();
            updateDisplay();
        } else if (e.key === 'Escape') {
            clear();
            updateDisplay();
        }
    });
});