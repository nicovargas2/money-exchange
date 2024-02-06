/*  Declarar monedas
    Declarar tipo de conversion respecto a dolar USA
    Usar ArrowFunction para operaciones matematicas

    contener un if o switch
    condiciones
    while o for
    funciones
    
   */

const cantidadMinima = 100.0
const dolar = 1
const pesoArgentino = 826.71
const pesoChileno = 932.08
const real = 4.91

const resta = (paramA, paramB) => paramA - paramB

const suma = (paramA, paramB) => paramA + paramB

const multiplicacion = (paramA, paramB) => paramA * paramB

const division = (paramA, paramB) => { if (paramB != 0) { return paramA / paramB } else { return 'Error, no se puede dividir por 0.' } }

const validarCantidadMinima = (cantidad) => cantidad < cantidadMinima

function getMoneda(opcion) {
    switch (opcion) {
        case '1':
            return 'ARS $'
        case '2':
            return 'CHL $'
        case '3':
            return 'R$ '
    }
}

function usuarioIngreseCantidad() {
    mensaje = 'Ingrese cantidad de dolares que quiere vender'
    let cantidadIngresada = prompt(mensaje)
    while (validarCantidadMinima(cantidadIngresada)) {
        alert('Monto ingresado inferior al minimo USD $ ' + cantidadMinima)
        mensaje = 'Ingrese cantidad de dolares que quiere vender'
        cantidadIngresada = prompt(mensaje)
    }
    return cantidadIngresada
}

function convertirDolarAPesoArg() {
    c = usuarioIngreseCantidad()
    cantidad = parseFloat(c)
    resultado = multiplicacion(cantidad, pesoArgentino)
    mensaje = 'La cantidad de pesos argentinos que le corresponde es $' + resultado
    alert(mensaje)
    return resultado
}

function convertirDolarAPesoChl() {
    c = usuarioIngreseCantidad()
    cantidad = parseFloat(c)
    resultado = multiplicacion(cantidad, pesoChileno)
    mensaje = 'La cantidad de pesos chilenos que le corresponde es $' + resultado
    alert(mensaje)
    return resultado
}

function convertirDolarAReales() {
    c = usuarioIngreseCantidad()
    cantidad = parseFloat(c)
    resultado = multiplicacion(cantidad, real)
    mensaje = 'La cantidad de reales que le corresponde es R$' + resultado
    alert(mensaje)
    return resultado
}

function comenzar() {
    let mensaje = 'Ingrese una opción para hacer su conversión: \n 1- a pesos argentinos \n 2- a pesos chilenos \n 3- a reales'
    const opcion = prompt(mensaje)
    let tot = 0.0
    switch (opcion) {
        case '1':
            tot = convertirDolarAPesoArg()
            break;
        case '2':
            tot = convertirDolarAPesoChl()
            break;
        case '3':
            tot = convertirDolarAReales()
            break;
        default:
            alert('Opción incorrecta.')
            break;
    }

    if (tot != 0.0) {
        mensaje = getMoneda(opcion)
        mensaje += tot.toString()
        console.log(mensaje)
    }
}
