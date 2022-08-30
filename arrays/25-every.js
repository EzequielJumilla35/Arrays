//every: Determina si todos los elementos en el array satisfacen una condición. Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!
const nrosEvery = [2, 4 ,6 , 8, 10]
const usoEvery = [...nrosEvery].every(element => element % 2 === 0)
console.log(usoEvery) // Devuelve true porque todos los elementos son divisibles por 2

//Ejemplo con un elemento que no existe
const usoEvery1 = [...nrosFind].every(element => element % 4 === 0)
console.log(usoEvery1) // Devuelve false porque no todos los elementos son divisibles por 3.33