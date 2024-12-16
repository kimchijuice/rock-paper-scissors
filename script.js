// Get computer's input
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)  // Generates 0, 1, or 2
    if (computerChoice === 0) {
        return "rock"
    } else if (computerChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Get user's input
function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, scissors?").toLowerCase()
   
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
    } else {
        return humanChoice = prompt("Incorrect choice. Try again: rock, paper, scissors?")
        
    }
}

//Declare players score variables

let humanScore = 0
let computerScore = 0

// Play single round

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = humanScore + 1
        return "You win! Paper beats rock"
        
    } else {
        return "try"
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore)
console.log(computerScore)