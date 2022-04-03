// script para enviar los correos a mi cuenta de email

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_7mev4ag';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviado';
        alert('Correo enviado!');
      }, (err) => {
        btn.value = 'Enviado';
        alert(JSON.stringify(err));
      });
  });
