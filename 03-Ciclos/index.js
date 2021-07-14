// //Mostrar los numeros consecutivos
let numero = parseInt(prompt("Ingrese un numero del 1 al 10"));

while(numero < 10) {
    numero++;
    console.log(numero);
}

// //Hacer un promedio de notas
let nombre = prompt("Ingrese su nombre");

console.log("Hola "+ nombre + " Ahora vamos a ver el promedio de tus notas");
let nota1 = parseInt(prompt("ingrese primer nota"));
let nota2 = parseInt(prompt("ingrese segunda nota"));
let nota3 = parseInt(prompt("ingrese tercer nota"));

suma = nota1 + nota2 + nota3;
promedio = suma/3;

if (promedio >= 7) { 
    console.log('Promocionado. La nota es de ' + promedio); 
}else {
    console.log("Debe recursar. La nota es de " + promedio);
}

// //Pedir ingresar un nombre, mostrar la posicion hasta ingresar ESC
for (let i = 1; i<=5; i++) {
    let ingresarNombre = prompt("Ingrese los nombres de las mascotas ");   
    if(ingresarNombre == "ESC"){
        console.log("Hasta la proxima");
    }else {
    console.log("Mascota Nro"+ i + ":" + ingresarNombre );
    }
};

//Mostrar 'Hola' la cantidad de veces ingresada
let veces = parseInt(prompt("Ingrese un numero"));
let texto = "Hola";

for(let i=1; i<=veces; i++){
console.log(texto);
};