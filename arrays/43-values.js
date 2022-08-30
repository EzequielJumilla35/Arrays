//values: El método values() devuelve un nuevo objeto iterador de matriz que contiene los valores de cada índice de la matriz.
let a = ['E', 'z', 'e', 'q', 'u',"i","e","l"];
let iterator = a.values();

console.log(iterator.next().value); // E
console.log(iterator.next().value); // z 
console.log(iterator.next().value); // e 
console.log(iterator.next().value); // q 
console.log(iterator.next().value); // u
console.log(iterator.next().value); // i
console.log(iterator.next().value); // e
console.log(iterator.next().value); // l

let arr = ['i', 't', 'e', 'r', 'a', 'n','d','o'];
let iterador = arr.values();

for (let letra of iterador) {
  console.log(letra);
}
/*Respuesta:
i
t
e
r
a
n
d
o 
*/