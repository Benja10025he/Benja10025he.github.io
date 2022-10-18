/*convertir temperaturas*/ 
const btn_btnKcResul = document.getElementById('btnResultKc');
const btn_btnCfResul = document.getElementById('btnResultCf');
const btn_btnFcResul = document.getElementById('btnResultFc');
const btn_btnCkResul = document.getElementById('btnResultCk');
const btn_btnKfResul = document.getElementById('btnResulKf');
const btn_btnFkResul = document.getElementById('btnResulFk');

let numeroGrados;
let resul_operation;
let respuestatxt;

/*btn convertions*/
btn_btnKcResul.addEventListener('click',KcResult);
btn_btnCfResul.addEventListener('click',CfResult);
btn_btnFcResul.addEventListener('click',FcResult);
btn_btnCkResul.addEventListener('click',CkResult);
btn_btnKfResul.addEventListener('click',KfResult);
btn_btnFkResul.addEventListener('click',FkResult);








/* -----------------convertions--------------------------------*/
function KcResult(){
    respuestatxt = document.getElementById('respuesta1txt');
    respuestatxt.style.display = 'block';
    let numeroGrados = document.getElementById('txt-Kc');
    numeroGrados=parseFloat(document.getElementById('txt-Kc').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if(isNaN(numeroGrados)){
        respuestatxt.innerHTML= ' <i class="fa-solid fa-circle-up"></i> Coloca los °K';
    }else{
        resul_operation = ((numeroGrados - 273.5).toFixed(4));
        console.log(resul_operation);
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °K = ' + resul_operation +' °C';
    }
}

function CfResult(){
    respuestatxt = document.getElementById('respuesta2txt');
    respuestatxt.style.display = 'block';
    let numeroGrados = parseFloat(document.getElementById('txt-Cf').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if(isNaN(numeroGrados)){
        respuestatxt.innerHTML = '<i class="fa-solid fa-circle-up"></i> Coloca los °C';
    }else{
        resul_operation = (((9*numeroGrados)/5)+32).toFixed(4);
        console.log(resul_operation)
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °C = ' + resul_operation +' °F'; 
    }
}

function FcResult(){
    respuestatxt = document.getElementById('respuesta3txt');
    respuestatxt.style.display = "block";
    let numeroGrados = parseFloat(document.getElementById('txt-Fc').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if (isNaN(numeroGrados)) {
        respuestatxt.innerHTML = '<i class="fa-solid fa-circle-up"></i> Coloca los °F';
    }else{
        resul_operation = (( 5 * (numeroGrados-32))/9).toFixed(4);
        console.log(resul_operation);
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °F = ' + resul_operation +' °C'; 
    }
     
}

function CkResult(){
    respuestatxt = document.getElementById('respuesta4txt');
    respuestatxt.style.display = "block";
    let numeroGrados = parseFloat(document.getElementById('txt-Ck').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if (isNaN(numeroGrados)) {
        respuestatxt.innerHTML = '<i class="fa-solid fa-circle-up"></i> Coloca los °C';
    }else{
        resul_operation = (numeroGrados+273.15).toFixed(4);
        console.log(resul_operation);
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °C = ' + resul_operation +' °K';
    }
}

function KfResult(){
    respuestatxt = document.getElementById('respuesta5txt');
    respuestatxt.style.display = "block";
    let numeroGrados = parseFloat(document.getElementById('txt-Kf').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if (isNaN(numeroGrados)) {
        respuestatxt.innerHTML = '<i class="fa-solid fa-circle-up"></i> Coloca los °K';
    }else{
        resul_operation = (((9*(numeroGrados-273.15))/5)+32).toFixed(4);
        console.log(resul_operation);
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °K = ' + resul_operation +' °F';
    }
}

function FkResult(){
    respuestatxt = document.getElementById('respuesta6txt');
    respuestatxt.style.display = "block";
    let numeroGrados = parseFloat(document.getElementById('txt-Fk').value);
    console.log(numeroGrados);
    console.log(typeof(numeroGrados));
    if (isNaN(numeroGrados)) {
        respuestatxt.innerHTML = '<i class="fa-solid fa-circle-up"></i> Coloca los °F';
    }else{
        resul_operation = (((5*(numeroGrados-32))/9)+273.15).toFixed(4);
        console.log(resul_operation);
        respuestatxt.innerHTML= '<i class="fa-solid fa-square-poll-horizontal"></i> '+numeroGrados + ' °F = ' + resul_operation +' °K';
    }
}

