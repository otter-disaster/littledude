import * as constants from './constants.js';

let leftArm = '&nbsp;&nbsp;\\O&nbsp;&nbsp;';
let rightArm = '&nbsp;&nbsp;&nbsp;O/';

export function buildDude(expression) {
    var eyes;
    var mouth;
    if (expression === 'n') {
        eyes = constants.ANGRY_EYES;
    } else if (expression === 'o') {
        eyes = constants.HAPPY_EYES;
    } else {
        expression = 'u';
        eyes = constants.HAPPY_EYES;
    }
    mouth = `${leftArm}${expression}${rightArm}`;

    document.getElementById("head").innerHTML = constants.HEAD;
    document.getElementById("eyes").innerHTML = eyes;
    document.getElementById("mouth").innerHTML = mouth;
    document.getElementById("butt").innerHTML = constants.BUTT;
    document.getElementById("feet").innerHTML = constants.FEET_OUT;
}