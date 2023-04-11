import * as constants from './constants.js';

export function moveFeet() {
    if (document.getElementById("feet").innerHTML === constants.FEET_OUT) {
        document.getElementById("feet").innerHTML = constants.FEET_IN;
    } else {
        document.getElementById("feet").innerHTML = constants.FEET_OUT;
    }
}

export function detectCollision(ld, movement) {
    let screenWidth = document.body.clientWidth;
    let leftPosition = Number(ld.style.left.replace('px',''));
    if (leftPosition + 100 >= screenWidth && movement === 5) {
        return true;
    } else if (leftPosition <= 50 && movement === -5) {
        return true;
    }
}