"use strict"
const reset = document.querySelector('.reset');
const check = document.querySelector('.check');
const countdown = document.querySelector('.countdown');

let countNum = 10;

// generating a random number between 1-20
let secretNum = Math.trunc(Math.random() * 20 ) + 1
console.log(secretNum);

check.addEventListener('click', checkBtn);

function checkBtn() {

    let guessNum = Number(document.querySelector('.input').value)

    if(!guessNum){
        document.querySelector('.message').textContent = `Please enter a number...`
    } else if (guessNum === secretNum) {
        document.querySelector('.message').textContent = `Correct number`
        document.querySelector('.message-center').style.backgroundColor = 'green'

        document.querySelector('.secretNumber').innerHTML = secretNum;

    } else if(guessNum > secretNum) {
        document.querySelector('.message').textContent = `Too high`
        document.querySelector('.message-center').style.backgroundColor = 'red'
    } else if ( guessNum < secretNum) {
        document.querySelector('.message').textContent = `Too low`;
        document.querySelector('.message-center').style.backgroundColor = 'red'
    } else if ( guessNum !== secretNum) {
        
    }


};


reset.addEventListener('click', resetBtn);

function resetBtn (){
    secretNum = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNum)
    
    document.querySelector('.message').textContent = `Guess the number` 
    
    document.querySelector('body').style.backgroundColor = 'white'
    
    document.querySelector('.input').value = ``;

    document.querySelector('.secretNumber').innerHTML = '?'

    document.querySelector('.message-center').style.backgroundColor = 'rgb(14, 17, 68)';

};
