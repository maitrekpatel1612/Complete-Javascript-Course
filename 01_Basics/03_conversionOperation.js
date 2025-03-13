// JavaScript Type Conversion and Operations

// 1. Arithmetic Operations
const addition = 5 + 3;          // 8
const subtraction = 10 - 4;      // 6
const multiplication = 3 * 4;    // 12
const division = 15 / 3;         // 5
const modulus = 17 % 5;          // 2
const exponentiation = 2 ** 3;   // 8

// 2. String Operations
const str1 = "Hello";
const str2 = "World";
const combined = str1 + " " + str2;  // "Hello World"
const template = `${str1} ${str2}!`; // "Hello World!" // Template literals: allows embedding expressions 

// 3. Type Conversion Examples
// String to Number
const stringToInt = parseInt("42");       // 42
const stringToFloat = parseFloat("3.14"); // 3.14
const numberFromString = Number("42");     // 42

// Number to String
const numberToString = String(42);         // "42"
const floatToString = (3.14).toString();   // "3.14"

// 4. Truthy and Falsy Values
console.log(Boolean(""));        // false
console.log(Boolean(0));         // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false
console.log(Boolean("text"));    // true
console.log(Boolean(42));       // true
console.log(Boolean({}));       // true
console.log(Boolean([]));       // true

// 5. Comparison Operations
console.log(5 > 3);             // true
console.log(5 >= 5);            // true
console.log(5 < 3);             // false
console.log("5" == 5);          // true (loose equality)
console.log("5" === 5);         // false (strict equality)
console.log("5" != 5);          // false
console.log("5" !== 5);         // true 