//Funcion de primer orden
let funcionAnonima = function () {
    console.log("Esto es una funcion anonima")
 }
  // funcionAnonima() => eliminar // para poder ejecutar la funcion anonima
 
 //Funcion de orden superior
 function funcionSuperior(funcionParametro) {
    console.log("Primer comentario")
    funcionParametro()
    console.log("Tercer comentario")
 }
 funcionSuperior(funcionAnonima) // Esta es una manera sencilla de como ejecutar una funcion dentro de otra funcion.