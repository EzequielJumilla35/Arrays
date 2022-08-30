//find: El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
const nrosFind = [3 , 4 , 7 , 9 ,10 , 15 , 23, 30 , 35 , 40, 50]
const usoFind = [...nrosFind].find(element => element % 5 === 0  ) //Devolucion del primer elemento que dividido por 5 su resto sea 0, osea 10.
console.log(usoFind)

//Ejemplo con un elemento que no existe
const usoFind1 = [...nrosFind].find(element => element % 3.33 === 0)
console.log(usoFind1) // Nos arroja undefined,cuando esa condicion no existe.