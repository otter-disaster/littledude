let feet_out = '&nbsp;&nbsp;/&nbsp;&nbsp;\\';
let feet_in = '&nbsp;&nbsp;\\&nbsp;&nbsp;/';

export function moveFeet() {
    if (document.getElementById("feet").innerHTML === feet_out) {
        document.getElementById("feet").innerHTML = feet_in;
    } else {
        document.getElementById("feet").innerHTML = feet_out;
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