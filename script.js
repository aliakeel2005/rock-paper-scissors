function getComputerChoice() {
   let x = Math.floor(Math.random() * 3) + 1;
   if(x === 3) {x = "scissors"}
   else if(x === 2) {x = "paper"}
   else if(x === 1) {x = "rock"};
   return x
}

function playround(playerSelection, computerSelection) {
   
   computerSelection = getComputerChoice;
   playerSelection = prompt("rock paper or scissors?", )
   
   /*draw*/ 
   if(playerSelection === computerSelection) {
     return "Draw! " + playerSelection + " and " + computerSelection
   };

   /*win*/
   if(playerSelection === "rock" && computerSelection === "scissors" || 
   playerSelection === "paper" && computerSelection === "rock" ||
   playerSelection === "scissors" && computerSelection === "paper") {
     return "You win! " + playerSelection + " beats " + computerSelection
   };
}
console.log(playround())