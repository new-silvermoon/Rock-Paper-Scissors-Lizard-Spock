var userScore = 0;
var aiScore = 0;
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const lizard_div = document.getElementById('lizard');
const spock_div = document.getElementById('spock');

const userScore_span = document.getElementById('user-score');
const aiScore_span = document.getElementById('ai-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');

const userName = ' (user)'.fontsize(3).sup();
const aiName = ' (ai)'.fontsize(3).sup();



function getAIChoice() {

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randChoice = Math.floor(Math.random() * 5);
    return choices[randChoice];
}

function userWins(user, ai) {

    userScore++;
    userScore_span.innerHTML = userScore;

    result_div.innerHTML = `<p>${user}${userName} beats ${ai}${aiName}. You win!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);



}

function aiWins(user, ai) {

    aiScore++;
    aiScore_span.innerHTML = aiScore;

    result_div.innerHTML = `<p>${ai}${aiName} beats ${user}${userName}. You loose!</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);



}

function draw(user, ai) {
  
  result_div.innerHTML = `<p>It was a draw! You both chose ${user}</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

function gameOperation(userChoice) {

    const aiChoice = getAIChoice();

    switch (userChoice + aiChoice) {

        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
        case 'spockrock':
        case 'lizardspock':
        case 'spockscissors':
        case 'paperspock':
        case 'rocklizard':
        case 'lizardpaper':
            case 'scissorslizard':
        userWins(userChoice, aiChoice);
        break;

        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
        case 'rockspock':
        case 'spocklizard':
        case 'scissorsspock':
        case 'spockpaper':
        case 'lizardrock':
        case 'paperlizard':
            case 'lizardscissors':
        aiWins(userChoice, aiChoice);
        break;

        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
        case 'lizardlizard':
        case 'spockspock':
        draw(userChoice, aiChoice);
        break;

    }



}



function main() {

    rock_div.addEventListener('click', () => gameOperation('rock'));
    paper_div.addEventListener('click', () => gameOperation('paper'));
    scissors_div.addEventListener('click', () => gameOperation('scissors'));
    lizard_div.addEventListener('click', () => gameOperation('lizard'));
    spock_div.addEventListener('click', () => gameOperation('spock'));



}


main();