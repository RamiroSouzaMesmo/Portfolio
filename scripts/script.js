const btnMobile = document.getElementById('btn-mobile');
const item1 = document.getElementById('sobre-menu');
const item2 = document.getElementById('tecnologias-menu');
const item3 = document.getElementById('portfolio-menu');
const item4 = document.getElementById('contato-menu');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault(); 
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('area-label', 'Fechar Menu');
    }
    else{
        event.currentTarget.setAttribute('area-label', 'Abrir Menu');
    }
}

function clickItemMenu(event){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('area-label', 'Fechar Menu');
    }
    else{
        event.currentTarget.setAttribute('area-label', 'Abrir Menu');
    }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

item1.addEventListener('click', clickItemMenu);
item2.addEventListener('click', clickItemMenu);
item3.addEventListener('click', clickItemMenu);
item4.addEventListener('click', clickItemMenu);