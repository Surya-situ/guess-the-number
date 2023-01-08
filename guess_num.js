"use strict"
const reset = document.querySelector('.reset');
const check = document.querySelector('.check');

let score = 10;
let highscore = 0

// generating a random number between 1-20
let secretNum = Math.trunc(Math.random() * 20 ) + 1

// display message
let displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

check.addEventListener('click', checkBtn);
function checkBtn() {

    let guessNum = Number(document.querySelector('.input').value)

    if(!guessNum){

        displayMessage ( `Please enter a number...`);
        document.querySelector('.message-center').style.backgroundColor = 'red';

    } else if(guessNum > 20 || guessNum < 1) {

        document.querySelector('.message-center').style.backgroundColor = 'red';
        displayMessage = `Guess between 1-20`;

    } else if (guessNum === secretNum) {

        displayMessage ( `Correct number`);
        document.querySelector('.message-center').style.backgroundColor = 'green'
        document.querySelector('.secretNumber').innerHTML = secretNum;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

    } else if ( guessNum !== secretNum) {
        if (score > 1) {
            document.querySelector('.message').textContent =
            guessNum > secretNum ? 'Too high!' : ' Too low!';
            document.querySelector('.message-center').style.backgroundColor = 'red'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage ( 'You lost the game!');
            document.querySelector('.message-center').style.backgroundColor = 'red'
            document.querySelector('.score').textContent = 0;
        }
        
    }

};


reset.addEventListener('click', resetBtn);
function resetBtn (){

    score = 10;
    document.querySelector('.score').textContent = score;


    secretNum = Math.trunc(Math.random() * 20) + 1;
    
    displayMessage(`Guess the number`); 
    
    document.querySelector('body').style.backgroundColor = 'white'
    
    document.querySelector('.input').value = ``;

    document.querySelector('.secretNumber').innerHTML = '?'

    document.querySelector('.message-center').style.backgroundColor = 'rgb(14, 17, 68)';

};

