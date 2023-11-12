function getComputerChoice() {
   let x = Math.floor(Math.random() * 3) + 1;
   if(x === 3) {x = "scissors"}
   else if(x === 2) {x = "paper"}
   else if(x === 1) {x = "rock"};
   return x
}

