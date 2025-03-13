//! JavaScript Strings - Creation, Properties, Methods and Operations

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Creation
//=> ==========================================
console.log("========== String Creation ==========");

// Different ways to create strings
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`;

console.log(singleQuotes, typeof singleQuotes);
console.log(doubleQuotes, typeof doubleQuotes);
console.log(backticks, typeof backticks);

// String with escape characters
const withEscapeChars = 'I\'m learning JavaScript.\nIt\'s fun!';
console.log(withEscapeChars);

// Common escape sequences
console.log('Backslash: \\');
console.log('Tab: before\tafter');
console.log('Unicode: \u2764'); // Heart symbol

//!--------------------------------------------------------------------------------------------------------------
/*
=> ==========================================
=> Template Literals (ES6)
=> ========================================== 
*/
console.log("\n========== Template Literals ==========");

const name = "JavaScript";
const year = 1995;

// String concatenation (old way)
const oldWay = 'The ' + name + ' language was created in ' + year + '.';
console.log(oldWay);

// Template literals (ES6 way)
const newWay = `The ${name} language was created in ${year}.`;
console.log(newWay);

// Multi-line strings
const multiLine = `This is a
multi-line
string using backticks.`;
console.log(multiLine);

// Expression in template literals
const price = 19.99;
const tax = 0.07;
const total = `Total price: $${(price * (1 + tax)).toFixed(2)}`;
console.log(total);

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Properties and Methods
//=> ==========================================
console.log("\n========== String Properties and Methods ==========");

const text = "JavaScript is amazing";

// String length property
console.log(`Length of "${text}": ${text.length} characters`);

// Accessing characters
console.log(`First character: ${text[0]}`);
console.log(`Third character: ${text.charAt(2)}`);
console.log(`Last character: ${text[text.length - 1]}`);

// Note: Strings are immutable
let greeting = "Hello";
greeting[0] = "J"; // This doesn't work
console.log(greeting); // Still "Hello"
greeting = "Jello"; // This works - reassigning the entire string
console.log(greeting);

// Case methods
console.log(`Uppercase: ${text.toUpperCase()}`);
console.log(`Lowercase: ${text.toLowerCase()}`);

// Finding strings
console.log(`Index of "Script": ${text.indexOf("Script")}`);
console.log(`Last index of "a": ${text.lastIndexOf("a")}`);
console.log(`Includes "amazing"? ${text.includes("amazing")}`);
console.log(`Starts with "Java"? ${text.startsWith("Java")}`);
console.log(`Ends with "ing"? ${text.endsWith("ing")}`);

// Extracting parts of strings
console.log(`Substring (from index 0, 4 chars): ${text.substring(0, 4)}`);
console.log(`Slice (from index 11 to end): ${text.slice(11)}`);
console.log(`Slice (negative indexing, last 7 chars): ${text.slice(-7)}`);

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Manipulation
//=> ==========================================
console.log("\n========== String Manipulation ==========");

// Trim whitespace
const untrimmed = "   Lots of whitespace   ";
console.log(`Before trim: "${untrimmed}"`);
console.log(`After trim: "${untrimmed.trim()}"`);
console.log(`After trimStart: "${untrimmed.trimStart()}"`);
console.log(`After trimEnd: "${untrimmed.trimEnd()}"`);

// Replace
const buggy = "The catt jumpps over the fence";
console.log(`Original: ${buggy}`);
console.log(`Replace first occurrence: ${buggy.replace("pp", "p")}`);
console.log(`Replace all occurrences: ${buggy.replace(/t/g, "t")}`); // Using regex
console.log(`Replace all with replaceAll(): ${buggy.replaceAll("t", "t")}`); // ES2021

// Concatenation
const str1 = "Hello";
const str2 = "World";
console.log(`Using + operator: ${str1 + " " + str2}`);
console.log(`Using concat(): ${str1.concat(" ", str2)}`);

// Repeat
console.log(`Repeat "Ha" 3 times: ${"Ha".repeat(3)}`);

// Padding (ES2017)
const number = "42";
console.log(`PadStart: ${number.padStart(5, '0')}`);
console.log(`PadEnd: ${number.padEnd(5, '0')}`);

// Split string into array
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
console.log(`Split into words:`, words);
console.log(`Third word: ${words[2]}`);

const chars = sentence.split("");
console.log(`Number of characters: ${chars.length}`);

// Join array into string
console.log(`Join back with spaces: ${words.join(" ")}`);
console.log(`Join with dashes: ${words.join("-")}`);

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Comparison
//=> ==========================================
console.log("\n========== String Comparison ==========");

console.log(`"apple" === "apple": ${"apple" === "apple"}`);
console.log(`"apple" === "Apple": ${"apple" === "Apple"}`);
console.log(`"apple" < "banana": ${"apple" < "banana"}`);
console.log(`"a" < "A": ${"a" < "A"}`); // false - lowercase has higher Unicode values
console.log(`"2" > "10": ${"2" > "10"}`); // true - string comparison is character by character

// Locale comparison (for proper alphabetical sorting)
console.log(`"a".localeCompare("b"): ${"a".localeCompare("b")}`); // -1 (a comes before b)
console.log(`"b".localeCompare("a"): ${"b".localeCompare("a")}`); // 1 (b comes after a)
console.log(`"a".localeCompare("a"): ${"a".localeCompare("a")}`); // 0 (equal)

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> Practical Examples
//=> ==========================================
console.log("\n========== Practical Examples ==========");

// Email validation (very basic)
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}
console.log(`Is "user@example.com" valid? ${isValidEmail("user@example.com")}`);
console.log(`Is "invalid-email" valid? ${isValidEmail("invalid-email")}`);

// Password strength (very basic)
function isStrongPassword(password) {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password);
}
console.log(`Is "Passw0rd" strong? ${isStrongPassword("Passw0rd")}`);
console.log(`Is "weak" strong? ${isStrongPassword("weak")}`);

// Format name (first letter uppercase, rest lowercase)
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(`Formatted name: ${formatName("jOHN")}`);

// Truncate text with ellipsis
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
console.log(`Truncated: ${truncateText("This is a very long sentence that should be truncated", 20)}`);

// Slug generation (for URLs)
function generateSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-')      // Replace multiple hyphens with single
        .trim();
}
console.log(`Slug: ${generateSlug("10 Ways to Master JavaScript!")}`)
