class Turno {
    constructor(nombreProp,nombreMascota,consulta){
        this.nombre = nombreProp;
        this.mascota = nombreMascota;
        this.consulta = consulta;
    }

    detallesTurno() {
        return "\nNOMBRE DEL PROPIETARIO: "+this.nombre +"\nNOMBRE DE MASCOTA: "+this.mascota + "\nTIPO DE CONSULTA: " + this.consulta+"\n"
    }
}

function crearTurno(){
    let nombreProp = prompt("Ingrese el nombre del propietario");
    let nombreMascota  = prompt("Ingresar nombre de la mascota");
    let consulta = prompt("Ingrese el motivo de su consulta");
    return new Turno( nombreProp, nombreMascota , consulta);
}

let listadoMascotas = [];
let opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR");

while (opcion === "A"){
    listadoMascotas.push(crearTurno());
    opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR");
}

if (listadoMascotas.length > 0){
    for (const turno of listadoMascotas) {
        console.log(turno.detallesTurno());
    }
}
console.log(`El total delos turnos es de ${listadoMascotas.length}`);


