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


function printRestaurant(rest: typeof restaurant): void {

    const container: HTMLElement = document.querySelector('.container')! as HTMLElement;
    
    
    if (typeof restaurant === 'object') {
        const titlerestaurant: HTMLElement = document.createElement('h2');
        titlerestaurant.textContent = restaurant.name;
        container.appendChild(titlerestaurant);

    } else {
        console.log('El restaurante no esta abierto');
        
    }


    // no recibe el objeto
}

printRestaurant(restaurant);