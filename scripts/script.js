const btnMobile = document.getElementById('btn-mobile');
const item1 = document.getElementById('sobre-menu');
const item2 = document.getElementById('tecnologias-menu');
const item3 = document.getElementById('portfolio-menu');
const item4 = document.getElementById('contato-menu');
const aviso = document.getElementById('aviso-whatsapp');
const emailOculto = document.getElementById('email');
const numeroTelefone = document.getElementById('numeroTelefone');
const flechaAbrirWhatsapp = document.getElementById('flecha-abrir-whatsapp');
const flechaFecharWhatsapp = document.getElementById('flecha-fechar-whatsapp');
const flechaAbrirEmail = document.getElementById('flecha-abrir-email');
const flechaFecharEmail = document.getElementById('flecha-fechar-email');

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

function mostrarItemWhatsapp(){
    aviso.style.display="block";
    numeroTelefone.style.display="block";

}
function retirarItemWhatsapp(){
    if(aviso.style.display==="block" && numeroTelefone.style.display==="block"){
        aviso.style.display="none";
        numeroTelefone.style.display="none";
    }
}
function mostrarItemEmail(){
    copiar.style.display="block";
    email.style.display="block";

}
function retirarItemEmail(){
    if(copiar.style.display==="block" && email.style.display==="block"){
        copiar.style.display="none";
        email.style.display="none";
    }
}

function flechaAbrirWhatsappF(){
    flechaAbrirWhatsapp.style.display = "none";
    flechaFecharWhatsapp.style.display = "block";
}
function flechaFecharWhatsappF(){
    flechaAbrirWhatsapp.style.display = "block";
    flechaFecharWhatsapp.style.display = "none";
}

function flechaAbrirEmailF(){
    flechaAbrirEmail.style.display = "none";
    flechaFecharEmail.style.display = "block";
}
function flechaFecharEmailF(){
    flechaAbrirEmail.style.display = "block";
    flechaFecharEmail.style.display = "none";
}


function ativarMenuWhatsapp(){
    mostrarItemWhatsapp();
    flechaAbrirWhatsappF();
}
function desativarMenuWhatsapp(){
    retirarItemWhatsapp();
    flechaFecharWhatsappF();
}

function ativarMenuEmail(){
    mostrarItemEmail();
    flechaAbrirEmailF();
}
function desativarMenuEmail(){
    retirarItemEmail();
    flechaFecharEmailF();
}

let copiarTexto = () => {
    //O texto que será copiado
    const texto = document.getElementById("email").innerHTML;
    //Cria um elemento input 
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);
    alert("E-mail copiado para a área de transferência!");
};

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

item1.addEventListener('click', clickItemMenu);
item2.addEventListener('click', clickItemMenu);
item3.addEventListener('click', clickItemMenu);
item4.addEventListener('click', clickItemMenu);