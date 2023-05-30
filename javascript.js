const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');



function getComputerChoice() {
    return choices[Math.floor((Math.random() * 3))];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "") return "Round cancelled.";
    return (playerSelection == computerSelection) ? `${playerSelection} against ${computerSelection} results in a tie!` :
    (playerSelection == "rock") ? (computerSelection == "paper") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!` :
    (playerSelection == "paper") ? (computerSelection == "rock") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!` : 
    (computerSelection == "paper") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!`;
}


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        let round = playRound(this.textContent.toLowerCase(), getComputerChoice());
        result.innerHTML = round;
        let scoring = round.slice(-5).trim();
        if (scoring == "win!") {
            playerScore++;
            playerScoreText.innerHTML = `Player Score: ${playerScore}`;
        }
        else if (scoring == "lose!") {
            computerScore++;
            computerScoreText.innerHTML = `Computer Score: ${computerScore}`;
        }
    });
});