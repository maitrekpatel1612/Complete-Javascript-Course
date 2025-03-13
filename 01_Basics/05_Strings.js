//! JavaScript Strings - Creation, Properties, Methods and Operations

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Creation
//=> ==========================================
console.log("========== String Creation ==========");

// Different ways to create strings
const singleQuotes = 'Hello World';   // Using single quotes to create a string
const doubleQuotes = "Hello World";   // Using double quotes to create a string
const backticks = `Hello World`;      // Using backticks (template literals) to create a string

console.log(doubleQuotes, typeof doubleQuotes);
console.log(backticks, typeof backticks);

// String with escape characters
const withEscapeChars = 'I\'m learning JavaScript.\nIt\'s fun!';  // Using \' to escape single quotes and \n for new line
console.log(withEscapeChars);

// Common escape sequences
console.log('Backslash: \\');         // \\ produces a literal backslash
console.log('Tab: before\tafter');    // \t produces a tab space
console.log('Unicode: \u2764');       // \u followed by hex code displays Unicode characters

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
const oldWay = 'The ' + name + ' language was created in ' + year + '.';  // Using + operator to join strings
console.log(oldWay);

// Template literals (ES6 way)
const newWay = `The ${name} language was created in ${year}.`;  // ${} allows embedding expressions in strings
console.log(newWay);

// Multi-line strings
const multiLine = `This is a
multi-line
string using backticks.`;  // Template literals preserve line breaks
console.log(multiLine);

// Expression in template literals
const price = 19.99;
const tax = 0.07;
const total = `Total price: $${(price * (1 + tax)).toFixed(2)}`;  // Can include expressions and method calls
console.log(total);

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Properties and Methods
//=> ==========================================
console.log("\n========== String Properties and Methods ==========");

const text = "JavaScript is amazing";

// String length property
console.log(`Length of "${text}": ${text.length} characters`);  // .length returns number of characters

// Accessing characters
console.log(`First character: ${text[0]}`);                     // Bracket notation for character access
console.log(`Third character: ${text.charAt(2)}`);              // .charAt() returns the character at a position
console.log(`Last character: ${text[text.length - 1]}`);        // Accessing last character using length-1

// Note: Strings are immutable
let greeting = "Hello";
greeting[0] = "J"; // This doesn't work - strings are immutable (can't change individual characters)
console.log(greeting); // Still "Hello"
greeting = "Jello"; // This works - reassigning the entire string
console.log(greeting);

// Case methods
console.log(`Uppercase: ${text.toUpperCase()}`);  // .toUpperCase() converts string to all capitals
console.log(`Lowercase: ${text.toLowerCase()}`);  // .toLowerCase() converts string to all lowercase

// Finding strings
console.log(`Index of "Script": ${text.indexOf("Script")}`);       // .indexOf() returns first position of substring or -1
console.log(`Last index of "a": ${text.lastIndexOf("a")}`);        // .lastIndexOf() returns last position of substring
console.log(`Includes "amazing"? ${text.includes("amazing")}`);    // .includes() returns boolean if substring exists
console.log(`Starts with "Java"? ${text.startsWith("Java")}`);     // .startsWith() checks if string begins with value
console.log(`Ends with "ing"? ${text.endsWith("ing")}`);           // .endsWith() checks if string ends with value

// Extracting parts of strings
console.log(`Substring (from index 0, 4 chars): ${text.substring(0, 4)}`);  // .substring() extracts between two indices
console.log(`Slice (from index 11 to end): ${text.slice(11)}`);             // .slice() works like substring but allows negative indices
console.log(`Slice (negative indexing, last 7 chars): ${text.slice(-7)}`);  // Negative index counts from end of string

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Manipulation
//=> ==========================================
console.log("\n========== String Manipulation ==========");

// Trim whitespace
const untrimmed = "   Lots of whitespace   ";
console.log(`Before trim: "${untrimmed}"`);
console.log(`After trim: "${untrimmed.trim()}"`);           // .trim() removes whitespace from both ends
console.log(`After trimStart: "${untrimmed.trimStart()}"`); // .trimStart() removes whitespace from start only
console.log(`After trimEnd: "${untrimmed.trimEnd()}"`);     // .trimEnd() removes whitespace from end only

// Replace
const buggy = "The catt jumpps over the fence";
console.log(`Original: ${buggy}`);
console.log(`Replace first occurrence: ${buggy.replace("pp", "p")}`);       // .replace() replaces first match only
console.log(`Replace all occurrences: ${buggy.replace(/t/g, "t")}`);        // Using regex with g flag to replace all
console.log(`Replace all with replaceAll(): ${buggy.replaceAll("t", "t")}`); // .replaceAll() replaces all instances (ES2021)

// Concatenation
const str1 = "Hello";
const str2 = "World";
console.log(`Using + operator: ${str1 + " " + str2}`);       // + operator joins strings
console.log(`Using concat(): ${str1.concat(" ", str2)}`);    // .concat() merges two or more strings

// Repeat
console.log(`Repeat "Ha" 3 times: ${"Ha".repeat(3)}`);      // .repeat() duplicates string specified times

// Padding (ES2017)
const number = "42";
console.log(`PadStart: ${number.padStart(5, '0')}`);        // .padStart() adds padding at beginning to reach length
console.log(`PadEnd: ${number.padEnd(5, '0')}`);            // .padEnd() adds padding at end to reach length

// Split string into array
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");                          // .split() divides string into array by delimiter
console.log(`Split into words:`, words);
console.log(`Third word: ${words[2]}`);

const chars = sentence.split("");                           // Empty string splits into individual characters
console.log(`Number of characters: ${chars.length}`);

// Join array into string
console.log(`Join back with spaces: ${words.join(" ")}`);   // .join() combines array elements with specified delimiter
console.log(`Join with dashes: ${words.join("-")}`);

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> String Comparison
//=> ==========================================
console.log("\n========== String Comparison ==========");

console.log(`"apple" === "apple": ${"apple" === "apple"}`);  // Strict equality compares exact string content
console.log(`"apple" === "Apple": ${"apple" === "Apple"}`);  // Case-sensitive comparison
console.log(`"apple" < "banana": ${"apple" < "banana"}`);    // Lexicographical (dictionary) comparison
console.log(`"a" < "A": ${"a" < "A"}`);                      // false - lowercase has higher Unicode values
console.log(`"2" > "10": ${"2" > "10"}`);                    // true - string comparison is character by character

// Locale comparison (for proper alphabetical sorting)
console.log(`"a".localeCompare("b"): ${"a".localeCompare("b")}`); // -1: first comes before second
console.log(`"b".localeCompare("a"): ${"b".localeCompare("a")}`); // 1: first comes after second
console.log(`"a".localeCompare("a"): ${"a".localeCompare("a")}`); // 0: strings are equivalent

//!--------------------------------------------------------------------------------------------------------------
//=> ==========================================
//=> Practical Examples
//=> ==========================================
console.log("\n========== Practical Examples ==========");

// Email validation (very basic)
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');  // Basic check for @ and . characters
}
console.log(`Is "user@example.com" valid? ${isValidEmail("user@example.com")}`);
console.log(`Is "invalid-email" valid? ${isValidEmail("invalid-email")}`);

// Password strength (very basic)
function isStrongPassword(password) {
    return password.length >= 8 &&          // Check length
        /[A-Z]/.test(password) &&           // .test() checks if regex pattern matches
        /[a-z]/.test(password) &&           // Check for lowercase letter
        /[0-9]/.test(password);             // Check for number
}
console.log(`Is "Passw0rd" strong? ${isStrongPassword("Passw0rd")}`);
console.log(`Is "weak" strong? ${isStrongPassword("weak")}`);

// Format name (first letter uppercase, rest lowercase)
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Capitalize first letter, lowercase rest
}
console.log(`Formatted name: ${formatName("jOHN")}`);

// Truncate text with ellipsis
function truncateText(text, maxLength) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text; // Truncate with ellipsis if too long
}
console.log(`Truncated: ${truncateText("This is a very long sentence that should be truncated", 20)}`);

// Slug generation (for URLs)
function generateSlug(title) {
    return title.toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special chars using regex negative character class
        .replace(/\s+/g, '-')     // Replace spaces with hyphens
        .replace(/-+/g, '-')      // Replace multiple hyphens with single
        .trim();                   // Remove any leading/trailing spaces
}
console.log(`Slug: ${generateSlug("10 Ways to Master JavaScript!")}`)

/**
 * => Best Practices and Tips of String Manipulation:
 * - Strings are immutable sequences of characters.
 * - Created using single/double quotes or backticks (template literals).
 * - Template literals allow multi-line strings and string interpolation.
 * - String methods include length, case conversion, searching, slicing, trimming, replacing, and concatenating.
 * - String comparison is lexicographical and case-sensitive.
 * - Practical examples include email validation, password strength checking, name formatting, text truncation, and slug generation.
 * - Regular expressions can be used for advanced string manipulation and validation.
 * - String methods can be chained for complex operations.
 * - String methods return new strings; original strings remain unchanged.
 */