// declaracion de otras variables (principales)

const visor = document.querySelector('.visorProductos')

const visorProductos = document.querySelector('.visorCompra');

let productos1 = [];

fetch('data.json')
.then((resp) => resp.json())
.then((data) => data.forEach((producto) => productos1.push(new Producto(producto.nombre, producto.stock, producto.precio, producto.descuento, producto.categoria, producto.imagen, producto.id))));


console.log(productos1);

let precioTotal = document.querySelector('#precioFinal');

let carrito = [];

let divisa = '$';

const DOMbotonVaciar = document.querySelector('#botonVaciar');

const miLocalStorage = window.localStorage;

// declaracion de productos

class Producto {
    constructor(nombre, stock, precio, descuento, categoria, imagen, id) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.descuento = descuento;
        this.categoria = categoria;
        this.imagen = imagen;
        this.id = id;
    }
}


// productos sin filtro
function renderTarjetasProductos(arrayProductos) {
    for (const Producto of arrayProductos) {
        // contenedor
        let contenedor = document.createElement("div");
        contenedor.classList.add('tarjetaProducto');

        // imagen
        let imgTarjeta = document.createElement("img");
        imgTarjeta.classList.add('productoImg');
        imgTarjeta.src = Producto.imagen
        
        // precio
        let precioTarjeta = document.createElement("h5");
        precioTarjeta.classList.add('productoPrecio');
        precioTarjeta.textContent = '$' + Producto.precio

        // titulo
        let tituloTarjeta = document.createElement("h6");
        tituloTarjeta.classList.add('productoNombre');
        tituloTarjeta.textContent = Producto.nombre

        // boton
        const botonTarjeta = document.createElement('button');
        botonTarjeta.classList.add('botonAgregarAlCarrito');
        botonTarjeta.textContent = 'Agregar producto';
        botonTarjeta.setAttribute('marcador', Producto.id);
        botonTarjeta.addEventListener('click', agregarProducto);
        
        
        contenedor.appendChild(imgTarjeta);
        contenedor.appendChild(precioTarjeta);
        contenedor.appendChild(tituloTarjeta);
        contenedor.appendChild(botonTarjeta);
        visorProductos.append(contenedor);       
    } 
};


// botones y productos filtrados
let botonFiltroA = document.querySelector('.botonFiltroA')

botonFiltroA.addEventListener('click', function(){muestraProductos('Aperitivos')})

let botonFiltroBB = document.querySelector('.botonFiltroBB')

botonFiltroBB.addEventListener('click', function(){muestraProductos('Bebidas blancas')})

let botonFiltroC = document.querySelector('.botonFiltroC')

botonFiltroC.addEventListener('click', function(){muestraProductos('Cervezas')})

let botonFiltroBA = document.querySelector('.botonFiltroBA')

botonFiltroBA.addEventListener('click', function(){muestraProductos('Bebidas sin alcohol')})

let botonFiltroCh = document.querySelector('.botonFiltroCh')

botonFiltroCh.addEventListener('click', function(){muestraProductos('Champagnes')})

let botonFiltroPack = document.querySelector('.botonFiltroPack')

botonFiltroPack.addEventListener('click', function(){muestraProductos('Combos')})

let botonFiltroV = document.querySelector('.botonFiltroV')

botonFiltroV.addEventListener('click', function(){muestraProductos('Vinos')})

function muestraProductos(categoria) {
    const listaSegunCategoria = productos1.filter(x => x.categoria == categoria);

    visorProductos.innerHTML = ''
    renderTarjetasProductos(listaSegunCategoria)
}

let botonFiltroTodo = document.querySelector('.botonFiltroTodo')

botonFiltroTodo.addEventListener('click', muestraProductosTodo)

function muestraProductosTodo() {

    visorProductos.innerHTML = ''
    renderTarjetasProductos(productos1) 
}


// carrito de compras

// muostrar o desaparecer carrito de html
let botonCarrito = document.querySelector('.botonCarrito');
let verCarrito = document.querySelector('.carrito1')
botonCarrito.addEventListener('click', () => verCarrito.classList.toggle('visor'));

// carrito
let botonTarjeta = document.querySelector('.botonAgregarAlCarrito')
let visorCarrito = document.querySelector('.visorProductos');

function agregarProducto(e) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(e.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
    // alerta de producto agregado
    Toastify({

        text: `Se agrego un producto al carrito`,
        
        duration: 750
        
        }).showToast();
}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
    // Vaciamos todo el html
    visorCarrito.textContent = '';
    // Quitamos los duplicados
    console.log(carrito)
    const carritoSinDuplicados = [...new Set(carrito)];
    console.log(carritoSinDuplicados)
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = productos1.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.innerHTML = `<img src=${miItem[0].imagen}> <h6>${miItem[0].nombre} - ${miItem[0].precio}${divisa}</h6><h5>\nCantidad: ${numeroUnidadesItem}</h5>`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miBoton.textContent = 'X'
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        visorCarrito.appendChild(miNodo);
        // muestra de producto agregado
    
    });
    // Renderizamos el precio total en el HTML
    precioTotal.textContent = calcularTotal();
}


/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(e) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = e.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    [1,1,1,3,4]
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = productos1.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();
}

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
document.addEventListener('DOMContentLoaded', muestraProductosTodo);
renderizarCarrito();


//menu responsive
let botonMenu = document.querySelector('.botonMenu');
let verMenu = document.querySelector('.nav')
botonMenu.addEventListener('click', () => verMenu.classList.toggle('menuVer'));



