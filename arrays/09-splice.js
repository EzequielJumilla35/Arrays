//Splice => Se elige en que parte del array se agrega un nuevo elemento, o se cortan
let numeros = [0, 1 , 2 , 3 , 5 , 6]
numeros.splice(4, 0 , "cuatro") 
// 4: Posicion del nuevo elemento, 0: Elementos a eliminar, "cuatro": Nuevo elemento
console.log(numeros)

let numeros1 = [0,1,2,3,4,6]
numeros1.splice(4,4)
 // 4: Se elige la posicion del array, 4: Se eliminar todos los elementos despues de la cuarta posicion del array
console.log(numeros1)
