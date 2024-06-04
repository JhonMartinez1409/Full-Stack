/*const Random = Math.floor(Math.random() * 3) ;
var maquina=(Random);
var user=Number ( prompt("escoja una opcion 0 piedra  1 papel  2 tijera"));
alert("la CPU escogio "+maquina);   
alert("Usted eligio "+user);


if (user===0) {

    if (user === maquina) {
        alert( "¡Es un empate!"+ user+maquina);
    } else if (maquina>user&&maquina<2) {
        alert("¡maquina Gana!"+user+maquina) ; 
    }  
    else {
        
    alert("usuario gana, el usuario escogio " + `${user}`+"la CPU escogio"+`${maquina}`);
    }
  
}


else if ( user===1  ){

    if (user === maquina) {
        alert( "¡Es un empate!");
    } else if (maquina>user&&maquina>1) {
        alert("¡maquina Gana!") ; 
    }  
    else {
        alert("usuario gano!");
    }

}


else if ( user===2  ){

    if (user === maquina) {
        alert( "¡Es un empate!");
    } else if (maquina<user&&maquina<1) {
        alert(" La CPU Ganó!") ; 
    }  
    else {
        alert("Has ganado!");
    }

}

else {
    alert("Debe elegir del 1 al 3 "+user);

}

// funcion suma

function suma(){

    let numero1= Number (prompt("Ingrese valor 1"));
    let numero2= Number (prompt("Ingrese valor 1"));
    let resultado=(numero1+numero2);
    alert(resultado);
    
}
suma()

function espolindromo(){
    let palabra =prompt('Ingrese palabra')
    return palabra === palabra.split("").reverse().join("");

}
espolindromo()
    alert(espolindromo(""))


function verificarPalindromo() {
    var palabra = document.getElementById('palabra').value;
    var esPalindromo = palabra === palabra.split('').reverse().join('');
    document.getElementById('resultado').textContent = esPalindromo ? '¡Es un palíndromo!' : 'No es un palíndromo.';
  }*/

  function promedio(){
    let suma=0;
    let contador =0 ;
    for (let i=1; i<=10; i++){
    let opciones = document.getElementById ('pal' + i).value;
    if (opciones){
        suma += parseFloat (opciones)//parsefloat sirve para convertir de sprint a numero;
        contador++
    }
    }
    let promedio = suma/contador;
    document.getElementById('resultado').textContent = 'El promedio es: ' + promedio;
    }
