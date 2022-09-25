const botChoice = document.querySelector(".botChoice");
const playerPick = document.querySelector(".playerChoice");
const results = document.querySelector(".result");
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  let result = Math.random() * 3;
  if (result < 1) {
    return (botChoice.innerHTML = "Rock");
  } else if (result < 2) {
    return (botChoice.innerHTML = "Paper");
  } else {
    return (botChoice.innerHTML = "Scissors");
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function whoWon(playerChoice) {
  let botChoice = rockPaperScissors();
  playerPick.innerHTML = playerChoice;
  if (
    (playerChoice === "Rock" && botChoice === "Paper") ||
    (playerChoice === "Scissors" && botChoice === "Rock") ||
    (playerChoice === "Paper" && botChoice === "Scissors")
  ) {
    return (results.innerHTML = "Bot Wins");
  } else if (playerChoice === botChoice) {
    return (results.innerHTML = "Draw");
  } else {
    return (results.innerHTML = "Player Wins");
  }
}
// console.log(whoWon("Rock"));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
// function arrChoice(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(whoWon(arr[i]));
//   }
//   //arr.forEach( choice => console.log(whoWon(choice)) );
// }
// arrChoice(["Paper", "Rock", "Scissors"]);
