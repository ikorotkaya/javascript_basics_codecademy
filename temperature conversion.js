// Kelvin temperature

// Constant variable
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