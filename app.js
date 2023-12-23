let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScores = document.querySelector("#user-score");
let compScores = document.querySelector("#comp-score");
const generateChoice = () => {
  const compChoice = ["rock", "paper", "scissors"];
  const randomIx = Math.floor(Math.random() * 3);
  return compChoice[randomIx];
};
const drawGame = () => {
  msg.innerText = "Game was Draw";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScores.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScores.innerText = compScore;
    msg.innerText = `You lost.  ${compChoice}  beats  Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = generateChoice();
  let userWin = true;
  if (userChoice === compChoice) {
    drawGame();
  } else {
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
  }
  showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userId = choice.getAttribute("id");
    playGame(userId);
  });
});
