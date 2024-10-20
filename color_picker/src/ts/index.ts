function getButtonColor(buttonId: string): string {
    switch (buttonId) {
        case 'redButton':
            return '#f44336'
        break;

        case 'yellowButton':
            return '#ffe044'
            break;

        case 'greenButton':
            return '#4vaf58'
            break;

        case 'blueButton':
            return '#2196f3'
            break;

        default:
                return "#ffff"
        break;
    }
}

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
        let button: HTMLButtonElement = document.getElementById('algo') as HTMLButtonElement;
        button.style.background = botones[i].id;
        // document.body.style.background = botones[i].id;
    });
}