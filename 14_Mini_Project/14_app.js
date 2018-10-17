var CalculatorApp = (function () {
    // This executes as soon as we create an object
    function CalculatorApp() {
        // Initialise the variables
        CalculatorApp.initialize();
        //Hookup event Listeners
        CalculatorApp.addEventListeners();
    }
    // Initialise the variables
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumber =
            document.querySelector('#firstNumber');
        CalculatorApp.secondNumber =
            document.querySelector('#secondNumber');
        CalculatorApp.operator =
            document.querySelector('#operator');
        CalculatorApp.equals_button =
            document.querySelector('#equals-button');
        CalculatorApp.result_button =
            document.querySelector('#result-button');
        CalculatorApp.plus_button =
            document.querySelector('#plus-button');
        CalculatorApp.minus_button =
            document.querySelector('#minus-button');
        CalculatorApp.division_button =
            document.querySelector('#divide-button');
        CalculatorApp.mul_button =
            document.querySelector('#multiply-button');
        CalculatorApp.equals_button =
            document.querySelector('#equals-button');
        CalculatorApp.clear_Button =
            document.querySelector('#clear-button');
    };
    //Hookup event Listeners
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.equals_button.addEventListener('click', CalculatorApp.fetchResults);
        CalculatorApp.plus_button.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.division_button.addEventListener('click', CalculatorApp.changeOperatorDivision);
        CalculatorApp.mul_button.addEventListener('click', CalculatorApp.changeOperatorMultiplication);
        CalculatorApp.clear_Button.addEventListener('click', CalculatorApp.clearAll);
    };
    // to get the results of calculation
    CalculatorApp.fetchResults = function () {
        var firstValue = CalculatorApp.firstNumber.value;
        var secondValue = CalculatorApp.secondNumber.value;
        if (firstValue === '' || secondValue === '') {
            CalculatorApp.result_button.innerHTML = "RESULT";
        }
        else {
            var num1 = parseFloat(firstValue);
            var num2 = parseFloat(secondValue);
            var opr = CalculatorApp.operator.innerHTML;
            var result = 0;
            console.log(num1 + " " + opr + " " + num2);
            switch (opr) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.result_button.innerHTML = result.toString();
        }
    };
    // Click on Plus Button
    CalculatorApp.changeOperatorPlus = function () {
        CalculatorApp.operator.innerHTML = '+';
    };
    // Click on Minus Button
    CalculatorApp.changeOperatorMinus = function () {
        CalculatorApp.operator.innerHTML = '-';
    };
    // Click on Division Button
    CalculatorApp.changeOperatorDivision = function () {
        CalculatorApp.operator.innerHTML = '/';
    };
    // Click on Multiplication Button
    CalculatorApp.changeOperatorMultiplication = function () {
        CalculatorApp.operator.innerHTML = '*';
    };
    // Click on Clear Button
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = 'RESULT';
    };
    return CalculatorApp;
}());
// Control Flow starts from here
// It Executes the Constructor function.
var calcApp = new CalculatorApp();
