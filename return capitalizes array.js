const shoutGreetings = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i].toUpperCase() + "!");
  }
  return output;
};

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
