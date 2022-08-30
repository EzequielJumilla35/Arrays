//findLast: El findLast()método devuelve el valor del último elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, undefined se devuelve.
const findLastNro = [5,10,15,20,25,31]
const resultadoFindLastNro = findLastNro.findLast((element) => element % 2 === 0)
//Devuelve el último elemento del array que cumple con la condicion de ser divisible por 2 con resto 0 es el 20
console.log(resultadoFindLastNro)