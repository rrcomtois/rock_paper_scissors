let computerSelection = ""
let playerSelection = ""
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"]

console.log(game());



function game() {
    for (let i = 1; i < 6; i++) {
        console.log("Round: " + i);
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    return "Player score: " + playerScore + ", Computer score: " + computerScore;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let valid = false;
    do {
        playerSelection = prompt("Choose: Rock, Paper, Scissors").toLowerCase();
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            valid = true;
        }
        else {
            alert("Error! Please make a valid selection");
        }
    }
    while (valid == false);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    switch(playerSelection){
        case "rock":
            if (computerSelection == "scissors") {
                playerScore ++;
                return "Player wins!";
            }
            else if (computerSelection == "paper") {
                computerScore ++;
                return "Computer wins!";
            }
            else {
                return "Tie!";
            }
        case "paper":
            if (computerSelection == "rock") {
                playerScore ++;
                return "Player wins!";
            }
            else if (computerSelection == "scissors") {
                computerScore ++;
                return "Computer wins!";
            }
            else {
                return "Tie!";
            }
        case "scissors":
            if (computerSelection == "paper") {
                playerScore ++;
                return "Player wins!";
            }
            else if (computerSelection == "rock") {
                computerScore ++;
                return "Computer wins!";
            }
            else {
                return "Tie!";
            }
    }
}