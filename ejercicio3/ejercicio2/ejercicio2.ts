const inputData: HTMLInputElement = document.getElementById('data')! as HTMLInputElement;

function modificarBom() {
    let numpaginas: number= parseInt(inputData.value);
    for (let i = 0; i < numpaginas; i++) {
        let medidas : string = ':300';
        console.log(i)
        window.open("https://www.mozilla.org/", "mozillaWindow", "popup");

        // window.open("about:blank").resizeTo(300,300);
    }
}