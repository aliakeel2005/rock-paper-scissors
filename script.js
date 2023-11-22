function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length) 
  return choices[randomIndex]
}
let playerScore = 0;
   let computerScore = 0;
function playround(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
   
   /*draw*/ 
   if(playerSelection === computerSelection) {
      results.textContent = "Draw! " + playerSelection + " and " + computerSelection;
   }

   /*win*/
   else if(playerSelection === "rock" && computerSelection === "scissors" || 
   playerSelection === "paper" && computerSelection === "rock" ||
   playerSelection === "scissors" && computerSelection === "paper") {
      results.textContent = "You win! " + playerSelection + " beats " + computerSelection; playerScore++;
   } 
   /*lose*/
   else { results.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
computerScore++;};
scores.textContent = "the current score is: " + ("player score: " + `${playerScore} `) +
('computer score: ' + computerScore);


if(playerScore === 5 || computerScore === 5) 
{if(playerScore > computerScore){winner.textContent = "you win!"} else{winner.textContent = "you lose, the computer wins"}
}

}

function game() {
   if(playerScore > computerScore) {
      console.log("You win the game!")
   } else if(playerScore < computerScore) {
      console.log("You lost the game.")
   }
}

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const results = document.querySelector('.results')
const scores = document.querySelector('.scores')
const winner = document.querySelector('.winner')
rockButton.addEventListener('click', () => {playround("rock")})
paperButton.addEventListener('click', () => {playround("paper")})
scissorsButton.addEventListener('click', () => {playround("scissors")})