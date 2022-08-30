//findLastIndex: El método findLastIndex() devuelve el índice del último elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.
const nroFindLastIndex = [35, 23, 11, 17, 39, 41]
const resultadoFindLastIndex = nroFindLastIndex.findLastIndex((element)=> element % 3 === 0)
//Devuelve la posición del último array que cumple con la condicion de ser divisible por 3 con resto 0 es el 39
console.log(resultadoFindLastIndex) //Respuesta: 4