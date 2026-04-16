

 

//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos){

    let disponible = ingresos - egresos;

    if(disponible < 0){

        disponible = 0;

    }

    return disponible;

}

 

function calcularCapacidadDePago(montoDisponible){

    let capacidadDePago = montoDisponible / 2;

 

    return capacidadDePago;

}

 

function texto (id,vari){

    let texto1 = document.getElementById(id);

    texto1.innerText=vari.toFixed(2);    

}

function calcularInteresSimple(monto,tasa, plazo){
    let interes = monto * (tasa/100) * plazo;

    return interes;
}
 function calcularTotalPagar(monto, interes){
    return monto+ interes+100;
 }

 function calcularCuotaMensual(total, plazo){
    let meses = plazo *12;
    return total/meses;
 }

 function aprobarCredito(capacidadPago , cuotaMensual){
    return capacidadPago >= cuotaMensual;
 }