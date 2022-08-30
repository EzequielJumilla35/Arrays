//Filter: El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//Para este ejemplo usamos el array de la linea 415
const usoFilter = [...nrosFind].filter(element => element % 5 === 0)
console.log(usoFilter) //A diferencia de find, filter devuelve todos elementos que cumplan la condicion. [10, 15, 30, 35, 40, 50]

//Ejemplo con un elemento que no existe
const usoFilter1 = [...nrosFind].filter(element => element % 3.33 === 0)
console.log(usoFilter1) // Nos arroja [] vacio, cuando esa condicion no existe.

