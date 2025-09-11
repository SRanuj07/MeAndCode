console.log(20 == '20'); // true
console.log(20 === '20'); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log('' == false); // true
console.log('' === false); // false

console.log([] == false); // true
console.log([] === false); // false

console.log([] == ''); // true
console.log([] === ''); // false

console.log([1, 2] == '1,2'); // true
console.log([1, 2] === '1,2'); // false

console.log({} == {}); // false
console.log({} === {}); // false

let obj = {};
console.log(obj == obj); // true
console.log(obj === obj); // true

console.log(new String('hello') == 'hello'); // true
console.log(new String('hello') === 'hello'); // false

console.log(new Number(20) == 20); // true
console.log(new Number(20) === 20); // false    
console.log(new Boolean(true) == true); // true
// greater than and less than comparisons
console.log(10 > '5'); // true
console.log(10 < '5'); // false
console.log(10 >= '10'); // true
console.log(10 <= '10'); // true

console.log('2' > '12'); // true (lexicographical comparison)
console.log('2' < '12'); // false (lexicographical comparison)

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

console.log('apple' > 'banana'); // false (lexicographical comparison)
console.log('apple' < 'banana'); // true (lexicographical comparison)
console.log('apple' >= 'apple'); // true
console.log('apple' <= 'apple'); // true

console.log('2' > 1); // true (2 > 1)
console.log('2' < 1); // false (2 < 1)
console.log('2' >= 2); // true (2 >= 2)
console.log('2' <= 2); // true (2 <= 2)

console.log(true > 0); // true (1 > 0)
console.log(false < 1); // true (0 < 1)
console.log(true >= 1); // true (1 >= 1)
console.log(false <= 0); // true (0 <= 0)

console.log(null > -1); // true (0 > -1)
console.log(null < 1); // true (0 < 1)
console.log(null >= 0); // true (0 >= 0)
console.log(null <= 0); // true (0 <= 0)

console.log(undefined > NaN); // false
console.log(undefined < NaN); // false
console.log(undefined >= NaN); // false
console.log(undefined <= NaN); // false

console.log([10] > 5); // true (10 > 5)
console.log([10] < 5); // false (10 < 5)
console.log([10] >= 10); // true (10 >= 10)
console.log([10] <= 10); // true (10 <= 10) 

console.log('2' === 2)  // false
console.log('2'==='2') // true
console.log('2' == 2)   // true

 