// Objeto literal example
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// Objeto Practica
const restaurant = {
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


function printRestaurant(rest: typeof restaurant | null): void {
  const container: HTMLElement = document.querySelector('.container')!;

  // Limpiar contenido previo
  container.innerHTML = '';

  if (rest) {
    // Crear y agregar el título del restaurante
    const titleRestaurant: HTMLElement = document.createElement('h3');
    titleRestaurant.textContent = rest.name;
    container.appendChild(titleRestaurant);

    // Crear y agregar la ubicación
    const locationElement: HTMLElement = document.createElement('p');
    locationElement.textContent = `Ubicación: ${rest.location}`;
    container.appendChild(locationElement);

    // Crear y agregar la lista de platos
    const menuTitle: HTMLElement = document.createElement('p');
    menuTitle.textContent = "Menú:";
    container.appendChild(menuTitle);

    // Lista de elementos
    const dishList: HTMLElement = document.createElement('ul');
    rest.dishes.forEach((dish) => {
      const dishItem: HTMLElement = document.createElement('li');
      dishItem.style.listStyleType = 'none';
      dishItem.textContent = `${dish.name} - $${dish.price.toFixed(2)}`;
      dishList.appendChild(dishItem);
    });

    container.appendChild(dishList);
  } else {
    // Mensaje si no hay restaurante
    const message: HTMLElement = document.createElement('p');
    message.textContent = 'El restaurante no está abierto';
    container.appendChild(message);
  }
}

// Función que suma el precio de todos los platos
function calculateTotal(): number {
  return restaurant.dishes.reduce((total, dish) => total + dish.price, 0);
}

function showTotal(): void {
  const totalPriceElement: HTMLElement = document.getElementById('totalPrice')!;
  const total: number = calculateTotal();
  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

function addDish(): void {
  const dishNameInput: HTMLInputElement = document.getElementById('dishName') as HTMLInputElement;
  const dishPriceInput: HTMLInputElement = document.getElementById('dishPrice') as HTMLInputElement;

  const dishName: string = dishNameInput.value;
  const dishPrice: number = parseFloat(dishPriceInput.value);

  if (dishName && !isNaN(dishPrice)) {
    restaurant.dishes.push({ name: dishName, price: dishPrice });
    printRestaurant(restaurant);
  } else {
    alert('Por favor, introduce un nombre y un precio válidos.');
  }
}


function load() {
  printRestaurant(restaurant);
}

(window as any).load = load;



// Ejercicio 2: Clientes y Pedidos
class Client {
  // Propiedades públicas
  public firstName: string;
  public lastName: string;
  public orders: Pedido[];

  // Propiedades privadas
  private dni: string;
  private creditCard: string;

  // Constructor para inicializar las propiedades
  constructor(firstName: string, lastName: string, dni: string, creditCard: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.orders = [];
    this.dni = dni;
    this.creditCard = creditCard;
  }

  // Getters y Setters para dni
  public getDni(): string {
    return this.dni;
  }

  public setDni(dni: string): void {
    this.dni = dni;
  }

  // Getters y Setters para creditCard
  public getCreditCard(): string {
    return this.creditCard;
  }

  public setCreditCard(creditCard: string): void {
    this.creditCard = creditCard;
  }

  public addOrder(order: Pedido): void {
    this.orders.push(order);
  }
}

class Pedido {
  public dishes: string;
  private static idCounter: number = 0;
  private id: number;

  constructor(dishes: string) {
    this.dishes = dishes;
    this.id = Pedido.idCounter++;
  }

  // Getter para id
  public getId(): number {
    return this.id;
  }

  // Getter y Setter para dishes
  public getDishes(): string {
    return this.dishes;
  }

  public setDishes(dishes: string): void {
    this.dishes = dishes;
  }
}

// Logica

const clients: Client[] = [];

function addClient(): void {
  const firstNameInput: HTMLInputElement = document.getElementById('firstName') as HTMLInputElement;
  const lastNameInput: HTMLInputElement = document.getElementById('lastName') as HTMLInputElement;
  const dniInput: HTMLInputElement = document.getElementById('dni') as HTMLInputElement;
  const creditCardInput: HTMLInputElement = document.getElementById('creditCard') as HTMLInputElement;

  const firstName: string = firstNameInput.value;
  const lastName: string = lastNameInput.value;
  const dni: string = dniInput.value;
  const creditCard: string = creditCardInput.value;

  if (firstName && lastName && dni && creditCard) {
    const newClient = new Client(firstName, lastName, dni, creditCard);
    clients.push(newClient);
    printClients();
  } else {
    alert('Por favor, introduce todos los datos del cliente.');
  }
}

function printClients(): void {
  const clientList: HTMLElement = document.getElementById('clientList')!;
  clientList.innerHTML = '';

  clients.forEach((client) => {
    const clientItem: HTMLElement = document.createElement('p');
    clientItem.textContent = `${client.firstName} ${client.lastName} - DNI: ${client.getDni()}`;
    clientList.appendChild(clientItem);
  });
}