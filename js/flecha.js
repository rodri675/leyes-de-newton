const flecha = document.getElementById("flecha");

function toggleFlecha() {
    if (window.scrollY > 100) {
        flecha.style.bottom = "30px";
    } else {
        flecha.style.bottom = "-70px";
    }
}

window.addEventListener("scroll", toggleFlecha);

toggleFlecha();