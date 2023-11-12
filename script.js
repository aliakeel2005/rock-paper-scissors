function getComputerChoice() {
   let x = Math.floor(Math.random() * 3) + 1;
   if(x === 3) {x = "scissors"}
   else if(x === 2) {x = "paper"}
   else if(x === 1) {x = "rock"};
   return x
}
let playerScore = 0;
   let computerScore = 0;
function playround(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
   playerSelection = prompt("rock paper or scissors?", ).toLowerCase()
   
   /*draw*/ 
   if(playerSelection === computerSelection) {
     return "Draw! " + playerSelection + " and " + computerSelection
   };

   /*win*/
   if(playerSelection === "rock" && computerSelection === "scissors" || 
   playerSelection === "paper" && computerSelection === "rock" ||
   playerSelection === "scissors" && computerSelection === "paper") {
     console.log("You win! " + playerSelection + " beats " + computerSelection); playerScore++;
   } 
   /*lose*/
   else { console.log("You lose! " + computerSelection + " beats " + playerSelection)
computerScore++;};
console.log("player score:" + playerScore);
console.log('computer score:' + computerScore)

}

function game() {
   console.log(playround())
   console.log(playround())
   console.log(playround())
   console.log(playround())
   console.log(playround())
   if(playerScore > computerScore) {
      console.log("You win the game!")
   } else if(playerScore < computerScore) {
      console.log("You lost the game.")
   }
}

console.log(game())