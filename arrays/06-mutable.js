/*Mutable: El objeto Array define algunas operaciones mutables, es decir, modifican el arreglo original al operar sobre el: push, pop, splice, shift,unshift, reverse y sort. Usar estos métodos implica la existencia de side effects y posibles bugs difíciles de rastrear.*/

//Mutable
//Push() => Agregar un elemento al array
let deportes = ["futbol","tenis", "handball"]
deportes.push("Nba") // => Se agrega un nuevo elemento
console.log(deportes) //  => Se visualiza el nuevo elemento al final del array  

//unshift() => Agregar un elemento al comienzo
let players = ["Lebron James", "Kevin Durant", "Stephen Curry"]
players.unshift("Nicola Jokic") // => Se agrega un nuevo elemento
console.log(players) // => Se visualiza el nuevo elemento al comienzo del array


//Splice => Se elige en que parte del array se agrega un nuevo elemento, o se cortan
let numeros = [0, 1 , 2 , 3 , 5 , 6]
numeros.splice(4, 0 , "cuatro") // 4: Posicion del nuevo elemento, 0: Elementos a eliminar, "cuatro": Nuevo elemento
console.log(numeros)

let numeros1 = [0,1,2,3,4,6]
numeros1.splice(4,4)
 // 4: Se elige la posicion del array, 4: Se eliminar todos los elementos despues de la cuarta posicion del array
console.log(numeros1)

//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
let artistas = ["Kanye West", "Eminem", "Dr dre"]
console.log(artistas.pop())
 //Elimina los elementos "Kanye West" y "Eminem" devuelve solamente el último elemento "Dr dre"

//shift() elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado.
let actores = ["Leo Di Caprio", "Jim Carrey", "Ricaro Darín"]
console.log(actores.shift()) 
//Elimina los elementos "Jim Carrey" y "Ricardo Darin" y devuelve solamente el primer elemento del array [0] que es "Leo Di Caprio"
