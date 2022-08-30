//Inmutables:

//Concat() => Su función es unir/concatenar 2 arrays
let marcas = ["Nike","Adidas","Puma"]
let marcas2 = ["Fila","Gap","Under Armour"]

//Concatenacion en los 2 ordenes posibles
const marcasUnidas = marcas.concat(marcas2)
console.log(marcasUnidas)

const marcasUnidas1 = marcas2.concat(marcas)
console.log(marcasUnidas1)


//slice() =>  El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará
const paises = ["Argentina","Canda","Qatar","Estados Unidos" ]

const paises0 = paises.slice(0,1)//Empieza en la posicion 0,devuelve solo la posicion 0 
console.log(paises0)

const paises1 = paises.slice(0,2)//Empieza en la posicion 0,devuelve posicion 0 y 1
console.log(paises1)

const paises2 = paises.slice(0,3)//Empieza en la posicion 0,devuelve posicion 0,1 y 2
console.log(paises2)

const paises3 = paises.slice(0,4)//Empieza en la posicion 0,devuelve posicion 0,1,2 y 3
console.log(paises3)

const paises4 = paises.slice(1,2)//Empieza en la posicion 1, devuelve 1
console.log(paises4)


//map: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numbersMap = [2, 4 , 6 , 8, 10]
const usoMap = [...numbersMap].map((element) =>{
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
