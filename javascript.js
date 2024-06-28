const pookieImg = document.getElementById('pookie');
const Strikje = document.getElementById('Strikje');
const Druiven = document.getElementById('Druiven');
const Slaap = document.getElementById('Slaap');


let honger = true;
let strikjeOp = false;
let aanHetSlapen = false;


Druiven.addEventListener("click", function() {
    if (honger) {
        pookieImg.src = 'img/vol.png';
        honger = false;
    } else {
        alert('Pookie is al gevoed.');
    }
});

//https://www.w3schools.com/jsref/met_win_alert.asp


Strikje.addEventListener("click", function() {
    if (honger) {
        alert('Pookie wil eerst eten.');

    } else {
        if (!strikjeOp) {
            pookieImg.src = 'img/strikjeop.png';
            strikjeOp = true;
        } else {
            alert('Pookie heeft al een strikje.');
        }
    }
});


Slaap.addEventListener("click", function() {
    if (honger) {
        alert('Pookie wil eerst eten.');
    } else {
        if (!aanHetSlapen) {
            pookieImg.src = 'img/pookiewilslapen.png';
            aanHetSlapen = true;
            alert("Pookie wil slapen!");
        } else {
            pookieImg.src = 'img/pookie.png';
            aanHetSlapen = false;
            alert("Pookie is wakker geworden!");
        }
    }
});
