function calcular() {
    // 1. SECCIÓN DE VALIDACIONES
    let esValido = true;

    // Limpiar errores y estilos previos
    document.querySelectorAll('.error-msg').forEach(el => el.innerText = "");
    document.querySelectorAll('input').forEach(el => el.classList.remove('input-error'));

    // Captura de datos
    const ingresos = parseFloat(document.getElementById('txtIngresos').value);
    const egresos = parseFloat(document.getElementById('txtEgresos').value);
    const monto = parseFloat(document.getElementById('txtMonto').value);
    const plazo = parseFloat(document.getElementById('txtPlazo').value);
    const tasa = parseFloat(document.getElementById('txtTasaInteres').value);

    // Validación: Campos obligatorios y números positivos
    if (isNaN(ingresos) || ingresos <= 0) {
        mostrarError('txtIngresos', 'errIngresos', 'Ingrese un monto de ingresos válido');
        esValido = false;
    }
    if (isNaN(egresos) || egresos < 0) {
        mostrarError('txtEgresos', 'errEgresos', 'Ingrese un monto de egresos válido');
        esValido = false;
    }
    if (isNaN(monto) || monto < 500 || monto > 50000) {
        mostrarError('txtMonto', 'errMonto', 'Monto permitido: $500 - $50,000');
        esValido = false;
    }
    if (isNaN(plazo) || plazo < 1 || plazo > 25) {
        mostrarError('txtPlazo', 'errPlazo', 'Plazo permitido: 1 - 25 años');
        esValido = false;
    }
    if (isNaN(tasa) || tasa <= 0 || tasa > 20) {
        mostrarError('txtTasaInteres', 'errTasaInteres', 'Tasa permitida: 1% - 20%');
        esValido = false;
    }

    // Si algo falló, detenemos la ejecución aquí
    if (!esValido) {
        document.getElementById('spnEstadoCredito').innerText = "ERROR EN DATOS";
        document.getElementById('spnEstadoCredito').style.backgroundColor = "#e74c3c";
        return; 
    }

    // 2. SECCIÓN DE CÁLCULOS (Solo se ejecuta si esValido es true)
    const disponible = ingresos - egresos;
    const capacidadPago = disponible * 0.4; // 40% de capacidad
    const meses = plazo * 12;
    const tasaMensual = (tasa / 100) / 12;

    // Fórmula francesa para cuota nivelada
    const cuotaMensual = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
    const totalPrestamo = cuotaMensual * meses;
    const interesPagar = totalPrestamo - monto;

    // 3. MOSTRAR RESULTADOS
    document.getElementById('spnDisponible').innerText = disponible.toFixed(2);
    document.getElementById('spnCapacidadPago').innerText = capacidadPago.toFixed(2);
    document.getElementById('spnInteresPagar').innerText = interesPagar.toFixed(2);
    document.getElementById('spnTotalPrestamo').innerText = totalPrestamo.toFixed(2);
    document.getElementById('spnCuotaMensual').innerText = cuotaMensual.toFixed(2);

    const estado = document.getElementById('spnEstadoCredito');
    if (cuotaMensual <= capacidadPago) {
        estado.innerText = "APROBADO";
        estado.style.backgroundColor = "#2ecc71";
    } else {
        estado.innerText = "NEGADO (Capacidad insuficiente)";
        estado.style.backgroundColor = "#e74c3c";
    }
}

// Función auxiliar para resaltar errores
function mostrarError(inputId, errorId, mensaje) {
    document.getElementById(inputId).classList.add('input-error');
    document.getElementById(errorId).innerText = mensaje;
}