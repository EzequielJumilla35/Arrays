//unshift() => Agregar un elemento al comienzo
let players = ["Lebron James", "Kevin Durant", "Stephen Curry"]
players.unshift("Nicola Jokic") // => Se agrega un nuevo elemento
console.log(players) // => Se visualiza el nuevo elemento al comienzo del array
//Resultado: [Nicola Jokic, Lebron James, Kevin Durant, Stephen Curry]

//Otro ejemplo
let numerosUnshift = [1, 2, 3, 4]
numerosUnshift.unshift(0)
console.log(numerosUnshift)
