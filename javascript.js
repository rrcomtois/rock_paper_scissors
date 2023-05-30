const choices = ["rock", "paper", "scissors"]
//let computerSelection = getComputerChoice();
//let playerSelection = getPlayerChoice();

function getPlayerChoice() {
    while (true){
        let choice = (prompt("Select rock, paper, or scissors."));
        if (choice == null) return "";
        choice = choice.toLowerCase();
        if (choice != "rock" && choice != "paper" && choice != "scissors") {
            alert("Invalid entry, please try again.");
        }
        else return choice;
    }

}

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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i ++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        let scoring = result.slice(-5).trim();
        console.log(result);
        if (scoring == "win!") playerScore++;
        else if (scoring == "lose!") computerScore++;
    }
    console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`)
    if (playerScore > computerScore) console.log("Player wins!");
    else if (playerScore < computerScore) console.log("Computer wins!");
    else console.log("Tie game!");
}

game();
