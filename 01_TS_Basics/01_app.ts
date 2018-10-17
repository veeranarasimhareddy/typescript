// Hello World Example

let greeting:string = "Good Morning";
console.log(greeting);
document.querySelector('#display').innerHTML = greeting;


// Variables Creation in TypeScript
let num1:number = 10;
let num2:number = 20;
let result:string = '';

function findMin(a:number,b:number):number{
    return Math.max(a , b);
}

result = 'The Biggest Value is : ' + findMin(num1,num2);
console.log(result);
document.querySelector('#display').innerHTML = result;







