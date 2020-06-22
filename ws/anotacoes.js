JavaScript

Variáveis

const msg = "Olá"
const num1 = 1
const num2 = 2
const soma1 = num1 + num2

// Funcionalidade

function soma() {
    return soma1
}

//const somar = soma()
console.log(soma())

// Recebendo paramêtros

function funcSoma(n1, n2) {
    console.log(n1 + n2);
}

funcSoma(10, 5)

Objeto

const carro = {
    marca: "ford",
    potenciaMotor: 1.8,
    velocidadeMaxima: 180,
    cor: "preto",
    ligar() {
        return "carro ligado"
    }
}

const marca = "fiat"
const potenciaMotor = 1.0
const velocidadeMaxima = 140
const cor = "cinza"
function ligar() {
    return "carro ligado"
}

const carro2 = {
    marca,
    potenciaMotor,
    velocidadeMaxima,
    cor,
    ligar
}

console.log(carro);
console.log(carro.ligar())

// Coleção

const latinhas = [
    {marca: "coca"},
    {marca: "pepsi"},
]