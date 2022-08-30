//fill es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste. Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto

const ciudades = ["Buenos Aires", "Madrid","New York","Barcelona","Milan","Roma","Paris"]
const city = ciudades.fill("Rio de Janeiro",3,5)

//Explicacion "Rio de Janeiro" es el elemento modificador 3 es la posición del array donde comienza la modificación y 4 es hasta la posición que va a modificar,SIEMPRE VA A MODIFICAR HASTA UNA POSICION ANTES DE LA POSICION SELECCIONADA. Resultado:['Buenos Aires', 'Madrid', 'New York', 'Rio de Janeiro', 'Rio de Janeiro', 'Roma', 'Paris']. No crea nuevos elementos, va a completar el nuevo elemento 

console.log(city)