let userScore = 0;
let compScore = 0;
let gameIsOver = true;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const results_Div_p = document.querySelector("#results > p");
const Rock_div = document.getElementById("Rock");
const Paper_div = document.getElementById("Paper");
const Scissors_div = document.getElementById("Scissors");
const Reset_p = document.getElementById("reset");

function mainGame(userChoice) {
  if (userChoice == "Rock") {
    Paper_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Paper");
    });
    Scissors_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Scissors");
    });

    while (!gameIsOver) {
      function compChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const RNG = Math.floor(Math.random() * 3);
        return choices[RNG];
      }

      function transition(usersChoice) {
        document.getElementById(usersChoice).classList.add("holdGrey");
        results_Div_p.innerHTML = "READY!";
        setTimeout(() => (results_Div_p.innerHTML = "ROCK!"), 1500);
        setTimeout(() => (results_Div_p.innerHTML = "PAPER!"), 2500);
        setTimeout(() => (results_Div_p.innerHTML = "SCISSORS!"), 3500);
        setTimeout(() => {
          game(usersChoice);
        }, 4500);
      }

      function game(UserChoice) {
        const computerChoice = compChoice();
        switch (UserChoice + computerChoice) {
          case "RockScissors":
          case "PaperRock":
          case "ScissorsPaper":
            win(UserChoice, computerChoice);
            break;
          case "RockPaper":
          case "PaperScissors":
          case "ScissorsRock":
            lose(UserChoice, computerChoice);
            break;
          case "RockRock":
          case "PaperPaper":
          case "ScissorsScissors":
            draw(UserChoice);
            break;
        }
      }

      function win(userChoice, computerChoice) {
        userScore++;
        userScore_span.innerHTML = userScore;
        results_Div_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
        document.getElementById(userChoice).classList.add("winColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("winColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function lose(userChoice, computerChoice) {
        compScore++;
        compScore_span.innerHTML = compScore;
        results_Div_p.innerHTML = `${userChoice} can't beat ${computerChoice}. You lose :(`;
        document.getElementById(userChoice).classList.add("loseColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("loseColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function draw(userChoice) {
        results_Div_p.innerHTML = "It's a draw! No points for that round";
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      transition(userChoice);

      Paper_div.addEventListener("click", () => {
        gameIsOver = false;
        mainGame("Paper");
      });
      Scissors_div.addEventListener("click", () => {
        gameIsOver = false;
        mainGame("Scissors");
      });

      gameIsOver = true;
    }
  } else if (userChoice == "Paper") {
    Rock_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Paper");
    });
    Scissors_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Scissors");
    });
    while (!gameIsOver) {
      function compChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const RNG = Math.floor(Math.random() * 3);
        return choices[RNG];
      }

      function transition(usersChoice) {
        document.getElementById(usersChoice).classList.add("holdGrey");
        results_Div_p.innerHTML = "READY!";
        setTimeout(() => (results_Div_p.innerHTML = "ROCK!"), 1500);
        setTimeout(() => (results_Div_p.innerHTML = "PAPER!"), 2500);
        setTimeout(() => (results_Div_p.innerHTML = "SCISSORS!"), 3500);
        setTimeout(() => {
          game(usersChoice);
        }, 4500);
      }

      function game(UserChoice) {
        const computerChoice = compChoice();
        switch (UserChoice + computerChoice) {
          case "RockScissors":
          case "PaperRock":
          case "ScissorsPaper":
            win(UserChoice, computerChoice);
            break;
          case "RockPaper":
          case "PaperScissors":
          case "ScissorsRock":
            lose(UserChoice, computerChoice);
            break;
          case "RockRock":
          case "PaperPaper":
          case "ScissorsScissors":
            draw(UserChoice);
            break;
        }
      }

      function win(userChoice, computerChoice) {
        userScore++;
        userScore_span.innerHTML = userScore;
        results_Div_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
        document.getElementById(userChoice).classList.add("winColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("winColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function lose(userChoice, computerChoice) {
        compScore++;
        compScore_span.innerHTML = compScore;
        results_Div_p.innerHTML = `${userChoice} can't beat ${computerChoice}. You lose :(`;
        document.getElementById(userChoice).classList.add("loseColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("loseColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function draw(userChoice) {
        results_Div_p.innerHTML = "It's a draw! No points for that round";
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      transition(userChoice);
      gameIsOver = true;
    }
  } else if (userChoice == "Scissors") {
    Paper_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Paper");
    });
    Scissors_div.removeEventListener("click", () => {
      gameIsOver = false;
      mainGame("Scissors");
    });
    while (!gameIsOver) {
      function compChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const RNG = Math.floor(Math.random() * 3);
        return choices[RNG];
      }

      function transition(usersChoice) {
        document.getElementById(usersChoice).classList.add("holdGrey");
        results_Div_p.innerHTML = "READY!";
        setTimeout(() => (results_Div_p.innerHTML = "ROCK!"), 1500);
        setTimeout(() => (results_Div_p.innerHTML = "PAPER!"), 2500);
        setTimeout(() => (results_Div_p.innerHTML = "SCISSORS!"), 3500);
        setTimeout(() => {
          game(usersChoice);
        }, 4500);
      }

      function game(UserChoice) {
        const computerChoice = compChoice();
        switch (UserChoice + computerChoice) {
          case "RockScissors":
          case "PaperRock":
          case "ScissorsPaper":
            win(UserChoice, computerChoice);
            break;
          case "RockPaper":
          case "PaperScissors":
          case "ScissorsRock":
            lose(UserChoice, computerChoice);
            break;
          case "RockRock":
          case "PaperPaper":
          case "ScissorsScissors":
            draw(UserChoice);
            break;
        }
      }

      function win(userChoice, computerChoice) {
        userScore++;
        userScore_span.innerHTML = userScore;
        results_Div_p.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
        document.getElementById(userChoice).classList.add("winColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("winColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function lose(userChoice, computerChoice) {
        compScore++;
        compScore_span.innerHTML = compScore;
        results_Div_p.innerHTML = `${userChoice} can't beat ${computerChoice}. You lose :(`;
        document.getElementById(userChoice).classList.add("loseColor");
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("loseColor");
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      function draw(userChoice) {
        results_Div_p.innerHTML = "It's a draw! No points for that round";
        setTimeout(() => {
          document.getElementById(userChoice).classList.remove("holdGrey");
          results_Div_p.innerHTML = "You know the Rules. Let's play!";
        }, 2500);
      }
      transition(userChoice);
      gameIsOver = true;
    }
  }
}
function reset() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
}

function input() {
  Rock_div.addEventListener("click", () => {
    gameIsOver = false;
    mainGame("Rock");
  });
  Paper_div.addEventListener("click", () => {
    gameIsOver = false;
    mainGame("Paper");
  });
  Scissors_div.addEventListener("click", () => {
    gameIsOver = false;
    mainGame("Scissors");
  });
  Reset_p.addEventListener("click", () => {
    reset();
  });
}

input();
