const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.getElementById('r');
const paperBtn = document.getElementById('p');
const scissorsBtn = document.getElementById('s');

const displayContainer = document.querySelector('.results-display');
const buttons = document.querySelector('.buttons-display');

const userScoreDisplay = document.querySelector('.user-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const description = document.querySelector('.description');

let computerSelection;
let userSelection;

let computerScore = 0;
let userScore = 0;

const computerPlay = function() {
    const random = Math.floor(Math.random() * 3);
    return  choices[random];
}

function playRound(userSelection) {
  let computerSelection = computerPlay();
  switch(userSelection + computerSelection) {
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
          draw(userSelection, computerSelection);
          break;
      case 'rockscissors':
      case 'scissorspaper':
      case 'paperrock':
          win(userSelection, computerSelection);
          break;
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
          lose(userSelection, computerSelection);
          break;
  }
} 

function game() {
    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
}


function win(userSelection, computerSelection) {
    userScore++;
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    description.innerText = `${userSelection} defeats ${computerSelection}.  User wins this round!`;

    //check for winner
    if(userScore > 4) {
        userWin();
    } else return;
}
function lose(userSelection, computerSelection) {
    computerScore++;
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    description.innerText = `${userSelection} is defeated by ${computerSelection}.  Computer wins this round...`;

    //check for loss
    if(computerScore > 4) {
        computerWin();
    } else return;
}
function draw(userSelection, computerSelection) {
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    description.innerText = `${userSelection} ties ${computerSelection}.  It's a draw!`;
}

function userWin() {
    description.innerText = 'USER WINS!!!';
    displayContainer.classList.add = 'game-over';
    buttons.style.display = 'none';
    createResetBtn();
}
function computerWin() {
    description.innerText = 'COMPUTER WINS!!!';
    displayContainer.classList.add = 'game-over';
    buttons.style.display = 'none';
    createResetBtn();
}

function createResetBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-btn');
    resetBtn.innerText = 'Reset Game';
    displayContainer.appendChild(resetBtn);
    resetBtn.addEventListener('click', e => {
        location.reload();
        return false;
    });
}

game();