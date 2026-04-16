//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

 

function calcular() {

 let ingresos = parseFloat(document.getElementById("txtIngresos").value);

 let egresos = parseFloat(document.getElementById("txtEgresos").value);

 let disponible = calcularDisponible(ingresos, egresos);

 texto("spnDisponible", disponible);

let capacidadDePago = calcularCapacidadDePago(disponible);

 texto("spnCapacidadPago", capacidadDePago);

 let monto= parseInt(document.getElementById('txtMonto').value);
 let plazo= parseInt(document.getElementById('txtPlazo').value);
 let tasa= parseInt(document.getElementById('txtTasaInteres').value);

 let interesGenerado = calcularInteresSimple(monto,tasa, plazo);
 texto("spnInteresPagar" , interesGenerado);

 let total = calcularTotalPagar(monto , interesGenerado);
 texto("spnTotalPrestamo" , total);
 
 let cuota = calcularCuotaMensual(total , plazo);
 texto("spnCuotaMensual" , cuota);

 let esAprobado = aprobarCredito(capacidadDePago , cuota); 
 let elementoEstado = document.getElementById("spnEstadoCredito");

 if(esAprobado){
    elementoEstado.innerText ="CREDITO APROBADO";
 } else{
    elementoEstado.innerText= "CREDITO RECHAZADO";
 }

}
