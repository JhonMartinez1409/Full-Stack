
/*function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('tiempo').textContent = timeString;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time when the page loads
  updateTime();
const Motos=`[
    {
        "modelo": "ford mustang",
        "produccion": 2010,
        "kilometraje" : 1500
    },

    {
        "modelo": "Honda accord",
        "produccion": 2021,
        "kilometraje" : 4600

    },

    {
        "modelo": "chevrolet cruze",
        "produccion": 2024,
        "kilometraje" : 30000

    },

    {
        "modelo": "volkswagen golf",
        "produccion": 2016,
        "kilometraje" : 12000
    }


]`

console.log(typeof Motos);
const jsondata= JSON.parse(Motos);
console.log(typeof jsondata);
const Motosnuevas= jsondata.filter((Motos)=>
  Motos.produccion>2010 && Motos.kilometraje<5000);
console.log(Motosnuevas);
const newMot= JSON.stringify(Motosnuevas);
console.log (typeof newMot);
const fs=require('fs')
const Motonueva= {

  "modelo": "Hero",
  "produccion": 2016,
  "kilometraje" : 12000
} 
const newMoto= JSON.stringify(Motonueva);
fs.writefile('autos.json', newMoto,(Error)=>{
  if (Errorrror)throw Error;
  console.log("información recibida")
})

// javascript es single threaded (un solo hilo)

 thread = hilo=> proceso que usa la aplicacion para completar  tareas
las tareas se ejecutan en secuencia (1,2,3,4,5 etc) 

let numerofinal=0;
for(let i=0; i < 5000; i++){
  numerofinal += 5;
  
}

console.log(numerofinal);
document.body.style.backgroundColor="cyan";
console.log("ultima tarea");*/

function jason(){
  fetch("https:jsonplaceholder.typicode.com/todos/1")
.then(Response => Response.json())
.then(jsoncargado);

}

function jsoncargado(json){
let spannombrepost=document.getElementById("txtnombrepost");
spannombrepost.innerText = json. title;

let spannombrecompleto= document.getElementById("txtcompleto");
if (json.completed){
spannombrecompleto.innerText = "está competo";


} else {
spannombrecompleto.innerText = "está incompleto";

}
  console.log(json);
}
  cargarjson();