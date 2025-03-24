"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Client_js_1 = require("./Client.js");
(_a = document.getElementById('client-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameElement = document.getElementById('name');
    const dobElement = document.getElementById('dob');
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    const favoriteMovieElement = document.getElementById('favorite-movie');
    const favoriteGenresElement = document.getElementById('favorite-genres');
    if (nameElement && dobElement && emailElement && passwordElement && favoriteMovieElement && favoriteGenresElement) {
        const name = nameElement.value;
        const dob = dobElement.value;
        const email = emailElement.value;
        const password = passwordElement.value;
        const favoriteMovie = favoriteMovieElement.value;
        const favoriteGenres = Array.from(favoriteGenresElement.selectedOptions).map(option => option.value);
        const newClient = new Client_js_1.Client(name, dob, email, password, favoriteMovie, favoriteGenres);
        console.log(newClient); // Esto imprimirá el objeto en la consola del navegador
    }
    else {
        console.error('One or more form elements are missing.');
    }
});
//# sourceMappingURL=form.js.map