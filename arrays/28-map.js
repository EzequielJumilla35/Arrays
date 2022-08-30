//map: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

let numbersMap = [2, 4 , 6 , 8, 10]
let usoMap = [...numbersMap].map((element) =>{
    console.log(element * 2)
})
//Explicacion .map() recorre todo nuestro mi primer array, iterandolo y arrojando un nuevo array en este caso, multiplicado * 2


//Otro ejemplo de .map()
//Arrays de objetos
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
 
const usoMap2 = [...userNames].map(element => {
   console.log(element.name)
   console.log(element.age * 2) 
   // en este caso multiplicamos la edad del objeto del array, por lo que Ezequiel paso de tener 23 años a 46 , lebron de 38 a 76 y federer de 41 a 82
   console.log(element.profesion)
})

