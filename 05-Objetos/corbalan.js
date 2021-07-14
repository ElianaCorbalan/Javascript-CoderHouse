class Turno {
    constructor(nombreProp,nombreMascota,consulta){
        this.nombre = nombreProp;
        this.mascota = nombreMascota;
        this.consulta = consulta;
    }
    detallesTurno() {
        return "NOMBRE DEL PROPIETARIO: "+this.nombre +"\nNOMBRE DE MASCOTA: "+this.mascota + "\nTIPO DE CONSULTA: " + this.consulta+"\n"
    }
}

function crearTurno(){
    let nombreProp = prompt("Ingrese el nombre del propietario");
    let nombreMascota  = prompt("Ingresar nombre de la mascota");
    let consulta = prompt("Ingrese el motivo de su consulta");
    return new Turno( nombreProp, nombreMascota , consulta);
}

let opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR");
let listadoMascotas = [];

let total = "Listado de pacientes del dia de hoy:\n";
while (opcion === "A"){
    listadoMascotas.push(crearTurno());
    opcion = prompt("INGRESAR (A) PARA CARGAR UNA MASCOTA \n PRESIONAR OTRA TECLA PARA SALIR");
}
if (listadoMascotas.length > 0){
    for (const turno of listadoMascotas) {
        total += turno.detallesTurno();
    }
    console.log(total);
}

let turnos = new Turno("Eliana", "Byte", "Aplicacion de vacunas" )
console.log(turnos.detallesTurno());


