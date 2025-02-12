const nom: HTMLSpanElement = document.getElementById("nom") as HTMLSpanElement;
const cognoms: HTMLSpanElement = document.getElementById("cognoms") as HTMLSpanElement;
const dataNaixement: HTMLSpanElement = document.getElementById("dataNaixement") as HTMLSpanElement;
const ocupacio: HTMLSpanElement = document.getElementById("ocupacio") as HTMLSpanElement;
const equip: HTMLSpanElement = document.getElementById("equip") as HTMLSpanElement;
const esport: HTMLSpanElement = document.getElementById("esport") as HTMLSpanElement;
const opinio: HTMLSpanElement = document.getElementById("opinio") as HTMLSpanElement;
const hora: HTMLSpanElement = document.getElementById("hora") as HTMLSpanElement;
const parell: HTMLSpanElement = document.getElementById("parell") as HTMLSpanElement;

//Funció per mostrar les respostes quan arriben per GET
function mostrarRespostesGET() {
    //Recuperem els valors de la URL
    const params = new URLSearchParams(window.location.search);

    //Assignem cada valor llegint la clau
    nom.textContent = params.get("nom");
    cognoms.textContent = params.get("cognoms");
    dataNaixement.textContent = params.get("dataNaixement");
    ocupacio.textContent = params.get("ocupacio");
    equip.textContent = params.get("equip");
    esport.textContent = params.get("altres");
    opinio.textContent = params.get("opinio");
    hora.textContent = params.get("time");
    parell.textContent = params.get("parell");
}

//Funció per mostrar les respostes quan arriben per POST
function mostrarRespostesPOST() {
    //Recuperem tot l'objecte, el partim pel guió i creem un mapa per emplenar amb aquestes dades
    const storedData: string[] = (localStorage.getItem("formData") as string).split("-");
    const dataMap: Map<string, string> = new Map();

    //Per cada element de l'array, tornem a partir, aquesta vegada per coma, i assignem els valors
    storedData.forEach(pair => {
        const [key, value] = pair.split(",");
        if (key && value) {
            dataMap.set(key, value);
        }
    });

    //Assignem cada valor llegint la clau
    nom.textContent = dataMap.get("nom") as string;
    cognoms.textContent = dataMap.get("cognoms") as string;
    dataNaixement.textContent = dataMap.get("dataNaixement") as string;
    ocupacio.textContent = dataMap.get("ocupacio") as string;
    equip.textContent = dataMap.get("equip") as string;
    esport.textContent = dataMap.get("altres") as string;
    opinio.textContent = dataMap.get("opinio") as string;
    hora.textContent = dataMap.get("time") as string;
    parell.textContent = dataMap.get("parell") as string;
}


window.addEventListener("load", mostrarRespostesGET);
