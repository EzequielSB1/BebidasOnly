// funcionalidad de boton crear cuenta

let botonCrear = document.querySelector('.cambio');
let verForm = document.querySelector('.formCrear')
botonCrear.addEventListener('click', () => verForm.classList.toggle('formVer'));

// se guardan los form de crear usuarios.

let localStorage = localStorage;

crearUsuario.addEventListener("focusout", function() {
    localStorage.setItem("fn", crearUsuario.value);
  })

  crearPassword.addEventListener("focusout", function() {
    localStorage.setItem("ln", crearPassword.value);
  })

  function recuperoValores() {
    crearUsuario.value = localStorage.getItem("fn");
    crearPassword.value = localStorage.getItem("ln");
  }

  document.addEventListener("DOMContentLoaded", recuperoValores);

// verificacion
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario() {
    verificarLocal()
    let ingreso = {
        usuario : document.getElementById('usuario').value,
        clave : document.getElementById('password').value}

    ingreso.usuario == 'fn' ? alert('Los datos son correctos') : alert('las cuentas son incorrectas')
    
    this.submit();
  }
function verificarLocal() {
  let mostrarUsuario = localStorage.getItem('localStorageCuentas');
  
  cuentas = JSON.parse(mostrarUsuario);

  return cuentas;
}
