
let numero = parseInt(prompt("Digite un numero mayor a 1000 "));
if(numero >1000){
    alert("Excelente! numero mayor a 1000")
} else {
    alert("Numero incorrecto, no es mayor a 1000")
};

let texto = prompt("Ingrese un texto y/o la palabra 'Hola' ");
if(texto ==="Hola"){
    console.log("Hola!")
}else {
    alert("Upss la palabra ingresada no es Hola")
};

let numeroIngresado = parseInt(prompt("Ingrese un numero entre 10 y 50"));
if (numeroIngresado >= 10 && numeroIngresado <= 50){
    alert("Muy bien el numero ingresado es "+ numeroIngresado)
}else {
    alert("El numero NO esta entre 10 y 50");
};

