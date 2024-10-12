let botones = document.getElementsByTagName("button");
let fondo: HTMLBodyElement = document.querySelector("body")!;

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
        let button : HTMLButtonElement = document.getElementById('algo') as HTMLButtonElement;
            button.style.background = botones[i].id;
         // document.body.style.background = botones[i].id;
    });
}