const iva = 0.16
let moneda = "$"

function obtenerValores(id) {
    let valor = parseFloat(document.getElementById(id).value);
    if (isNaN(valor)) {
        valor = 0
    }
    return valor;
}

function calcularRetencion() {
    let base = obtenerValores("base-field");
    let exento = obtenerValores("excent-field");
    let porcentaje = obtenerValores("rt-percent");
    let igtf = obtenerValores("igtf-percent");
    moneda = document.getElementById("coin-selector").value;

    let total = (base + (base*iva) + exento);
    let pago = (base + ((base*iva)*porcentaje)) + exento;
    let pago_final = pago + (pago * igtf);

    document.getElementById("total").innerHTML = total.toFixed(2) + " " + moneda;
    document.getElementById("payment").innerHTML = pago_final.toFixed(2) + " " + moneda;
}