//Join: El método join() crea y devuelve una nueva cadena concatenando todos los elementos en una matriz (o un objeto similar a una matriz ), separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.
const arrJoin = ["Portugal","Italia","España","Francia"]
const resArrJoin = arrJoin.join(" - ") //Une los arrays y los separa según lo que se introduzca dentro de los ()
console.log(resArrJoin)// Respuesta: Portugal - Italia - España - Francia
//Otro ejemplo
const resArrJoin1 = arrJoin.join("") 
console.log(resArrJoin1) //Respuesta:PortugalItaliaEspañaFrancia
