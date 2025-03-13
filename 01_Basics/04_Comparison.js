console.log("Demonstrating comparison operators in JavaScript");

// Regular Comparisons (with same data types)
console.log("\n=== Regular Comparisons ===");
console.log("5 > 3:", 5 > 3);       // true
console.log("5 >= 5:", 5 >= 5);     // true
console.log("5 < 3:", 5 < 3);       // false
console.log("5 <= 5:", 5 <= 5);     // true
console.log("5 == 5:", 5 == 5);     // true
console.log("5 != 3:", 5 != 3);     // true

// Comparison with different data types (type coercion) [Type Coercion: implicit conversion of values to a common type i.e. string to number]
console.log("\n=== Type Coercion Comparisons ===");
console.log("'5' == 5:", '5' == 5);  // true (string '5' is coerced to number 5)
console.log("'5' === 5:", '5' === 5); // false (strict equality, no type coercion)
console.log("'5' !== 5:", '5' !== 5); // true (strict inequality)
console.log("0 == false:", 0 == false); // true (both coerced to falsy values)
console.log("0 === false:", 0 === false); // false (different types)
console.log("'' == false:", '' == false); // true (both coerced to falsy values)
console.log("'' === false:", '' === false); // false (different types)

// Null and undefined comparisons
console.log("\n=== Null and Undefined Comparisons ===");
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false (special case)
console.log("null >= 0:", null >= 0); // true (null converted to 0)
console.log("null > 0:", null > 0);   // false

// Object comparisons
console.log("\n=== Object Comparisons ===");
const obj1 = { name: "JavaScript" };
const obj2 = { name: "JavaScript" };
const obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2);   // false (different references)
console.log("obj1 === obj2:", obj1 === obj2);  // false (different references)
console.log("obj1 == obj3:", obj1 == obj3);    // true (same reference)

// Summary
console.log("\n=== Summary ===");
console.log("Always use === for comparing values to avoid unexpected type coercion");
console.log("Object comparisons check references, not content");
