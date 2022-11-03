const nouns = "skill king shirt debt birthday phone improvement speaker highway food song advertising perspective basket delivery".split(" ");

const verbs = "wish lay affect bind extract persist manage prompt penetrate compose drink remove proclaim decorate divert".split(" ");

const adjectives = "responsible grotesque rebel greedy laughable electric zonked graceful meek handy wicked new second scattered ubiquitous".split(" ");

const adverbs = "dramatically positively hungrily less lively adventurously normally heavily arrogantly loosely shrilly widely deftly mechanically wetly".split(" ");



const generateRandomPhrase = () => {
  const getRandomWord = (array) => {
    randomWord = array[Math.floor(Math.random()*array.length)];
    return randomWord;
  }  
  let randomPhrase = `${getRandomWord(adjectives)} ${getRandomWord(nouns)} ${getRandomWord(verbs)} ${getRandomWord(adverbs)}`;
  return randomPhrase;
};

console.log(generateRandomPhrase());