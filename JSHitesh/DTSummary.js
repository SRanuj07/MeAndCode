// Data types and summary of comparison operators in JavaScript

// Comparing numbers and strings
console.log(10 > '5');
console.log(10 < '5');
console.log(10 >= '10');
console.log(10 <= '10');

console.log('2' > '12'); // Lexicographical comparison
console.log('2' < '12'); // Lexicographical comparison

// Comparing different types
console.log(true > false); // true (1 > 0)
console.log(true < false); // false (1 < 0)

console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false

// Comparing objects
console.log([1, 2] > [1, 1]); // true (lexicographical comparison of string representations)
console.log([1, 2] < [1, 3]); // true (lexicographical comparison of string representations)

console.log({} > {}); // false (both convert to NaN)
console.log({} < {}); // false (both convert to NaN)

// Edge cases
console.log('' > 0); // false
console.log('' < 0); // false
console.log('' >= 0); // true
console.log('' <= 0); // true

console.log(' ' > 0); // true (space converts to 0)
console.log(' ' < 0); // false
console.log(' ' >= 0); // true
console.log(' ' <= 0); // true

console.log('abc' > 0); // false (NaN comparison)
console.log('abc' < 0); // false (NaN comparison)
console.log('abc' >= 0); // false (NaN comparison)
console.log('abc' <= 0); // false (NaN comparison)

console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN >= 0); // false
console.log(NaN <= 0); // false

console.log(Infinity > 1000); // true
console.log(-Infinity < -1000); // true
console.log(Infinity > -Infinity); // true
console.log(Infinity < -Infinity); // false

console.log(0 > -0); // false
console.log(0 < -0); // false
console.log(0 >= -0); // true
console.log(0 <= -0); // true

console.log(5 > 2); // true
console.log(5 < 2); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

console.log(5 == '5'); // true (loose equality, type coercion)
console.log(5 === '5'); // false (strict equality, no type coercion)
console.log(5 != '5'); // false (loose inequality, type coercion)
console.log(5 !== '5'); // true (strict inequality, no type coercion)

// Summary of comparison operators:
// >  : Greater than
// <  : Less than
// >= : Greater than or equal to
// <= : Less than or equal to
// == : Equal to (loose equality, with type coercion)
// ===: Equal to (strict equality, without type coercion)
// != : Not equal to (loose inequality, with type coercion)
// !==: Not equal to (strict inequality, without type coercion)

// Additional examples
console.log('apple' > 'banana'); // false (lexicographical comparison)
console.log('apple' < 'banana'); // true (lexicographical comparison)
console.log('apple' >= 'apple'); // true
console.log('apple' <= 'apple'); // true

console.log('2' > 1); // true (2 > 1)
console.log('2' < 1); // false (2 < 1)
console.log('2' >= 2); // true (2 >= 2)
console.log('2' <= 2); // true (2 <= 2)

console.log(true > 0);          // true (1 > 0)
console.log(false < 1);         // true (0 < 1)
console.log(true >= 1);         // true (1 >= 1)
console.log(false <= 0);        // true (0 <= 0)

console.log(null > -1);         // true (0 > -1)
console.log(null < 1);          // true (0 < 1)
console.log(null >= 0);         // true (0 >= 0)
console.log(null <= 0);         // true (0 <= 0)

console.log(undefined > NaN);   // false
console.log(undefined < NaN);   // false
console.log(undefined >= NaN);  // false
console.log(undefined <= NaN);  // false

console.log([10] > 5);          // true (10 > 5)
console.log([10] < 5);          // false (10 < 5)
console.log([10] >= 10);        // true (10 >= 10)
console.log([10] <= 10);        // true (10 <= 10) 

console.log('2' === 2)  // false



//Memory Optimization
let a = 100;
let b = a;
console.log(a, b); // 100 100
a++;
console.log(a, b); // 101 100

let obj1 = { value: 100 };
let obj2 = obj1;
console.log(obj1.value, obj2.value); // 100 100
obj1.value++;
console.log(obj1.value, obj2.value); // 101 101

// Primitive types are copied by value
// Objects are copied by reference  
//memory heap and stack
// Stack memory: Primitive types (number, string, boolean, null, undefined, symbol)
// Heap memory: Objects, arrays, functions
// Call by value vs Call by reference
// Primitive types are immutable
// Objects are mutable
// Immutability vs Mutability
// Pass by value vs Pass by reference
// Shallow copy vs Deep copy
// Spread operator vs Object.assign() vs JSON.parse(JSON.stringify())
// Performance implications of deep copying large objects
// Use cases for immutability (e.g., Redux state management)    

