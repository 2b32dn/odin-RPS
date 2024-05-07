// Get Computer Choice

const getComputerChoice = () => {
  let arr = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * (3 - 0) + 0);
  return arr[index];
};

// Get User Choice
const getUserChoice = () => {
  // let userChoiceLogic = false;
  // if (!userChoiceLogic) {
  let userChoice = prompt("Please enter r,p or s", "");
  switch (userChoice) {
    case "r":
      return "rock";
    case "p":
      return "paper";
    case "s":
      return "scissor";
    default:
      // userChoiceLogic = true;
      alert("Please try again");
      getUserChoice();
  }
  // } else {
  //   alert("Refresh the page");
  // }
};

// Score

let humanScore = 0;
let computerScore = 0;

// Play a round

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return console.log("Draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    return console.log("You won!");
  } else {
    return console.log("Computer won");
  }
};

const playGame = () => {
  const computerChoice = getComputerChoice();
  const humanChoice = getUserChoice();

  playRound(humanChoice, computerChoice);
};

for (i = 0; i < 5; i++) {
  playGame();
}
