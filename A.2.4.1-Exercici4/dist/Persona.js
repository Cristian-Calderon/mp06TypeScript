export default class Persona {
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
    mostrarInformacio() {
        console.log(this.nom + " " + this.cognoms);
    }
}
//# sourceMappingURL=Persona.js.map