function simpleCalculator(firstNum, secondNum, operator) {
    function multiply(a, b) {
        return a * b;
    }
    let divide = (a, b) => a/b;

    let add = (a, b) => a + b;

    function subtract(a, b) {
        return a - b;
    }

    switch (operator) {
        case 'multiply':
            return multiply(firstNum, secondNum);
        case 'divide':
            return divide(firstNum, secondNum);
        case 'add':
            return add(firstNum, secondNum);
        case 'subtract':
            return subtract(firstNum, secondNum);
    }

}
console.log(simpleCalculator(40,
    8,
    'divide'));
