var inputData = document.getElementById('data');
function modificarBom() {
    var numpaginas = parseInt(inputData.value);
    for (var i = 0; i < numpaginas; i++) {
        var medidas = ':300';
        console.log(i);
        window.open("https://www.mozilla.org/", "mozillaWindow", "popup");
        // window.open("about:blank").resizeTo(300,300);
    }
}
