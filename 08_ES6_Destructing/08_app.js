/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var array = ['John', 40, 'Manager'];
var eName = array[0];
var eAge = array[1];
var eDesg = array[2];
console.log("eName : " + eName + " eAge : " + eAge + " eDesg: " + eDesg);
//Destructing
var dName = array[0], dAge = array[1], dDesg = array[2];
console.log("eName : " + dName + " eAge : " + dAge + " eDesg: " + dDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b : " + b);
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    sName: 'Rajan',
    sAge: 25,
    sCourse: 'Engineering'
};
var Name = student.sName, Age = student.sAge, Course = student.sCourse;
console.log("Name : " + Name + " Age: " + Age + " Course : " + Course);
var _a;
