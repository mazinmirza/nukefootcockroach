// DOM manipulation variables. 

const btnNuke = document.querySelector('.btnNuke');
const btnFoot = document.querySelector('.btnFoot');
const btnCockroach = document.querySelector('.btnCockroach');
const mainBody = document.querySelector('.mainBody')
const lowerBody = document.querySelector('.lowerBody')
const result = document.querySelector('.txtResult');
const txtPlayerScore = document.querySelector('.txtPlayerScore');
const txtCompScore = document.querySelector('.txtCompScore')
let playerScore = 0;
let compScore = 0;


// Computer choice

function compPlay() {
    let randomChoice = Math.floor(Math.random() * 3);
    let compChoice;
    if (randomChoice == 0) { compChoice = 'nuke' }
    else if (randomChoice == 1) { compChoice = 'cockroach' }
    else if (randomChoice == 2) { compChoice = 'foot' }
    return compChoice;
}

// User choice and commences round of RPS.  

btnFoot.addEventListener('click', function () {
    round('foot')
});

btnCockroach.addEventListener('click', function () {
    round('cockroach')
});

btnNuke.addEventListener('click', function () {
    round('nuke')
});

// play a round of RPS against the computer

function round(playerChoice) {
    let compChoice = compPlay();
    if (playerChoice == compChoice) {
        playerDraw(playerChoice, compChoice);
    } else if ((playerChoice == 'nuke' && compChoice == 'foot') ||
        (playerChoice == 'cockroach' && compChoice == 'nuke') ||
        (playerChoice == 'foot' && compChoice == 'cockroach')) {
        playerScore++;
        playerWon(playerChoice, compChoice);
    } else if ((playerChoice == 'nuke' && compChoice == 'cockroach') ||
        (playerChoice == 'cockroach' && compChoice == 'foot') ||
        (playerChoice == 'foot' && compChoice == 'nuke')) {
        compScore++;
        playerLost(playerChoice, compChoice);
    } else console.log('somethings gone wrong...');
}


// display messages depending on outcome of round

function playerWon(playerChoice, compChoice) {
    txtPlayerScore.textContent = 'Player: ' + playerScore;
    result.textContent = 'Winner!! ' + playerChoice + ' beats ' + compChoice;
    if (playerScore == 5) {
        gameOver('Player ')
    }
}

function playerLost(playerChoice, compChoice) {
    txtCompScore.textContent = 'Computer: ' + compScore;
    result.textContent = 'Loser!! ' + compChoice + ' beats ' + playerChoice;
    if (compScore == 5) {
        gameOver('Computer ')
    }
}

function playerDraw(playerChoice, compChoice) {
    result.textContent = 'Draw!! ' + playerChoice + ' draws with ' + compChoice;
}

// gameover sequence

function gameOver(winner) {
    alert (winner + 'wins!! Press OK to restart');
    window.location.reload ();
}