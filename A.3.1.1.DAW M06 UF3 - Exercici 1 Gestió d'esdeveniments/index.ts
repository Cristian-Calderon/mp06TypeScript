// Declaracion de imagenes

const barcelona: HTMLImageElement = document.getElementById('barcelona') as HTMLImageElement;
const madrid: HTMLImageElement = document.getElementById('madrid') as HTMLImageElement;

let marcadorBarcelona = 0;
let marcadorMadrid = 0;
let minutos = 0;

const red: HTMLElement = document.getElementById('red') as HTMLElement;
const orange: HTMLElement = document.getElementById('orange') as HTMLElement;
const brown: HTMLElement = document.getElementById('brown') as HTMLElement;
const purple: HTMLElement = document.getElementById('purple') as HTMLElement;
const green: HTMLElement = document.getElementById('green') as HTMLElement;
const blue: HTMLElement = document.getElementById('blue') as HTMLElement;


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
barcelona.addEventListener('contextmenu', (e: MouseEvent) => {
    // Evitar el menu contextual 
    e.preventDefault();
    marcadorBarcelona--;
    red.innerHTML = marcadorBarcelona.toString();
});

madrid.addEventListener('contextmenu', (e: MouseEvent) => {
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


window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key == '0') {
        green.innerText = '';
    } else {
        green.innerText = green.innerText + e.key;
    }
});

window.addEventListener('dblclick', ()=>{
    minutos++;
    blue.innerHTML = minutos.toString();
    console.log(minutos);
    
})