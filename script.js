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
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
     playerSelection = prompt("enter your choice", )
     computerSelection = getComputerChoice();

     
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
      const result = determineWinner(playerSelection, computerSelection);
      if (result.includes("You win!")) {playerScore++;} else if (result.includes("You lose!")) {computerScore++;}
      console.log(result);
      return result
      function determineWinner(playerSelection, computerSelection) {
         if(playerSelection === computerSelection) {
            return "Draw!"
          } else if (
            (playerSelection === "rock" && computerSelection === "scissors") 
            || (playerSelection === "paper" && computerSelection === "rock") 
            ||(playerSelection === "scissors" && computerSelection === "paper"))
            {return "You win! " + playerSelection + " beats " + computerSelection}
            else {"You lose! " + computerScore + " beats " + playerSelection}}

} 
/*
function determineWinner(playerSelection, computerSelection) {
   if(playerSelection === "rock" && computerSelection === "rock") {
      return "Draw! rock and rock"
    } else if(playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! paper beats rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
       return "You win! rock beats scissors" 
    } 
    /*paper
    else if (playerSelection === "paper" && computerSelection === "paper") {
       return "Draw! paper and paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
       return "You win! paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
       return "You lose! scissors beat paper"
    } 
    /*scissors
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
       return "Draw! scissors and scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
       return "You lose! rock beats scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       return "You win! scissors beat paper"
    } 
    return result
}*/

function game() { 
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
   console.log(playRound());
}
(game())
