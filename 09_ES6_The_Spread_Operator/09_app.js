/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/
// find the min of few numbers
var array1 = [10, 20, 30, 40, 50, 60];
var min = Math.min.apply(Math, array1);
console.log("Min value is : " + min);
// Add an array in another array
var arr1 = [30, 40, 50];
var arr2 = [10, 20].concat(arr1, [60, 70, 80]);
console.log(arr2);
// To Create a copy of an Array
var languages1 = ['HTML', 'CSS', 'JS', 'Bootstrap'];
var languages2 = languages1.slice();
console.log(languages2);
