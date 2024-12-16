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
    let humanChoice = prompt("Rock, paper, scissors?").toLowerCase()
    let keepGoing = true;
    
    while (keepGoing)
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
            keepGoing = false;
        } else {
            humanChoice = prompt("Incorrect choice. Try again: rock, paper, scissors?")
    }
}

//Declare players score variables

let humanScore = 0
let computerScore = 0

// Play single round




//Play the entire game 

function playGame() {
    
    function playRound(humanChoice, computerChoice) {
    

        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You win! Paper beats rock"
            
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You win! Scissors beats paper"
    
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore = humanScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You win! Rock beats scissors"
        
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore = computerScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You lose! Paper beats rock"
        
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore = computerScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You lose! Scissors beats paper"
    
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore = computerScore + 1
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "You lose! Rock beats scissors"
    
        } else {
            console.log("Human score: " + humanScore)
            console.log("Computer score: " + computerScore)
            return "It's a tie, try again."
        }
    
    }

    let keepGoing = true;
    let round = 0;

    while (keepGoing) { 

        round = round + 1;
        console.log("Round " + round);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
        

        if (round === 5 && humanScore > computerScore) {
            return "END OF GAME: Congrats, you beat the machine!"
            keepGoing = false;
        } else if (round === 5 && humanScore < computerScore) {
            return "END OF GAME: The machine beat you, loser!"
            keepGoing = false;
        } else if (round === 5 && humanScore == computerScore) {
            return "END OF GAME: It's a tie. Losers!"
            keepGoing = false;
        }

    }
}



console.log(playGame())