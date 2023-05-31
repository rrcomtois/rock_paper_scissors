const choices = ["rock", "paper", "scissors"]
const gameLimit = 2;
let playerScore = 0;
let computerScore = 0;
let round = "";
let scoring = "";


const buttons = document.querySelectorAll('button');
const resultText = document.getElementById('result');
const playerScoreText = document.getElementById('playerScore');
const computerScoreText = document.getElementById('computerScore');
const gameText = document.getElementById('game');
const container = document.getElementById('container');
const reset = document.getElementById('reset');


function getComputerChoice() {
    return choices[Math.floor((Math.random() * 3))];
}

function choiceCompare(playerSelection, computerSelection){
    if (playerSelection == "") return "Round cancelled.";
    return (playerSelection == computerSelection) ? `${playerSelection} against ${computerSelection} results in a tie!` :
    (playerSelection == "rock") ? (computerSelection == "paper") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!` :
    (playerSelection == "paper") ? (computerSelection == "rock") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!` : 
    (computerSelection == "paper") ? `${playerSelection} beats ${computerSelection}, you win!` : `${computerSelection} beats ${playerSelection}, you lose!`;
}

function playRound(playerSelection) {
    if (playerScore == gameLimit || computerScore == gameLimit) return;
    round = choiceCompare(playerSelection, getComputerChoice());
    resultText.innerHTML = round;
    scoring = round.slice(-5).trim();
    if (scoring == "win!") {
        playerScore++;
        playerScoreText.innerHTML = `Player score: ${playerScore}`;
    }
    else if (scoring == "lose!") {
        computerScore++;
        computerScoreText.innerHTML = `Computer score: ${computerScore}`;
    }
    scoreCheck();
}

function scoreCheck() {
    if (playerScore == gameLimit){
        gameText.innerHTML = "You won the series!";
        reset.hidden = false;
    }
    else if (computerScore == gameLimit){
        gameText.innerHTML = "Ooo, looks like the computer won the series... better luck next time!";
        reset.hidden = false;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameText.innerHTML = "";
    playerScoreText.innerHTML = `Player score: ${playerScore}`;
    computerScoreText.innerHTML = `Computer score: ${computerScore}`;
    resultText.innerHTML = "Click a button to make your selection";
    reset.hidden = true;
}


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (this.id != "reset") playRound(this.textContent.toLowerCase());
        else resetGame();
    });
});