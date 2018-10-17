// Create a simple function to add two numbers
function add(a, b) {
    var sum = a + b;
    return sum;
}
console.log("Sum : " + add(10, 20));
// Create the same add function with first number as 'any' type
function addAny(a, b) {
    var result = 0;
    if (typeof a === 'number') {
        result = a + b;
    }
    else if (typeof a === 'string') {
        if (isNaN(parseFloat(a))) {
            result = b;
        }
        else {
            result = parseFloat(a) + b;
        }
    }
    else {
        result = b;
    }
    return result;
}
console.log(addAny(10, 20));
function max(a, b, c) {
    // here '?' indicates the optional parameter
    // just 'a'
    if (b === undefined && c === undefined) {
        return a;
    }
    else if (c === undefined) {
        return Math.max(a, b);
    }
    else {
        return Math.max(a, b, c);
    }
}
//console.log(`Max ${max()}`); // not possible
console.log("Max : " + max(10)); // 10
console.log("Max : " + max(10, 20)); // 20
console.log("Max : " + max(10, 20, 30)); // 30
//console.log(`Max : ${max(10,20,30,40)}`); // not possible
