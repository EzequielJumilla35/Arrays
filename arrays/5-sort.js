/*Funcion de sort es ordenar los elementos del array */

//Sort ==> ordenar elementos del array
function cuenta (a , b , c , d , e , f){ 
    let numerosArrays = [a , b  , c , d, e ,f].sort(function (a,b) {
       return a - b
    })
    console.log(numerosArrays[0])
    console.log(numerosArrays[1])
    console.log(numerosArrays[2])
    console.log(numerosArrays[3])
    console.log(numerosArrays[4])
    console.log(numerosArrays[5])
    
   }
   cuenta(35 , 12 , 563 , 14 , 45, 6)
   // Fundamental al utilizar .sort la funcion y los parametro (a , b) y al utilizar el return a - b, retorna de menor a mayor y con b - a del mayor al menor 
   
   function palabras(words) {
      words.sort(function (a,b) {
       return a.localeCompare(b)
      })
      console.log(words)
   }
   palabras(["hola", "chau", "árbol", "manzana", "Ezequiel"] )
   // a.localeCompare(b) es para ordenar las palabras de la a-z aun asi tengan tilde, haciendo b.localeCompare(b) ordena las palabras del array de la z-a aun asi tengan tilde.

//Ejercicio 1 
function numberSort(a , b , c , d ,e ) {
    const nros = [a , b , c ,d ,e ].sort((a,b) => a-b )
    console.log(nros.pop() -  nros[0])

}

numberSort(129 , 33 ,44 ,66 , 5)

//Ejercicio 2
let personas = [
    {nombre:"ezequiel", edad: 23},
    {nombre:"pablo", edad: 14},
    {nombre:"sara", edad : 20}
]

personas.sort(function (a , b) {
    return a.edad - b.edad
})

console.log(personas)

//Ejercicio 3
const User = [
    {nombre: "Messi", edad: 35},
    {nombre: "Neymar", edad: 31},
    {nombre: "Mbappe", edad: 24},
]

User.sort(function (a,b) {
    return a.edad - b.edad
})

console.log(User)

//Ejercicio 4

const comidas = ["japones", "árabe", "portuges" , "étnica"].sort(function(a,b) {
    return a.localeCompare(b);
})



console.log(comidas)

//Ejercicio 5 
function ordenamiento(a , b , c , d , e) {
    const ordenNumeros = [a , b , c , d , e ].sort(function (a, b) {
        return a - b
    })
    console.log(ordenNumeros.pop() + ordenNumeros[0])
}

ordenamiento(13, 35 , 18 , 99 , 27)

//Ejercicio 6
usuario = [
    {name: "Ezequiel", age: 23},
    {name: "Santiago", age: 19},
    {name: "Jazmin", age: 21},
    {name: "Oriana", age: 15},
]

usuario.sort(function (a,b) {
    return a.age - b.age
})

console.log(usuario)

//Ejercicio 7

const jsonUser = [
    {name: "Nadal", age: 36},
    {name: "Federer", age: 41},
    {name: "Djokovic", age: 35},
    {name: "Alcaraz", age: 19},
]

jsonUser.sort(function (a,b) {
    return b.age - a.age
})

console.log(jsonUser)


//Ejercicio 8
const nombres = ["Kanté", "Messi", "Álexis","Roger"].sort(function (a,b) {
    return a.localeCompare(b)
})

console.log(nombres)

//Ejercicio 9

function cuenta(a , b , c , d , e , f , g) {
    const array = [a , b , c ,d , e , f ,g ].sort(function (a, b) {
        return a - b
    })
    console.log(array[0] * array.pop())
}

cuenta(13 , 28 , 45 , 10 , 14 , 18 , 24)

//Ejercicio 10
const deportes = ["tenis", "futbol", "basquet","remo","golf", "handball"].sort(function (a,b) {
    return a.localeCompare(b)
})
console.log(deportes)

//Ejercicio 11
const users = [
    {name: "Eze", nroFavourite: 35},
    {name: "Sara", nroFavourite: 7},
    {name: "Jordan", nroFavourite: 23},
    {name: "Curry", nroFavourite: 30},
]

const ordenNroFav = users.sort(function (a,b) {
    return a.nroFavourite - b.nroFavourite
})

console.log(ordenNroFav)

//Ejercicio 12 
function firstTraining(a , b , c , d , e) {
 const ordenarArray = [a, b , c , d , e].sort(function (a,b) {
    return a - b  
 })
 console.log(ordenarArray.pop() - ordenarArray[0])
}

firstTraining(17, 12 , 16 , 33 , 12)

//Ejercicio 13 

const frutas = ["frutilla", "banana","pera", "uva"].sort(function (a,b) {
    return a.localeCompare(b)
})

console.log(frutas)
