const words = ["Zhopka", "Popka", "Pupka", "Puk"];

const megaConcat = (array) => {
  if(array.length === 1) {
    return array[0];
  }

  const firstPart = array.slice(0, array.length - 1).join(", ");
  // More compact version:
  // const firstPart = array.slice(0, -1).join(", ");
  const lastItem = array[array.length - 1];

  return `${firstPart} and ${lastItem}`;
}

console.log(megaConcat(["Foobar"]));
console.log(megaConcat(["Foo", "Bar"]));
console.log(megaConcat(words));
