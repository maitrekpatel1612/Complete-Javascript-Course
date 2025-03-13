// JavaScript Data Types

// ----- 1. PRIMITIVE TYPES -----
console.log("\n----- PRIMITIVE TYPES -----");
const myString = "Hello, World!";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;
const mySymbol = Symbol("unique");
const myBigInt = 9007199254740991n;

console.log(`String:     ${myString}      (${typeof myString})`);
console.log(`Number:     ${myNumber}      (${typeof myNumber})`);
console.log(`Boolean:    ${myBoolean}     (${typeof myBoolean})`);
console.log(`Null:       ${myNull}        (${typeof myNull})`);
console.log(`Undefined:  ${myUndefined}   (${typeof myUndefined})`);
console.log(`Symbol:     ${mySymbol.toString()}   (${typeof mySymbol})`);
console.log(`BigInt:     ${myBigInt}      (${typeof myBigInt})`);
console.log(`MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}`);
console.log(`BigInt + 1: ${myBigInt + 1n}`);

// ----- 2. OBJECT TYPES -----
console.log("\n----- OBJECT TYPES -----");
const myObject = {
    name: "John",
    age: 30,
    isActive: true,
    hobbies: ["coding", "reading"],
    address: {
        street: "123 Main St",
        city: "Techville"
    },
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

const myArray = [1, 2, 3, 4];
const myFunction = function() {
    return "Hello!";
};

console.log("Object:", myObject);
console.log("Object.name:", myObject.name);
console.log("Object method result:", myObject.greet());
console.log("Array:", myArray);
console.log("Function result:", myFunction());

// ----- 3. TYPE CHECKING -----
console.log("\n----- TYPE CHECKING -----");
console.log(`typeof string:    ${typeof myString}`);
console.log(`typeof number:    ${typeof myNumber}`);
console.log(`typeof object:    ${typeof myObject}`);
console.log(`typeof array:     ${typeof myArray}`);
console.log(`Array.isArray():  ${Array.isArray(myArray)}`);
console.log(`typeof function:  ${typeof myFunction}`);

// ----- 4. TYPE CONVERSION -----
console.log("\n----- TYPE CONVERSION -----");
const stringNumber = "42";
console.log(`String "42" to Number:  ${Number(stringNumber)}`);
console.log(`Number 42 to String:    "${String(42)}"`);
console.log(`Number 1 to Boolean:    ${Boolean(1)}`);
console.log(`Number 0 to Boolean:    ${Boolean(0)}`);

// ----- 5. TYPE COERCION -----
console.log("\n----- TYPE COERCION -----");
console.log(`"5" + 3 =     ${"5" + 3}    (string concatenation)`);
console.log(`"5" - 3 =     ${"5" - 3}    (numeric subtraction)`);
console.log(`"5" == 5:     ${"5" == 5}   (loose equality)`);
console.log(`"5" === 5:    ${"5" === 5}  (strict equality)`);
