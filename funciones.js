
funciones.js

 

//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos){

    let disponible = ingresos - egresos;

    if(disponible < 0){

        disponible = 0;

    }

    return disponible;

}

 

function calcularCapacidadDePago(montoDisponible){

    let capasidadDePago = montoDisponible / 2;

 

    return capasidadDePago;

}

 

function texto (id,vari){

    let texto1 = document.getElementById(id);

    texto1.innerText=vari.toFixed(2);    

}

