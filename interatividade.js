// Interatividade do menu hamburguer
const btn = document.querySelector(".container-header-do-topo button");
const nav = document.querySelector(".container-header-do-topo nav");

// Criando as funções
function menu(event){
    if (event.type === "touchstart")
        event.preventDefault();

    nav.classList.toggle("active");
    btn.classList.toggle("active");
}

function fecharMenu(event){
    clicouBotao = btn.contains(event.target);
    clicouMenu = nav.contains(event.target);

    if (nav.classList.contains("active") && !clicouBotao && !clicouMenu){
        btn.classList.remove("active");
        nav.classList.remove("active");
    }
}

const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollSuave(event){
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const secao = document.querySelector(href);

    secao.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// Ouvindo os chamados das funções
linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSuave);
});
btn.addEventListener("click", menu);
btn.addEventListener("touchstart", menu);
document.addEventListener("click", fecharMenu)