//~ *************** JavaScript Arrays ***************

// Arrays are ordered collections of values
// They can store values of any type: numbers, strings, booleans, objects, etc.

// *************** Creating Arrays ***************

// Method 1: Using array literal (most common)
const fruits = ["Apple", "Banana", "Gauva", "Mango"];
console.log("Fruits array:", fruits);                               // Output: Fruits array: [ 'Apple', 'Banana', 'Gauva', 'Mango' ]
// Method 2: Using the Array constructor (It is less common and not recommended for creating arrays)
const colors = new Array("Hello", "Boy", "Good");
console.log("Colors array:", colors);                               // Output: Colors array: [ 'Hello', 'Boy', 'Good' ]

// Method 3: Creating an empty array and then adding elements (less common)
const vehicles = [];
vehicles[0] = "Car";
vehicles[1] = "Bike";
vehicles[2] = "Bus";
console.log("Vehicles array:", vehicles);                           // Output: Vehicles array: [ 'Car', 'Bike', 'Bus' ]

// Arrays can contain mixed data types
const mixedArray = [42, "Hello", true, null, { name: "Object" }, [1, 2, 3]];
console.log("Mixed array:", mixedArray);                            // Output: Mixed array: [ 42, 'Hello', true, null, { name: 'Object' }, [ 1, 2, 3 ] ]

// *************** Accessing Array Elements ***************

// Arrays are zero-indexed (first element is at position 0)
const firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];
console.log("First fruit:", firstFruit);                            // Output: First fruit: Apple
console.log("Last fruit:", lastFruit);                              // Output: Last fruit: Mango

// Accessing non-existing elements returns undefined
console.log("Non-existing element:", fruits[10]);                   // Output: Non-existing element: undefined

// Getting array length
console.log("Number of fruits:", fruits.length);                    // Output: Number of fruits: 4

// *************** Modifying Arrays ***************

// Add elements to the end with push() (returns new length)
const newLength = fruits.push("Pineapple");
console.log("After push:", fruits);                                 // Output: After push: [ 'Apple', 'Banana', 'Gauva', 'Mango', 'Pineapple' ]
console.log("New length:", newLength);                              // Output: New length: 5

// Remove elements from the end with pop() (returns removed element)
const removedFruit = fruits.pop();
console.log("After pop:", fruits);                                  // Output: After pop: [ 'Apple', 'Banana', 'Gauva', 'Mango' ]
console.log("Removed fruit:", removedFruit);                        // Output: Removed fruit: Pineapple

// Add elements to the beginning with unshift() (returns new length) -> Considered less efficient than push() for large arrays because it requires re-indexing all elements
const newLengthUnshift = fruits.unshift("Strawberry");
console.log("After unshift:", fruits);                              // Output: After unshift: [ 'Strawberry', 'Apple', 'Banana', 'Gauva', 'Mango' ]
console.log("New length after unshift:", newLengthUnshift);         // Output: New length after unshift: 5

// Remove elements from the beginning with shift() (returns removed element) -> Considered less efficient than pop() for large arrays because it requires re-indexing all elements
const removedFirst = fruits.shift();
console.log("After shift:", fruits);                                // Output: After shift: [ 'Apple', 'Banana', 'Gauva', 'Mango' ]
console.log("Removed first:", removedFirst);                        // Output: Removed first: Strawberry

// Change elements by index -> Considered less efficient than push() for large arrays because it requires re-indexing all elements
fruits[1] = "Kiwi";
console.log("After changing element:", fruits);                     // Output: After changing element: [ 'Apple', 'Kiwi', 'Gauva', 'Mango' ]
// *************** Array Methods ***************

// splice() - Add/remove elements from anywhere (returns removed elements) and modifies original array
// splice(startIndex, deleteCount, ...itemsToAdd)
const numbers = [1, 2, 3, 7, 8, 9];
const removedElements = numbers.splice(3, 0, 4, 5, 6);
console.log("After splice (insertion):", numbers);                  // Output: After splice (insertion): [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log("Removed elements:", removedElements);                  // Output: Removed elements: []

const removed = numbers.splice(7, 2, 10);
console.log("After splice (replacement):", numbers);                // Output: After splice (replacement): [ 1, 2, 3, 4, 5, 6, 7, 10 ]
console.log("Removed elements:", removed);                          // Output: Removed elements: [ 8, 9 ]

// slice() - Returns a portion of the array (doesn't modify original)
// slice(startIndex, endIndex) - endIndex not included
const slicedArray = numbers.slice(2, 5);
console.log("Sliced array:", slicedArray);                          // Output: Sliced array: [ 3, 4, 5 ]
console.log("Original array unchanged:", numbers);                  // Output: Original array unchanged: [ 1, 2, 3, 4, 5, 6, 7, 10 ]

// concat() - Merges arrays and returns a new array
const moreNumbers = [11, 12, 13];
const combined = numbers.concat(moreNumbers);
console.log("Combined array:", combined);                           // Output: Combined array: [ 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13 ]

// Spread operator (...) - Alternative to concat (Must be used with let/const)
const combinedWithSpread = [...numbers, ...moreNumbers, 14, 15];
console.log("Combined with spread:", combinedWithSpread);           // Output: Combined with spread: [ 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15 ]

// *************** Searching Arrays ***************

// indexOf() - Returns the first index of an element (-1 if not found)
const letters = ["a", "b", "c", "d", "e", "a", "b"];
console.log("indexOf 'c':", letters.indexOf("c"));                   // Output: indexOf 'c': 2
console.log("indexOf 'a' (from index 2):", letters.indexOf("a", 2)); // Output: indexOf 'a' (from index 2): 5
console.log("indexOf 'z':", letters.indexOf("z"));                   // Output: indexOf 'z': -1

// lastIndexOf() - Returns the last index of an element (-1 if not found)
console.log("lastIndexOf 'b':", letters.lastIndexOf("b"));          // Output: lastIndexOf 'b': 6

// includes() - Returns true if the array contains an element
console.log("includes 'd':", letters.includes("d"));                // Output: includes 'd': true
console.log("includes 'z':", letters.includes("z"));                // Output: includes 'z': false

// find() - Returns the first element that satisfies a condition (or undefined)
const inventory = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
];
const expensiveItem = inventory.find((item) => item.price > 1000);
console.log("Expensive item:", expensiveItem);                      // Output: Expensive item: { id: 1, name: 'Laptop', price: 1200 }

// findIndex() - Returns the index of the first element that satisfies a condition (-1 if not found)
const tabletIndex = inventory.findIndex((item) => item.name === "Tablet");
console.log("Tablet index:", tabletIndex);                         // Output: Tablet index: 2

// *************** Array Transformation Methods ***************

// map() - Creates a new array by transforming each element
const prices = inventory.map((item) => item.price);
console.log("Prices:", prices);                                    // Output: Prices: [ 1200, 800, 500 ]

const discountedPrices = inventory.map((item) => {
    return {
        name: item.name,
        originalPrice: item.price,
        discountedPrice: item.price * 0.9, // 10% discount
    };
});
console.log("Discounted prices:", discountedPrices);
// Output: Discounted prices: [
//   { name: 'Laptop', originalPrice: 1200, discountedPrice: 1080 },
//   { name: 'Phone', originalPrice: 800, discountedPrice: 720 },
//   { name: 'Tablet', originalPrice: 500, discountedPrice: 450 }
// ]

// filter() - Creates a new array with elements that pass a test
const cheapItems = inventory.filter((item) => item.price < 1000);
console.log("Cheap items:", cheapItems);
// Output: Cheap items: [
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 3, name: 'Tablet', price: 500 }
// ]

const evenNumbers = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);                      // Output: Even numbers: [ 2, 4, 6 ]

// reduce() - Reduces the array to a single value i.e reduces((accumulator, currentValue) => {...}, initialValue)
const totalPrice = inventory.reduce((sum, item) => sum + item.price, 0);
console.log("Total inventory price:", totalPrice);              // Output: Total inventory price: 2500

const sum = [1, 2, 3, 4, 5].reduce((total, current) => total + current, 0);
console.log("Sum of numbers:", sum);                            // Output: Sum of numbers: 15

// Combining multiple array methods (chaining)
const discountedTotal = inventory
    .filter((item) => item.price > 600)
    .map((item) => item.price * 0.9)
    .reduce((sum, price) => sum + price, 0);

console.log("Total price after filtering and discount:", discountedTotal);  // Output: Total price after filtering and discount: 1800

// *************** Sorting Arrays ***************

// sort() - Sorts elements as strings by default (modifies original array)
const fruits2 = ["Mango", "Apple", "Banana", "Gauva"];
fruits2.sort();
console.log("Alphabetically sorted fruits:", fruits2);                      // Output: Alphabetically sorted fruits: [ 'Apple', 'Banana', 'Mango', 'Gauva' ] i.e Lexicographical Order

// sort() with a compare function for numbers
const numericValues = [40, 1, 5, 200, 3];
numericValues.sort(); // wrong for numbers, sorts as strings
console.log("Default sort (wrong for numbers):", numericValues);            // Output: Default sort (wrong for numbers): [ 1, 200, 3, 40, 5 ]

numericValues.sort((a, b) => a - b); // ascending (returns negative if a < b, 0 if a == b, positive if a > b)
console.log("Numeric sort ascending:", numericValues);                      // Output: Numeric sort ascending: [ 1, 3, 5, 40, 200 ]

numericValues.sort((a, b) => b - a); // descending (Swap a and b for descending order)
console.log("Numeric sort descending:", numericValues);                     // Output: Numeric sort descending: [ 200, 40, 5, 3, 1 ]

// Sorting objects
inventory.sort((a, b) => a.price - b.price); // ascending by price
console.log("Inventory sorted by price:", inventory);
// Output: Inventory sorted by price: [
//   { id: 3, name: 'Tablet', price: 500 },
//   { id: 2, name: 'Phone', price: 800 },
//   { id: 1, name: 'Laptop', price: 1200 }
// ]

// reverse() - Reverses the order of elements i.e Modifies original array
const reversedFruits = [...fruits2].reverse();
console.log("Reversed fruits:", reversedFruits);                            // Output: Reversed fruits: [ 'Gauva', 'Mango', 'Banana', 'Apple' ]

// *************** Multi-dimensional Arrays ***************

// 2D array (array of arrays)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log("2D array:", matrix);                                           // Output: 2D array: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log("Element at position [1][2]:", matrix[1][2]);                   // Output: Element at position [1][2]: 6

// Looping through a 2D array
console.log("Matrix elements:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Position [${i}][${j}]: ${matrix[i][j]}`);              // Output: Position [0][0]: 1, Position [0][1]: 2, etc...
    }
}

// *************** Array Iteration Methods ***************

// forEach() - Executes a function for each array element (no return value)
fruits2.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);                                      // Output: 0: Apple, 1: Banana, 2: Mango, 3: Gauva
});

// some() - Tests if at least one element passes the test
const hasExpensiveItem = inventory.some((item) => item.price > 1000);
console.log("Has item over $1000:", hasExpensiveItem);                      // Output: Has item over $1000: true

// every() - Tests if all elements pass the test
const allExpensive = inventory.every((item) => item.price > 400);
console.log("All items over $400:", allExpensive);                          // Output: All items over $400: true

// *************** Array Destructuring ***************

// Basic destructuring
const [first, second, ...rest] = fruits2;
console.log("First fruit:", first);                                         // Output: First fruit: Apple
console.log("Second fruit:", second);                                       // Output: Second fruit: Banana
console.log("Rest of fruits:", rest);                                       // Output: Rest of fruits: [ 'Mango', 'Gauva' ]

// Skipping elements
const [firstNumber, , thirdNumber] = [10, 20, 30];
console.log("First number:", firstNumber);                                  // Output: First number: 10
console.log("Third number:", thirdNumber);                                  // Output: Third number: 30

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log("After swap: a =", a, "b =", b);                                // Output: After swap: a = 2 b = 1

// **************** Array-Like Objects ***************

// Array-like objects (e.g., arguments, NodeList) can be converted to arrays
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const convertedArray = Array.from(arrayLike); // Convert to array
console.log("Converted array:", convertedArray); // Output: Converted array: [ 'a', 'b', 'c' ]


// Array.isArray() - Check if a variable is an array
console.log("Is fruits an array?", Array.isArray(fruits)); // Output: Is fruits an array? true
console.log("Is arrayLike an array?", Array.isArray(arrayLike)); // Output: Is arrayLike an array? false
console.log("Is numbers an array?", Array.isArray(numbers)); // Output: Is numbers an array? true

// Object.entries() - Convert an object to an array of key-value pairs
const person = { name: "John", age: 30, city: "New York" };
const entries = Object.entries(person);
console.log("Object entries:", entries); // Output: Object entries: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

// Object.keys() - Get an array of object keys
const keys = Object.keys(person);
console.log("Object keys:", keys); // Output: Object keys: [ 'name', 'age', 'city' ]

// Object.values() - Get an array of object values
const values = Object.values(person);
console.log("Object values:", values); // Output: Object values: [ 'John', 30, 'New York' ]
 

// *************** Practical Examples ***************

//! -------- Example 1: Filtering and Transforming Data --------
const students = [
    { id: 1, name: "Alice", grades: [85, 92, 78, 90] },
    { id: 2, name: "Bob", grades: [75, 68, 82, 79] },
    { id: 3, name: "Charlie", grades: [95, 88, 91, 93] },
    { id: 4, name: "Diana", grades: [70, 65, 72, 69] },
];

// Get students with average grade above 80
const highPerformers = students
    .map((student) => {
        const sum = student.grades.reduce((total, grade) => total + grade, 0);
        const average = sum / student.grades.length;
        return { ...student, average };
    })
    .filter((student) => student.average >= 80)
    .sort((a, b) => b.average - a.average);

console.log("\nHigh performing students:");
console.log(highPerformers);
// Output: High performing students: [
//   { id: 3, name: 'Charlie', grades: [95, 88, 91, 93], average: 91.75 },
//   { id: 1, name: 'Alice', grades: [85, 92, 78, 90], average: 86.25 }
// ]

//! -------- Example 2: Flattening Nested Arrays --------
const nestedArray = [[1, 2], [3, [4, 5]], 6, [[7]], [8, 9]];

// Using flat() - flattens nested array structure
const flattened = nestedArray.flat(2); // depth of 2
console.log("\nFlattened array:", flattened);                   // Output: Flattened array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const completeFlattened = nestedArray.flat(Infinity); // flattens all levels
console.log("Completely flattened array:", completeFlattened); // Output: Completely flattened array: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Manual implementation of flattening
function flattenArray(arr, depth = 1) {
    let result = [];
    arr.forEach((item) => {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flattenArray(item, depth - 1));
        } else {
            result.push(item);
        }
    });
    return result;
}

console.log("Manual flattening:", flattenArray(nestedArray, 2)); // Output: Manual flattening: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//! -------- Example 3: Grouping Array Items --------
const transactions = [
    { id: 1, type: "debit", amount: 100, category: "food" },
    { id: 2, type: "credit", amount: 1000, category: "salary" },
    { id: 3, type: "debit", amount: 50, category: "transport" },
    { id: 4, type: "debit", amount: 200, category: "food" },
    { id: 5, type: "credit", amount: 250, category: "bonus" },
];

// Group transactions by type
function groupBy(array, key) {
    return array.reduce((result, item) => {
        (result[item[key]] = result[item[key]] || []).push(item);
        return result;
    }, {});
}

const groupedByType = groupBy(transactions, "type");
console.log("\nTransactions grouped by type:", groupedByType);
// Output: Transactions grouped by type: {
//   debit: [
//     { id: 1, type: 'debit', amount: 100, category: 'food' },
//     { id: 3, type: 'debit', amount: 50, category: 'transport' },
//     { id: 4, type: 'debit', amount: 200, category: 'food' }
//   ],
//   credit: [
//     { id: 2, type: 'credit', amount: 1000, category: 'salary' },
//     { id: 5, type: 'credit', amount: 250, category: 'bonus' }
//   ]
// }

// Calculate total by category
function sumByCategory(transactions) {
    return transactions.reduce((result, transaction) => {
        const category = transaction.category;
        result[category] = (result[category] || 0) + transaction.amount;
        return result;
    }, {});
}

const totalByCategory = sumByCategory(transactions);
console.log("Total amount by category:", totalByCategory);              // Output: Total amount by category: { food: 300, salary: 1000, transport: 50, bonus: 250 }

//! -------- Example 4: Array Intersection and Union --------
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

// Find intersection (elements present in both arrays)
const intersection = array1.filter((item) => array2.includes(item));
console.log("\nIntersection:", intersection);                           // Output: Intersection: [ 3, 4, 5 ]

// Find union (all unique elements from both arrays)
const union = [...new Set([...array1, ...array2])];
console.log("Union:", union);                                           // Output: Union: [ 1, 2, 3, 4, 5, 6, 7 ]

// Find difference (elements in array1 that are not in array2)
const difference = array1.filter((item) => !array2.includes(item));
console.log("Difference (array1 - array2):", difference);               // Output: Difference (array1 - array2): [ 1, 2 ]

//! -------- Example 5: Remove Duplicates from Array --------
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// Method 1: Using Set
const uniqueWithSet = [...new Set(duplicatesArray)];
console.log("\nUnique items (Set method):", uniqueWithSet);             // Output: Unique items (Set method): [ 1, 2, 3, 4, 5 ]

// Method 2: Using filter
const uniqueWithFilter = duplicatesArray.filter(
    (value, index, self) => self.indexOf(value) === index
);
console.log("Unique items (filter method):", uniqueWithFilter);         // Output: Unique items (filter method): [ 1, 2, 3, 4, 5 ]

//! -------- Example 6: Chunk Array into Groups --------
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\nChunked array (size 2):", chunkArray(numbers2, 2));      // Output: Chunked array (size 2): [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log("Chunked array (size 3):", chunkArray(numbers2, 3));        // Output: Chunked array (size 3): [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]

// *************** Array Like Iteralble Objects ***************

// Array.from() - Creates a new array from an array-like or iterable object
const str = "Hello";
const charArray = Array.from(str); // Converts string to array of characters
console.log("Array.from():", charArray); // Output: Array.from(): [ 'H', 'e', 'l', 'l', 'o' ]

// Array.from() can also take a mapping function as a second argument
const doubled = Array.from([1, 2, 3], (num) => num * 2); // Doubles each element
console.log("Array.from with mapping:", doubled); // Output: Array.from with mapping: [ 2, 4, 6 ]

// Array.of() - Creates a new array with a variable number of arguments
// (similar to Array constructor but without the "length" behavior)
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5); // Creates an array with the given numbers
console.log("Array.of():", arrayOfNumbers); // Output: Array.of(): [ 1, 2, 3, 4, 5 ]
// Array.of() can also be used with other types
const arrayOfStrings = Array.of("Hello", "World"); // Creates an array with the given strings
console.log("Array.of (strings):", arrayOfStrings); // Output: Array.of (strings): [ 'Hello', 'World' ]
// Array.of() is useful when you want to create an array with a specific set of values, regardless of their type
// (unlike Array constructor which behaves differently for single numeric argument)

/* 


1. Basics of Arrays  
- Declaring an array (`let arr = [];` or `let arr = new Array();`)  
- Initializing an array (`let arr = [1, 2, 3];`)  
- Accessing elements (`arr[index]`)  
- Modifying elements (`arr[index] = value;`)  
- Array length (`arr.length`)  
- Looping through an array (`for`, `forEach`, `map`, etc.)  

2. Array Methods  
~A. Mutating (Modify Original Array)  
- `push()` – Add elements to the end  
- `pop()` – Remove the last element  
- `shift()` – Remove the first element  
- `unshift()` – Add elements to the beginning  
- `splice()` – Add/Remove elements at a specific index  
- `sort()` – Sort elements  
- `reverse()` – Reverse elements  
- `fill()` – Fill with a static value  
- `copyWithin()` – Copy part of an array  

~B. Non-Mutating (Returns a New Array)  
- `concat()` – Merge arrays  
- `slice()` – Extract part of an array  
- `map()` – Transform each element  
- `filter()` – Get elements that match a condition  
- `reduce()` – Accumulate values  
- `reduceRight()` – Accumulate from the right  
- `flat()` – Flatten nested arrays  
- `flatMap()` – Map and flatten in one step  

3. Searching & Finding Elements  
- `indexOf()` – Get index of an element  
- `lastIndexOf()` – Get last occurrence index  
- `includes()` – Check if an element exists  
- `find()` – Find the first matching element  
- `findIndex()` – Get index of first matching element  
- `some()` – Check if at least one element passes a test  
- `every()` – Check if all elements pass a test  

4. Iteration Methods  
- `forEach()` – Execute a function on each element  
- `map()` – Transform array elements  
- `filter()` – Return elements that match a condition  
- `reduce()` – Reduce array to a single value  

5. Array-Like Objects & Conversions  
- `Array.from()` – Convert array-like object to an array  
- `Array.isArray()` – Check if a variable is an array  
- `Object.entries()`, `Object.keys()`, `Object.values()` – Work with arrays from objects  

6. Multi-Dimensional Arrays (Nested Arrays)  
- Creating and accessing nested arrays  
- Flattening arrays with `flat()`  
- Deep flattening using recursion  

7. Working with Typed Arrays  
- `Int8Array`, `Uint8Array`, `Float32Array`, etc.  

8. Performance Considerations  
- When to use `map()` vs `forEach()`  
- Performance of `push()` vs `unshift()`  
- Avoiding unnecessary array mutations  

9. Destructuring & Spread Operator  
- Array destructuring (`const [a, b] = arr;`)  
- Using the spread operator (`const newArr = [...arr1, ...arr2];`)  

10. Sorting & Comparing  
- Default `sort()` (Lexicographic sorting)  
- Custom sorting (`arr.sort((a, b) => a - b)`)  
- `localeCompare()` for sorting strings  

11. Advanced Techniques  
- Chunking an array  
- Removing duplicates (`new Set(arr)`)  
- Shuffling an array (`Fisher-Yates Algorithm`)  
- Rotating an array  
- Intersection, union, and difference of arrays  

*/