let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "Rock"

    }

    else if (randomNumber === 1) {
        return "Paper"

    }

    else {
        return "Scissors"

    }
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
    window.prompt("Enter Rock, Paper or Scissors")


}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "Human Wins"


    }
}
console.log(playRound());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {

}
