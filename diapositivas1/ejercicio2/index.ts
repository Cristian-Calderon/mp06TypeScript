function repetir() {
    let resultado : string = "";
    let letra :string = "c"

    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            resultado += letra.toUpperCase();
        }else {
            resultado += letra;
        }
    }
    console.log(resultado);
}

repetir();