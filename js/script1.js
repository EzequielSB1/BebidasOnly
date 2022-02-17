// declarado de variables por tipo de bebida.

let nombreP1 = 'Fernet';
let numeroP1 = '1';

let nombreP2 = 'Vino tinto';
let numeroP2 = '2';

let nombreP3 = 'Vino blanco';
let numeroP3 = '3';

// producto Fernet.
let nombreF1 = 'Branca';
let stockF1 = 150;
let precioF1 = 750;
let numeroF1 = '1';

let nombreF2 = 'Branca menta';
let stockF2 = 200;
let precioF2 = 500;
let numeroF2 = '2';

let nombreF3 = '1882';
let stockF3 = 175; 
let precioF3 = 425;
let numeroF3 = '3';

let nombreF4 = 'Lata 1882';
let stockF4 = 600;
let precioF4 = 150;
let numeroF4 = '4';

let nombreF5 = 'Vittone';
let stockF5 = 500;
let precioF5 = 200;
let numeroF5 = '5';

let instruccionFernet = 'Elija el numero del producto que desea para continuar, por ejemplo si quiere el fernet branca escriba el numero 1'


// producto vino tinto.

let nombreVT1 = 'Alma mora';
let stockVT1 = 500;
let precioVT1 = 450;
let numeroVT1 = '1';

let nombreVT2 = 'Protillo';
let stockVT2 = 250;
let precioVT2 = 300;
let numeroVT2 = '2';

let nombreVT3 = 'Callia';
let stockVT3 = 600;
let precioVT3 = 350;
let numeroVT3 = '3';

let nombreVT4 = 'Elemento';
let stockVT4 = 700;
let precioVT4 = 550;
let numeroVT4 = '4';

let nombreVT5 = 'Finca de las moras';
let stockVT5 = 400;
let precioVT5 = 600;
let numeroVT5 = '5';

let intruccionVinoTinto = 'Elija el numero del producto que desea para continuar, por ejemplo si quiere el vino alma mora escriba el numero 1'

// producto vino blanco.

let nombreVB1 = 'Portillo';
let stockVB1 = 200;
let precioVB1 = 150;
let numeroVB1 = '1';

let nombreVB2 = 'benjamin';
let stockVB2 = 500;
let precioVB2 = 320;
let numeroVB2 = '2';

let nombreVB3 = 'Estancia mendoza';
let stockVB3 = 235;
let precioVB3 = 200;
let numeroVB3 = '3';

let nombreVB4 = 'Emilia';
let stockVB4 = 500;
let precioVB4 = 450;
let numeroVB4 = '4';

let nombreVB5 = 'Dilema';
let stockVB5 = 600;
let precioVB5 = 300;
let numeroVB5 = '5';

let intruccionVinoBlanco = 'Elija el numero del producto que desea para continuar, por ejemplo si quiere el vino portillo escriba el numero 1'

// operacion de los datos.



let precioTotal = 0;

let continuar = 'si'

function ustedDeseaComprar(numero1, nombre1, numero2, nombre2, numero3, nombre3, numero4, nombre4, numero5, nombre5, instruccion) {
    alert('Usted desea: \n' + numero1 + '. ' + nombre1 + '. \n' + numero2 + '. ' + nombre2 + '. \n' + numero3 + '. ' + nombre3 + '. \n' + numero4 + '. ' + nombre4 + '. \n' + numero5 + '. ' + nombre5 + '. \n' + instruccion + '.')    
}

function eleccionProducto(nombreP, nombreFTB, precioFTB, cantidadFTB, stockFTB, precioDeLaCompra) {

    if ( stockFTB >= cantidadFTB ) {
        
        stockFTB -= cantidadFTB;
        
        console.log('despues de la compra este es el stock disponible ' + stockFTB + '.');

        precioDeLaCompra = cantidadFTB * precioFTB;

        precioTotal += precioDeLaCompra;

        alert('El precio parcial de su compra es de $' + precioDeLaCompra + ' pesos.');

    }
    else {
        alert('No tenemos esa cantidad de ' + nombreP + ' ' + nombreFTB + ' contamos con un stock de ' + stockFTB + ', si desea vuelva a completar el formulario y elija una cantidad menor a la del stock. Muchas gracias por elegirnos.')
    }
}

do {

    alert('Buenas tardes, que tipo de producto desea: \n' + numeroP1 + '. ' + nombreP1 + '. \n' + numeroP2 + '. ' + nombreP2 + '. \n' + numeroP3 + '. ' + nombreP3 + '. \nElija el numero del producto, ejemplo si desea comprar fernet elija el numero 1.');

    let tipoProducto = prompt('Escriba el numero del producto que desea');

    switch (tipoProducto) {
        case numeroP1:
            ustedDeseaComprar (numeroF1, nombreF1, numeroF2, nombreF2, numeroF3, nombreF3, numeroF4, nombreF4, numeroF5, nombreF5, instruccionFernet)

            let eleccionDeP1 = prompt('Escriba el numero del producto que desea')

            switch (eleccionDeP1) {
                case numeroF1:

                    alert('Usted eligio el ' + nombreP1 + ' ' + nombreF1 + ' su precio es de $' + precioF1 + ' pesos.')
                                    
                    let cantidadF1 = parseInt(prompt('Cuantos desea llevar?'))
                    
                    let precioDeLaCompraF1 = '';

                    eleccionProducto(nombreP1, nombreF1, precioF1, cantidadF1, stockF1, precioDeLaCompraF1)

                    break;

                case numeroF2:

                    alert('Usted eligio el ' + nombreP1 + ' ' + nombreF2 + ' su precio es de $' + precioF2 + ' pesos.')
                                    
                    let cantidadF2 = parseInt(prompt('Cuantos desea llevar?'))
                    
                    let precioDeLaCompraF2 = '';
                    
                    eleccionProducto(nombreP1, nombreF2, precioF2, cantidadF2, stockF2, precioDeLaCompraF2)
        
                    break;

                case numeroF3:

                    alert('Usted eligio el ' + nombreP1 + ' ' + nombreF3 + ' su precio es de $' + precioF3 + ' pesos.')
                                    
                    let cantidadF3 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraF3 = '';
                    
                    eleccionProducto(nombreP1, nombreF3, precioF3, cantidadF3, stockF3, precioDeLaCompraF3)
            
                    break;

                case numeroF4:
                    alert('Usted eligio el ' + nombreP1 + ' ' + nombreF4 + ' su precio es de $' + precioF4 + ' pesos.')
                            
                    let cantidadF4 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraF4 = '';
            
                    eleccionProducto(nombreP1, nombreF4, precioF4, cantidadF4, stockF4, precioDeLaCompraF4)            
            
                    break;

                case numeroF5:
                    alert('Usted eligio el ' + nombreP1 + ' ' + nombreF5 + ' su precio es de $' + precioF5 + ' pesos.')
                            
                    let cantidadF5 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraF5 = '';
            
                    eleccionProducto(nombreP1, nombreF5, precioF5, cantidadF5, stockF5, precioDeLaCompraF5)

                    break;
            
                default:
                    break;
            }

            break;

        case numeroP2:
            ustedDeseaComprar(numeroVT1, nombreVT1, numeroVT2, nombreVT2, numeroVT3, nombreVT3, numeroVT4, nombreVT4, numeroVT5, nombreVT5, intruccionVinoTinto)

            let eleccionDeP2 = prompt('Escriba el numero del producto que desea')

            switch (eleccionDeP2) {
                case numeroVT1:
                    alert('Usted eligio el ' + nombreP2 + ' ' + nombreVT1 + ' su precio es de $' + precioVT1 + ' pesos.')
                    
                    let cantidadVT1 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraVT1 = '';

                    eleccionProducto(nombreP2, nombreVT1, precioVT1, cantidadVT1, stockVT1, precioDeLaCompraVT1)

                    break;

                case numeroVT2:
                    alert('Usted eligio el ' + nombreP2 + ' ' + nombreVT2 + ' su precio es de $' + precioVT2 + ' pesos.')
                        
                    let cantidadVT2 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraVT2 = '';

                    eleccionProducto(nombreP2, nombreVT2, precioVT2, cantidadVT2, stockVT2, precioDeLaCompraVT2)        
        
                    break;

                case numeroVT3:
                    alert('Usted eligio el ' + nombreP2 + ' ' + nombreVT3 + ' su precio es de $' + precioVT3 + ' pesos.')
                            
                    let cantidadVT3 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraVT3 = '';

                    eleccionProducto(nombreP2, nombreVT3, precioVT3, cantidadVT3, stockVT3, precioDeLaCompraVT3)            
            
                    break;

                case numeroVT4:
                    alert('Usted eligio el ' + nombreP2 + ' ' + nombreVT4 + ' su precio es de $' + precioVT4 + ' pesos.')
                            
                    let cantidadVT4 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraVT4 = '';

                    eleccionProducto(nombreP2, nombreVT4, precioVT4, cantidadVT4, stockVT4, precioDeLaCompraVT4)            
            
                    break;

                case numeroVT5:
                    alert('Usted eligio el ' + nombreP2 + ' ' + nombreVT5 + ' su precio es de $' + precioVT5 + ' pesos.')
                            
                    let cantidadVT5 = parseInt(prompt('Cuantos desea llevar?'))

                    let precioDeLaCompraVT5 = '';

                    eleccionProducto(nombreP2, nombreVT5, precioVT5, cantidadVT5, stockVT5, precioDeLaCompraVT5)
            
                    break;

                
                default:
                    break;
            }

            break;
        
            case numeroP3:
                ustedDeseaComprar(numeroVB1, nombreVB1, numeroVB2, nombreVB2, numeroVB3, nombreVB3, numeroVB4, nombreVB4, numeroVB5, nombreVB5, intruccionVinoBlanco)
    
                let eleccionDeP3 = prompt('Escriba el numero del producto que desea')
    
                switch (eleccionDeP3) {
                    case numeroVB1:
                        alert('Usted eligio el ' + nombreP3 + ' ' + nombreVB1 + ' su precio es de $' + precioVB1 + ' pesos.')
                        
                        let cantidadVB1 = parseInt(prompt('Cuantos desea llevar?'))
    
                        let precioDeLaCompraVB1 = '';
    
                        eleccionProducto(nombreP3, nombreVB1, precioVB1, cantidadVB1, stockVB1, precioDeLaCompraVB1)
    
                        break;
    
                    case numeroVB2:
                        alert('Usted eligio el ' + nombreP3 + ' ' + nombreVB2 + ' su precio es de $' + precioVB2 + ' pesos.')
                            
                        let cantidadVB2 = parseInt(prompt('Cuantos desea llevar?'))
    
                        let precioDeLaCompraVB2 = '';
    
                        eleccionProducto(nombreP3, nombreVB2, precioVB2, cantidadVB2, stockVB2, precioDeLaCompraVB2)        
            
                        break;
    
                    case numeroVB3:
                        alert('Usted eligio el ' + nombreP3 + ' ' + nombreVB3 + ' su precio es de $' + precioVB3 + ' pesos.')
                                
                        let cantidadVB3 = parseInt(prompt('Cuantos desea llevar?'))
    
                        let precioDeLaCompraVB3 = '';
    
                        eleccionProducto(nombreP3, nombreVB3, precioVB3, cantidadVB3, stockVB3, precioDeLaCompraVB3)            
                
                        break;
    
                    case numeroVB4:
                        alert('Usted eligio el ' + nombreP3 + ' ' + nombreVB4 + ' su precio es de $' + precioVB4 + ' pesos.')
                                
                        let cantidadVB4 = parseInt(prompt('Cuantos desea llevar?'))
    
                        let precioDeLaCompraVB4 = '';
    
                        eleccionProducto(nombreP3, nombreVB4, precioVB4, cantidadVB4, stockVB4, precioDeLaCompraVB4)            
                
                        break;
    
                    case numeroVB5:
                        alert('Usted eligio el ' + nombreP3 + ' ' + nombreVB5 + ' su precio es de $' + precioVB5 + ' pesos.')
                                
                        let cantidadVB5 = parseInt(prompt('Cuantos desea llevar?'))
    
                        let precioDeLaCompraVB5 = '';
    
                        eleccionProducto(nombreP3, nombreVB5, precioVB5, cantidadVB5, stockVB5, precioDeLaCompraVB5)
                
                        break;
    
                    
                    default:
                        break;
                }
    
                break;

        default:
            break;
    }

    alert('El precio parcial de su compra es de $' + precioTotal + ' pesos.');

    continuar = prompt('Si desea continuar con la compra escriba "si", si desea terminar la compra escriba "no".')

} while (continuar != 'no');

alert('Su compra total es de $' + precioTotal + ' pesos \nSu producto se despachara en las proximas 24hs. Muchas gracias por su compra.');

