"use strict";
let botones = document.getElementsByTagName("button");
let fondo = document.querySelector("body");
// for (let x of botones) {
//     x.addEventListener("click", (e) => {
//         fondo.style.background = x.id;
//     })
// }
// for (let i = 0; i < botones.length; i++) {
//     botones[i].addEventListener("click", () => {
//         document.body.style.background = botones[i].id;
//     });
// }
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        let button = document.getElementById('algo');
        button.style.background = botones[i].id;
        // document.body.style.background = botones[i].id;
    });
}
