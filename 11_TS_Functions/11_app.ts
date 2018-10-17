// Create a simple function to add two numbers
function add(a:number,b:number):number{
    let sum:number = a + b;
    return sum;
}
console.log(`Sum : ${add(10,20)}`);

// Create the same add function with first number as 'any' type
function addAny(a:any,b:number):number{
    let result = 0;
    if(typeof a === 'number'){
        result = a + b;
    }
    else if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            result = b;
        }
        else{
            result = parseFloat(a) + b;
        }
    }
    else{
        result = b;
    }
    return result;
}

console.log(addAny(10,20));

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function max(a:number):number;
function max(a:number,b:number):number;
function max(a:number,b:number,c:number):number;
function max(a:number,b?:number,c?:number):number{
    // here '?' indicates the optional parameter
    // just 'a'
    if(b === undefined && c === undefined){
        return a;
    }
    // a , b
    else if(c === undefined){
        return Math.max(a ,b);
    }
    // a, b, c
    else{
        return Math.max(a,b,c);
    }
}
//console.log(`Max ${max()}`); // not possible
console.log(`Max : ${max(10)}`); // 10
console.log(`Max : ${max(10,20)}`); // 20
console.log(`Max : ${max(10,20,30)}`); // 30
//console.log(`Max : ${max(10,20,30,40)}`); // not possible
