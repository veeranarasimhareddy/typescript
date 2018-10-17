/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function greet(name:string,age:number=35):string{
    return "Hello " + name + " You are " + age + " years Old !!";
}

let output:string = greet('John');
console.log(output);
document.querySelector('#display').innerHTML = output;