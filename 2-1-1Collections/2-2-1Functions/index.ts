const taulaTemperatures:HTMLTableElement = document.getElementById('taulaTemperatures')! as HTMLTableElement;

// Ejercicio 1
function classificarParaules(palabras:string[]):string[] {
    let contenido = [];
    
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > 5) {
            contenido.push(palabras[i]);
        }
    }
    return contenido;
}

// Ejercicio 2

function analitzarTemperatures(...numeros:number[]) {
    
    const ordenado: number[]= numeros.sort((a,b) => a-b);
    const total = ordenado.reduce((a,b) => a+b);
    const media = (total / ordenado.length).toFixed(2);

    let mayor = ordenado[ordenado.length - 1];
    let menor = ordenado[0];

    let contenidotr:HTMLTableRowElement = document.createElement('tr');
    let medianatd:HTMLTableCellElement = document.createElement('td');
    let mayortd :HTMLTableCellElement = document.createElement('td');
    let minimotd :HTMLTableCellElement = document.createElement('td');

    medianatd.innerText = String(media) ;
    mayortd.innerText = String(mayor);
    minimotd.innerText = String(menor);

    taulaTemperatures.append(contenidotr);
    contenidotr.append(medianatd);
    contenidotr.append(mayortd);
    contenidotr.append(minimotd);
}

// Sobrecarga de funciones
function enviarMissatges(email:string, cuerpomen:string):string ;
function enviarMissatges(email:string, cuerpomen:string, saludos:string):string ;
function enviarMissatges(telefono:number,cuerpomen:string):string ;
function enviarMissatges(telefono:number,cuerpomen:string,saludos:string):string ;

function enviarMissatges(email:number|string, cuerpomen: string, saludos?:string):string {
    // Comprobacion de email
    // let isEmail:boolean = email.toString().includes('@');
    // Mensaje de error
    let error: string = "L'email no té un format vàlid.";
    // Mensaje generico
    let generico: string = "Missatge enviat a l'email, contingut: ";
    let genericom : string = "Missatge enviat al telèfon, contingut: "
    // Comprobar numero



    if (email.toString().includes('@')) {
        console.log(generico + cuerpomen);
        return generico + cuerpomen;
    }else if (typeof email === 'number') {
        let vnumero:number = parseInt(email.toString());
        if (vnumero.toString().length === 9) {
            alert()
    } else {
        return error
    }

}



//Funció per provar les funcions realitzades, comenteu i descomenteu una linea per separat per provar les diferents opcions
function execucions(){
    // Exercici 1: Classificar Paraules
    const paraules:string[] = ["cotxe", "avió", "ferrocarril", "vaixell", "motocicleta", "tractor"]; //Resultat: 4 elements: ferrocarril, vaixell, motocicleta, tractor
    //const paraules:string[] = ["blau", "vermell", "taronja", "gris", "platejat"]; //Resultat: 3 elements: vermell, taronja, platejat
    //const paraules:string[] = ["gos", "gat", "elefant", "caball"]; //Resultat: 2 elements: elefant, caball
    //console.log(classificarParaules(paraules));

    // Exercici 2: Analitzar Temperatures
    //analitzarTemperatures(12,4,30,2,11,26); //Resultat: Mitjana 14.17, Màxima 30, Mínima 2
    //analitzarTemperatures(9,15,7,5,8); //Resultat: Mitjana 8.80, Màxima 15, Mínima 5
    analitzarTemperatures(19,20,21); //Resultat: Mitjana 20.00, Màxima 21, Mínima 19

    // Exercici 3: Enviar Missatges
    enviarMissatges("test@mail.com", "Demano informació sobre aquest curs"); //Resultat: Missatge enviat a l'email, contingut: Demano informació sobre aquest curs
    //enviarMissatges("test@mail.com", "Demano informació sobre aquest curs", "Salutacions"); //Resultat: Missatge enviat a l'email, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs"); //Resultat (alert): Missatge enviat al telèfon, contingut: Demano informació sobre aquest curs
    //enviarMissatges(985421122, "Demano informació sobre aquest curs", "Salutacions"); //Resultat (alert): Missatge enviat al telèfon, contingut: Salutacions Demano informació sobre aquest curs
    //enviarMissatges("error", "error"); //Resultat: L'email no té un format vàlid.
}
