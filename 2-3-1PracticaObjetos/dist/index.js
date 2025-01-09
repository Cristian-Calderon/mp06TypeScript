"use strict";
// Objeto literal example
const car = {
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
function printRestaurant(rest) {
    const container = document.querySelector('.container');
    // Limpiar contenido previo
    container.innerHTML = '';
    if (rest) {
        // Crear y agregar el título del restaurante
        const titleRestaurant = document.createElement('h3');
        titleRestaurant.textContent = rest.name;
        container.appendChild(titleRestaurant);
        // Crear y agregar la ubicación
        const locationElement = document.createElement('p');
        locationElement.textContent = `Ubicación: ${rest.location}`;
        container.appendChild(locationElement);
        // Crear y agregar la lista de platos
        const menuTitle = document.createElement('p');
        menuTitle.textContent = "Menú:";
        container.appendChild(menuTitle);
        // Lista de elementos
        const dishList = document.createElement('ul');
        rest.dishes.forEach((dish) => {
            const dishItem = document.createElement('li');
            dishItem.style.listStyleType = 'none';
            dishItem.textContent = `${dish.name} - $${dish.price.toFixed(2)}`;
            dishList.appendChild(dishItem);
        });
        container.appendChild(dishList);
    }
    else {
        // Mensaje si no hay restaurante
        const message = document.createElement('p');
        message.textContent = 'El restaurante no está abierto';
        container.appendChild(message);
    }
}
// Función que suma el precio de todos los platos
function calculateTotal() {
    return restaurant.dishes.reduce((total, dish) => total + dish.price, 0);
}
function showTotal() {
    const totalPriceElement = document.getElementById('totalPrice');
    const total = calculateTotal();
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
function addDish() {
    const dishNameInput = document.getElementById('dishName');
    const dishPriceInput = document.getElementById('dishPrice');
    const dishName = dishNameInput.value;
    const dishPrice = parseFloat(dishPriceInput.value);
    if (dishName && !isNaN(dishPrice)) {
        restaurant.dishes.push({ name: dishName, price: dishPrice });
        printRestaurant(restaurant);
    }
    else {
        alert('Por favor, introduce un nombre y un precio válidos.');
    }
}
function load() {
    printRestaurant(restaurant);
}
window.load = load;
// Ejercicio 2: Clientes y Pedidos
class Client {
    // Constructor para inicializar las propiedades
    constructor(firstName, lastName, dni, creditCard) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.orders = [];
        this.dni = dni;
        this.creditCard = creditCard;
    }
    // Getters y Setters para dni
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    // Getters y Setters para creditCard
    getCreditCard() {
        return this.creditCard;
    }
    setCreditCard(creditCard) {
        this.creditCard = creditCard;
    }
    addOrder(order) {
        this.orders.push(order);
    }
}
class Pedido {
    constructor(dishes) {
        this.dishes = dishes;
        this.id = Pedido.idCounter++;
    }
    // Getter para id
    getId() {
        return this.id;
    }
    // Getter y Setter para dishes
    getDishes() {
        return this.dishes;
    }
    setDishes(dishes) {
        this.dishes = dishes;
    }
}
Pedido.idCounter = 0;
// Logica
const clients = [];
function addClient() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const dniInput = document.getElementById('dni');
    const creditCardInput = document.getElementById('creditCard');
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const dni = dniInput.value;
    const creditCard = creditCardInput.value;
    if (firstName && lastName && dni && creditCard) {
        const newClient = new Client(firstName, lastName, dni, creditCard);
        clients.push(newClient);
        printClients();
    }
    else {
        alert('Por favor, introduce todos los datos del cliente.');
    }
}
function printClients() {
    const clientList = document.getElementById('clientList');
    clientList.innerHTML = '';
    clients.forEach((client) => {
        const clientItem = document.createElement('p');
        clientItem.textContent = `${client.firstName} ${client.lastName} - DNI: ${client.getDni()}`;
        clientList.appendChild(clientItem);
    });
}
