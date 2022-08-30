//findIndex: El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
const findNro = [17, 7 , 15 , 3 , 2 ,51]
const resultadoFindNro = findNro.findIndex((element) => (element % 5 === 0)) 
// Devuelve el indice del primer elemento que cumple con la condicion, en este caso [2] porque en este caso, el primer nro divisible por 5 con resto 0 en el array es 15.
console.log(resultadoFindNro)