class Turno {
    constructor(propietario,mascota,consulta){
        this.nombre = propietario;
        this.mascota = mascota;
        this.consulta = consulta;
    }
}

//cargar array
let turnos=  [];

//selector
const boton_agregar = document.getElementById('boton_agregar');


//Funcion para capturar los datos de los imputs
    function guardar(){

        var propietario = document.getElementById("propietario").value;
        var mascota= document.getElementById("mascota").value;
        var consulta = document.getElementById("consulta").value;
        //condicion para no enviar datos vacios
        if(propietario.trim()==''){
            alert("Ingrese nombre del propietario");
            return false;
        }
        
        if(mascota.trim()==''){
            alert("Ingrese nombre de la mascota");
            return false;
        }
        if(consulta.trim()==''){
            alert("Ingrese datos de la consulta");
            return false;
        }
        
        let listadoTurnos = JSON.parse(localStorage.getItem('turnos'))
        //Condicion para guardar el objeto
        if(localStorage.getItem('turnos') != null){
            let turno = new Turno( propietario, mascota , consulta);
            listadoTurnos.push(turno);
            localStorage.setItem('turnos', JSON.stringify(listadoTurnos));
        }else {
            localStorage.clear()
            let turno = new Turno( propietario, mascota , consulta);
            turnos.push(turno);
            //guardo en local storage
            localStorage.setItem('turnos',JSON.stringify(turnos))
        }

        //Listar en la tabla
        turno = `<tr>
                    <td>${propietario}</td>
                    <td>${mascota}</td>
                    <td>${consulta}</td>
                    </tr>`
        var crearCliente = document.createElement("tr");
        crearCliente.innerHTML=turno;
        document.getElementById("tabla-datos").appendChild(crearCliente);
}


//Guardar al hacer click
boton_agregar.addEventListener("click", guardar)
