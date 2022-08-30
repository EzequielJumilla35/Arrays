//Some: El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
const nrosSome = [3, 8, 17, 37, 88]
const usoSome = [...nrosSome].some(element => element % 3 === 0)
console.log(usoSome) // Devuelve true porque al menos un elemento del array es correcto, en este caso 3


//Ejemplo con un elemento que no existe
const usoSome1 = [...nrosSome].some(element => element % 89 === 0)
console.log(usoSome1) // Devuelve false porque ningun elemento del array es correcto