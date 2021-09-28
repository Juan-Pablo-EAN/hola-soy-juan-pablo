const capa1 = document.querySelector(".capa1");
const fondo = document.querySelector(".fondo");

window.addEventListener("scroll", () => {
    capa1.style.backgroundPositionY = `${(window.scrollY) / 1.5}px`;
    fondo.style.backgroundPositionY = `${-(window.scrollY) / 14}px`;
});

const arrayProject = document.querySelectorAll(".project");
const footer = document.querySelector(".ftr");
const cabecera = document.querySelector(".cabecera");

const verificarLazyLoad = entrada => {
    if (entrada[0].isIntersecting) {
        for (const p of arrayProject) {
            p.style.animation = "ver 1s both";
        }
    }
}

const observer = new IntersectionObserver(verificarLazyLoad);
observer.observe(footer);

const verificarLazyLoad2 = entrada => {
    if (entrada[0].isIntersecting) {
        for (const p of arrayProject) {
            p.style.animation = "ver2 1s both";
        }
    } 
}

const observer2 = new IntersectionObserver(verificarLazyLoad2);
observer2.observe(cabecera);