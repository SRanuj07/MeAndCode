let arr = [1, 2, 3, 4, 5];

// Accessing elements
console.log(arr[0]); // Output: 1
console.log(arr[2]); // Output: 3

// Modifying elements
arr[1] = 20;
console.log(arr); // Output: [1, 20, 3, 4, 5]

// Adding elements
arr.push(6);
console.log(arr); // Output: [1, 20, 3, 4, 5, 6]

// Removing elements
arr.pop();
console.log(arr); // Output: [1, 20, 3, 4, 5]

// Iterating over an array
arr.forEach((element) => {
    console.log(element);
});

// Finding the length of an array
console.log(arr.length); // Output: 5

// Using map to create a new array
let newArr = arr.map((element) => element * 2);
console.log(newArr); // Output: [2, 40, 6, 8, 10]

// Using filter to create a new array with elements that meet a condition
let filteredArr = arr.filter((element) => element > 2);
console.log(filteredArr); // Output: [20, 3, 4, 5]

// Using reduce to accumulate values
let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 33

// Finding the index of an element
let index = arr.indexOf(3);
console.log(index); // Output: 2

// Checking if an array includes a certain element
let includesThree = arr.includes(3);
console.log(includesThree); // Output: true

// Concatenating two arrays
let arr2 = [6, 7, 8];
let combinedArr = arr.concat(arr2);
console.log(combinedArr); // Output: [1, 20, 3, 4, 5, 6, 7, 8]

// Slicing an array
let slicedArr = combinedArr.slice(1, 5);
console.log(slicedArr); // Output: [20, 3, 4, 5]

// Splicing an array (removing and adding elements)
combinedArr.splice(2, 2, 99, 100);
console.log(combinedArr); // Output: [1, 20, 99, 100, 5, 6, 7, 8]

// Reversing an array
combinedArr.reverse();
console.log(combinedArr); // Output: [8, 7, 6, 5, 100, 99, 20, 1]

// Sorting an array
combinedArr.sort((a, b) => a - b);
console.log(combinedArr); // Output: [1, 5, 6, 7, 8, 20, 99, 100]

// Finding an element
let foundElement = arr.find((element) => element > 3);
console.log(foundElement); // Output: 20

// Finding the index of an element that meets a condition
let foundIndex = arr.findIndex((element) => element > 3);
console.log(foundIndex); // Output: 1

// Flattening an array
let nestedArr = [1, [2, [3, 4]], 5];
let flatArr = nestedArr.flat(2);
console.log(flatArr); // Output: [1, 2, 3, 4, 5]

// Joining array elements into a string
let joinedString = arr.join(", ");
console.log(joinedString); // Output: "1, 20, 3, 4, 5"

// Creating an array from a string
let str = "hello";
let charArray = Array.from(str);
console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// Concating two arrays using spread operator
 
let spreadArr = [...arr, ...arr2];
console.log(spreadArr); // Output: [1, 20, 3, 4, 5, 6, 7, 8]