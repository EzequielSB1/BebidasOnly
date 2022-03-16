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

