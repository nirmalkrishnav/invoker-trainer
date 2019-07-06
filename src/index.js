// import invoker from './invoker.js'

// need array or have to block non alpha keycodes
let currentlyHolding = '';
const audioPath = './assets/sounds/';
// remap of hotkeys planned from legacy
// lazy to add all :}
const spells = {
    qqq: {
        keycode: 'qqq',
        name: 'Cold Snap',
        audioURL: 'qqq/Cold_Snap.mp3'
    },
    eee: {
        keycode: 'eee',
        name: 'Sunstrike',
        audioURL: 'eee/Sun_Strike.mp3'
    },
    www: {
        keycode: 'www',
        name: 'EMP',
        audioURL: 'www/EMP.mp3'
    }
};

var invoked = {};

var e0 = document.querySelector('h2');
var el = document.querySelector('h1');

document.addEventListener('keyup', event => {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;

    if (key == 'R' || key == 'r') {
        gloriousInvokation();
    } else if (event.keyCode == 32) {
        castInvoked();
    } else {
        addToHolding(key);
    }

});

function addToHolding(key) {
    if (currentlyHolding.length >= 3) {
        clearText();
    }
    e0.innerHTML += key;
    currentlyHolding = currentlyHolding + key;
}

function gloriousInvokation() {
    let prop = spells[currentlyHolding];
    if (!isNullOrUndefined(prop)) {
        el.innerHTML = prop.name;
        invoked = prop;
        playAudio('invoke/Invoke.mp3');
    } else {
        clearText();
    }
}

async function castInvoked() {
    var result = await playAudio(invoked.audioURL);
}

function isNullOrUndefined(val) {
    return (val === null || val === undefined ? true : false);
}

function clearText() {
    el.innerHTML = '';
    currentlyHolding = '';
    e0.innerHTML = '';
    invoked = {};
}

function playAudio(fileName) {
    return new Promise(resolve => {
        var audio = new Audio(audioPath + fileName);
        audio.play();
        resolve();
    });
}
