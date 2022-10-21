// exercise 1

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`)
}

// exercixe 2

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

// exercise 3

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// exercise 4

const bobsFollowers = ['Camila', 'Chendler', 'Tom', 'Chris'];
const tinasFollowers = ['Chris', 'Eva', 'Tom'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
} 

// 5

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);
