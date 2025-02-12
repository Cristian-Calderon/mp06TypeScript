const form: HTMLFormElement = document.getElementById("mainForm") as HTMLFormElement;
let comprobacio: HTMLInputElement = document.getElementById("parell") as HTMLInputElement;

window.addEventListener("load", initialize);
form.addEventListener("reset", reset);
window.addEventListener("submit", submitGET);

//Funció que es llença al iniciar, per assignar el temps actual i un text predefinit
function initialize() {
    let time: HTMLInputElement = document.getElementById("time") as HTMLInputElement;
    const now: string = new Date().toTimeString().split(' ')[0];
    time.value = now;
    localStorage.setItem("savedTime", time.value);

    let opinio: HTMLTextAreaElement = document.getElementById("opinio") as HTMLTextAreaElement;
    opinio.innerText = "El partit i la aplicació em van agradar molt!";
    localStorage.setItem("savedOpinio", opinio.value);
}

//Funció per controlar el reset i no perdre les dades inicials
function reset() {
    let time: HTMLInputElement = document.getElementById("time") as HTMLInputElement;
    const now: string = new Date().toTimeString().split(' ')[0];
    time.value = localStorage.getItem("savedTime") as string;

    let opinio: HTMLTextAreaElement = document.getElementById("opinio") as HTMLTextAreaElement;
    opinio.innerHTML = localStorage.getItem("savedOpinio") as string;
}

//Funció per controlar quan enviem per GET
function submitGET(e: Event) {

    if (Number(comprobacio.value) % 2 != 0 || Number(comprobacio.value) == 0) {
        e.preventDefault();
        alert("El nombre ha de ser parell per enviar el formulari!");
    }
}

//Funció per controlar quan enviem per POST
function submitPOST(e: Event) {
    e.preventDefault();

    if (Number(comprobacio.value) % 2 != 0 || Number(comprobacio.value) == 0) {
        alert("El nombre ha de ser parell per enviar el formulari!");
    }
    else {
        //Recuperem tota la informació del form i la transformem a un string amb comes i guio de separacions
        const formData = new FormData(form);
        let data: string = "";

        formData.forEach((value, key) => {
            data += `${key},${value}-`;
        });

        localStorage.setItem("formData", data);
        window.location.href = "respostes.html";
    }
};

