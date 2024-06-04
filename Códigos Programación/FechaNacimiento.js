/*function edad(){

    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    if (!fechaNacimiento) {
      document.getElementById('mensaje').textContent = 'Por favor, ingrese su fecha de nacimiento.';
      return;
    }
   
let fechaactual = new Date(fechaNacimiento)
let fecha1 = new Date()
let edad = fechaactual.getFullYear() - fecha1.getFullYear();
let mes = fechaactual.getMonth()- fecha1.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fecha1.getDate())) {
    edad--;
  }
  }
  
  if (edad >= 18) {
    document.getElementById('mensaje').textContent = '¡Puede asistir al evento!';
  } else {
    document.getElementById('mensaje').textContent = 'Lo siento, debe ser mayor de edad para asistir al evento.';
  }*/

  let operacion = prompt ("¿que operación desea realizar? 1 sumar- 2 restar - 3 multiplicar - 4 dividir");

  let op
