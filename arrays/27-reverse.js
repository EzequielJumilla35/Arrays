//reverse : El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const userNames = [
    {
 
       name:"Ezequiel",
       age:"23",
       profesion:"Frontend developer",
 
    },
 
    {
 
       name:"Lebron",
       age:"37",
       profesion:"Jugador profesional de Basquet",
 
    },
 
    {
 
       name:"Federer",
       age:"41",
       profesion:"Tenista",
 
    }
 ]
const usoReverse = [...userNames].reverse()
console.log(usoReverse)//Respuesta: ["Federer","Lebron",Ezequiel]


