let feet_out = '&nbsp;&nbsp;/&nbsp;&nbsp;\\';
let feet_in = '&nbsp;&nbsp;\\&nbsp;&nbsp;/';

export function moveFeet() {
    if (document.getElementById("feet").innerHTML === feet_out) {
        document.getElementById("feet").innerHTML = feet_in;
    } else {
        document.getElementById("feet").innerHTML = feet_out;
    }
}