"use strict";

let UpperBtn = document.querySelector('.upper-btn');
let boxNumber = document.querySelector('.box-qtext');
let quessImput = document.querySelector('.quess-input');
let quessBtn = document.querySelector('.quess-btn');
let quessWarn = document.querySelector('.quess-warn');
let scorePoints = document.querySelector('.score-points');
let bestScore = document.querySelector('.score-b-points');


let randomValue = Math.round((Math.random() * 20) + 1);
