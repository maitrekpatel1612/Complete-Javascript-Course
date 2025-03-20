/**
 *@ OBJECTS IN JAVASCRIPT:
 * - Objects are collections of key-value pairs (properties)
 * - Keys are strings or symbols, values can be any data type
 * - They are fundamental data structures used for storing and organizing data
 * - Objects are reference types (copied by reference, not by value)
 */

//=>-------------------------------------------------------------------------------
//=> 1. OBJECT CREATION - Object Literal Syntax
//=>-------------------------------------------------------------------------------
/**
 * Object literals are the most common way to create objects
 * Properties are defined as key-value pairs separated by commas
 * Values can be primitives, arrays, other objects, or functions (methods)
 */
const person = {
    firstName: "John",      // String property
    lastName: "Doe",
    age: 30,                // Number property
    email: "john.doe@example.com",
    isEmployed: true,       // Boolean property
    hobbies: ["reading", "coding", "hiking"],  // Array property
    address: {              // Nested object property
        street: "123 Main St",
        city: "Boston",
        state: "MA",
        zipCode: "02108"
    },
    // Method: function as a property
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`; // 'this' refers to the current object
    }
};

//=>-------------------------------------------------------------------------------
//=> 2. ACCESSING OBJECT PROPERTIES
//=>-------------------------------------------------------------------------------
/**
 * Two ways to access object properties:
 * 1. Dot notation: object.property (more common)
 * 2. Bracket notation: object['property'] (useful for dynamic properties)
 */
console.log("Object Properties:");
console.log(`Name: ${person.firstName} ${person.lastName}`);  // Dot notation
console.log(`Age: ${person.age}`);
console.log(`Email: ${person.email}`);
console.log(`City: ${person.address.city}`);  // Accessing nested properties
console.log(`First Hobby: ${person.hobbies[0]}`);  // Accessing array elements in objects
console.log(`Full Name Method: ${person.getFullName()}`);  // Calling an object method

console.log(`Hobbies: ${person.hobbies.join(", ")}`);  // Joining array elements into a string
console.log(`Hobbies (Bracket Notation): ${person["hobbies"].join(", ")}`);  // Bracket notation


//=>-------------------------------------------------------------------------------
//=> 3. MODIFYING OBJECTS
//=>-------------------------------------------------------------------------------
/**
 * Objects are mutable - properties can be:
 * - Modified (changing existing values)
 * - Added (creating new properties)
 * - Deleted (using delete operator)
 */
person.age = 31;  // Modifying a property
person.address.city = "Cambridge";  // Modifying nested properties
person.hobbies.push("swimming");  // Modifying array within object

console.log("\nAfter Modification:");
console.log(`Age: ${person.age}`);
console.log(`City: ${person.address.city}`);
console.log(`Hobbies: ${person.hobbies.join(", ")}`);

//=>-------------------------------------------------------------------------------
//=> 4. OBJECT CREATION - Alternative Methods
//=>-------------------------------------------------------------------------------
/**
 * Method 1: Object constructor
 * Uses the built-in Object() constructor function
 * Properties are added one by one after creation 
 */
const emptyObject = new Object();  // Creating an empty object
console.log("\nEmpty Object:", emptyObject);  // Empty object will log as {}

const car = new Object();
car.make = "Toyota";  // Adding properties after creation
car.model = "Camry";
car.year = 2020;
car.isElectric = false;
car.displayInfo = function () {  // Adding method
    return `${this.year} ${this.make} ${this.model}`;
};

console.log("\nCar Object:");
console.log(car.displayInfo());

/**
 * Method 2: Constructor functions
 * Used to create multiple objects with the same structure
 * Convention: capitalize first letter of constructor function names
 * Uses 'this' keyword to refer to the instance being created
 * 'new' keyword creates a new instance
 */
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
console.log("\nBook Object:");
console.log(book1.getSummary());

/**
 * Method 3: ES6 Classes
 * Modern syntax introduced in ES6
 * Syntactic sugar over prototype-based inheritance
 * Makes JavaScript more familiar for developers used to class-based languages
 * Constructor method initializes instance properties
 * Other methods automatically added to prototype
 */
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percentage) {
        return this.price - (this.price * percentage / 100);
    }
}

const laptop = new Product("MacBook Pro", 1299, "Electronics");
console.log("\nProduct Object:");
console.log(`${laptop.name} costs $${laptop.price}`);
console.log(`With 10% discount: $${laptop.applyDiscount(10)}`);

//=>-------------------------------------------------------------------------------
//=> 5. OBJECT METHODS - Built-in Object methods
//=>-------------------------------------------------------------------------------
console.log("\nObject Methods:");

/**
 * Object.keys() - Returns array of property names (keys)
 * Useful for iterating over object properties
 */
console.log("Keys of person object:", Object.keys(person));

/**
 * Object.values() - Returns array of property values
 * Introduced in ES2017 (ES8)
 */
console.log("Values of car object:", Object.values(car));

/**
 * Object.entries() - Returns array of [key, value] pairs
 * Useful for destructuring and iteration
 * Introduced in ES2017 (ES8)
 */
console.log("Entries of book1 object:", Object.entries(book1));

//=>-------------------------------------------------------------------------------
//=> 6. MODERN OBJECT TECHNIQUES (ES6+)
//=>-------------------------------------------------------------------------------
/**
 *! Spread operator (...) with objects
 * Used to copy properties from one object to another
 * Similar to Object.assign() but with cleaner syntax
 * Creates a shallow copy (nested objects are still referenced)
 */
const personContactInfo = {
    phone: "555-123-4567",
    twitter: "@johndoe"
};

//! Merging objects
const personComplete = {
    ...person,              // Copies all properties from person
    ...personContactInfo    // Adds all properties from personContactInfo
};

console.log("\nMerged Object:");
console.log(`Phone: ${personComplete.phone}`);
console.log(`Twitter: ${personComplete.twitter}`);
console.log(`Name: ${personComplete.firstName}`);


//! Merging multiple objects into one object 
const objectsArray = [
    { a: 1, b: 2 },
    { b: 3, c: 4 },
    { d: 5 }
];

const mergedObject = objectsArray.reduce((acc, obj) => ({ ...acc, ...obj }), {});
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4, d: 5 }

/**
 * !Object destructuring
 * Extracts properties from objects into separate variables
 * Can rename variables and provide default values
 * Can destructure nested properties
 */
const { firstName, lastName, address: { city } } = person;
console.log("\nDestructured Properties:");
console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
console.log(`City: ${city}`);  // Nested destructuring

/**
 * !Computed property names
 * Use expressions as property names in object literals
 * Allows dynamic property names inside object creation
 */
const propertyName = "color";
const car2 = {
    make: "Honda",
    model: "Civic",
    [propertyName]: "blue"  // Property name is the value of the variable
};

console.log("\nComputed property:");
console.log(`Car color: ${car2.color}`);

/**
 * !Object property shorthand
 * When variable name and property name are the same
 * Shorter syntax for creating objects from variables
 */
const brand = "Samsung";
const type = "smartphone";
const price = 899;

const product = { brand, type, price };  // Equivalent to { brand: brand, type: type, price: price }
console.log("\nProperty shorthand:");
console.log(product);

/**
 * !Optional chaining (?.)
 * Safely accesses nested properties without checking each level
 * Returns undefined if any part of chain is nullish (null or undefined)
 * Prevents "Cannot read property of undefined" errors
 * Introduced in ES2020
 */
const user = {
    profile: {
        // settings: {
        //     theme: "dark"
        // }
    }
};

// Prevents error if property path doesn't exist
console.log("\nOptional chaining:");
console.log(`Theme setting: ${user.profile?.settings?.theme || "not set"}`);
