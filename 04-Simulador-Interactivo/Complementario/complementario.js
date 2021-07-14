//Calculadora con resultados por consola
let a = parseInt(prompt("Ingrese el primer numero"));
let b = parseInt(prompt("Ingrese el segundo numero"));
let op = prompt("Ingrese la operacion a realizar (+, -, / ,*)");

function calculadora(a, b, op) {
    switch (op) {
        case '+':
            return sumar(a,b);
            break;
        case '-':
            return restar(a,b);
            break;
        case '*':
            return multiplicar(a,b);
            break;
        case '/':
            return dividir(a,b);
            break;
        default:
            return 0;
            break;
    }
};

const sumar = (a, b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

console.log(calculadora(a,b,op));


// function sumar(a, b) {
//     return (a + b)
// };

// function restar(a, b) {
//     return (a - b)
// };

// function multiplicar(a, b) {
//     return (a * b)
// };

// function dividir(a, b) {
//     return (a / b)
// };


