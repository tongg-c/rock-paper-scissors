let playerPoints = 0;
let computerPoints = 0;
game();
console.log(playerPoints);
console.log(computerPoints);
if(playerPoints>computerPoints){
    console.log("You win against the computer! You must be proud :)");
} else if(playerPoints<computerPoints){
    console.log('How sad :( You lost');
} else {
    console.log('It\'s a tie :/');
}

function getComputerChoice(){
    const rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
    return rockPaperScissors[Math.floor(Math.random()*3)];
}

function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection===computerSelection){
        return "It's a tie!";
    } else if(playerSelection==='rock' && computerSelection==='scissors') {
        playerPoints++;
        return 'You win! rock beats scissors!';
    } else if(playerSelection==='rock' && computerSelection==='paper'){
        computerPoints++;
        return 'You lose! paper beats rock.';
    } else if (playerSelection==='paper'&&computerSelection==='rock'){
        playerPoints++;
        return 'You win! paper beats rock!';
    } else if(playerSelection==='paper'&&computerSelection==='scissors'){
        computerPoints++;
        return 'You lose! scissors beat paper.';
    } else if(playerSelection==='scissors'&&computerSelection==='paper'){
        playerPoints++;
        return 'You win! scissors beats paper!';
    } else {
        computerPoints++;
        return 'You lose! rock beats scissors';
    }
}
function game(){
    for (let i = 0; i < 5; i++) {
        play(prompt('Type in rock, paper, or scissors.'), getComputerChoice());
     }
}


