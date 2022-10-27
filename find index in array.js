const findMyKeys = (arr) => {
  return arr.findIndex((string) => string === "keys");
};

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));