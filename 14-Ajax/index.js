class Turno {
    constructor(propietario, mascota, consulta) {
        this.propietario = propietario;
        this.mascota = mascota;
        this.consulta = consulta;
    }
}

//Funcion para cargar los datos cacheados desde el inicio
function actualizarTabla() {
    //limpio tabla
    $('#tabla-datos').empty()
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
            $("#tabla-datos").prepend(turnoHTML);
        });
    }
}

//Funcion para capturar los datos de los imputs
function guardar(e) {
    e.preventDefault();

    let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
    // si no encuentra el elemento en cache te inicializa el array vacio
    if (listadoTurnos == null) listadoTurnos = []
    let turno = new Turno($("#propietario").val(), $("#mascota").val(), $("#consulta").val());
    listadoTurnos.push(turno);
    localStorage.setItem('turnos', JSON.stringify(listadoTurnos));
    actualizarTabla();
}

function eliminar(index) {
    //obtener al array cache
    let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
    //borrar del array 
    listadoTurnos.splice(index, 1);
    //pisar los datos con el array y el elemento borrado
    localStorage.setItem('turnos', JSON.stringify(listadoTurnos));
    //actualizo vista
    actualizarTabla();
}

//Guardar al hacer click 
$("#boton_agregar").click((e) => {
    if ($("#propietario").val() != "" && $("#mascota").val() != "" && $("#consulta").val() != "") {
        swal("Good job!", "You clicked the button!", "success");
        guardar(e)
    }
});

actualizarTabla();

///////////////////////////AJAX///////////////////////////////////////
const URL = "https://dog.ceo/api/breeds/image"

$("#mostrarFotos").click(()=> {
    console.log("entro2")
    $.get(`${URL}/random/10`, function(res, state){
        if(state === "success") {
            console.log(res);
            for(const message of res.message) {
                $(".fila2").append(`
                                <div class="card col-sm-2 m-1">
                                    <img src="${message}"/>
                                </div>`)
            }
        }
    });
});

$("#cerrarBtn2").click(() => { 
    $(".card").slideUp("fast");
});

