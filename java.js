

const menu = document.querySelector('nav');

function activeScroll(){
    menu.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);