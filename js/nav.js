/*declaraciones*/
const forms = document.querySelector('#forms');
const btn_btnKc = document.querySelector('#btnKc');
const btn_btnCf = document.querySelector('#btnCf');
const btn_btnFc = document.querySelector('#btnFc');
const btn_btnCk = document.querySelector('#btnCk');
const btn_btnKf = document.querySelector('#btnKf');
const btn_btnFk = document.querySelector('#btnFk');
const respuestatxt1_nav = document.getElementById('respuesta1txt');
const respuestatxt2_nav = document.getElementById('respuesta2txt');
const respuestatxt3_nav = document.getElementById('respuesta3txt');
const respuestatxt4_nav = document.getElementById('respuesta4txt');
const respuestatxt5_nav = document.getElementById('respuesta5txt');
const respuestatxt6_nav = document.getElementById('respuesta6txt');
const imput1 = document.getElementById('txt-Kc');
const imput2 = document.getElementById('txt-Cf');
const imput3 = document.getElementById('txt-Fc');
const imput4 = document.getElementById('txt-Ck');
const imput5 = document.getElementById('txt-Kf');
const imput6 = document.getElementById('txt-Fk');

/*declaraciones*/


/*Navegacion*/
btn_btnKc.addEventListener('click', Kc);
btn_btnCf.addEventListener('click', Cf);
btn_btnFc.addEventListener('click', Fc);
btn_btnCk.addEventListener('click', Ck);
btn_btnKf.addEventListener('click', Kf);
btn_btnFk.addEventListener('click', Fk);
/*Navegacion*/


/*funciones de navegacion*/
function Kc(){
    forms.style.marginLeft = "0";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
function Cf(){
    forms.style.marginLeft = "-100%";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
function Fc(){
    forms.style.marginLeft = "-200%";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
function Ck(){
    forms.style.marginLeft = "-300%";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
function Kf(){
    forms.style.marginLeft = "-400%";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
function Fk(){
    forms.style.marginLeft = "-500%";
    forms.style.transition = "all 0.5s";
    limpiarAll();
}
/*funciones de navegacion*/


function limpiarAll(){
    respuestatxt1_nav.style.display = "none";
    respuestatxt2_nav.style.display = "none";
    respuestatxt3_nav.style.display = "none";
    respuestatxt4_nav.style.display = "none";
    respuestatxt5_nav.style.display = "none";
    respuestatxt6_nav.style.display = "none";
    imput1.value= "";
    imput2.value= "";
    imput3.value= "";
    imput4.value= "";
    imput5.value= "";
    imput6.value= "";
    
}