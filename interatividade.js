// Interatividade do menu hamburguer
const btn = document.querySelector(".container-header-do-topo button");
const nav = document.querySelector(".container-header-do-topo nav");

function menu(event){
    if (event.type === "touchstart")
        event.preventDefault();

    nav.classList.toggle("active");
    btn.classList.toggle("active");
}

const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollSuave(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const secao = document.querySelector(href);

    secao.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}


linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
});

btn.addEventListener("click", menu)
btn.addEventListener("touchstart", menu)