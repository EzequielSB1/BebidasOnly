// funcionalidad de boton crear cuenta

let botonCrear = document.querySelector('.cambio');
let verForm = document.querySelector('.formCrear')
botonCrear.addEventListener('click', () => verForm.classList.toggle('formVer'));

// script para el form de ingreso.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

const visorIngreso = document.querySelector('.borForm');
  
function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    let container = document.createElement("p");
    container.innerHTML = 'No has escrito nada en el usuario'
    visorIngreso.append(container);
    return;
  }
  var clave = document.getElementById('password').value;
  if (clave.length < 6) {
    let container = document.createElement("p");
    container.innerHTML = 'La clave no es valida'
    visorIngreso.append(container);
    return;
  }
  this.submit();
}

// guardar datos en el local stronge

// const botonDeRegistro = document.querySelector('#crearCuenta')
// botonDeRegistro.addEventListener('submit', guardarRegistroLocalStronge);

// guardarRegistroLocalStronge(){
//   // escogemos dos funciones para guardar datos por separado
//   guardarUsuarioEnLocalStorage()
//   guardarPasswordEnLocalStorage()
// }

// aun no se me ocurre como logro resolver como guardar los datos del registro en el local stronge para que se usen para verificar una cuenta, asi que a las cuentas se entre poniendo cualquier letra de usuario y una contrasenia de cualquier combinacion de 6 digitos por ahora, para la proxima entrega voy a tratar de que haya un local stronge tambien en el formulario del registro pero por ahora solamente tiene el local stronge en el carrito de compras, que tampoco esta terminado le faltan algunas cosas.