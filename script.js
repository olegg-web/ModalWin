let button = document.querySelector('.button');
let buttonGreen = document.querySelector('#buttonClose');
let modalW = document.querySelector('#modalW');
let crossClose = document.querySelector('#crossClose');
let crossRed = document.querySelector('.crossRed');

modalW.style.display = 'none';

button.addEventListener('click', funShow);
function funShow() {
    modalW.style.display = 'flex';
}

buttonGreen.addEventListener('click', funClose);
crossClose.addEventListener('click', funClose);
modalW.addEventListener('click', funCloseWin);

function funCloseWin(e) {
    if (e.target.className == 'modalWin' || e.target.className == 'modalWin_text') {
        return false
    } else {
        modalW.style.display = 'none';
    }
}

function funClose() {
    modalW.style.display = 'none';
    }