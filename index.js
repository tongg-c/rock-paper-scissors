let playerPoints = 0;
let computerPoints = 0;

//creates image sources
const playerImage = document.querySelector('#playerImage');
const computerImage = document.querySelector('#computerImage');
const winner = document.querySelector('.winner');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const youWin = document.querySelector('#you-win');
const youLoser = document.querySelector('#you-loser');
const body = document.querySelector('body');

const rockSource = 'images/rock-paper-scissors-icon-rock-paper-scissors-pngrock-paper-scissors-png--free-transparent-png-images-pngaaacom.jpg';
const paperSource = 'images/play-rock-paper-scissors-with-us-246506.jpg';
const scissorSource = 'images/your-hand-hand-clipart-png-rock-paper-scissors-free-transparent-png-clipart-images-download.jpg';

const buttons = document.querySelectorAll('.card');

buttons.forEach(button => {
    button.addEventListener('click', e => {
            const input = e.target.getAttribute('data-card')
            const computerChoice = getComputerChoice();
        
            if(input === 'rock'){
                playerImage.src = rockSource;
            }

            if(input === 'paper'){
                playerImage.src = paperSource;
            }

            if(input === 'scissors'){
                playerImage.src = scissorSource;
            }

            if(computerChoice==='rock'){
                computerImage.src = rockSource;
            }

            if(computerChoice==='paper'){
                computerImage.src = paperSource;
            }

            if(computerChoice==='scissors'){
                computerImage.src = scissorSource;
            }
            play(input, computerChoice);
    });
});

function play(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        roundWinner("It's a tie!");
    } else if(playerSelection==='rock' && computerSelection==='scissors') {
        playerPoints++;
        roundWinner('You win!');
    } else if(playerSelection==='rock' && computerSelection==='paper'){
        computerPoints++;
        roundWinner('You lose.');
    } else if (playerSelection==='paper'&&computerSelection==='rock'){
        playerPoints++;
        roundWinner('You win!');
    } else if(playerSelection==='paper'&&computerSelection==='scissors'){
        computerPoints++;
        roundWinner('You lose.');
    } else if(playerSelection==='scissors'&&computerSelection==='paper'){
        playerPoints++;
        roundWinner('You win!');
    } else if(playerSelection==='scissors'&&computerSelection==='rock'){
        computerPoints++;
        roundWinner('You lose.')
    } else if(playerSelection==='paper'&&computerSelection==='scissors'){
        computerPoints++;
        roundWinner('You lose.')
    } else {
        playerPoints++;
        roundWinner('You win!');
    }
}

function getComputerChoice(){
    const rockPaperScissors = ['rock', 'paper', 'scissors'];
    return rockPaperScissors[Math.floor(Math.random()*3)];
}

const roundWinner = (displayMessage) => {
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    winner.textContent = displayMessage;
    if(playerPoints === 5 || computerPoints ===5){
        displayWinner();
    }
};

const displayWinner = () => {
    if(computerPoints === 5){
        console.log(youLoser);
        body.innerHTML = `<h1>You Lose. Better luck next time :(</h1>`;
        const button = document.createElement('a')
        button.textContent = 'Play again'
        button.href = 'index.html'
        body.appendChild(button);
    } else if(playerPoints === 5) {
        body.innerHTML = `<h1>You Win. Congratulations :)</h1>`;
        const button = document.createElement('a')
        button.textContent = 'Play again'
        button.href = 'index.html'
        body.appendChild(button);
    }
};


