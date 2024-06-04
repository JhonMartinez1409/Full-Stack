/*Creacion de objeto json
NOMBRE
EDAD
CORREO
HOBBIE

5
PROBAR Y EVIDENCIAR EL CODIGO QUE CONVIERTE A STRING Y A OBJETO 
FILTROS POR EDAD Y POR HOBBIES
AGREGAR UNA NUEVA PROPIEDAD, CONEL NOMBRE ACTIVO. valor booleano
filtro(opcional)*/


const DATOS_CONTACTOS =`[
  {
    "NOMBRE": "Jhon Martinez",
    "EDAD": 27,
    "CORREO-ELECTRONICO": "JhonMartinez2409@mail.com",
    "HOBBIES": ["Viajar", "Programar", "Ajedrez"],
    "activo": true
  },
  {
    "NOMBRE": "Carolina Aguilar",
    "EDAD": 25,
    "CORREO-ELECTRONICO": "Carolinaaguilarca03@mail.com",
    "HOBBIES": ["leer", "Estudiar", "Ejercitarse"],
    "activo": true
  },

  {
    "NOMBRE" : "Juan Martinez",
    "EDAD": 25,
    "CORREO ELECTRONICO": "Juandiegomsrtinezpulido@gmail.com",
    "HOBBIES": ["Construir","Leer","Reparar"],
    "Activo": true

  },
 
  {
    "NOMBRE": "Luna",
    "EDAD": 35,
    "CORREO-ELECTRONICO": "Luna@gmail.com",
    "HOBBIES": ["Jugar", "Pasear", "Morder"],
    "activo": true
  },
  {
    "NOMBRE": "Fabian Puentes",
    "EDAD": 25,
    "CORREO-ELECTRONICO": "Fabiany@gmail.com",
    "HOBBIES": ["Micro", "escribir", "Vender"],
    "activo": true
  }
]`;

// Validación de tipo de dato//

console.log(typeof DATOS_CONTACTOS); //valida tipo de dato

const jasondata=JSON.parse(DATOS_CONTACTOS); // pasa de cadena a objeto

console.log(typeof jasondata)

const edades = jasondata.filter(persona => persona.EDAD < 29);
console.log(edades);

const actividades = jsonData.filter(persona => persona.HOBBIES = "leer");
console.log(actividades);


/*
const actividadesObj = JSON.stringify(actividades);
console.log(typeof actividadesObj)

import { error } from 'console';
import fs from 'fs';

const activo =  {activo:true,activo:false};

const bool = JSON.stringify(actividades);
fs.writeFile('Actividad-Objects.json',bool,(error)=>{
    if (error){
        throw error;
        console.log("dato agregado")
    }
});*/