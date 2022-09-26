const botChoice = document.querySelector(".botChoice");
const playerPick = document.querySelector(".playerChoice");
const result = document.querySelector(".result");

function rockPaperScissors() {
  const random = Math.random() * 3;
  if (random < 1) {
    return "Rock";
  } else if (random < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playerVsBot(playerChoice) {
  botChoice.innerHTML = rockPaperScissors();
  playerPick.innerHTML = playerChoice;
}
//TODO: fix logic of who wins (wrong result will appear on page)
function whoWon(playerChoice) {
  let botChoice = rockPaperScissors();
  if (
    (playerChoice === "Rock" && botChoice === "Paper") ||
    (playerChoice === "Paper" && botChoice === "Scissors") ||
    (playerChoice === "Scissors" && botChoice === "Rock")
  ) {
    result.innerHTML = "Bot Won";
    result.style.color = "Red";
  } else if (
    (playerChoice === "Rock" && botChoice === "Scissors") ||
    (playerChoice === "Paper" && botChoice === "Rock") ||
    (playerChoice === "Scissors" && botChoice === "Paper")
  ) {
    result.innerHTML = "Player Won";
    result.style.color = "Green";
  } else {
    result.style.color = "Gray";
    result.innerHTML = "Draw";
  }
  return [result.innerHTML, result.style.color];
}

function keepCount() {
  //checks who the winner is and adds a tally in either the won or lost column
}
