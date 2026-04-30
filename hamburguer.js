const btn = document.querySelector(".menu-hamburguer");

const nav = document.querySelector(".navagation-bar");

function toogle(){
    nav.classList.toggle("active");
}

btn.addEventListener("click", toogle())