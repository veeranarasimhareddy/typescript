/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

// find the min of few numbers
let array1:Array<number> = [10,20,30,40,50,60];

let min = Math.min(...array1);
console.log(`Min value is : ${min}`);

// Add an array in another array
let arr1:Array<number> = [30,40,50];
let arr2:Array<number> = [10,20,...arr1,60,70,80];
console.log(arr2);

// To Create a copy of an Array
let languages1:Array<string> = ['HTML','CSS','JS','Bootstrap'];

let languages2:Array<string> = [...languages1];
console.log(languages2);