//Definció comanda
export default class Comanda {
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