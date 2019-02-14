
const showHamburguer = function (){
    span.style.display = 'none';
    nav.style.display = 'flex';   
}

const span = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.nav-menu-hamburguer');


span.onclick = showHamburguer;



