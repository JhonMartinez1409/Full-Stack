/*alert("Hola programadores") // Creando pag

es un comentario
de varias
lineas*/
// comillas ""
// comillas ''
//Comillas bastick ``
/*var nombre = "Jhon";

alert(nombre);
var edad ="27";
var telefono =3135352866;
alert(edad);
alert(telefono);

alert(`Mi nombre es ${nombre}, tengo ${edad} y mi telefono es ${telefono}`)
*/
/*
var nombre = prompt ("ingrese su nombre");
alert(nombre);
console.log(nombre);

var cedula = prompt ("ingrese su cedula");
alert(cedula);
console.log(cedula);

var telefono = prompt ("ingrese su telefono");
alert(telefono);
console.log(telefono);

var producto = prompt ("ingrese ingrese la referencia de celular en que esta interesado");
alert(producto);
console.log(producto);

var cedula = prompt ("ingrese su cedula");
alert(cedula);
console.log(cedula);

alert(`Mi nombre es ${nombre}, mi cedula es  ${cedula}  mi telefono es ${telefono}`)

var numero= 100;
numero = numero + 10;
alert =numero;

var numero = prompt ("ingresa un numero del 1 al 50");
numero = numero * 2;
alert (numero);
*/
// IM = masa[kg] / estatura[m]) 2
/*var estatura = prompt ("ingrese su estatura en metros");
var peso = prompt ("ingrese su peso en kg");
var IMC = peso/estatura;
alert("su imc es" + IMC);
console.log("su imc es" + IMC);*/
/*var contador = 0;
contador = contador + 1;
alert(contador)
contador ++;
contador --;
contador = contador + 10;*/
/*var costo = prompt("Ingrese el valor del producto")
var IVA = (0.19)
alert("el iva del producto es " * costo);




var B = prompt("ingrese la altura de un rectangulo en CM");
var H = prompt ("Ingrese la base de un rectangulo en CM");
alert(`el area del rectangulo es ${B * H}` + " cm");
console.log(`el area del rectangulo es ${B * H}`) */
/*let mensaje;
mensaje = "hola";
alert (mensaje);
console.log (mensaje);

const RED=  "#ff000000";
let edad = prompt("introduce tu edad");
alert ("tu edad es: " + edad);
let b=confirm("estas seguro que quieres borrarlo?")
alert(b);

alert= mostrar mensaje
prompt= capturar informacion del usuario
confirm= preguntar decision del usuario si o no falso o verdadero
console.log= validar datos de manera interna

console.log("hola programadores");
let nombre ="Jhon";
console.log("hola" + nombre);

console.log("hola programadores");
let name="Jhon";
console.log("hola " + name);

let km =prompt("Ingrese la cantidad de kilometros que recorrio");
let galon=prompt ("ingrese la cantidad de galones comprados");
let cant=3.78;
alert("" + km)
let resultado= km/galon;
let b=confirm("¿desea saber el consumo de su vehiculo?");
alert(b);
alert("su consumo es " + resultado, " por galon");
let litros=galon */
/*if (condicion){el codigo que quieres ejecutar
}*/

let c=  parseInt(prompt("introduce el numero 4"));
  switch (c){
    case 5:
    alert ("hola entre por la condicion")
    break;
    case 0:
    alert("el numero que dijitaste es 0")
        break;
    default:
        alert("no es correcto")

}

let age = Number(prompt("ingrese su edad"));
let mensaje = ""

if (age<=18){
    mensaje ="eres menor de edad"
} else{
    mensaje="eres mayor de edad"

}
alert (mensaje)


let B=Number(prompt("introduce el número de día", ""));
switch(B) {
    case 1:
    alert("lunes")
    break;
    case 2:
        alert("martes")
        break;
    case 3:
        alert("miercoles")
        break;     
    case 4:
          alert("jueves")
         break;

    case 5:
      alert("viernes")
        break;
     case 6:
            alert("sabado")
              break;
     case 7:
      alert("domingo")
        break;
        
}

let num=Number(prompt("ingrese un numero"))
if(num % 2 ===0){
    alert("el numero es par")
}else{
    alert("el numero no es par")

}



let dia = prompt("Ingresa el día de la semana");

if (dia === "lunes") {
    alert("Es un día laboral");
} else if (dia === "martes") {
    alert("Es un día laboral");
} else if (dia === "miércoles") {
    alert("Es un día laboral");
} else if (dia === "jueves") {
    alert("Es un día laboral");
} else if (dia === "viernes") {
    alert("Es un día laboral");
} else if (dia === "sábado") {
    alert("No es un día laboral");
} else if (dia === "domingo") {
    alert("No es un día laboral");
} else {
    alert("El valor ingresado no corresponde a un día de la semana");
}