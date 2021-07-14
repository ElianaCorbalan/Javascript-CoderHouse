//Calculadora con resultados por consola
let primerNumero = parseInt(prompt("Ingrese el primer numero"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
let op = prompt("Ingrese la operacion a realizar (+, -, / ,*)");

function calculadora(primerNumero, segundoNumero, op) {
    switch (op) {
        case '+':
            return (primerNumero + segundoNumero);
            break;
        case '-':
            return (primerNumero - segundoNumero);
            break;
        case '*':
            return (primerNumero * segundoNumero);
            break;
        case '/':
            return (primerNumero / segundoNumero);
            break;
        default:
            return 0;
            break;
    }
};

console.log(calculadora(primerNumero, segundoNumero, op));

// Numero divisible
// Inicializo i en 2 para que no tome dividir por 1 el numero ingresado
var numero1 = parseInt(prompt("Escribe un número mayor a 1 para saber sus divisores"));
var i;
for (i=2; i < numero1/2; i++) {
if (numero1 % i === 0) {
console.log("Es divisible por " + i);
    }
};

//Cantidad de dias en el mes
let mes = parseInt(prompt("Ingrese el numero de mes. \n Ejemplo: \nEnero es el mes 1 \n Septiembre es el mes 9"))
if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
    console.log("El mes de " + mes + " Tiene 31 dias");
}else if (mes == 2){
        console.log("Febrero puede tener 28 0 29 dias");
    }else{
    console.log("El mes "+ mes + " Tiene 30 dias");
};

// Promedio de edades

let edad1 = parseInt(prompt("Ingrese la edad de la primer persona"));
let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
let edad3 = parseInt(prompt("Ingrese la edad de la tercer persona"));
let promedio = (edad1 + edad2 + edad3)/3;
console.log("El promedio de las edades ingresadas es " + parseInt(promedio));