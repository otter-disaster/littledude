import * as dudeHelper from './dudehelper.js';
import * as danceMoves from './danceMoves.js';

let exp;
let interval;
let movement = 5;
let ld;
let leftArm = '&nbsp;&nbsp;\\O&nbsp;&nbsp;';
let rightArm = '&nbsp;&nbsp;&nbsp;O/';
let move = 0;

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
    if (move == undefined || move <= 7) {
        danceMoves.basicDance(exp);
        move+=1;
    } else if (move <= 15) {
        danceMoves.armsUpDance(exp);
        move+=1;
    } else if (move <= 22) {
        danceMoves.discoDance(exp);
        move+=1;
        if (move === 22) {
            move = 0;
        }
    }
}

function buildDude(action) {
    var expression = document.forms["start_button"]["expression"].value;
    var speed = document.forms["start_button"]["speed"].value;
    var eyes;
    var mouth;
    if (expression === 'angry') {
        exp = 'n';
        eyes = '&nbsp;&nbsp;O&nbsp;&ograve;&nbsp;&nbsp;&oacute;&nbsp;O';
    } else if (expression === 'surprised') {
        exp = 'o';
        eyes = '&nbsp;&nbsp;O&nbsp;.&nbsp;&nbsp;.&nbsp;O';
    } else {
        exp = 'u';
        eyes = '&nbsp;&nbsp;O&nbsp;.&nbsp;&nbsp;.&nbsp;O';
    }
    mouth = `${leftArm}${exp}${rightArm}`;

    if (speed === 'slowly') {
        speed = 500;
    } else if (speed === 'quickly') {
        speed = 250;
    } else {
        speed = 100;
    }
    document.getElementById("head").innerHTML = '&nbsp;&nbsp;.oooo.'
    document.getElementById("eyes").innerHTML = eyes;
    document.getElementById("mouth").innerHTML = mouth;
    document.getElementById("butt").innerHTML = '&nbsp;&nbsp;&middot;oooo&middot;'
    document.getElementById("feet").innerHTML = dudeHelper.feet_out ?? '&nbsp;&nbsp;/&nbsp;&nbsp;\\';

    const questions = document.getElementById("start_button");
    questions.remove();

    ld = document.getElementById("littledude");
    if (action === 'walk') {
        interval = setInterval(walk, speed);
    } else if (action === 'dance') {
        interval = setInterval(dance, speed);
    }
}

document.getElementsByName('walkButton')[0].addEventListener('click', function() { buildDude('walk') }, false);
document.getElementsByName('danceButton')[0].addEventListener('click', function() { buildDude('dance') }, false);