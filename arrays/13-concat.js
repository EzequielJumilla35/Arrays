//Concat() => Su función es unir/concatenar 2 arrays
let marcas = ["Nike","Adidas","Puma"]
let marcas2 = ["Fila","Gap","Under Armour"]

//Concatenacion en los 2 ordenes posibles
const marcasUnidas = marcas.concat(marcas2)
console.log(marcasUnidas)
// Respuesta: ['Nike', 'Adidas', 'Puma', 'Fila', 'Gap', 'Under Armour']

const marcasUnidas1 = marcas2.concat(marcas)
console.log(marcasUnidas1)
// Respuesta: ["Fila","Gap","Under Armour","Nike","Adidas","Puma"]

