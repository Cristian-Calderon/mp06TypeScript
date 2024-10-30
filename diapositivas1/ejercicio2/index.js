function repetir() {
    var resultado = "";
    var letra = "c";
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            resultado += letra.toUpperCase();
        }
        else {
            resultado += letra;
        }
    }
    console.log(resultado);
}
repetir();
