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
    if (leftPosition + littleDudeWidth/1.8 >= littleDudeWidth && movement === 5) {
        return true;
    } else if (leftPosition <= 0 && movement === -5) {
        return true;
    }
}

export function getCookie() {
    let ck = document.cookie;
    let cookieDict = {};
    let cookieArray;
    if (ck !== null && ck !== '') {
        cookieArray = ck.split(',');
        for (let i = 0; i < cookieArray.length; i++) {
            cookieDict[cookieArray[i].split('=')[0]] = cookieArray[i].split('=')[1];
        }
        return cookieDict;
    } else {
        return null;
    }
}

export function saveCookie(expression, speed, action) {
    let existingCookieDict = getCookie();
    let newCookieDict = {};
    let newCookie = '';
    newCookieDict['expression'] = expression ?? existingCookieDict['expression'];
    newCookieDict['speed'] = speed ?? existingCookieDict['speed'];
    newCookieDict['action'] = action ?? existingCookieDict['action'];
    for (var key in newCookieDict) {
        newCookie = newCookie + key + '=' + newCookieDict[key] + ',';
    }
    document.cookie = newCookie;
}
