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


//Switch keyword

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
    case 'second place':
  console.log('You get the silver medal!');
  break;
    case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;
}


// Magice eight ball

let userName = '';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'How long will I live?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);