"use strict";
class Persona {
    constructor(nom, cognoms, dni) {
        this.nom = nom;
        this.cognoms = cognoms;
        this._dni = dni;
    }
    get getDni() {
        return this._dni;
    }
    set setDni(dni) {
        this._dni = dni;
    }
}
//Definció comanda
class Comanda {
    constructor(plats) {
        this.plats = plats;
        this._id = Comanda._nextId++;
    }
    set setId(id) {
        this._id = id;
    }
    get getId() {
        return this._id;
    }
}
Comanda._nextId = 1;
class Client extends Persona {
    constructor(nom, cognoms, dni, credit) {
        super(nom, cognoms, dni);
        this._credit = credit;
        this.comandes = [];
    }
    get getCredit() {
        return this._credit;
    }
    set setCredit(credit) {
        this._credit = credit;
    }
    //Rep una comanda i la guarda a la llista de la instancia
    afegirComanda(comanda) {
        this.comandes.push(comanda);
    }
    //Mostra les comandes de la instancia
    mostrarComandes() {
        let resultat = "";
        this.comandes.forEach(comanda => {
            resultat += comanda.plats + "\n";
        });
        return resultat;
    }
    // Clase implementada
    mostrarInformacion() {
    }
    mostrarInformacio() {
        console.log("Comandes: " + this.comandes.length);
    }
}
class GestioRecursos {
}
