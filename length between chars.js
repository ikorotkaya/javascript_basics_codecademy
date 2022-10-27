// Write function below
const subLength = (string, a) => {
  var newArray = string.split('');
  let charCount = 0;
  let charFound = [];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === a) {
    charFound.push(i)
    charCount++;
    }
  }

  if (charCount > 2 || charCount < 2) return 0;
  return result = charFound[1] - charFound[0] + 1;
}

console.log(subLength('frefser', 'r'))
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k'));  // returns 0