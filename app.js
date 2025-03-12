
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en  ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //si el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El Numero Secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();//limpia la caja donde escribi el intento.
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    limpiarListaNumerosSorteados();
    //Si el numero generado esta inlcuido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function limpiarListaNumerosSorteados(){
    if (listaNumerosSorteados.length == numeroMaximo){
        listaNumerosSorteados = [ ];
return;
}
}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Ingresa un numero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio, intervalo de numeros
    condicionesIniciales();
    //generar numero aleatorio 
    //Inicializar numero de intentos
    //deshabilitar boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();

