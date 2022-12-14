//fill es un método mutador: modifica el arreglo sobre el que se invoca; no devuelve una copia de éste. Si el primer parámetro es un objeto, copia su referencia y rellena el arreglo con referencias a dicho objeto

const ciudades = ["Buenos Aires", "Madrid","New York","Barcelona","Milan","Roma","Paris"]
const city = ciudades.fill("Rio de Janeiro",3,5)

//Explicacion "Rio de Janeiro" es el elemento modificador 3 es la posición del array donde comienza la modificación y 4 es hasta la posición que va a modificar,SIEMPRE VA A MODIFICAR HASTA UNA POSICION ANTES DE LA POSICION SELECCIONADA. 

console.log(city) //Resultado:['Buenos Aires', 'Madrid', 'New York', 'Rio de Janeiro', 'Rio de Janeiro', 'Roma', 'Paris']

const numerosFill = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const RespNumerosFill = numerosFill.fill("Jordan",2,7) 
console.log(RespNumerosFill)
//Respuesta: [0, 1, Jordan, Jordan, Jordan, Jordan, Jordan, 7, 8 , 9 , 10 ]