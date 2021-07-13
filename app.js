const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let userSelection;

let computerScore = 0;
let userScore = 0;

const computerPlay = function() {
    const random = Math.floor(Math.random() * 3);
    return  choices[random];
}

function playRound(userSelection, computerSelection) {
    userSelection = prompt('Rock, paper, or scissors?').toLowerCase();
    computerSelection = computerPlay();
    if(userSelection !== 'rock' && userSelection !=='paper' && userSelection !== 'scissors') {
        playRound(userSelection, computerSelection)
    } else if(userSelection === computerSelection) {
        console.log(`DRAW. user score is ${userScore} and computer score is ${computerScore}`);
        return `${userSelection} ties ${computerSelection}.  It's a draw!`;
    } else if(userSelection === 'rock' && computerSelection === 'scissors' || userSelection === 'paper' && computerSelection === 'rock' || userSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        console.log(`User Wins! user score is ${userScore} and computer score is ${computerScore}`);
        return `${userSelection} beats ${computerSelection}.  User WINS!`;
    } else if(userSelection === 'rock' && computerSelection === 'paper' || userSelection === 'paper' && computerSelection === 'scissors' || userSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(`Computer Wins! user score is ${userScore} and computer score is ${computerScore}`);
        return `${computerSelection} defeats ${userSelection}. Computer Wins!`;
    }
} 

function game() {
    while(computerScore < 5 && userScore < 5) {
        playRound();
    } if(userScore === 5) {
        return 'USER WINS BABY!'
    } else if (computerScore === 5) {
        return 'COMPUTER WINS WTF'
    }
}

console.log(game())