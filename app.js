const capa1 = document.querySelector(".capa1");
const fondo = document.querySelector(".fondo");

window.addEventListener("scroll", () => {
    capa1.style.backgroundPositionY = `${(window.scrollY) / 1.5}px`;
    fondo.style.backgroundPositionY = `${-(window.scrollY) / 14}px`;
})