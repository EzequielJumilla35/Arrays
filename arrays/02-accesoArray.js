//Acceder a la posicion del array 
const posicion = [0, 1, 2, 3, 4]
console.log(posicion[0]) // Resultado: 0
console.log(posicion[1]) // Resultado: 1 
console.log(posicion[2]) // Resultado: 2
console.log(posicion[3]) // Resultado: 3
console.log(posicion[4]) // Resultado: 4
console.log("Resultado: " + (posicion[2] + posicion[3])) // Resultado: 5

//Otro ejemplo 
const posicionString = ["Ezequiel","Agustin","Jumilla","23","Argentina"]
console.log(posicionString[0]) //Resultado: Ezequiel
console.log(posicionString[2]) //Resultado: Agustina
console.log(posicionString[1]) //Resultado: Jumilla
console.log(posicionString[3]) //Resultado: 23
console.log(posicionString[4]) //Resultado: Argentina
console.log(`Nombre completo: ${posicionString[0]} ${posicionString[1]} ${posicionString[2]}
Edad: ${posicionString[3]}
Pais: ${posicionString[4]}`) // Resultado: Nombre Completo: Ezequiel Agustin Jumilla 
                             //Edad : 23
                             // Pais: Argentina
