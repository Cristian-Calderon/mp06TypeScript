export class Client {
    public name: string;
    public dob: string;
    public email: string;
    public password: string;
    public favoriteMovie: string;
    public favoriteGenres: string[];

    constructor(name: string, dob: string, email: string, password: string, favoriteMovie: string, favoriteGenres: string[]) {
        this.name = name;
        this.dob = dob;
        this.email = email;
        this.password = password;
        this.favoriteMovie = favoriteMovie;
        this.favoriteGenres = favoriteGenres;
    }
}