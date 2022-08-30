//Arrays de funciones
const funcionArray = [
    () => console.log("primer funcion"),
    () => console.log("segunda funcion"),
    () => console.log("tercer funcion")
 ]
 //Para poder ver las funciones del array.
 funcionArray.forEach(element => element())