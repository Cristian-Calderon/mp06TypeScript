// Objeto literal example
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// Objeto Practica
let restaurant = {
  name: "Fuddruckers",
  location: "Miami",
  dishes: [{
    name: "1/3 Pound Hamburger",
    price: 9.99
  }, {
    name: "Chicken Tenders",
    price: 11.29
  }, {
    name: "Choripan - Autentic Argentinian",
    price: 9.69
  }]
};

// Lista de objetos para almacenar
let listClients: Client[] = [];
let listOrders: Pedido[] = [];

//Definició client
class Client{
  public nom: string;
  public cognoms: string;
  public comandes: Pedido[];
  private _dni: string;
  private _credit: number;

  constructor(nom: string, cognoms: string, dni: string, credit: number){
    this.nom = nom;
    this.cognoms = cognoms;
    this._dni = dni;
    this._credit = credit;
    this.comandes = [];
  }

  get getDni(): string{
    return this._dni;
  }

  set setDni(dni: string){
    this._dni = dni;
  }

  get getCredit(): number{
    return this._credit;
  }

  set setCredit(credit: number){
    this._credit = credit;
  }

  //Rep una comanda i la guarda a la llista de la instancia
  public afegirPedido(comanda: Pedido): void{
    this.comandes.push(comanda);
  }

  //Mostra les comandes de la instancia
  public mostrarComandes(): string{
    let resultat: string = "";

    this.comandes.forEach(comanda => {
      resultat+= comanda.dishes + "\n";
    });

    return resultat;
  }

}

//Definció comanda
class Pedido{
  public dishes: string
  private _id: number

  private static _nextId: number = 1;

  constructor(dishes: string){
    this.dishes = dishes;
    this._id = Pedido._nextId++;
  }

  set setId(id: number){
    this._id = id;
  }

  get getId(): number{
    return this._id;
  }
}

//Funció per carregar dades inicials
function inicialitzacio(): void {
  mostrarRestaurant(restaurant);
  mostrarClients(llistaClients);
  mostrarComandes(llistaComandes);
}

//Mostra l'objecte literal del restaurant, especifiquem que serà de tipus restaurant
function mostrarRestaurant(rest?: typeof restaurant): void {

  const restaurantContainer:HTMLElement = document.getElementById("restaurant") as HTMLElement;
  restaurantContainer.textContent = "";

  if (rest) {
    //Creem dues capçalares amb el nom i la ubicació
    let nom: HTMLElement = document.createElement("h2");
    nom.textContent = rest.nom;
    let ubicacio: HTMLElement = document.createElement("h3");
    ubicacio.textContent = rest.ubicacio;

    //Creem una taula per mostrar les dades
    const table:HTMLTableElement = document.createElement("table");
    const header:HTMLElement = document.createElement("tr");
    header.innerHTML = "<th>Plats</th>";
    table.appendChild(header);

    //Per cada plat, afegim una fila
    rest.dishes.forEach(plat => {
      const row:HTMLTableRowElement = document.createElement("tr");
      row.innerHTML = `<td>${plat.nom} : ${plat.preu} €</td>`;
      table.appendChild(row);
    });

    //Afegim tots els elements al contenidor
    restaurantContainer.appendChild(nom);
    restaurantContainer.appendChild(ubicacio);
    restaurantContainer.appendChild(table);
  }
  else {
    let nom: HTMLElement = document.createElement("h2");
    nom.textContent = "El restaurant no està obert";
    restaurantContainer.append(nom);
  }
}

//Mostra la llista de clients que rep per paràmetre
function mostrarClients(clients: Client[]): void {

  const clientsContainer:HTMLElement = document.getElementById("clients") as HTMLElement;
  clientsContainer.textContent = "";

  if (clients) {
    //Creem dues capçalares amb el nom 
    let nom: HTMLElement = document.createElement("h2");
    nom.textContent = "Clients"

    //Creem una taula per mostrar les dades
    const table:HTMLTableElement = document.createElement("table");
    const header:HTMLElement = document.createElement("tr");
    header.innerHTML = "<th>Dades</th>";
    table.appendChild(header);

    //Per cada client, afegim una fila
    clients.forEach(client => {
      const row:HTMLTableRowElement = document.createElement("tr");
      row.innerHTML = `<td>${client.nom},${client.cognoms} -> ${client.getDni} - ${client.getCredit}</td>`;
      table.appendChild(row);
    });

    //Afegim tots els elements al contenidor
    clientsContainer.appendChild(nom);
    clientsContainer.appendChild(table);
  }
}

//Mostra la llista de comandes que rep per paràmetre
function mostrarComandes(comandes: Pedido[]): void {

  const comandesContainer:HTMLElement = document.getElementById("comandes") as HTMLElement;
  comandesContainer.textContent = "";

  if (comandes) {
    //Creem dues capçalares amb el nom 
    let nom: HTMLElement = document.createElement("h2");
    nom.textContent = "Comandes"
    
    //Creem una taula per mostrar les dades
    const table:HTMLTableElement = document.createElement("table");
    const header:HTMLElement = document.createElement("tr");
    header.innerHTML = "<th>Dades</th>";
    table.appendChild(header);

    //Per cada comanda, afegim una fila
    comandes.forEach(comanda => {
      const row:HTMLTableRowElement = document.createElement("tr");
      row.innerHTML = `<td>${comanda.getId}-${comanda.dishes}</td>`;
      table.appendChild(row);
    });

    comandesContainer.appendChild(nom);
    comandesContainer.appendChild(table);
  }
}

//Rep l'objecte literal del restaurant i per cada plat, suma el seu preu
function preuTotalPlats(rest: typeof restaurant): number {
  return rest.dishes.reduce((total, plat) => total + plat.preu, 0);
}

//Afegeix un nou plat a l'objecte literal
function afegirPlat(): void {
  const input:HTMLInputElement = document.getElementById("plat") as HTMLInputElement;

  if (input.value.includes(",")) {
    const value:string[] = input.value.split(",");
    input.value = ""; 
    restaurant.dishes.push({ nom: value[0], preu: Number(value[1]) });
    //Utilitzem la funció de mostrar restaurant per actualitzar les dades
    mostrarRestaurant(restaurant);
  }
}

//Afegim un client nou a la llista
function afegirClient(): void{
  const input:HTMLInputElement = document.getElementById("client") as HTMLInputElement;
  let client:string[] = input.value.split(",");
  llistaClients.push(new Client(client[0],client[1],client[2], Number(client[3])));
  //Utilitzem la funció de mostrar clients per actualitzar les dades
  mostrarClients(llistaClients);
  input.value = "";
}

//Afegim una comanda nova a la llista
function afegirPedido(): void{
  const input:HTMLInputElement = document.getElementById("comanda") as HTMLInputElement;
  let comanda:string[] = input.value.split(",");
  //Comprovem que el plat o dishes estan a l'objecte literal, primer transformant per obtenir només els noms
  const dishesRestaurant:string[] = restaurant.dishes.map((plat) => plat.nom);

  //Variable de control per afegir els dishes
  let potAfegir:boolean = true;
  comanda.forEach(nomPlat => {
    //Si troba algun plat que no hi és, no es podrà afegir
    if(!dishesRestaurant.includes(nomPlat)){
      potAfegir = false;
      input.value = "";
      alert("Algun plat no està disponible")
    }
  });

  //Si es pot afegir, el guardem a la llista i utilitzem la funció de mostrar comandes per actualitzar les dades
  if (potAfegir){
    llistaComandes.push(new Pedido(input.value));
    mostrarComandes(llistaComandes);
    input.value = "";
  }
}

//Afegim una comanda existent a client
function afegirPedidoClient(): void{
  const input:HTMLInputElement = document.getElementById("comandaClient") as HTMLInputElement;
  let comandaClient:string[] = input.value.split(",");

  //Busquem l'objecte que correspon amb el ID de comanda i el DNI de client
  let comanda: Pedido = llistaComandes.find(comanda => comanda.getId == Number(comandaClient[0])) as Pedido;
  let client: Client = llistaClients.find(client => client.getDni == comandaClient[1]) as Client;

  //Si existeixen, afegim al client la comanda
  if (comanda && client){
    client.afegirPedido(comanda);
    input.value = "";
  }
  else{
    input.value = "";
    alert("El client o la comanda no existeixen");
  }
}

//Mostra les comandes que te un client
function mostrarComandesClient(): void{
  const comandesClientContainer:HTMLElement = document.getElementById("comandesClient") as HTMLElement;
  comandesClientContainer.textContent = "";
  
  const input:HTMLInputElement = document.getElementById("dniClient") as HTMLInputElement;
  //Busquem el client que té aquest DNI
  let client: Client = llistaClients.find(client => client.getDni == input.value) as Client;

  //Si troba el client i te comandes, les mostra
  if (client && client.comandes.length > 0) {
    let nom: HTMLElement = document.createElement("h2");
    nom.textContent = "Comandes Client " + client.nom;

    const table:HTMLTableElement = document.createElement("table");
    const header:HTMLElement = document.createElement("tr");
    header.innerHTML = "<th>Dades</th>";
    table.appendChild(header);

    client.comandes.forEach(comanda => {
      const row:HTMLTableRowElement = document.createElement("tr");
      row.innerHTML = `<td>${comanda.getId}-${comanda.dishes}</td>`;
      table.appendChild(row);
    });

    comandesClientContainer.appendChild(nom);
    comandesClientContainer.appendChild(table);

    input.value = "";
  }
  else {
    input.value = "";
    alert("El client no existeix o no té comandes");
  }
}
