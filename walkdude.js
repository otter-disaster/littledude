let interval;
let movement = 5;
let ld;
let feet_out = '&nbsp;/&nbsp;&nbsp;\\';
let feet_in = '&nbsp;\\&nbsp;&nbsp;/';
let left_arm = '&nbsp;\\O&nbsp;&nbsp;';
let right_arm = '&nbsp;&nbsp;&nbsp;O/';

function buildDude(action) {
    var expression = document.forms["start_button"]["expression"].value;
    var speed = document.forms["start_button"]["speed"].value;
    var eyes;
    var mouth;
    if (expression === 'angry') {
        exp = 'n';
        eyes = '&nbsp;O&nbsp;&ograve;&nbsp;&nbsp;&oacute;&nbsp;O';
    } else if (expression === 'surprised') {
        exp = 'o';
        eyes = '&nbsp;O&nbsp;.&nbsp;&nbsp;.&nbsp;O';
    } else {
        exp = 'u';
        eyes = '&nbsp;O&nbsp;.&nbsp;&nbsp;.&nbsp;O';
    }
    mouth = `${left_arm}${exp}${right_arm}`;

    if (speed === 'slowly') {
        speed = 500;
    } else if (speed === 'quickly') {
        speed = 250;
    } else {
        speed = 100;
    }
    document.getElementById("head").innerHTML = '&nbsp;.oooo.'
    document.getElementById("eyes").innerHTML = eyes;
    document.getElementById("mouth").innerHTML = mouth;
    document.getElementById("butt").innerHTML = '&nbsp;&middot;oooo&middot;'
    document.getElementById("feet").innerHTML = feet_out;

    const questions = document.getElementById("start_button");
    questions.remove();

    ld = document.getElementById("littledude");
    if (action === 'walk') {
        interval = setInterval(walk, speed);
    } else if (action === 'dance') {
        interval = setInterval(dance, speed);
    }
}

function moveFeet() {
    if (document.getElementById("feet").innerHTML === feet_out) {
        document.getElementById("feet").innerHTML = feet_in;
    } else {
        document.getElementById("feet").innerHTML = feet_out;
    }
}

function walk() {
    moveFeet();
    if (ld.style.left !== "") {
        ld.style.left = Number(ld.style.left.replace('px',''))+movement+"px";
    } else {
        ld.style.left = ld.getBoundingClientRect().left + "px";
    }
    if (detectCollision()) {
        movement = movement * -1;
    }
}

function basicDance() {
    if (left_arm !== '/O&nbsp;&nbsp;') {
        left_arm = '/O&nbsp;&nbsp;';
    } else {
        left_arm = '\\O&nbsp;&nbsp;';
    }
    if (right_arm !== '&nbsp;&nbsp;&nbsp;O/') {
        right_arm = '&nbsp;&nbsp;&nbsp;O/';
    } else {
        right_arm = '&nbsp;&nbsp;&nbsp;O\\';
    }
    document.getElementById("mouth").innerHTML = `${left_arm}${exp}${right_arm}`;
    moveFeet();
}

function armsUpDance() {
    if (left_arm !== 'O/&nbsp;') {
        left_arm = 'O/&nbsp;';
    } else {
        left_arm = '\\O&nbsp;&nbsp;';
    }
    if (right_arm !== '&nbsp;&nbsp;O/') {
        right_arm = '&nbsp;&nbsp;O/';
    } else {
        right_arm = '&nbsp;&nbsp;\\O';
    }
    document.getElementById("mouth").innerHTML = `${left_arm}${exp}${right_arm}`;
    moveFeet();
}

function dance() {
    let move = Math.floor(Math.random() * 10);
    if (move <= 5) {
        basicDance();
    } else if (move <= 7) {
        armsUpDance();
    }
}

function detectCollision() {
    let screenWidth = document.body.clientWidth;
    let leftPosition = Number(ld.style.left.replace('px',''));
    if (leftPosition + 100 >= screenWidth && movement === 5) {
        return true;
    } else if (leftPosition <= 50 && movement === -5) {
        return true;
    }
}
