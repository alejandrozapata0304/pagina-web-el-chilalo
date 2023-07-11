const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

function registrarUsuario() {
  // Obtener los valores del formulario
  var nombre = document.querySelector('input[name="nombre"]').value;
  var gmail = document.querySelector('input[name="gmail"]').value;
  var contrasena = document.querySelector('input[name="contrasena"]').value;

  // Crear un objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud AJAX
  xhr.open('POST', 'registro_usuarios.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Definir la función de respuesta
  xhr.onload = function() {
    if (xhr.status === 200) {
      // La solicitud se completó correctamente
      console.log(xhr.responseText);
      // Puedes mostrar un mensaje de éxito al usuario aquí
    } else {
      // Hubo un error en la solicitud
      console.log('Error: ' + xhr.status);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  // Enviar la solicitud AJAX con los datos del formulario
  xhr.send('nombre=' + encodeURIComponent(nombre) + '&gmail=' + encodeURIComponent(correo) + '&contrasena=' + encodeURIComponent(contrasena));
}

  