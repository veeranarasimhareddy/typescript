/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal Function 1
var greetNormal = function () {
    return "Good Morning From Greet Normal Fn";
};
console.log(greetNormal());
// Arrow Function 1
var greetArrow = function () { return "I am greet Arrow function"; };
console.log(greetArrow());
// Normal function 2
var greetArgsN = function (name) {
    return "Good Morning " + name;
};
console.log(greetArgsN('John'));
// Arrow Function 2
var greerArgsA = function (name) { return "Good Morning " + name; };
console.log(greerArgsA('Williams'));
// Normal function 3
var addN = function (a, b) {
    return a + b;
};
console.log("Normal : The Sum of a , b is : " + addN(10, 20));
// Arrow Function 3
var addA = function (a, b) { return a + b; };
console.log("Arrow : The Sum of a , b is : " + addA(10, 20));
// Normal Function 4
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
