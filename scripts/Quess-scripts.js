"use strict";

let UpperBtn = document.querySelector('.upper-btn');
let boxNumber = document.querySelector('.box-qtext');
let quessImput = document.querySelector('.quess-input');
let quessBtn = document.querySelector('.quess-btn');
let quessWarn = document.querySelector('.quess-warn');
let scorePoints = document.querySelector('.score-points');
let bestScore = document.querySelector('.score-b-points');
let bodyColor = document.querySelector('.body');


let randomValue = Math.round((Math.random() * 20) + 1);


quessBtn.addEventListener('click',function(e1){
    e1.stopPropagation();
    e1.preventDefault();

    switch(true) {
        case(quessImput.value == randomValue):
        boxNumber.textContent = randomValue;
        bodyColor.style.cssText = ' background-color: #0E4D00;';
        quessWarn.textContent = "This is the right number!";
        quessImput.style.cssText = ' background-color: #0E4D00;';
        break;


       case(quessImput.value > randomValue):
       quessWarn.textContent = "The number is too large!";
       scorePoints.textContent -= 1;
       bestScore.textContent = scorePoints.textContent;
       break;


       case(quessImput.value < randomValue):
       quessWarn.textContent = "The number is too small!";
       scorePoints.textContent -= 1;
       bestScore.textContent = scorePoints.textContent;
       break;

    }
});


UpperBtn.addEventListener('click',function(e2){
    e2.stopPropagation();
    e2.preventDefault();


    bodyColor.style.cssText = 'background-color:#1b065e;';
    quessImput.style.cssText = ' background-color:#1b065e;';
    quessImput.value = null;
    boxNumber.textContent = "???";
    quessWarn.textContent = "Start the game!";
    scorePoints.textContent = 20;


});