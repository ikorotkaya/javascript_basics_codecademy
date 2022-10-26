const convertToBaby = (arr) => {
  var output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push("baby " + arr[i]);
  }
  return output;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
