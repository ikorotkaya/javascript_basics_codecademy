// .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

// .reduce() method can also take an optional second parameter to set an initial value for accumulator (the first argument is the callback function!).

const numbers2 = [1, 2, 4, 10];
 
const summedNums2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums2); // Output: 117

// exercise

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);