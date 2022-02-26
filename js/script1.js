// declaracion de productos

function tipo (nombre) {
    this.nombre = nombre;
}

const tipoAperitivo = new tipo ('Aperitivo');

const tipoBebidasBlanas = new tipo ('Babidas Blancas');

const tipoBebidasSinAlcohol = new tipo ('Bebidas sin alcohol');

const tipoCerveza = new tipo ('Cerveza');

const tipoChampagne = new tipo ('Champagne');

const tipoPack = new tipo ('Packs');

const tipoVinos = new tipo ('Vino');

function producto (nombre, stock, precio, descuento) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.descuento = descuento;
    this.precioDeVenta = 0;
    this.productoElegido = function() {
        alert('Usted eligio ' + this.nombre + ', su precio es de $' + this.precio + ' pesos.');
    }
}

// producto Aperitivos (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).
const productoAperitivoMarcela = new producto ('Aperitivo Marcela', 500, 170, 0);

const productoCampariBotella = new producto ('Campari 750cc', 200, 350, .5);

const productoCynarBotella = new producto ('Cynar 700cc', 250, 700, 0);

const productoCynar70Proof = new producto ('Cynar 70 proof', 150, 1100, 0);

const productoDRLemonLataLimon = new producto ('Dr. Lemon de limon en lata', 2000, 170, .35);

// producto Bebidas blancas (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoAbsolutApeach = new producto ('Absolut apeach 750ml', 300, 2000, 0);

const productoBeefeaterGin = new producto ('Beefeater gin', 500, 2800, 0);

const productoBombayGin = new producto ('Bombay gin', 600, 3200, 0);

const productoConiacOtard = new producto ('Conian Otard', 300, 1500, 0);

const productoOrloffVodka = new producto ('Orloff Vodka', 400, 750, .5);

// producto Bebidas s/ alcohol (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoCocaColaMediana = new producto ('CocaCola de 1,25L', 5000, 150, .5);

const productoCocaColaChica = new producto ('CocaCola en lata', 2000, 100, .3);

const productoFantaMediana = new producto ('Fanta de 1,75L', 3000, 125, .5);

const productoSheweppesTonicaGrande = new producto ('Sheweppes Tonica de 1,5L', 2000, 200, .25);

const productoSpriteMediana = new producto ('Sprite de 1,5L', 1500, 150, .25);

// producto Cerveza (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoBrahamaRubiaLata = new producto ('Brahama Rubia en lata', 5000, 75, .3);

const productoCoronaRubiaBotella = new producto ('Corona Rubia en botella', 2000, 125, .5);

const productoHeinekenRubiaBotella = new producto ('Heineken Rubia en botella', 3000, 125, .5);

const productoImperialGoldenLata = new producto ('Imperial Golden en lata', 2000, 200, .3);

const productoMillerRubiaLata = new producto ('Miller Rubia en lata', 1500, 150, .3);

// producto Champagne (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoBaronBRose = new producto ('Baron B Rose', 5000, 1500, 0);

const productoChandonRose = new producto ('Chandon Rose', 2000, 800, 0);

const productoDoloresBrut = new producto ('Dolores Brut', 3000, 2500, 0);

const productoFedericoAlvearBrut = new producto ('Federico de Alvear Brut', 2000, 500, 0);

const productoMercierBrut = new producto ('Mercier Brut', 1500, 1500, 0);

// producto Pack (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoPack1 = new producto ('Pack #1', 1500, 5000, 0);

const productoPack2 = new producto ('Pack #2', 2000, 4000, 0);

const productoPack3 = new producto ('Pack #3', 1600, 3200, 0);

const productoPack4 = new producto ('Pack #4', 2000, 1500, 0);

const productoPack5 = new producto ('Pack #5', 1500, 6000, 0);

// producto Vinos (Faltan productos, pero esta hecho hasta 5 para realizar el ejercicio).

const productoAlarisBlanco = new producto ('Alaris Blanco', 5000, 120, 0);

const productoCancillerBlanco = new producto ('Cancieller Blanco', 2000, 130, .25);

const productoColonMalbec = new producto ('Colon Malbec', 3000, 255, 0);

const productoEstanciaMendozaTintoCabernet = new producto ('Estancia Mendoza Cabernet', 2000, 400, 0);

const productoSuterCabernet = new producto ('Suter Cabernet', 1500, 200, .6);


// declaracion de los arrays y operaciones necesarias para el carrito de compras.

const carrito = [];

const productos = [tipoAperitivo, tipoBebidasBlanas, tipoBebidasSinAlcohol, tipoCerveza, tipoChampagne, tipoPack, tipoVinos];

const aperitivos = [productoAperitivoMarcela, productoCampariBotella, productoCynarBotella, productoCynar70Proof, productoDRLemonLataLimon];

const bebidasBlancas = [productoAbsolutApeach, productoBeefeaterGin, productoBombayGin, productoConiacOtard, productoOrloffVodka];

const bebidasSA = [productoCocaColaMediana, productoCocaColaChica, productoFantaMediana, productoSheweppesTonicaGrande, productoSpriteMediana];

const cerveza = [productoBrahamaRubiaLata, productoCoronaRubiaBotella, productoHeinekenRubiaBotella, productoImperialGoldenLata, productoMillerRubiaLata];

const champagne = [productoBaronBRose, productoChandonRose, productoDoloresBrut, productoFedericoAlvearBrut, productoMercierBrut];

const pack = [productoPack1, productoPack2, productoPack3, productoPack4, productoPack5];

const vino = [productoAlarisBlanco, productoCancillerBlanco, productoColonMalbec, productoEstanciaMendozaTintoCabernet, productoSuterCabernet];

let contadorTipo = 0;

let contadorAperitivos = 0;

let contadorBebidasBlancas = 0;

let contadorBebidasSA = 0;

let contadorCerveza = 0;

let contadorChampagne = 0;

let contadorPack = 0;

let contadorVino = 0;

let contadorCarrito = 0;

let precioTotal = 0;

let continuar = 'si'

let menuTipoProductos = 'Bienvenido a Bebidas Only, que producto desea: '

let menuAperitivos = 'Que aperitivo desea: '

let menuBebidasBlancas = 'Que bebida desea: '

let menuBebidasSA = 'Que bebida sin alcohol desea: '

let menuCerveza = 'Que cerveza desea: '

let menuChampagne = 'Que champagne desea: '

let menuPack = 'Que pack desea: '

let menuVino = 'Que vino desea: '

let carritoProductos = 'Usted compro estos productos: '

    
for (const tipo of productos) {
    contadorTipo++
    menuTipoProductos += '\n' + contadorTipo + '- ' + tipo.nombre
}    

for (const producto of aperitivos) {
    contadorAperitivos++
    menuAperitivos += '\n' + contadorAperitivos + '- ' + producto.nombre
}

for (const producto of bebidasBlancas) {
    contadorBebidasBlancas++ 
    menuBebidasBlancas += '\n' + contadorBebidasBlancas + '- ' + producto.nombre
}

for (const producto of bebidasSA) {
    contadorBebidasSA++
    menuBebidasSA += '\n' + contadorBebidasSA + '- ' + producto.nombre
}

for (const producto of cerveza) {
    contadorCerveza++
    menuCerveza += '\n' + contadorCerveza + '- ' + producto.nombre
}

for (const producto of champagne) {
    contadorChampagne++
    menuChampagne += '\n' + contadorChampagne + '- ' + producto.nombre
}

for (const producto of pack) {
    contadorPack++
    menuPack += '\n' + contadorPack + '- ' + producto.nombre
}

for (const producto of vino) {
    contadorVino++
    menuVino += '\n' + contadorVino + '- ' + producto.nombre
}

function menu (varMenu, varNombre, varTipo) {
    alert(varMenu + '\nElija el producto que desea poniendo su numero de identificacion, si desea'+ varTipo + varNombre + ' coloque el numero 1.');
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

// proceso

do {

    menu(menuTipoProductos, tipoAperitivo.nombre, ' un ');

    let tipoProducto = parseInt(prompt('Escriba el numero del producto que desea')); 

    switch (tipoProducto) {
        case 1:
            
            menu(menuAperitivos, productoAperitivoMarcela.nombre, ' un ');

            let eleccionDeP1 = parseInt(prompt('Escriba el numero del producto que desea')); 

            switch (eleccionDeP1) {
                case 1:
                    productoAperitivoMarcela.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoAperitivoMarcela.stock >= cantidadComprada) {
                        precioParcial = productoAperitivoMarcela.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoAperitivoMarcela.precioDeVenta += precioParcial
                        carrito.push(productoAperitivoMarcela);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoAperitivoMarcela.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoCampariBotella.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCampariBotella.stock >= cantidadComprada) {
                        precioParcial = productoCampariBotella.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCampariBotella.precioDeVenta += precioParcial
                        carrito.push(productoCampariBotella);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCampariBotella.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoCynarBotella.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCynarBotella.stock >= cantidadComprada) {
                        precioParcial = productoCynarBotella.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCynarBotella.precioDeVenta += precioParcial
                        carrito.push(productoCynarBotella);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCynarBotella.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoCynar70Proof.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCynar70Proof.stock >= cantidadComprada) {
                        precioParcial = productoCynar70Proof.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCynar70Proof.precioDeVenta += precioParcial
                        carrito.push(productoCynar70Proof);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCynar70Proof.stock + ', vuelva a completar el formulario.')
                    }
                    break;
                case 5:
                    productoDRLemonLataLimon.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoDRLemonLataLimon.stock >= cantidadComprada) {
                        precioParcial = productoDRLemonLataLimon.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoDRLemonLataLimon.precioDeVenta += precioParcial
                        carrito.push(productoDRLemonLataLimon);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoDRLemonLataLimon.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }

            break;

        case 2:

            menu(menuBebidasBlancas, productoAbsolutApeach.nombre, ' un ');

            let eleccionDeP2 = parseInt(prompt('Escriba el numero del producto que desea'));

            switch (eleccionDeP2) {
                case 1:
                    productoAbsolutApeach.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoAbsolutApeach.stock >= cantidadComprada) {
                        precioParcial = productoAbsolutApeach.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoAbsolutApeach.precioDeVenta += precioParcial
                        carrito.push(productoAbsolutApeach);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoAbsolutApeach.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 2:
                    productoBeefeaterGin.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoBeefeaterGin.stock >= cantidadComprada) {
                        precioParcial = productoBeefeaterGin.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoBeefeaterGin.precioDeVenta += precioParcial
                        carrito.push(productoBeefeaterGin);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoBeefeaterGin.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoBombayGin.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoBombayGin.stock >= cantidadComprada) {
                        precioParcial = productoBombayGin.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoBombayGin.precioDeVenta += precioParcial
                        carrito.push(productoBombayGin);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoBombayGin.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoConiacOtard.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoConiacOtard.stock >= cantidadComprada) {
                        precioParcial = productoConiacOtard.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoConiacOtard.precioDeVenta += precioParcial
                        carrito.push(productoConiacOtard);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoConiacOtard.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoOrloffVodka.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoOrloffVodka.stock >= cantidadComprada) {
                        precioParcial = productoOrloffVodka.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoOrloffVodka.precioDeVenta += precioParcial
                        carrito.push(productoOrloffVodka);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoOrloffVodka.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }

            break;
        
        case 3:
            
            menu(menuBebidasSA, productoCocaColaMediana.nombre, ' una ');
    
            let eleccionDeP3 = parseInt(prompt('Escriba el numero del producto que desea'));
    
            switch (eleccionDeP3) {
                case 1:
                    productoCocaColaMediana.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCocaColaMediana.stock >= cantidadComprada) {
                        precioParcial = productoCocaColaMediana.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCocaColaMediana.precioDeVenta += precioParcial
                        carrito.push(productoCocaColaMediana);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCocaColaMediana.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoCocaColaChica.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCocaColaChica.stock >= cantidadComprada) {
                        precioParcial = productoCocaColaChica.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCocaColaChica.precioDeVenta += precioParcial
                        carrito.push(productoCocaColaChica);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCocaColaChica.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoFantaMediana.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoFantaMediana.stock >= cantidadComprada) {
                        precioParcial = productoFantaMediana.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoFantaMediana.precioDeVenta += precioParcial
                        carrito.push(productoFantaMediana);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoFantaMediana.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoSheweppesTonicaGrande.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoSheweppesTonicaGrande.stock >= cantidadComprada) {
                        precioParcial = productoSheweppesTonicaGrande.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoSheweppesTonicaGrande.precioDeVenta += precioParcial
                        carrito.push(productoSheweppesTonicaGrande);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoSheweppesTonicaGrande.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoSpriteMediana.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoSpriteMediana.stock >= cantidadComprada) {
                        precioParcial = productoSpriteMediana.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoSpriteMediana.precioDeVenta += precioParcial
                        carrito.push(productoSpriteMediana);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoSpriteMediana.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }
    
            break;
        
        case 4:
                
            menu(menuCerveza, productoBrahamaRubiaLata.nombre, ' una ');
        
            let eleccionDeP4 = parseInt(prompt('Escriba el numero del producto que desea'));
        
            switch (eleccionDeP4) {
                case 1:
                    productoBrahamaRubiaLata.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoBrahamaRubiaLata.stock >= cantidadComprada) {
                        precioParcial = productoBrahamaRubiaLata.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoBrahamaRubiaLata.precioDeVenta += precioParcial
                        carrito.push(productoBrahamaRubiaLata);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoBrahamaRubiaLata.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoCoronaRubiaBotella.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCoronaRubiaBotella.stock >= cantidadComprada) {
                        precioParcial = productoCoronaRubiaBotella.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCoronaRubiaBotella.precioDeVenta += precioParcial
                        carrito.push(productoCoronaRubiaBotella);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCoronaRubiaBotella.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoHeinekenRubiaBotella.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoHeinekenRubiaBotella.stock >= cantidadComprada) {
                        precioParcial = productoHeinekenRubiaBotella.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoHeinekenRubiaBotella.precioDeVenta += precioParcial
                        carrito.push(productoHeinekenRubiaBotella);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoHeinekenRubiaBotella.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoImperialGoldenLata.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoImperialGoldenLata.stock >= cantidadComprada) {
                        precioParcial = productoImperialGoldenLata.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoImperialGoldenLata.precioDeVenta += precioParcial
                        carrito.push(productoImperialGoldenLata);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoImperialGoldenLata.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoMillerRubiaLata.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoMillerRubiaLata.stock >= cantidadComprada) {
                        precioParcial = productoMillerRubiaLata.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoMillerRubiaLata.precioDeVenta += precioParcial
                        carrito.push(productoMillerRubiaLata);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoMillerRubiaLata.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }
        
            break;
        
        case 5:
                    
            menu(menuChampagne, productoBaronBRose.nombre, ' un ');
            
            let eleccionDeP5 = parseInt(prompt('Escriba el numero del producto que desea'));
            
            switch (eleccionDeP5) {
                case 1:
                    productoBaronBRose.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoBaronBRose.stock >= cantidadComprada) {
                        precioParcial = productoBaronBRose.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoBaronBRose.precioDeVenta += precioParcial
                        carrito.push(productoBaronBRose);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoBaronBRose.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoChandonRose.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoChandonRose.stock >= cantidadComprada) {
                        precioParcial = productoChandonRose.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoChandonRose.precioDeVenta += precioParcial
                        carrito.push(productoChandonRose);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoChandonRose.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoDoloresBrut.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoDoloresBrut.stock >= cantidadComprada) {
                        precioParcial = productoDoloresBrut.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoDoloresBrut.precioDeVenta += precioParcial
                        carrito.push(productoDoloresBrut);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoDoloresBrut.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoFedericoAlvearBrut.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoFedericoAlvearBrut.stock >= cantidadComprada) {
                        precioParcial = productoFedericoAlvearBrut.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoFedericoAlvearBrut.precioDeVenta += precioParcial
                        carrito.push(productoFedericoAlvearBrut);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoFedericoAlvearBrut.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoMercierBrut.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoMercierBrut.stock >= cantidadComprada) {
                        precioParcial = productoMercierBrut.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoMercierBrut.precioDeVenta += precioParcial
                        carrito.push(productoMercierBrut);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoMercierBrut.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }
            
            break;

        case 6:
                    
            menu(menuPack, productoPack1.nombre, ' el ');
            
            let eleccionDeP6 = parseInt(prompt('Escriba el numero del producto que desea'));
            
            switch (eleccionDeP6) {
                case 1:
                    productoPack1.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoPack1.stock >= cantidadComprada) {
                        precioParcial = productoPack1.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoPack1.precioDeVenta += precioParcial
                        carrito.push(productoPack1);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoPack1.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoPack2.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoPack2.stock >= cantidadComprada) {
                        precioParcial = productoPack2.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoPack2.precioDeVenta += precioParcial
                        carrito.push(productoPack2);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoPack2.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoPack3.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoPack3.stock >= cantidadComprada) {
                        precioParcial = productoPack3.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoPack3.precioDeVenta += precioParcial
                        carrito.push(productoPack3);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoPack3.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoPack4.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoPack4.stock >= cantidadComprada) {
                        precioParcial = productoPack4.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoPack4.precioDeVenta += precioParcial
                        carrito.push(productoPack4);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoPack4.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoPack5.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoPack5.stock >= cantidadComprada) {
                        precioParcial = productoPack5.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoPack5.precioDeVenta += precioParcial
                        carrito.push(productoPack5);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoPack5.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }
            
            break;

        case 7:
                    
            menu(menuVino, productoAlarisBlanco.nombre, ' el ');
            
            let eleccionDeP7 = parseInt(prompt('Escriba el numero del producto que desea'));
            
            switch (eleccionDeP7) {
                case 1:
                    productoAlarisBlanco.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoAlarisBlanco.stock >= cantidadComprada) {
                        precioParcial = productoAlarisBlanco.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoAlarisBlanco.precioDeVenta += precioParcial
                        carrito.push(productoAlarisBlanco);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoAlarisBlanco.stock + ', vuelva a completar el formulario.')
                    }


                    break;
                case 2:
                    productoCancillerBlanco.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoCancillerBlanco.stock >= cantidadComprada) {
                        precioParcial = productoCancillerBlanco.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoCancillerBlanco.precioDeVenta += precioParcial
                        carrito.push(productoCancillerBlanco);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoCancillerBlanco.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 3:
                    productoColonMalbec.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoColonMalbec.stock >= cantidadComprada) {
                        precioParcial = productoColonMalbec.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoColonMalbec.precioDeVenta += precioParcial
                        carrito.push(productoColonMalbec);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoColonMalbec.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 4:
                    productoEstanciaMendozaTintoCabernet.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoEstanciaMendozaTintoCabernet.stock >= cantidadComprada) {
                        precioParcial = productoEstanciaMendozaTintoCabernet.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoEstanciaMendozaTintoCabernet.precioDeVenta += precioParcial
                        carrito.push(productoEstanciaMendozaTintoCabernet);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoEstanciaMendozaTintoCabernet.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                case 5:
                    productoSuterCabernet.productoElegido();
                    cantidadComprada = parseInt(prompt('Cuantos desea llevar?'));
                    if (productoSuterCabernet.stock >= cantidadComprada) {
                        precioParcial = productoSuterCabernet.precio * cantidadComprada
                        precioTotal += precioParcial
                        productoSuterCabernet.precioDeVenta += precioParcial
                        carrito.push(productoSuterCabernet);
                    } else {
                        alert('no tenemos suficiente stock, si desea comprar menos de ' + productoSuterCabernet.stock + ', vuelva a completar el formulario.')
                    }

                    break;
                default:
                    break;
            }
            
            break;
    
        default:
            break;
    }

    // alert('El precio parcial de su compra es de $' + precioTotal + ' pesos.');
    

    continuar = prompt('Si desea continuar con la compra escriba "si", si desea terminar la compra escriba "no".')

} while (continuar != 'no');

for (const producto of carrito) {
    contadorCarrito++
    carritoProductos += '\n' + contadorCarrito + '- ' + producto.nombre + '          $' + producto.precioDeVenta
}
alert(carritoProductos + '\nSu compra total es de $' + precioTotal + ' pesos \nsu producto se despachara en las proximas 24hs. Muchas gracias por su compra.');



