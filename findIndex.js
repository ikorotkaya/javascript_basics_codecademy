// .findIndex() will return the index of the first element which evaluates to true for that condition.

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

//exercise 

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animals.findIndex((animal) => {
  if (animal[0] === "s") {
    return animal;
  }
});