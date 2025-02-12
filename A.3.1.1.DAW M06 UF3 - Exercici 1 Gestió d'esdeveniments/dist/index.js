"use strict";
// Declaracion de imagenes
const barcelona = document.getElementById('barcelona');
const madrid = document.getElementById('madrid');
let marcadorBarcelona = 0;
let marcadorMadrid = 0;
let minutos = 0;
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const brown = document.getElementById('brown');
const purple = document.getElementById('purple');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
// Click izquierdo
barcelona.addEventListener('click', () => {
    marcadorBarcelona++;
    red.innerHTML = marcadorBarcelona.toString();
});
madrid.addEventListener('click', () => {
    marcadorMadrid++;
    orange.innerHTML = marcadorMadrid.toString();
});
// Click derecho
barcelona.addEventListener('contextmenu', (e) => {
    // Evitar el menu contextual 
    e.preventDefault();
    marcadorBarcelona--;
    red.innerHTML = marcadorBarcelona.toString();
});
madrid.addEventListener('contextmenu', (e) => {
    // Evitar el menu contextual 
    e.preventDefault();
    marcadorMadrid--;
    orange.innerHTML = marcadorMadrid.toString();
});
barcelona.addEventListener('mouseover', () => {
    marcadorBarcelona++;
    brown.innerHTML = marcadorBarcelona.toString();
});
madrid.addEventListener('mouseout', () => {
    marcadorMadrid++;
    purple.innerHTML = marcadorMadrid.toString();
});
window.addEventListener("keydown", (e) => {
    if (e.key == '0') {
        green.innerText = '';
    }
    else {
        green.innerText = green.innerText + e.key;
    }
});
window.addEventListener('dblclick', () => {
    minutos++;
    blue.innerHTML = minutos.toString();
    console.log(minutos);
});
//# sourceMappingURL=index.js.map