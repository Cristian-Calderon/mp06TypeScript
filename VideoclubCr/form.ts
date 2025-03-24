import { Client } from './Client.js';

document.getElementById('client-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const dobElement = document.getElementById('dob') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const passwordElement = document.getElementById('password') as HTMLInputElement | null;
    const favoriteMovieElement = document.getElementById('favorite-movie') as HTMLInputElement | null;
    const favoriteGenresElement = document.getElementById('favorite-genres') as HTMLSelectElement | null;

    if (nameElement && dobElement && emailElement && passwordElement && favoriteMovieElement && favoriteGenresElement) {
        const name: string = nameElement.value;
        const dob: string = dobElement.value;
        const email: string = emailElement.value;
        const password: string = passwordElement.value;
        const favoriteMovie: string = favoriteMovieElement.value;
        const favoriteGenres: string[] = Array.from(favoriteGenresElement.selectedOptions).map(option => option.value);

        const newClient = new Client(name, dob, email, password, favoriteMovie, favoriteGenres);
        console.log(newClient); // Esto imprimirá el objeto en la consola del navegador
    } else {
        console.error('One or more form elements are missing.');
    }
});