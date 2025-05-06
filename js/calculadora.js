let pantalla = document.getElementById("pantalla");
let texto = "";

function agregar(valor) {
    texto += valor;
    mostrar();
}
function limpiar() {
    texto = "";
    mostrar();
}

function borrar() {
    texto = texto.slice(0, -1);
    mostrar();
}

function mostrar() {
    pantalla.innerText = texto === "" ? "0" : texto;
}

// Funciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

// Función para analizar la expresión y calcular
function calcular() {
    let operador = "";
    const operadores = ["+", "-", "*", "/"];

    for (let op of operadores) {
        if (texto.includes(op)) {
            operador = op;
            break;
        }
    }

    if (!operador) {
        pantalla.innerText = "Error";
        texto = "";
        return;
    }

    let partes = texto.split(operador);

    if (partes.length !== 2) {
        pantalla.innerText = "Error";
        texto = "";
        return;
    }

    let a = parseFloat(partes[0]);
    let b = parseFloat(partes[1]);

    if (isNaN(a) || isNaN(b)) {
        pantalla.innerText = "Error";
        texto = "";
        return;
    }

    let resultado;

    if (operador === "+") {
        resultado = sumar(a, b);
    } else if (operador === "-") {
        resultado = restar(a, b);
    } else if (operador === "*") {
        resultado = multiplicar(a, b);
    } else if (operador === "/") {
        resultado = dividir(a, b);
    }

    texto = resultado.toString();
    mostrar();
}

