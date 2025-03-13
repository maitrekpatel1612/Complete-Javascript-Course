// JavaScript Variables

// 1. Variable Declaration
let name = "John";           // Block-scoped variable
const age = 25;             // Constant variable
var occupation = "Developer"; // Function-scoped variable (older way)

// 2. Variable Scope
{
    let blockScoped = "Only available inside this block";
    var functionScoped = "Available outside the block";
}
// console.log(blockScoped);      // This would cause an error
console.log(functionScoped);    // This works

// 3. Variable Reassignment
let score = 10;
score = 20;                 // This is allowed with let

const PI = 3.14159;
// PI = 3.14;              // This would cause an error - constants can't be reassigned

// 4. Variable Hoisting
console.log(hoistedVar);    // undefined
var hoistedVar = "I'm hoisted";

// 5. Modern Best Practices
// - Use const by default
// - Use let if you need to reassign
// - Avoid var 