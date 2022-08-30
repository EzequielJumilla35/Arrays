//entries: El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
let myUser = {
    name: "Ezequiel",
     age:"23",
      country: "Argentina"}

let myUserEntries = Object.entries(myUser) //=> con Object.entries(myUser), el objeto pasa a ser un array
console.log(myUserEntries[0]) // => muestra [name,"Ezequiel"] como un array con pares clave/valor
console.log(myUserEntries[0][1]) // => muestra Ezequiel
//transforma un objeto en un array 
//entries nos sirve para utilizar todos las funcionalidades que nos brindan los arrays
myUserEntries.forEach((element)=> console.log(element.pop())) //=> nos devuelve el ultimo valor de cada array
myUserEntries.forEach((element)=>console.log(element[0]))//=> nos devuelve el primer valor de cada array 
