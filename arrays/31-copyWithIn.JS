//copyWithin: El método copyWithin() transfiere una copia plana de una sección a otra dentro del mismo array ( o contexto similar ), sin modificar su propiedad length y lo devuelve.
let arreglo = ["a", "b" , "c", "c", "d"]
console.log(arreglo)

arreglo.copyWithin(2,0,2)
console.log(arreglo)

arreglo.copyWithin(1,0,3)
console.log(arreglo)

//arreglo.copyWithin(target, start, end);
//target: Es requerido e indica la posición desde donde se van a comenzar a copiar los elementos
//start: Es opcional e indica la posición desde donde vamos a copiar los elementos. Por defecto es 0, el inicio del array.
//end: Es opcional e indica la posicion hasta donde vamos a copiar los elementos, pero sin considerar el elemento que se encuentra en esa posición. Por defecto es el tamaño del array.