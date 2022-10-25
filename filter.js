// .filter() returns an array of elements after filtering out certain elements from the original array.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((randomNumber) => {
  return randomNumber < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((favoriteWord) => {
  return favoriteWord.length > 7;
});