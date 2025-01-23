abstract class Persona {
    public nom: string;
    public cognoms: string;
    private _dni: string;

    constructor(nom: string, cognoms: string, dni: string) {
      this.nom = nom;
      this.cognoms = cognoms;
      this._dni = dni;
    }

    get getDni(): string {
      return this._dni;
    }

    set setDni(dni: string) {
      this._dni = dni;
    }

    abstract mostrarInformacion(): void ;
      
    }
  
  
  //Definció comanda
class Comanda {
    public plats: string
    private _id: number

    private static _nextId: number = 1;

    constructor(plats: string) {
      this.plats = plats;
      this._id = Comanda._nextId++;
    }

    set setId(id: number) {
      this._id = id;
    }

    get getId(): number {
      return this._id;
    }
  }

  class Client extends Persona {
    public comandes: Comanda[];
    private _credit: number;

    constructor(nom: string, cognoms: string, dni: string, credit: number) {
      super(nom, cognoms, dni);
      this._credit = credit;
      this.comandes = [];
    }

    get getCredit(): number {
      return this._credit;
    }

    set setCredit(credit: number) {
      this._credit = credit;
    }

    //Rep una comanda i la guarda a la llista de la instancia
    public afegirComanda(comanda: Comanda): void {
      this.comandes.push(comanda);
    }

    //Mostra les comandes de la instancia
    public mostrarComandes(): string {
      let resultat: string = "";

      this.comandes.forEach(comanda => {
        resultat += comanda.plats + "\n";
      });

      return resultat;
    }

    // Clase implementada
    mostrarInformacion(): void {
    
    }

    public mostrarInformacio() {
      console.log("Comandes: " + this.comandes.length);
    }
  }


class GestioRecursos  {

}