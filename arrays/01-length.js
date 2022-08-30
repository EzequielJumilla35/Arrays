//Length ==> longitud del array
const longitud = [1, 2, 3, 4, 5]
console.log(longitud.length) // Resultado: 5

const longitud1 = ["hola", "hi", "hello"]
console.log(longitud1.length) // Resultado: 3

// Para acceder a la ultima posicion de un array
const ultimaPosicion = ["primera", "segunda", "tercera", "ultimaPosicion"]
console.log(ultimaPosicion[ultimaPosicion.length -1]) // Resultado:  ultimaPosicion
//Aprestar atencion a la sintaxis

//Mas ejemplos
const longitud2 = ["Nadal","Federer","Djokovic","Del Potro","Murray"]
console.log(longitud2.length)  // Respuesta 5
console.log(longitud2[longitud2.length -1]) // Respuesta: Murray
console.log(longitud2[longitud2.length -2]) // Respuesta: Del Potro
console.log(longitud2[longitud2.length -3]) // Respuesta: Djokovic
console.log(longitud2[longitud2.length -4]) // Respuesta: Federer
console.log(longitud2[longitud2.length -5]) // Respuesta: Nadal

//Sintaxis array[array.length -1] = Último elemento
//Sintaxis array[array.length -2] = Anteúltimo elemento