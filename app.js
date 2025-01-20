let numeroSecreto;
let intentos;
const numeroMaximo = 100;
const intentosMaximos = 5;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(intentos <= intentosMaximos){

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos > 1) ? "intentos" : "intento"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }

        limpiarCaja();
        intentos++;
    }
} else{
    asignarTextoElemento("p", "Has alcanzado el número de intentos maximos");
    document.getElementById("reiniciar").removeAttribute("disabled");
}

}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

condicionesIniciales();