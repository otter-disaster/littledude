import * as constants from './constants.js';

export function moveFeet() {
    if (document.getElementById("feet").innerHTML === constants.FEET_OUT) {
        document.getElementById("feet").innerHTML = constants.FEET_IN;
    } else {
        document.getElementById("feet").innerHTML = constants.FEET_OUT;
    }
}

export function detectCollision(ld, movement) {
    let leftPosition = Number(ld.style.left.replace('px',''));
    let littleDudeWidth = document.getElementById("littleDudeSpace").offsetWidth;
    if (leftPosition + littleDudeWidth/2 >= littleDudeWidth && movement === 5) {
        return true;
    } else if (leftPosition <= 0 - (littleDudeWidth/3) && movement === -5) {
        return true;
    }
}