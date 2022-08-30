//slice() =>  El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará
const paises = ["Argentina","Canada","Qatar","Estados Unidos" ]

const paises0 = paises.slice(0,1)//Empieza en la posicion 0,devuelve solo la posicion 0 
console.log(paises0) //Respuesta : ['Argentina']

const paises1 = paises.slice(0,2)//Empieza en la posicion 0,devuelve posicion 0 y 1
console.log(paises1)//Respuesta :(2) ['Argentina', 'Canada']


const paises2 = paises.slice(0,3)//Empieza en la posicion 0,devuelve posicion 0,1 y 2
console.log(paises2)//Respuesta :(3) ['Argentina', 'Canada', 'Qatar']


const paises3 = paises.slice(0,4)//Empieza en la posicion 0,devuelve posicion 0,1,2 y 3
console.log(paises3)//Respuesta :(3) ['Argentina', 'Canada', 'Qatar', "Estados Unidos"]

const paises4 = paises.slice(1,2)//Empieza en la posicion 1, devuelve 1
console.log(paises4)//Respuesta : ["Canada"]
