const botChoice = document.querySelector(".botChoice");
const playerPick = document.querySelector(".playerChoice");
const result = document.querySelector(".result");
const playerWonCount = document.querySelector(".playerCount");
const botWonCount = document.querySelector(".botCount");

let botCount = 0;
let playerCount = 0;

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

function whoWon(playerChoice) {
  let botPick = rockPaperScissors();
  botChoice.textContent = botPick;
  playerPick.textContent = playerChoice;

  if (playerChoice === botPick) {
    result.textContent = "Tie!";
    result.style.color = "Gray";
  } else if (playerChoice === "Rock") {
    if (botPick === "Paper") {
      botCount++;
      result.textContent = "Bot Won!";
      result.style.color = "Red";
      botWonCount.innerHTML = botCount;
    } else {
      playerCount++;
      result.textContent = "Player Won!";
      result.style.color = "Green";
      playerWonCount.innerHTML = playerCount;
    }
  } else if (playerChoice === "Scissors") {
    if (botPick === "Rock") {
      botCount++;
      botWonCount.innerHTML = botCount;
      result.textContent = "Bot Won!";
      result.style.color = "Red";
    } else {
      playerCount++;
      playerWonCount.innerHTML = playerCount;
      result.textContent = "Player Won!";
      result.style.color = "Green";
    }
  } else if (playerChoice === "Paper") {
    if (botPick === "Scissors") {
      botCount++;
      playerWonCount.innerHTML = playerCount;
      botWonCount.innerHTML = botCount;
      result.textContent = "Bot Won!";
      result.style.color = "Red";
    } else {
      playerCount++;
      playerWonCount.innerHTML = playerCount;
      result.textContent = "Player Won!";
      result.style.color = "Green";
    }
  }
  console.log(botCount, playerCount);
}

function keepCount() {
  //checks who the winner is and adds a tally in either the won or lost column
}
