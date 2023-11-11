function getComputerChoice() {
     let x = Math.floor(Math.random() * 3) + 1
     if (x === 1) {
        x = "rock"
     } else if (x === 2) {
        x = "paper"
     } else if (x === 3) {
        x = "scissors"
     }
     return x
};
function playRound(playerSelection, computerSelection) {
     playerSelection = prompt("enter your choice", )
     /* rock */
    if(playerSelection === "rock" && computerSelection === "rock") {
        return "Draw! rock and rock"
      } else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! paper beats rock"
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
         return "You win! rock beats scissors" 
      } 
      /*paper*/
      else if (playerSelection === "paper" && computerSelection === "paper") {
         return "Draw! paper and paper"
      } else if (playerSelection === "paper" && computerSelection === "rock") {
         return "You win! paper beats rock"
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
         return "You lose! scissors beat paper"
      } 
      /*scissors*/
      else if (playerSelection === "scissors" && computerSelection === "scissors") {
         return "Draw! scissors and scissors"
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
         return "You lose! rock beats scissors"
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
         return "You win! scissors beat paper"
      } 
} 
const playerSelection = ""
   const computerSelection = getComputerChoice()
function game() { 
   console.log(playRound(playerSelection, computerSelection));
   console.log(playRound(playerSelection, computerSelection));
   console.log(playRound(playerSelection, computerSelection));
   console.log(playRound(playerSelection, computerSelection));
   console.log(playRound(playerSelection, computerSelection));
}
console.log(game())
/*const playerSelection = "";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));*/



/* get user input through prompt*/
   


