/*Un Array:  es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa en el array. En algunas ocasiones también se les suelen llamar arreglos o vectores  */

//---------------------------------------------------------------------------------------------

//Length ==> longitud del array
const longitud = [1, 2, 3, 4, 5]
console.log(longitud.length)

const longitud1 = ["hola", "hi", "hello"]
console.log(longitud1.length)

// Para acceder a la ultima posicion de un array
const ultimaPosicion = ["primera", "segunda", "tercera", "ultimaPosicion"]
console.log(ultimaPosicion[ultimaPosicion.length -1]) // Aprestar atencion a la sintaxis

//--------------------------------------------------------------------------------------------

//Acceder a la posicion del array 
const posicion = [0, 1, 2, 3,4]
console.log(posicion[0])
console.log(posicion[1])
console.log(posicion[2])
console.log(posicion[3])
console.log(posicion[4])

//--------------------------------------------------------------------------------------------

//at() => Acceder a la posicion del array 
const posicionAt = ["posicion1", "posicion2", "posicion3"]
console.log(posicionAt.at(0)) // => "posicion1"
console.log(posicionAt.at(1)) // => "posicion2"
console.log(posicionAt.at(2)) // => "posicion3"
console.log(posicionAt.at(-1)) // => Último array => "posicion3"
console.log(posicionAt.at(-2)) // => Anteúltimo array => "posicion2"

//----------------------------------------------------------------------------------------

//Recorrer un array
const recorrerArray = [31 , 35 , 43 , 49, 17]

//for es un iterador/ let index = 0 indica que el array comienza en 0, index < recorrerArray.length / index++ indica que va incrementando

for (let index = 0; index < recorrerArray.length; index++) {
   //con el console.log(recorrerArray[index]) nos muestra todo el array iterado, elemento por elemento en la consola
   console.log(recorrerArray[index]);
   }

//--------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------


/*Inmutabilidad y mutabilidad
Inmutabilidad: crea una copia de nuestro array.Un valor inmutable es algo que no puede ser cambiado.

Mutabilidad: El objeto Array define algunas operaciones mutables, es decir, modifican el arreglo original al operar sobre el: push, pop, splice, shift,unshift, reverse y sort. Usar estos métodos implica la existencia de side effects y posibles bugs difíciles de rastrear.
*/

//-------------------------------------------------------------------------------------------

//Mutable
//Push() => Agregar un elemento al array

let deportes1 = ["futbol","tenis", "handball"]
deportes.push("Nba") // => Se agrega un nuevo elemento
console.log(deportes1) // => Se visualiza el nuevo elemento al final del array  

//------------------------------------------------------------------------------------------


//unshift() => Agregar un elemento al comienzo
let players = ["Lebron James", "Kevin Durant", "Stephen Curry"]
players.unshift("Nicola Jokic") // => Se agrega un nuevo elemento
console.log(players) // => Se visualiza el nuevo elemento al comienzo del array

//----------------------------------------------------------------------------------------


//Splice => Se elige en que parte del array se agrega un nuevo elemento, o se cortan
let numeros = [0, 1 , 2 , 3 , 5 , 6]
numeros.splice(4, 0 , "cuatro") // 4: Posicion del nuevo elemento, 0: Elementos a eliminar, "cuatro": Nuevo elemento
console.log(numeros)

let numeros1 = [0,1,2,3,4,6]
numeros1.splice(4,4) 
// 4: Se elige la posicion del array, 4: Se eliminar todos los elementos despues de la cuarta posicion del array
console.log(numeros1)

//----------------------------------------------------------------------------------------


//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let artistas = ["Kanye West", "Eminem", "Dr dre"]
console.log(artistas.pop()) //Elimina los elementos "Kanye West" y "Eminem" devuelve solamente el último elemento "Dr dre"

//-----------------------------------------------------------------------------------------
//shift() elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
let actores = ["Leo Di Caprio", "Jim Carrey", "Ricaro Darín"]
console.log(actores.shift()) //Elimina los elementos "Jim Carrey" y "Ricardo Darin" y devuelve solamente el primer elemento del array [0] que es "Leo Di Caprio"


//----------------------------------------------------------------------------------------

//Inmutables:
//Concat() => Su función es unir/concatenar 2 arrays
let marcas = ["Nike","Adidas","Puma"]
let marcas2 = ["Fila","Gap","Under Armour"]
//Concatenacion en los 2 ordenes posibles
const marcasUnidas = marcas.concat(marcas2)
const marcasUnidas1 = marcas2.concat(marcas)

console.log(marcasUnidas)
console.log(marcasUnidas1)

//------------------------------------------------------------------------------------------

//IndexOf: devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.
const IndiceArray = ["Cero","Primero","Segundo","Tercero","Cuarto"]
console.log(IndiceArray.indexOf("Cero")) // => Devuelve 0, posicion del Array
console.log(IndiceArray.indexOf("Primero")) // => Devuelve 1, posicion del Array
console.log(IndiceArray.indexOf("Segundo")) // => Devuelve 2, posicion del Array
console.log(IndiceArray.indexOf("Tercero")) // => Devuelve 3, posicion del Array
console.log(IndiceArray.indexOf("Cuarto")) // => Devuelve 4, posicion del Array
console.log(IndiceArray.indexOf("Quinto")) // => Devuelve -1, No existe ese elemento


//-------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------

//fill es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste. Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto
const ciudades = ["Buenos Aires", "Madrid","New York","Barcelona","Milan","Roma","Paris"]
const city = ciudades.fill("Rio de Janeiro",3,5)
//Explicacion "Rio de Janeiro" es el elemento modificador 3 es la posición del array donde comienza la modificación y 4 es hasta la posición que va a modificar,SIEMPRE VA A MODIFICAR HASTA UNA POSICION ANTES DE LA POSICION SELECCIONADA. Resultado:['Buenos Aires', 'Madrid', 'New York', 'Rio de Janeiro', 'Rio de Janeiro', 'Roma', 'Paris']. No crea nuevos elementos, va a completar el nuevo elemento 
console.log(city)


//-----------------------------------------------------------------------------------------

//Operador Spread: corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función.
const arrayCalculo = [1 , 2 , 3 , 4]
function multiplicacion(a , b, c, d) {
   return a * b * c * d
}
console.log(multiplicacion(...arrayCalculo))
//Explicacion la función multiplicacion tiene 4 parametros que van a ser completados por el operador spread por lo que 1*2*3*4 es igual a 24.

//Otra forma sin conocer el operador spread
console.log(multiplicacion(arrayCalculo[0],arrayCalculo[1],arrayCalculo[2],arrayCalculo[3]))
//El codigo queda mas extenso y se pierde optimización.

//¿Que pasa si la funcion tiene 3 parametros, y mi array 4 elementos?¿Se puede usar el operador spread? Si,se puede

function suma(a,b,c) {
   return a + b + c
}
console.log(suma(...arrayCalculo)) 
//Explicacion: Solo realiza el calculo con los primeros 3 elementos del array, si es que la funcion solo tiene 3 parametros

//Concatenando arrays con operador spread
const arraySpread1 = ["Primero","Segundo","Tercero"] 
const arraySpread2 = ["Cuarto", "Quinto","Sexto"]
const concaSpread = [...arraySpread1,...arraySpread2]
console.log(concaSpread)

//Ventajas de usar operador spread: Realmente copia el array y hace la sintaxis más sencilla.
const copiaArray = [...arraySpread1]
copiaArray[0] = 100
console.log(copiaArray)
//Se creo una copia del arraySpread1 en copiaArray pero sin modificar el array original, en cambio haciendo esto:

const malaCopia = arraySpread1
malaCopia[0] = "Modifico array original"
console.log(malaCopia)
console.log(arraySpread1)
//Al hacer esto y lo que pareciera una manera de copiar un array, nos termina perjudicando. Esto sucede porque malaCopia = arraySpread pasan a tener la misma fuente de información.

//Por eso para copiar correctamente un array y luego poder modificar correctamente la copia, sin modificar el array original se recomienda utilizar el operador spread.

//--------------------------------------------------------------------------------------------


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


//Con forEach iteramos los objetos del array y los vemos por la consola
userNames.forEach(element => {
   console.log(`Nombre:${element.name}
   Edad:${element.age}
   Profesion:${element.profesion}`) 
});

//--------------------------------------------------------------------------------------------

//Funcion de primer orden
let funcionAnonima = function () {
   console.log("Esto es una funcion anonima")
}
 // funcionAnonima() => eliminar // para poder ejecutar la funcion anonima

//Funcion de orden superior
function funcionSuperior(funcionParametro) {
   console.log("Primer comentario")
   funcionParametro()
   console.log("Tercer comentario")
}
funcionSuperior(funcionAnonima) // Esta es una manera sencilla de como ejecutar una funcion dentro de otra funcion.

//--------------------------------------------------------------------------------------------

//Arrow functions => Es una forma más breve de escribir las funciones, pero tiene limitaciones.
//Si es una sola linea, no es necesario {}, es simplemente por gusto personal
arrowFunction = () => console.log("arrow function, una sola linea")
arrowFunction()

//Si es mas de una linea
arrowFunction2 = (a,b) => {
   let tercerNumero = 33
   console.log(`El resultado de arrowFunction2 es: ${tercerNumero + a + b}`) 
   //Suma de parametros a y b + variable tercerNumero
}

arrowFunction2(17, 50)

//---------------------------------------------------------------------------------------------

//forOf:La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

//En este caso usamos de ejemplo para forOf el array de objetos de la linea 370

for (const e of userNames) {
   console.log(`Iteracion de nombres con forOf: ${e.name}`)
   console.log(`Iteracion de edad con forOf: ${e.age}`)
   console.log(`Iteracion de profesion con forOf: ${e.profesion}`)
}

//--------------------------------------------------------------------------------------------


//forEach: El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//En este caso usamos de ejemplo para forOf el array de objetos de la linea 370
userNames.forEach((element, index)=> {
   console.log(element)
   console.log("indice nro:" + index)
})
//Itera y nos devuelve los elementos del objeto de manera ordenada y con index nos da el nro de indice del objeto

//--------------------------------------------------------------------------------------------

//find: El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const nrosFind = [3 , 4 , 7 , 9 ,10 , 15 , 23, 30 , 35 , 40, 50]
const usoFind = [...nrosFind].find(element => element % 5 === 0  ) //Devolucion del primer elemento que dividido por 5 su resto sea 0, osea 10.
console.log(usoFind)

//Ejemplo con un elemento que no existe
const usoFind1 = [...nrosFind].find(element => element % 3.33 === 0)
console.log(usoFind1) // Nos arroja undefined,cuando esa condicion no existe.

//--------------------------------------------------------------------------------------------

//Filter: El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//Para este ejemplo usamos el array de la linea 415
const usoFilter = [...nrosFind].filter(element => element % 5 === 0)
console.log(usoFilter) //A diferencia de find, filter devuelve todos elementos que cumplan la condicion. [10, 15, 30, 35, 40, 50]

//Ejemplo con un elemento que no existe
const usoFilter1 = [...nrosFind].filter(element => element % 3.33 === 0)
console.log(usoFilter1) // Nos arroja [] vacio, cuando esa condicion no existe.

//--------------------------------------------------------------------------------------------


//every: Determina si todos los elementos en el array satisfacen una condición. Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!
const nrosEvery = [2, 4 ,6 , 8, 10]
const usoEvery = [...nrosEvery].every(element => element % 2 === 0)
console.log(usoEvery) // Devuelve true porque todos los elementos son divisibles por 2

//Ejemplo con un elemento que no existe
const usoEvery1 = [...nrosFind].every(element => element % 4 === 0)
console.log(usoEvery1) // Devuelve false porque no todos los elementos son divisibles por 3.33

//--------------------------------------------------------------------------------------------

//Some: El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const nrosSome = [3, 8, 17, 37, 88]
const usoSome = [...nrosSome].some(element => element % 3 === 0)
console.log(usoSome) // Devuelve true porque al menos un elemento del array es correcto, en este caso 3


//Ejemplo con un elemento que no existe
const usoSome1 = [...nrosSome].some(element => element % 89 === 0)
console.log(usoSome1) // Devuelve false porque ningun elemento del array es correcto

//--------------------------------------------------------------------------------------------

//reverse : El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
//En este caso usamos de ejemplo para reverse() el array de objetos de la linea 332
const usoReverse = [...userNames].reverse()
console.log(usoReverse)
//Explicacion devuelve el orden de los objetos del array al reves antes: EZEQUIEL, LEBRON, FEDERER y ahora es FEDERER, LEBRON , EZEQUIEL.

//--------------------------------------------------------------------------------------------

//map: El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numbersMap = [2, 4 , 6 , 8, 10]
const usoMap = [...numbersMap].map((element) =>{
    console.log(element * 2)
})
//Explicacion .map() recorre todo nuestro mi primer array, iterandolo y arrojando un nuevo array en este caso, multiplicado * 2


//Otro ejemplo de .map()
//En este caso usamos de ejemplo para map() el array de objetos de la linea 332
const usoMap2 = [...userNames].map(element => {
   console.log(element.name)
   console.log(element.age * 2) 
   // en este caso multiplicamos la edad del objeto del array, por lo que Ezequiel paso de tener 23 años a 46 , lebron de 38 a 76 y federer de 41 a 82
   console.log(element.profesion)
})

//-----------------------------------------------------------------------------------

//Reduce: El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const camisetas = [
   {
      marca:"nike" ,
      precio: 300,
   },
   {
      marca:"adidas",
      precio:500,
   },
   {
      marca:"puma",
      precio: 200
   }
]

const usoReduce = camisetas.reduce((acc, curr) => acc + curr.precio, 0)
console.log(`El precio total de las 3 camisetas es: ${usoReduce}`)

//Explicacion: acc hace referencia al acumulador y curr a la sumatoria del elemento , 0 es monto en el cual va a empezar acc, por lo que el resultado es 1000 (300 nike, 500 adidas, 200 puma)

//Otro ejemplo con acc empezando en 300
const usoReduce1 = camisetas.reduce((acc, curr) => acc + curr.precio, 300)
console.log(`El precio total de las 3 camisetas es: ${usoReduce1}`)

//-------------------------------------------------------------------------------------

//Arrays de funciones
const funcionArray = [
   () => console.log("primer funcion"),
   () => console.log("segunda funcion"),
   () => console.log("tercer funcion")
]
//Para poder ver las funciones del array.
funcionArray.forEach(element => element())

//--------------------------------------------------------------------------------------

//copyWithin: El método copyWithin() transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.
let arreglo = ["a", "b" , "c", "c", "d"]
console.log(arreglo)
//arreglo.copyWithin(target, start, end);

//target: Es requerido e indica la posición desde donde se van a comenzar a copiar los elementos

//start: Es opcional e indica la posición desde donde vamos a copiar los elementos. Por defecto es 0, el inicio del array.

//end: Es opcional e indica la posicion hasta donde vamos a copiar los elementos, pero sin considerar el elemento que se encuentra en esa posición. Por defecto es el tamaño del array.
arreglo.copyWithin(2,0,2)
console.log(arreglo)

arreglo.copyWithin(1,0,3)
console.log(arreglo)

//----------------------------------------------------------------------------------------

//entries: El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
let myUser = {
   name: "Ezequiel",
 age:"23", 
 country: "Argentina"
}
let myUserEntries = Object.entries(myUser)
console.log(myUserEntries[0]) // => muestra name "Ezequiel" como un array con pares clave/valor
console.log(myUserEntries[0][1]) // => muestra Ezequiel

//transforma un objeto en un array 
//entries nos sirve para utilizar todos las funcionalidades que nos brindan los arrays
//Iteracion forEach para ver elementos
myUserEntries.forEach((element)=> console.log(element.pop())) //=> nos devuelve el ultimo valor de cada array
myUserEntries.forEach((element)=>console.log(element[0]))//=> nos devuelve el primer valor de cada array

//-------------------------------------------------------------------------------------

//findIndex: El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
const findNro = [17, 7 , 15 , 3 , 2 ,51]
const resultadoFindNro = findNro.findIndex((element) => (element % 5 === 0)) 
// Devuelve el indice del primer elemento que cumple con la condicion, en este caso [2] porque en este caso, el primer nro divisible por 5 con resto 0 en el array es 15.
console.log(resultadoFindNro)

//------------------------------------------------------------------------------------

//findLast: El findLast()método devuelve el valor del último elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefined se devuelve.
const findLastNro = [5,10,15,20,25,31]
const resultadoFindLastNro = findLastNro.findLast((element) => element % 2 === 0)
//Devuelve el último elemento del array que cumple con la condicion de ser divisible por 2 con resto 0 es el 20
console.log(resultadoFindLastNro)

//-----------------------------------------------------------------------------------------

//findLastIndex: El método findLastIndex() devuelve el índice del último elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.
const nroFindLastIndex = [35, 23, 11, 17, 39, 41]
const resultadoFindLastIndex = nroFindLastIndex.findLastIndex((element)=> element % 3 === 0)
//Devuelve la posición del último array que cumple con la condicion de ser divisible por 3 con resto 0 es el 39
console.log(resultadoFindLastIndex)

//---------------------------------------------------------------------------------------------

//flat:El método flat() crea una nueva matriz con todos los elementos de la submatriz concatenados recursivamente hasta la profundidad especificada.
const nrosFlat = [1 , 2 , 3 , 4, [5, 6 , 7]] //=> Hay un array dentro de otro array 
const resultadoFlat = nrosFlat.flat() 
// Flat elimina el array anidado, devolviendo un solo array dentro del array de orden superior
console.log(resultadoFlat) // => resultado: [1,2,3,4,5,6,7]

const nrosFlat1 = [1,2,3,4,[5,6,7,[8,9,10,[11,12,13]]]] // 3 anidamientos de array
const resultadoFlat1 = nrosFlat1.flat(Infinity) //=> Se introduce como parametro Infinity(infinito), y automaticamente elimina todos los anidamientos del array, devolviendo un solo array dentro del array de orden superior
console.log(resultadoFlat1) //=> resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//---------------------------------------------------------------------------------------------


//includes: El método includes() determina si una matriz incluye un determinado valor entre sus entradas, devolviendo true o false según corresponda.
let arrIncludes = ["Argentina", "Brasil", "Uruguay","Chile","Bolivia","Paraguay"]
let resultadoArrIncludes = arrIncludes.includes("Argentina") // Resultado:true
console.log(resultadoArrIncludes)

let resultadoArrIncludes1 = arrIncludes.includes("Brasil") // Resultado:true
console.log(resultadoArrIncludes1)
let resultadoArrIncludes2 = arrIncludes.includes("Uruguay") // Resultado:true
console.log(resultadoArrIncludes2)

let resultadoArrIncludes3 = arrIncludes.includes("Chile") // Resultado:true
console.log(resultadoArrIncludes3)

let resultadoArrIncludes4 = arrIncludes.includes("Bolivia") // Resultado:true
console.log(resultadoArrIncludes4)

let resultadoArrIncludes5 = arrIncludes.includes("Paraguay") // Resultado:true
console.log(resultadoArrIncludes5)

let resultadoArrIncludes6 = arrIncludes.includes("Mexico") // Resultado:false
console.log(resultadoArrIncludes6)

//--------------------------------------------------------------------------------------------

//isArray: El método Array.isArray() determina si el valor pasado es un Array.
const esArray = [1,2,3,4]
console.log(Array.isArray(esArray)) //Resultado: true

const noEsArray = "Esto no es un array"
console.log(Array.isArray(noEsArray)) //Resultado: false

//------------------------------------------------------------------------------------------

//Join: El método join() crea y devuelve una nueva cadena concatenando todos los elementos en una matriz (o un objeto similar a una matriz ), separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.
const arrJoin = ["Portugal","Italia","España","Francia"]
const resArrJoin = arrJoin.join(" - ") //Une los arrays y los separa según lo que se introduzca dentro de los ()
console.log(resArrJoin)// Respuesta: Portugal - Italia - España - Francia
//Otro ejemplo
const resArrJoin1 = arrJoin.join("") //Respuesta:PortugalItaliaEspañaFrancia
console.log(resArrJoin1)

//---------------------------------------------------------------------------------------------

//keys: El keys()método devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice de la matriz.
const userPage = {
   name : "Ezequiel",
   surname: "Jumilla",
   country: "Argentina",
  
}

console.log(Object.keys(userPage)) //Devuelve la claves del objeto en formato array con Strings



//---------------------------------------------------------------------------------------------

//lastIndexOf: El método lastIndexOf() devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente. La matriz se busca hacia atrás, comenzando en fromIndex.
let text = "Messi es el mejor";
let resultText = text.lastIndexOf("mejor");
console.log(resultText) //=> Resultado es 12 donde comienza la palabra

let text1 = "La camiseta violeta es completamente espantosa"
let resultText1 = text1.lastIndexOf("Leo")
console.log(resultText1) //=> Resultado es -1 porque no existe
//---------------------------------------------------------------------------------------------

//toLocaleString: El método toLocaleString() devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas usando sus toLocaleStringmétodos y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma ",").
const d = new Date();
let texto = d.toLocaleString();
console.log(texto) //=> Devuelve fecha y hora actual: 29/8/2022, 19:37:45


//---------------------------------------------------------------------------------------------

//values: El método values() devuelve un nuevo objeto iterador de matriz que contiene los valores de cada índice de la matriz.
var a = ['E', 'z', 'e', 'q', 'u',"i","e","l"];
var iterator = a.values();

console.log(iterator.next().value); // E
console.log(iterator.next().value); // z 
console.log(iterator.next().value); // e 
console.log(iterator.next().value); // q 
console.log(iterator.next().value); // u
console.log(iterator.next().value); // i
console.log(iterator.next().value); // e
console.log(iterator.next().value); // l

var arr = ['i', 't', 'e', 'r', 'a', 'n','d','o'];
var iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}

//---------------------------------------------------------------------------------------------