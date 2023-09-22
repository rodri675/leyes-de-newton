document.addEventListener("DOMContentLoaded", function () {
    const textoAnimado = document.querySelector(".encabezado h4");
    const textoOriginal = "Explorando las leyes fundamentales de la mecánica";
    textoAnimado.textContent = "";

    let indice = 0;

    function escribirTexto() {
        if (indice < textoOriginal.length) {
            textoAnimado.textContent += textoOriginal.charAt(indice);
            indice++;
            setTimeout(escribirTexto, 70);
        }
    }
    escribirTexto();
});
