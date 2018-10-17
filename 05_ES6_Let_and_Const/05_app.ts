/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
/* --------------------------- Var vs Let (for loop) --------------------------------- */

// Usage of let vs Var inside for loop created variables
for(var i = 0 ; i<= 10 ; i++){
    console.log(i); // 0 ... 10
}
console.log(i); // 11

for(let j = 0 ; j <= 10 ; j++){
    console.log(j); // 0 ... 10
}
//console.log(j); // Cannot access 'j' using 'let' keyword

/* --------------------------- Var vs Let (if block) --------------------------------- */

// Usage of let vs var inside if block
let course = 'Engineering';

if(course === 'Engineering'){
    var tech1 = 'Java';
}
console.log(tech1); // Java

if(course === 'Engineering'){
    let tech2 = 'PHP';
}
//console.log(tech2); // cannot access 'tech2' using 'let' keyword

// Usage Const variable creation
const MONTH_NAME:string = 'June';

// MONTH_NAME = 'June'; // we cannot re-assign the value becoz it is 'const'

