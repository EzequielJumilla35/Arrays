//Arrow functions => Es una forma más breve de escribir las funciones, pero tiene limitaciones.
//Si es una sola linea, no es necesario {}, es simplemente por gusto personal
arrowFunction = () => console.log("arrow function, una sola linea")
arrowFunction()

//Si es mas de una linea
arrowFunction2 = (a,b) => {
   let tercerNumero = 33
   console.log(`El resultado de arrowFunction2 es: ${tercerNumero + a + b}`) 
   //Suma de parametros a y b + variable tercerNumero
}

arrowFunction2(17, 50)