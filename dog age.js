// my age
let myAge = 29;
// dog's early years
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

//check
console.log(laterYears);
console.log(earlyYears);

let myAgeInDogYears = laterYears + earlyYears;

let myName = 'Irina Korotkaya'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

// Kelvin Tmperature

// constant variable
const kelvin = 0;
// Convert to celsius
const celsius = kelvin - 273;
// Convert to Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Round down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33/100);
// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);