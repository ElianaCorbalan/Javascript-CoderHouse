    
    function guardar(){

    var propietario = document.getElementById("propietario").value;
    var mascota= document.getElementById("mascota").value;
    var consulta = document.getElementById("consulta").value;

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

    //Listar en la tabla
    var fila="<tr><td>"+propietario+"</td><td>"+mascota+"</td><td>"+consulta+"</td></tr>";
    var crearCliente = document.createElement("tr");
    crearCliente.innerHTML=fila;
    document.getElementById("tabla-datos").appendChild(crearCliente);
}

  //Guardar al hacer click
    boton_agregar.addEventListener("click", guardar)


// document.getElementById("propietario").value = "Eli";
// document.getElementById("mascota").value   = "Byte";
// document.getElementById("consulta").value   = "Vacunas";

//Evento FOCUSIN o BLUR
