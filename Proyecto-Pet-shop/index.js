class Turno {
    constructor(propietario, mascota, consulta) {
        this.propietario = propietario;
        this.mascota = mascota;
        this.consulta = consulta;
    }
}

//selector
const boton_agregar = document.getElementById('boton_agregar');

    //Funcion para cargar los datos cacheados desde el inicio
    function actualizarTabla() {
        //limpio tabla
        let elementoTabla = document.getElementById("tabla-datos")
        elementoTabla.textContent = '';
        //inserto elementos del local storage
        let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
        if (listadoTurnos != null && listadoTurnos.length > 0) {
            //Listar en la tabla
            listadoTurnos.forEach(turno => {
                let turnoHTML = `<tr>
                        <td>${turno.propietario}</td>
                        <td>${turno.mascota}</td>
                        <td>${turno.consulta}</td>
                        <td><button id="boton_eliminar" type="button" onclick="eliminar(${listadoTurnos.indexOf(turno)})" class=" far fa-trash-alt btn btn-danger"></button></td>
                        </tr>`
                var crearCliente = document.createElement("tr");
                crearCliente.innerHTML = turnoHTML;
                document.getElementById("tabla-datos").appendChild(crearCliente);
            });
        }
    }

//Funcion para capturar los datos de los imputs
function guardar() {
    var propietario = document.getElementById("propietario").value;
    var mascota = document.getElementById("mascota").value;
    var consulta = document.getElementById("consulta").value;
    //condicion para no enviar datos vacios
    if (propietario.trim() == '') {
        alert("Ingrese nombre del propietario");
        return false;
    }
    if (mascota.trim() == '') {
        alert("Ingrese nombre de la mascota");
        return false;
    }
    if (consulta.trim() == '') {
        alert("Ingrese datos de la consulta");
        return false;
    }
    let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
    // si no encuentra el elemento en cache te inicializa el array vacio
    if(listadoTurnos == null) listadoTurnos = []  
    let turno = new Turno(propietario, mascota, consulta);
    listadoTurnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(listadoTurnos));
    //Listar en la tabla
    let turnoHTML = `<tr>
                    <td>${propietario}</td>
                    <td>${mascota}</td>
                    <td>${consulta}</td>
                    <td><button id="boton_eliminar" type="button" onclick="eliminar(${listadoTurnos.indexOf(turno)})" class=" far fa-trash-alt btn btn-danger"></button></td>
                    </tr>`
    var crearCliente = document.createElement("tr");
    crearCliente.innerHTML = turnoHTML;
    document.getElementById("tabla-datos").appendChild(crearCliente);
}

function eliminar(index) {
    //obtener al array cache
    let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
    //borrar del array 
    listadoTurnos.splice(index, 1);
    //pisar los datos con el array y el elemento borrado
    localStorage.setItem('turnos', JSON.stringify(listadoTurnos));
    //eliminar del array cache
    actualizarTabla();
}


//Guardar al hacer click
boton_agregar.addEventListener("click", guardar)

actualizarTabla();