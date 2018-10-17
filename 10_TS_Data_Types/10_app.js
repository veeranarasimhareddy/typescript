/*
-----------------------------------------------------------------------------------------
   Variable Declarations in TypeScript and Usage
-----------------------------------------------------------------------------------------
 */
/*

    Boolean DataType

The most basic data type is the simple true/false value,
which JavaScript and TypeScript call a boolean value.

*/
/*

    Number DataType

    As in JavaScript all the numbers in TypeScript are also Floating point numbers.
    In addition to hexadecimal and decimal literals, TypeScript also
    supports binary and octal literals introduced in ECMAScript 2015.
    decimal, hex = 0x , binary = 0b , octal = 0o.
*/
/*
String Data type

 This is one of the commonly used datatype for textual data of any length,
 we may use with "" or ''
 */
// You can also use template strings, which can span multiple lines and have embedded expressions.
/*
    Array DataType

    An array is an indexed collection of values
    we can define multiple values with single variable name array
    we can use them like number[] or Array<number>
 */
/*

  Enum DataType

   enums are used to define a collection of constant values
    enums values once declared ,  they cannot be modified
 */
/*
    Any DataType

    This datatype accepts any types of data as a value to variables
 */
/*
    Void Data Type
    This is quite opposite to any datatype
    this may commonly used with function where no return types
 */
// Boolean , String , Number ,any , Array , Enum , void
// Boolean Datatype
var isTSEasy = true;
console.log("isTSEasy ? " + isTSEasy); // true
// String Data Type
var courseName = 'TypeScript';
console.log("Course Name : " + courseName);
// Number Data Type
var year = 2018;
console.log("Year : " + year);
// Any Data Type
var data = 'test';
console.log("data : " + data); // test
data = 10;
console.log("data : " + data); // 10
data = true;
console.log("data : " + data); // true
// Array dataType
var array = ['HTML', 'CSS', 'JavaScript', 'Bootstrap'];
console.log(array);
// Enum data Type (Collection of constant values)
var Car;
(function (Car) {
    Car["Model"] = "Benz";
    Car[Car["Year"] = 2018] = "Year";
})(Car || (Car = {}));
console.log(Car.Model); // Benz
//Car.Model = 'Benz'; // Cannot Reassign the values.
// void data type
function greet(name) {
    var greeting = "Hello " + name;
    console.log(greeting);
}
greet('John');
