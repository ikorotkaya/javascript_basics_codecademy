const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

const sortSpeciesByTeeth = (arr) => {
  arr.sort((a, b) => a.numTeeth > b.numTeeth);
  return arr;
};

console.log(sortSpeciesByTeeth(speciesArray));