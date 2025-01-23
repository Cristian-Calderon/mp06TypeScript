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
export default Comanda;
//# sourceMappingURL=Comanda.js.map