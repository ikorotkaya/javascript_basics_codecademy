let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (
    Math.abs(humanGuess - targetGuess) <= Math.abs(computerGuess - targetGuess)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = (currentRoundnumber) => (currentRoundnumber += 1);