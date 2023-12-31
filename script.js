function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length) 
  return choices[randomIndex]
}
let playerScore = 0;
   let computerScore = 0;
   // results.style.display = "none"
function playround(playerSelection, computerSelection) {
   computerSelection = getComputerChoice();
   const computerPickImage = new Image()
   const playerPickImage = document.createElement('img')
   const imageMapping = {
      rock: "images/hrock.svg",
      paper: "images/hpaper.svg",
      scissors: "images/hscissors.svg",
   }
   computerPickImage.src = imageMapping[computerSelection]
   playerPickImage.src = imageMapping[playerSelection]
   // results.textContent = ''
   // results.appendChild(computerPickImage)
   computerPickImage.style.width = '100px'; // Adjust the size as needed
   computerPickImage.style.height = '75px';
   playerPickImage.style.width = '100px'
   playerPickImage.style.height= '75px'

   /*draw*/ 
   if(playerSelection === computerSelection) {
   text.innerHTML = ''
   player.innerHTML = ''
   text.appendChild(computerPickImage)
   player.appendChild(playerPickImage)
   }

   /*win*/
   else if(playerSelection === "rock" && computerSelection === "scissors" || 
   playerSelection === "paper" && computerSelection === "rock" ||
   playerSelection === "scissors" && computerSelection === "paper") {
      text.innerHTML = ''
      player.innerHTML = ''
      text.appendChild(computerPickImage);
      player.appendChild(playerPickImage); playerScore++;
   } 
   /*lose*/
   else { 
      text.innerHTML = ''
      player.innerHTML = ''
      text.appendChild(computerPickImage);
      player.appendChild(playerPickImage);
computerScore++;};
scores.textContent = ("player score: " + `${playerScore} `) +
('computer score: ' + computerScore);


if(playerScore === 3 || computerScore === 3) 
{if(playerScore > computerScore){winner.textContent = "YOU WIN!"; winner.style.cssText = winnerStyles}
else{winner.textContent = "You lose, the computer wins"; winner.style.cssText = loserStyles};
rockButton.style.display = "none"
paperButton.style.display = "none"
scissorsButton.style.display = "none"
text.innerHTML = ''
end1.style.display = "none";
end2.style.display = "none"
}

}
const reset = document.createElement('button')
reset.style.cssText = "margin-top: 30px;"
const container = document.querySelector('.container')
reset.textContent = "reset"
container.appendChild(reset)
reset.addEventListener('click', resetGame)
function resetGame() {rockButton.style.display = "inline";
paperButton.style.display = "inline";
scissorsButton.style.display = "inline";
playerScore = 0;
computerScore = 0;
scores.textContent = ("player score: " + `${playerScore} `) +
('computer score: ' + computerScore);
end1.style.display = "block"
end2.style.display = 'block'
player.textContent = ''
text.textContent = ''
winner.textContent = ''}

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const end1 = document.querySelector('.end1')
const end2 = document.querySelector('.end2')
const text = document.querySelector('.text')
const scores = document.querySelector('.scores')
const winner = document.querySelector('.winner')
const player = document.querySelector('.player')
rockButton.addEventListener('click', () => {playround("rock")})
paperButton.addEventListener('click', () => {playround("paper")})
scissorsButton.addEventListener('click', () => {playround("scissors")})

const winnerStyles = `
display: block;
color: green;
font-weight: bolder;`;
const loserStyles = `
display: block;
color: red;
font-weight: bolder;`
