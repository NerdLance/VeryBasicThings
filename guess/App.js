const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

const getRandom = () => {
    return Math.floor((Math.random() * 20) + 1);
}

let randomNumber = getRandom()
//number.textContent = randomNumber;
let currentScore = 20;
let currentHighscore = 0;

const minusScore = () => {
    currentScore--;
    score.textContent = currentScore;
}

const loseGame = () => {
    message.textContent = 'You Lost the Game!'
    score.textContent = 0;
}

const checkGuess = (event) => {
    const myGuess = Number(guess.value);
    console.log(`Guess: ${myGuess}`);
    
    if (!myGuess) { // No Input
        message.textContent = 'No Number!'
    } else if (myGuess === randomNumber) { // Player Wins
        message.textContent = 'Correct Number!';
        body.classList.add('win');
        number.classList.add('win');
        number.textContent = randomNumber;

        // Check / Update HighScore
        if (currentScore > currentHighscore) {
            currentHighscore = currentScore;
            highScore.textContent = currentHighscore;
        }
    } else if (myGuess > randomNumber) { // Guess is too high
        if (currentScore > 1) {
            message.textContent = 'Guess is Too HIGH!'
            minusScore();
        } else {
            loseGame();
        }
    } else if (myGuess < randomNumber) { // Guess is too low
        if (currentScore > 1) {
            message.textContent = 'Guess is Too LOW!'
            minusScore();
        } else {
            loseGame();
        }
    }
}

const restartGame = () => {
    currentScore = 20;
    randomNumber = getRandom();
    
    message.textContent = 'Start guessing...';
    number.textContent = "?";
    score.textContent = currentScore;
    guess.value = "";

    body.classList.remove('win', 'lose');
    number.classList.remove('win');
}



checkButton.addEventListener('click', checkGuess);
againButton.addEventListener('click', restartGame);