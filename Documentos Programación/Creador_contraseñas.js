function crearcontraseña(){
    document.getElementById('Clave').value = autoCreate(18);
  }

  function autoCreate(length){ // 
    let caracteres = "!ñ-+/*.,:;()abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&%$#@"; 
    let Clave = '';    
      for(i=0; i<length; i++){
        Clave+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));
      }
  
    return Clave;
  }