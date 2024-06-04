//¡es optimo el clima para salir?
/*let temperatura =25;
let humedad= 60;
let probabilidaddelluvia=0.2;
let velocidadviento=15;


if((temperatura>=20 && temperatura<=30)&& humedad<70 && probabilidaddelluvia<0.5 && velocidadviento<20){
    alert("es un buen dia para salir")
} else{
    alert("lo mejor es quedarse en casa")
}

//reto

/*<form id="registroform">
<label for ="pasword">*/




document
  .getElementById("registro_formulario")
  .addEventListener("submit", function () {
    //Se obtienen los datos del Formulario
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;

    // Verifica si el nombre está vacío
    //El método trim( ) elimina los espacios en blanco en ambos extremos del string
if (nombre.trim() === "") {
      alert("Debe Ingresar su Nombre");
    } else {
      // Validación de la edad (debe ser un número) la funcion isNaN determina si es numero o no
      if (isNaN(edad)) {
        // Verifica si la edad no es un número
        alert("La edad debe ser un número válido.");
      } else {
        // Verifica si el correo electrónico está vacío
        //El método trim( ) elimina los espacios en blanco en ambos extremos del string.
if (correo.trim() === "") {
          alert("Debe ingresar un correo electrónico válido.");
        } else {
          // Si pasa todas las validaciones, se puede enviar el formulario
          alert("Formulario enviado correctamente!");
        }
      }
    }
  });


  // programa que diga la calificacion 

  /*let calificacion=prompt ("Ingrese su calificación");
  if (calificacion <5 && calificacion >=0){
    alert("calificación insuficiente")
  }else if (calificacion >=5 && calificacion <=7){
    alert("calificación suficiente")      
  } else if (calificacion>=8 && calificacion<=10){
    alert("calificación excelente")

  } else{
    alert("calificación invalida")
  }

// programa que nos imprima el numero mayor
var numero1=prompt("digite un primer número")
var numero2=prompt("digite un segundo número")
if (Number(numero1)>Number(numero2)){
    alert("El primer numero es el mayor"+ numero1)
} else {
    alert("El segundo numero es el mayor"+ numero2)
}

// programa que imprima si los numeros son multiplos (numero1 % numero2===0  numero2 % numero1===0

var multiplo1=prompt("digite un primer número")
var Multiplo2=prompt("digite un segundo número")
if (Number(multiplo1)%Number(Multiplo2)===0){
    alert(multiplo1 + "El numero")
} else {
    alert("El segundo numero es el mayor"+ numero2)
}

// programa para saber si el numero es primo

//PROGRAMA PARA SABER SI EL NUMERO ES PRIMO
let numeroPrimo=prompt("Digite un número");
let esPrimo=true;
for (let i=2; i<numeroPrimo; i++){
  if (numeroPrimo%i===0){
    esPrimo=false;
    break
  }
}
if (esPrimo){
  alert("Es un numero primo");
}else{
  alert("No es primo");
}

// programa para saber si la edad es suficiente para sacar la licencia de conduccion
/*
let edad=prompt ("Ingrese su edad actual");
  if (edad <=16){
    alert("No cumple con la edad mínima para sacar la licencia de conducción")
  }else if (edad >=16 && edad <=18){
    alert("edad suficiente para sacar licencia de servicio particular")
    alert("Recuerde renovar su licencia de conducción a los 18 años")      
  } else if (edad>=18 && edad<=79){
    alert("cumple con la edad requerida para obtener la licencia de conducción")

  } else{
    alert("debe renovar la licencia de conducción cada año")
  }

 //superficie de un terreno//
let ancho=10;
let alto=15;
let resultado=ancho*alto;
alert(resultado);


function calcularsuperficie(){
let inputancho=prompt ("ingrese el ancho del terreno en mts")
let inputalto=prompt ("ingrese el alto del terreno en mts")
let resultado = inputancho*inputalto;
alert("la superficie del terreno es "+ resultado);
return resultado;
} 
calcularsuperficie()

//calcular el cuadrado de un numero

function Raiz(numero){
let resultado=(numero*numero);
  alert(resultado)
}
Raiz(102)

// funcion anonima mediante expresion

const multiplicar=function(a,b){
let resultado=a*b;
  alert(resultado);

}
multiplicar(50,30)*/

// funciones flecha (arrow functions)

/*const calculartriangulo=(base,altura)=>{
let resultado=(base*altura)/2;
alert(resultado);

}
calculartriangulo (4,5)

// funcion que calcule el area del triangulo

const calcularAreatriangulo=(base,altura)=>{//elimina la palabra function
  let resultado =(base*altura)/2;
  alert(resultado)
  }
  calcularAreatriangulo(prompt("ingrese numero 1"),prompt("ingrese numero 2"))



// Función para sumar las áreas de dos rectángulos
function sumarAreasRectangulos(ancho1, largo1, ancho2, largo2) {
  const areaRectangulo1 = calcularAreaRectangulo(ancho1, largo1);
  const areaRectangulo2 = calcularAreaRectangulo(ancho2, largo2);
  return areaRectangulo1 + areaRectangulo2;
}

// Ejemplo de uso:
const areaTotal = sumarAreasRectangulos(5, 10, 3, 6);

// suma de numeros de rango 

function sumarango(inicio,fin){
let suma=0

for(let i= inicio;i<=fin; i++){
suma+=i

}
return suma;
  
}
alert(sumarango(1,10))*/

//while

/*var contador=0
while (contador<5){
  alert("valor: " + contador)
  contador++
}

do{
  alert("valor: " + contador);
  contador++
} while (contador<3);

for(let i=0;i<5;i++){
alert("iteracción numero " + i)
}

// for.. in

const miobjeto={apartamento:1, casa:2, finca:3};

for(const key in miobjeto){
  alert(key+ " : " + miobjeto [key]);

} */

// for.. of

const marcas=[10,20];
for (const elemento of marcas){
  alert("elemento: " + elemento);

} 

