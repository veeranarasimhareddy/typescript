/*
---------------------------------------------------------------------------------
 4. for...of loop
---------------------------------------------------------------------------------
 Before this, we were using "for..in"

*/

// Usage of for...in loop from ES5
let languages:Array<string> = ['html','css','JavaScript','Angular JS'];
let output:string = 'for in : ';
for(let index in languages){
    let value = languages[index];
    output += `${value} `;
}
console.log(output);

// Usage of for...of loop from ES6
output = 'for of : ';
for(let value of languages){
    output += `${value} `;
}
console.log(output);
