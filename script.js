//Declare players score variables
let humanScore = 0;
let computerScore = 0;
let round = 5;

const humanScoreDisplay = document.querySelector('#humanScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const humanResult = document.querySelector('#humanResult');
const computerResult = document.querySelector('#computerResult');

// generate human choice image
const humanResultImg = {
    rock: '<img class="resultImg" src="./img/right-rock-action.png" alt="right rock">',
    paper: '<img class="resultImg" src="img/right-paper-action.png" alt="right-paper">',
    scissors: '<img class="resultImg" src="img/right-scissors-action.png" alt="scissors">'
};

// generate computer choice image
const computerResultImg = {
    rock: '<img class="resultImg" src="img/left-rock-action.png" alt="right rock">',
    paper: '<img class="resultImg" src="img/left-paper-action.png" alt="right-paper">',
    scissors: '<img class="resultImg" src="img/left-scissors-action.png" alt="scissors">'
};

// generate result image
const resultImage = {
    machineWin: '<img class="resultImg" src="img/i-win.png" alt="i win">',
    playerWin: '<img class="resultImg" src="img/you-win.png" alt="u win">',
    machineLose: '<img class="resultImg" src="img/i-lose.png" alt="i lose">',
    playerLose: '<img class="resultImg" src="img/you-lose.png" alt="i win">',
    itsA: '<img class="resultImg" src="img/its-a.png" alt="i win">',
    tie: '<img class="resultImg" src="img/tie.png" alt="i win">'
};

// Get computer's input
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3)  // Generates 0, 1, or 2
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

// // Get user's input
// function getHumanChoice() {
//     let humanChoice = prompt("Rock, paper, scissors?").toLowerCase()
    
//     while (true)
//         if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
//             return humanChoice;
//         } else {
//             humanChoice = prompt("Incorrect choice. Try again: rock, paper, scissors?")
//     }
// }


// Play single round

function playRound(humanChoice, computerChoice) {

    // Optimized logic

    const wins = {
        paper: 'rock',
        rock: 'scissors',
        scissors: 'paper'
    }

    if (humanChoice == computerChoice) {
        humanResult.innerHTML = `${humanResultImg[humanChoice]}`;
        computerResult.innerHTML = `${computerResultImg[computerChoice]}`;
    } else if (wins[humanChoice] === computerChoice) {
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        humanResult.innerHTML = `${humanResultImg[humanChoice]}`;
        computerResult.innerHTML = `${computerResultImg[computerChoice]}`;
    } else {
        computerScore++;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        humanResult.innerHTML = `${humanResultImg[humanChoice]}`;
        computerResult.innerHTML = `${computerResultImg[computerChoice]}`;
    }

// old logic
//     if (humanChoice === "paper" && computerChoice === "rock") {
//         humanScore = humanScore + 1
//         humanScoreDisplay.textContent = humanScore;
//         computerScoreDisplay.textContent = computerScore;
//         resultMessage.textContent = "You win! Paper beats rock"
        
//     } else if (humanChoice === "scissors" && computerChoice === "paper") {
//         humanScore = humanScore + 1
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "You win! Scissors beats paper"

//     } else if (humanChoice === "rock" && computerChoice === "scissors") {
//         humanScore = humanScore + 1
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "You win! Rock beats scissors"
    
//     } else if (humanChoice === "rock" && computerChoice === "paper") {
//         computerScore = computerScore + 1
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "You lose! Paper beats rock"
    
//     } else if (humanChoice === "paper" && computerChoice === "scissors") {
//         computerScore = computerScore + 1
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "You lose! Scissors beats paper"

//     } else if (humanChoice === "scissors" && computerChoice === "rock") {
//         computerScore = computerScore + 1
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "You lose! Rock beats scissors"

//     } else {
//         console.log("Human score: " + humanScore)
//         console.log("Computer score: " + computerScore)
//         return "It's a tie, try again."
//     }
// }
    
    // Play 5 rounds
    // let keepGoing = true;
    // let round = 0;

    // while (true) { 

    //     round = round + 1;
    //     console.log("Round " + round);
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(humanSelection, computerSelection))
        

        // if (round === 5 && humanScore > computerScore) {
        //     return "END OF GAME: Congrats, you beat the machine!"
    
        // } else if (round === 5 && humanScore < computerScore) {
        //     return "END OF GAME: The machine beat you, loser!"
            
        // } else if (round === 5 && humanScore == computerScore) {
        //     return "END OF GAME: It's a tie. Losers!"
            
        // }

    // }
}


const buttons = document.querySelectorAll('.choice');

window.showGoodbye = function() {
    document.body.removeChild(document.querySelector('.modal-overlay'));
    document.querySelector('h1').textContent = 'Bye!';
    document.querySelector('#results').innerHTML = '';
    document.querySelector('.button-container').innerHTML = '';
}

//handle click button
function handleButtonClick(button) {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    const roundNumber = document.querySelector('#roundNumber');
    const heading = document.querySelector('h1'); 
    const h3 = document.querySelector('h3');
    
    round--;
    playRound(playerSelection, computerSelection);
    h3.textContent = '';

    if (round === 0) {
        if (humanScore > computerScore) {
            heading.textContent = "END OF GAME!";
            document.querySelector('.button-container').innerHTML = '';
            humanResult.innerHTML = `${resultImage['playerWin']}`;
            computerResult.innerHTML = `${resultImage['machineLose']}`;
        
        } else if (humanScore < computerScore) {
            heading.textContent = "END OF GAME!";
            document.querySelector('.button-container').innerHTML = '';
            humanResult.innerHTML = `${resultImage['playerLose']}`;
            computerResult.innerHTML = `${resultImage['machineWin']}`;

        } else {
            heading.textContent = "END OF GAME!";
            document.querySelector('.button-container').innerHTML = '';
            humanResult.innerHTML = `${resultImage['tie']}`;
            computerResult.innerHTML = `${resultImage['itsA']}`;
        }

        setTimeout(() => {
            // create custom dialogue
            const dialogDiv = document.createElement('div');
            dialogDiv.className = 'modal-overlay';
            dialogDiv.innerHTML = `
                <div class="modal">
                    <p>Want to play again?</p>
                    <button id="yes" onclick="resetGame(); document.body.removeChild(this.parentElement.parentElement);">Yes</button>
                    <button id="no" onclick="showGoodbye()">No</button>
                </div>
            `;
            document.body.appendChild(dialogDiv);
        }, 2000);

    } else if (round === 1) {
        heading.textContent = `Let's play ${round} round of rock, paper, scissors!`;

    } else {
        roundNumber.textContent = round;
    };
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});

function resetGame() {
    // Reset all scores and counters
    humanScore = 0;
    computerScore = 0;
    round = 5;
    
    // Reset all display elements
    document.querySelector('#humanScore').textContent = '0';
    document.querySelector('#computerScore').textContent = '0';
    document.querySelector('h1').innerHTML = "Let's play <span id='roundNumber'>5</span> rounds of rock, paper, scissors!";
    document.querySelector('h3').innerHTML = "To start, choose your move:";
    humanResult.innerHTML = '';
    computerResult.innerHTML = '';

    // add the buttons back
    document.querySelector('.button-container').innerHTML = `
        <button class="choice" id="rock"><img class="choiceImg" src="./img/rock.png" alt="rock"></button>
        <button class="choice" id="paper"><img class="choiceImg" src="./img/paper.png" alt="rock"></button>
        <button class="choice" id="scissors"><img class="choiceImg" src="./img/scissors.png" alt="rock"></button>
    `;

    document.querySelectorAll('.choice').forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button));
    });
}