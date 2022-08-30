//Operador Spread: corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función.
const arrayCalculo = [1 , 2 , 3 , 4]
function multiplicacion(a , b, c, d) {
   return a * b * c * d
}
console.log(multiplicacion(...arrayCalculo))
//Explicacion la función multiplicacion tiene 4 parametros que van a ser completados por el operador spread por lo que 1*2*3*4 es igual a 24.

//Otra forma sin conocer el operador spread
console.log(multiplicacion(arrayCalculo[0],arrayCalculo[1],arrayCalculo[2],arrayCalculo[3]))
//El codigo queda mas extenso y se pierde optimización.

//¿Que pasa si la funcion tiene 3 parametros, y mi array 4 elementos?¿Se puede usar el operador spread? Si,se puede

function suma(a,b,c) {
   return a + b + c
}
console.log(suma(...arrayCalculo)) 
//Explicacion: Solo realiza el calculo con los primeros 3 elementos del array, si es que la funcion solo tiene 3 parametros

//Concatenando arrays con operador spread
const arraySpread1 = ["Primero","Segundo","Tercero"] 
const arraySpread2 = ["Cuarto", "Quinto","Sexto"]
const concaSpread = [...arraySpread1,...arraySpread2]
console.log(concaSpread)

//Ventajas de usar operador spread: Realmente copia el array y hace la sintaxis más sencilla.
const copiaArray = [...arraySpread1]
copiaArray[0] = 100
console.log(copiaArray)
//Se creo una copia del arraySpread1 en copiaArray pero sin modificar el array original, en cambio haciendo esto:

const malaCopia = arraySpread1
malaCopia[0] = "Modifico array original"
console.log(malaCopia)
console.log(arraySpread1)
//Al hacer esto y lo que pareciera una manera de copiar un array, nos termina perjudicando. Esto sucede porque malaCopia = arraySpread pasan a tener la misma fuente de información.

//Por eso para copiar correctamente un array y luego poder modificar correctamente la copia, sin modificar el array original se recomienda utilizar el operador spread.