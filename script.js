/*
    agregar objetos, arrays y metodos de busqueda
    o de orden superior, map foreach filter, find, some, al menos 2
    sort, reduce, alguno de todos
 */

function Moneda(codigoDeMoneda, nombreDeMoneda, nombreAbreviado, tipoDeConversionCompra, tipoDeConversionVenta) {
    this.codigoDeMoneda = codigoDeMoneda;
    this.nombreDeMoneda = nombreDeMoneda;
    this.nombreAbreviado = nombreAbreviado
    this.tipoDeConversionCompra = tipoDeConversionCompra;
    this.tipoDeConversionVenta = tipoDeConversionVenta;
}

const monedaArg = new Moneda('032', 'Peso Argentino', 'ARS$', 1065.0, 1085.0)
const monedaChile = new Moneda('152', 'Peso Chileno', 'CHL$', 899.05, 932.08)
const monedaBrasil = new Moneda('076', 'Real', 'R$', 4.51, 5.00)
const monedaDolar = new Moneda('840', 'Dolar', 'USD$', 1.00, 1.00)

//El dolar no se incluye porque es la moneda referencia
const monedas = [monedaArg, monedaChile, monedaBrasil]

function monedaCaja(nombreAbreviado, cantidad) {
    this.nombreAbreviado = nombreAbreviado
    this.cantidad = cantidad
}

const moneda1 = new monedaCaja('ARS$', 9999)
const moneda2 = new monedaCaja('CHL$', 8888)
const moneda3 = new monedaCaja('R$', 7777)
const moneda4 = new monedaCaja('USD$', 5000)

const montosCaja = [moneda1, moneda2, moneda3, moneda4]
console.log(montosCaja)

const cantidadMinima = 20.0

const resta = (paramA, paramB) => parseFloat(paramA - paramB)
const suma = (paramA, paramB) => paramA + paramB
const multiplicacion = (paramA, paramB) => paramA * paramB
const validarCantidadMinima = (cantidad) => cantidad < cantidadMinima

function armarMensaje(opcion, totalMontoDeCompra) {
    let monedaAbreviada = monedas[opcion - 1].nombreAbreviado
    mensaje = 'La cantidad de ' + monedaAbreviada + ' es: ' + totalMontoDeCompra.toString()
    return mensaje
}

function usuarioIngreseCantidad() {
    let cantidadFloat = 0.0
    let cantidadOK = false

    do {
        let cantidadIngresada = prompt('Ingrese cantidad de dolares que quiere vender o 0 para salir')
        cantidadFloat = parseFloat(cantidadIngresada)
        if (cantidadFloat != 0.0) {
            if (validarCantidadMinima(cantidadFloat)) {
                alert("No alcanza el minimo.")
            } else {
                cantidadOK = true
            }
        }
    } while (!cantidadOK);

    return cantidadFloat
}

function convertir(posicionMoneda) {
    c = usuarioIngreseCantidad()
    let resultado = 0.0
    if (c > 0) {
        resultado = multiplicacion(c, monedas[posicionMoneda - 1].tipoDeConversionCompra)
    }

    return resultado
}

function menuPrincipal() {
    let mensaje = 'Ingrese una opción para hacer su conversión o 0 para salir: \n'
    monedas.forEach((m, index) => {
        mensaje = mensaje + (index + 1).toString() + '- ' + m.nombreDeMoneda + '\n'
    })
    return mensaje
}

function compra() {
    let opcion
    //valor de dolares que vende el cliente y la cantidad que la plataforma está comprando
    let totalMontoDeCompra = 0.0
    let continuar = false
    let mensaje = menuPrincipal()
    do {
        opcion = prompt(mensaje)
        switch (opcion) {
            case '0':
                continuar = true
                break;
            case '1':
                totalMontoDeCompra = convertir(parseInt(opcion))
                continuar = true
                break;
            case '2':
                totalMontoDeCompra = convertir(parseInt(opcion))
                continuar = true
                break;
            case '3':
                totalMontoDeCompra = convertir(parseInt(opcion))
                continuar = true
                break;
            default:
                alert('Opción incorrecta.')
                continuar = false
                break;
        }

        if (continuar) {
            if (totalMontoDeCompra != 0) {
                let mensajeAUsuario = armarMensaje(opcion, totalMontoDeCompra)
                alert(mensajeAUsuario)
            }
            else {
                if (totalMontoDeCompra == 0.0) {
                    alert('Operacion cancelada')
                }
            }
        }

    } while (!continuar);

    if (totalMontoDeCompra > 0.0) {
        actualizarCaja('VentaDolares', totalMontoDeCompra, opcion)
    }
    else {
    }
}


function venta() {
    alert('funcionalidad en construccion')
}

function actualizarCaja(operacion, totalMontoDeCompra, monedaPosicion) {
    if (operacion == 'VentaDolares') {
        const nombreAbreviadoEncontrado = monedas[monedaPosicion - 1].nombreAbreviado

        let mCaja = montosCaja.filter(m => m.nombreAbreviado == nombreAbreviadoEncontrado)
        cantidadActual = mCaja[0].cantidad

        cantidadActual = resta(parseFloat(cantidadActual), parseFloat(totalMontoDeCompra))
        montosCaja.forEach((monedaEnCaja) => {
            if (monedaEnCaja.nombreAbreviado == nombreAbreviadoEncontrado) {
                monedaEnCaja.cantidad = cantidadActual
            }
        }
        )
    }
    console.log(montosCaja)
}