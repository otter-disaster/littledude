import * as dudeHelper from './dudehelper.js';
let leftArm;
let rightArm;

export function basicDance(exp) {
    if (leftArm !== '&nbsp;&nbsp;/O&nbsp;&nbsp;') {
        leftArm = '&nbsp;&nbsp;/O&nbsp;&nbsp;';
        rightArm = '&nbsp;&nbsp;&nbsp;O\\';
    } else {
        leftArm = '&nbsp;&nbsp;\\O&nbsp;&nbsp;';
        rightArm = '&nbsp;&nbsp;&nbsp;O/';
    }
    document.getElementById("mouth").innerHTML = `${leftArm}${exp}${rightArm}`;
    dudeHelper.moveFeet();
}

export function armsUpDance(exp) {
    if (leftArm !== '&nbsp&nbsp&nbspO/&nbsp') {
        leftArm = '&nbsp&nbsp&nbspO/&nbsp';
        rightArm = '&nbsp&nbsp;&nbsp;O/';
    } else {
        leftArm = '&nbsp\\O&nbsp;&nbsp;';
        rightArm = '&nbsp&nbsp;\\O';
    }
    document.getElementById("mouth").innerHTML = `${leftArm}${exp}${rightArm}`;
    dudeHelper.moveFeet();
}

export function discoDance(exp) {
    if (leftArm !== '&nbsp&nbsp\\O&nbsp&nbsp') {
        leftArm = '&nbsp&nbsp\\O&nbsp&nbsp';
        rightArm = '&nbsp&nbsp;&nbsp;O\\';
    } else {
        leftArm = '&nbsp&nbsp;/O&nbsp;&nbsp;';
        rightArm = '&nbsp&nbsp;&nbsp;O/';
    }
    document.getElementById("mouth").innerHTML = `${leftArm}${exp}${rightArm}`;
    dudeHelper.moveFeet();
}