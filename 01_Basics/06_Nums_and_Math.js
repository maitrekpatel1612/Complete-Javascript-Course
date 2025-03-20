//=>==============================================
//=> BASIC NUMBER USAGE
//=>==============================================

// Basic number declaration
const score = 400;
console.log(score); // 400 → Simple number declaration

// Explicitly creating number using constructor
const balance = new Number(100);
console.log(balance); // [Number: 100] → Number object with wrapper

//=>==============================================
//=> NUMBER METHODS
//=>==============================================

console.log(balance.toString()); // "100" → Converts Number to string
console.log(balance.toFixed(2)); // "100.00" → String with specified decimal places

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // "123.9" → String with specified precision

const hundreds = 1000000;
console.log(hundreds.toLocaleString('')); // "1,000,000" → String with locale-specific formatting
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" → String with Indian formatting

//=>==============================================
//=> NUMBER PROPERTIES
//=>==============================================

console.log(Number.MAX_VALUE);            // 1.7976931348623157e+308 → Largest representable number
console.log(Number.MIN_VALUE);            // 5e-324 → Smallest positive representable number
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991 → Maximum safe integer
console.log(Number.MIN_SAFE_INTEGER);     // -9007199254740991 → Minimum safe integer
console.log(Number.POSITIVE_INFINITY);    // Infinity → Represents positive infinity
console.log(Number.NEGATIVE_INFINITY);    // -Infinity → Represents negative infinity
console.log(Number.NaN);                  // NaN → Represents "Not a Number"





//!--------------------------------------------------------------------------------------------------------------
//=>==============================================
//=> MATH OBJECT
//=>==============================================

console.log(Math.PI);                     // 3.141592653589793 → Mathematical constant PI
console.log(Math.abs(-4));                // 4 → Absolute value (removes negative sign)
console.log(Math.round(4.6));             // 5 → Rounds to nearest integer
console.log(Math.ceil(4.2));              // 5 → Rounds up to nearest integer
console.log(Math.floor(4.9));             // 4 → Rounds down to nearest integer
console.log(Math.min(4, 3, 6, 8));        // 3 → Returns smallest value from arguments
console.log(Math.max(4, 3, 6, 8));        // 8 → Returns largest value from arguments

//=>==============================================
//=> ADVANCED MATH OPERATIONS
//=>==============================================

// Power and square root
console.log(Math.pow(2, 3));              // 8 → 2 raised to power 3
console.log(Math.sqrt(25));               // 5 → Square root of 25
console.log(Math.cbrt(27));               // 3 → Cube root of 27

//=>==============================================
//=> RANDOM NUMBER GENERATION
//=>==============================================

console.log(Math.random());               // Random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10

//~ Common pattern to get random number in a specific range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //-> Random integer between min and max

let newDate = new Date(); // Create a new date object
console.log(newDate.toLocaleString('default',{}));