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
let ck;
let test;

function start(action, speedChanged) {
    ck = dudeHelper.getCookie();
    let startAction = action;
    if (ck != null) {
        if (ck['expression'] != null) {
            document.getElementById("mood").value = ck['expression'];
        }
        if (ck['speed'] != null && !speedChanged) {
            document.getElementById("speedRange").value = parseInt(ck['speed']);
        }
        if (ck['action'] != null && !speedChanged) {
            startAction = ck['action'];
        }
    }
    expression = document.getElementById("mood").value;
    speed = parseInt(document.getElementById("speedRange").value);
    dudeBuilder.buildDude(expression);

    ld = document.getElementById("littledude");
    if (startAction === 'walk') {
        interval = setInterval(walk, speed);
        document.getElementById('walkButton').checked = true;
    } else if (startAction === 'dance') {
        interval = setInterval(dance, speed);
        document.getElementById('danceButton').checked = true;
    }
}

function walk() {
    dudeHelper.moveFeet();
    expression = document.getElementById("mood").value;
    dudeBuilder.changeMood(expression);
    changeSpeed('walk');
    dudeHelper.saveCookie();
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
    dudeHelper.saveCookie();
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
    start('walk', true);
}

function startDance() {
    clearInterval(interval);
    start('dance', true);
}

function changeSpeed(action) {
    let updatedSpeed = parseInt(document.getElementById("speedRange").value);
    dudeHelper.saveCookie();
    if (speed !== updatedSpeed) {
        clearInterval(interval);
        start(action, true);
    }
}

document.getElementById('littledude').addEventListener('load', start('walk'));
document.getElementById('walkButton').addEventListener('click', function() { startWalk() }, false);
document.getElementById('danceButton').addEventListener('click', function() { startDance() }, false);
