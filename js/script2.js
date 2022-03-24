// funcionalidad de boton crear cuenta

let botonCrear = document.querySelector('.cambio');
let verForm = document.querySelector('.formCrear')
botonCrear.addEventListener('click', () => verForm.classList.toggle('formVer'));

// se guardan los form de crear usuarios.

let l = localStorage;

crearUsuario.addEventListener("focusout", function() {
    l.setItem("fn", crearUsuario.value);
  })

  crearPassword.addEventListener("focusout", function() {
    l.setItem("ln", crearPassword.value);
  })

  function recuperoValores() {
    crearUsuario.value = l.getItem("fn");
    crearPassword.value = l.getItem("ln");
  }

  document.addEventListener("DOMContentLoaded", recuperoValores);

// verificacion
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

function validarFormulario() {
  recuperoValores();

  
  let usuario = document.querySelector('#usuario').value;
  let password = document.querySelector('#password').value;

  return usuario == crearUsuario.value && password == crearPassword.value ? this.submit() : alert('contrasenia o usuario incorrecto');
}
