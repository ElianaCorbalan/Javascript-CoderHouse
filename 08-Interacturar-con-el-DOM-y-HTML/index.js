class Turno {
    constructor(propietario,mascota,consulta){
        this.nombre = propietario;
        this.mascota = mascota;
        this.consulta = consulta;
    }

    detallesTurno() {
        return "\nNOMBRE DEL PROPIETARIO: "+this.nombre +"\nNOMBRE DE MASCOTA: "+this.mascota + "\nTIPO DE CONSULTA: " + this.consulta+"\n"
    }
}

function crearTurno(){
    let propietario = prompt("Ingrese el nombre del propietario");
    let mascota  = prompt("Ingresar nombre de la mascota");
    let consulta = prompt("Ingrese el motivo de su consulta");
    return new Turno( propietario, mascota , consulta);
}

let listadoMascotas = [];
let opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR").toUpperCase();

while (opcion === "A"){
    listadoMascotas.push(crearTurno());
    opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR").toUpperCase();
}

if (listadoMascotas.length > 0){
    for (const turno of listadoMascotas) {
        console.log(turno.detallesTurno());
    }
}

//GUARDAR EN LOCAL STORAGE
localStorage.setItem("usuario", JSON.stringify(listadoMascotas));
//OBTENER LA INFORMACION DEL OBJETO
localStorage.getItem("usuario");

//Cambiar el titulo original
document.getElementById("titulo").innerHTML = "Nuevo titulo de veterinaria";

// Crear etiqueta para mostrar el total de los turnos asignados en el HTML.
let mostrarTotal = document.createElement("p");
// Insertar HTML interno
mostrarTotal.innerHTML = `<h3 class="text-center">El total de los turnos es de ${listadoMascotas.length}</h3>`; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(mostrarTotal);