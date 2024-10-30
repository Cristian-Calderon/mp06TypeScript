let input:HTMLInputElement = document.getElementById("input") as HTMLInputElement;
let button = document.getElementById("button") as HTMLButtonElement;
let paragraph : HTMLParagraphElement = document.getElementById("paragraph") as HTMLParagraphElement;
let pcompleta : string = "";

button.addEventListener("click", () => {
    let valorinput = input.value;

    for (let i = 0; i < valorinput.length; i++) {
        if (i % 2 == 0) {
            pcompleta = pcompleta + valorinput.charAt(i).toUpperCase();
        }else {
            pcompleta = pcompleta + valorinput.charAt(i).toLowerCase();
        }
    }
    paragraph.innerHTML = pcompleta;
})