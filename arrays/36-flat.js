//flat:El método flat() crea una nueva matriz con todos los elementos de la submatriz concatenados recursivamente hasta la profundidad especificada.
const nrosFlat = [1 , 2 , 3 , 4, [5, 6 , 7]] //=> Hay un array dentro de otro array 
const resultadoFlat = nrosFlat.flat() 
// Flat elimina el array anidado, devolviendo un solo array dentro del array de orden superior
console.log(resultadoFlat) // => resultado: [1,2,3,4,5,6,7]

const nrosFlat1 = [1,2,3,4,[5,6,7,[8,9,10,[11,12,13]]]] // 3 anidamientos de array
const resultadoFlat1 = nrosFlat1.flat(Infinity) //=> Se introduce como parametro Infinity(infinito), y automaticamente elimina todos los anidamientos del array, devolviendo un solo array dentro del array de orden superior
console.log(resultadoFlat1) //=> resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]