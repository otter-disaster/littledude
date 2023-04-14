import * as dudeHelper from './dudeHelper.js';
import * as danceMoves from './danceMoves.js';
import * as dudeBuilder from './buildDude.js';

let expression;
let speed;
let updatedSpeed;
let interval;
let movement = 5;
let ld;
let currentDanceMove = 0;

function start(action) {
    expression = document.getElementById("mood").value;
    speed = parseInt(document.getElementById("speedRange").value);
    const questions = document.getElementById("start_button");
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
    expression = document.getElementById("mood").value;
    dudeBuilder.changeMood(expression);
    changeSpeed('walk');
    if (ld.style.left !== "") {
        ld.style.left = Number(ld.style.left.replace('px',''))+movement+"px";
    } else {
       ld.style.left = '10px';
    }
    if (dudeHelper.detectCollision(ld, movement)) {
        movement = movement * -1;
    }
}

function dance() {
    expression = document.getElementById("mood").value;
    dudeBuilder.changeMood(expression);
    changeSpeed('dance');
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

function startWalk() {
    clearInterval(interval);
    start('walk');
}

function startDance() {
    clearInterval(interval);
    start('dance');
}

function changeSpeed(action) {
    let updatedSpeed = parseInt(document.getElementById("speedRange").value);
    if (speed !== updatedSpeed) {
        clearInterval(interval);
        start(action);
    }
}

document.getElementById('littledude').addEventListener('load', start('walk'));
document.getElementsByName('walkButton')[0].addEventListener('click', function() { startWalk() }, false);
document.getElementsByName('danceButton')[0].addEventListener('click', function() { startDance() }, false);