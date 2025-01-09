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
function load() {
    printRestaurant(restaurant);
}
window.load = load;
