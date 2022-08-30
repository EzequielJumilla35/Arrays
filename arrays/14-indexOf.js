//IndexOf: devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.

const IndiceArray = ["Cero","Primero","Segundo","Tercero","Cuarto"]
console.log(IndiceArray.indexOf("Cero")) // Respuesta:  0, posicion del Array
console.log(IndiceArray.indexOf("Primero")) //Respuesta:  1, posicion del Array
console.log(IndiceArray.indexOf("Segundo")) //Respuesta:  2, posicion del Array
console.log(IndiceArray.indexOf("Tercero")) //Respuesta:  3, posicion del Array
console.log(IndiceArray.indexOf("Cuarto")) // Respuesta: 4, posicion del Array
console.log(IndiceArray.indexOf("Quinto")) //Respuesta  -1, No existe ese elemento

