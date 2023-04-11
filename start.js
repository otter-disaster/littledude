import * as dudeHelper from './dudeHelper.js';
import * as danceMoves from './danceMoves.js';
import * as dudeBuilder from './buildDude.js';

let expression;
let speed;
let interval;
let movement = 5;
let ld;
let currentDanceMove = 0;

function start(action) {
    expression = document.forms["start_button"]["expression"].value;
    speed = document.forms["start_button"]["speed"].value;
    const questions = document.getElementById("start_button");
    questions.remove();
    dudeBuilder.buildDude(expression);

    ld = document.getElementById("littledude");
    if (action === 'walk') {
        interval = setInterval(walk, speed);
    } else if (action === 'dance') {
        interval = setInterval(dance, speed);
    }
}

function walk() {
    dudeHelper.moveFeet();
    if (ld.style.left !== "") {
        ld.style.left = Number(ld.style.left.replace('px',''))+movement+"px";
    } else {
        ld.style.left = ld.getBoundingClientRect().left + "px";
    }
    if (dudeHelper.detectCollision(ld, movement)) {
        movement = movement * -1;
    }
}

function dance() {
    if (currentDanceMove == undefined || currentDanceMove <= 7) {
        danceMoves.basicDance(expression);
        currentDanceMove+=1;
    } else if (currentDanceMove <= 15) {
        danceMoves.armsUpDance(expression);
        currentDanceMove+=1;
    } else if (currentDanceMove <= 22) {
        danceMoves.discoDance(expression);
        currentDanceMove+=1;
        if (currentDanceMove === 22) {
            currentDanceMove = 0;
        }
    }
}

document.getElementsByName('walkButton')[0].addEventListener('click', function() { start('walk') }, false);
document.getElementsByName('danceButton')[0].addEventListener('click', function() { start('dance') }, false);