class CalculatorApp{
    private static firstNumber:HTMLInputElement;
    private static secondNumber:HTMLInputElement;
    private static operator:HTMLButtonElement;
    private static equals_button:HTMLButtonElement;
    private static result_button:HTMLButtonElement;
    private static plus_button:HTMLButtonElement;
    private static minus_button:HTMLButtonElement;
    private static division_button:HTMLButtonElement;
    private static mul_button:HTMLButtonElement;
    private static clear_Button:HTMLButtonElement;

    // This executes as soon as we create an object
    constructor(){
        // Initialise the variables
        CalculatorApp.initialize();

        //Hookup event Listeners
        CalculatorApp.addEventListeners();
    }

    // Initialise the variables
    public static initialize(){
        CalculatorApp.firstNumber =
            document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumber =
            document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operator =
            document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equals_button =
            document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.result_button =
            document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plus_button =
            document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minus_button =
            document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.division_button =
            document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.mul_button =
            document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.equals_button =
            document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.clear_Button =
            document.querySelector('#clear-button') as HTMLButtonElement;
    }

    //Hookup event Listeners
    public static addEventListeners(){
        CalculatorApp.equals_button.addEventListener('click',CalculatorApp.fetchResults);
        CalculatorApp.plus_button.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minus_button.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.division_button.addEventListener('click',CalculatorApp.changeOperatorDivision);
        CalculatorApp.mul_button.addEventListener('click',CalculatorApp.changeOperatorMultiplication);
        CalculatorApp.clear_Button.addEventListener('click',CalculatorApp.clearAll);
    }

    // to get the results of calculation
    public static fetchResults(){

        let firstValue = CalculatorApp.firstNumber.value;
        let secondValue = CalculatorApp.secondNumber.value;

        if(firstValue === '' || secondValue === ''){
            CalculatorApp.result_button.innerHTML = "RESULT";
        }
        else{
            let num1 = parseFloat(firstValue);
            let num2 = parseFloat(secondValue);
            let opr = CalculatorApp.operator.innerHTML;
            let result:number = 0;
            console.log(num1 + " " + opr + " " + num2);
            switch(opr){
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
    }

    // Click on Plus Button
    public static changeOperatorPlus(){
        CalculatorApp.operator.innerHTML = '+'
    }

    // Click on Minus Button
    public static changeOperatorMinus(){
        CalculatorApp.operator.innerHTML = '-'

    }

    // Click on Division Button
    public static changeOperatorDivision(){
        CalculatorApp.operator.innerHTML = '/'

    }

    // Click on Multiplication Button
    public static changeOperatorMultiplication(){
        CalculatorApp.operator.innerHTML = '*'

    }

    // Click on Clear Button
    public static clearAll(){
        CalculatorApp.firstNumber.value = '';
        CalculatorApp.secondNumber.value = '';
        CalculatorApp.operator.innerHTML = '+';
        CalculatorApp.result_button.innerHTML = 'RESULT';
    }
}


// Control Flow starts from here
// It Executes the Constructor function.
let calcApp = new CalculatorApp();