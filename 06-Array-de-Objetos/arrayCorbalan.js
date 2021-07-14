class Turno {
    constructor(propietario, mascota, tipo, reserva) {
        this.propietario = propietario;
        this.mascota = mascota;
        this.reserva = reserva;
        this.tipo = tipo;
    }
}

class Veterinaria {
    constructor(nombre) {
        this.nombre = nombre;
        this.pacientes = []
    }
    agregarPaciente(p) {
        this.pacientes.push(p);
    }
}

//////////////////////
let veterinaria1 = new Veterinaria("Los bytes");

veterinaria1.agregarPaciente(new Turno("Hector", "roco", "gato", 1));
veterinaria1.agregarPaciente(new Turno("Gino", "pelu", "perro", 4));
veterinaria1.agregarPaciente(new Turno("Maria", "moro", "conejo", 6));
veterinaria1.agregarPaciente(new Turno("Franco", "pepito", "perro", 3));
veterinaria1.agregarPaciente(new Turno("Lucas", "blanqui", "perro", 5));
veterinaria1.agregarPaciente(new Turno("Laura", "drako", "ave", 2));

//cantidad de pacientes perros
let pacientesPerros = veterinaria1.pacientes.filter(pac => pac.tipo == "perro");
console.log(pacientesPerros.length);

//renombre de tipo ave a pajaro
let nuevoArrayModificado = veterinaria1.pacientes.map(p => {
    if (p.tipo == "ave") {
        p.tipo = "pajaro"
        return p
    } else {
        return p
    }
})
console.log(nuevoArrayModificado)

//Prioridad a conejos
let turnoCero = veterinaria1.pacientes.map(p => {
    if (p.tipo == "conejo") {
        p.reserva = 0
        return p
    } else {
        return p
    }
})
console.log(turnoCero)

//ordenar de menor a mayor los turnos
let ordenado = veterinaria1.pacientes.sort((a, b) => a.reserva - b.reserva);
console.log(ordenado)