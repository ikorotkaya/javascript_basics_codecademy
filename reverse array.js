const reverseArray = (arr) => {
  var output = [];
  while (arr.length) {
    output.push(arr.pop());
  }
  return output;
};

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));