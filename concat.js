// Write function below
array = [{ item: 'Carrots' }, { item: 'Hummus' }]

const groceries = (array) => {
  // early return Guard Clause
  if (array.length === 1) {
    return array[0].item
  };

  const output1 = [];
  const output2 = [];

  for (let i = 0; i < array.length - 1; i++) {
    output1.push(Object.values(array[i]).toString());
  }
  if (i = array.length - 1) {
    output2.push(Object.values(array[i]).toString())
  }

  return `${output1.join(', ')} and ${output2}`
}
console.log(groceries(array));