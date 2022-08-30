//Reduce: El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const camisetas = [
    {
       marca:"nike" ,
       precio: 300,
    },
    {
       marca:"adidas",
       precio:500,
    },
    {
       marca:"puma",
       precio: 200
    }
 ]
 
 const usoReduce = camisetas.reduce((acc, curr) => acc + curr.precio, 0)
 console.log(`El precio total de las 3 camisetas es: ${usoReduce}`)
 
 //Explicacion: acc hace referencia al acumulador y curr a la sumatoria del elemento , 0 es monto en el cual va a empezar acc, por lo que el resultado es 1000 (300 nike, 500 adidas, 200 puma)
 
 //Otro ejemplo con acc empezando en 300
 const usoReduce1 = camisetas.reduce((acc, curr) => acc + curr.precio, 300)
 console.log(`El precio total de las 3 camisetas es: ${usoReduce1}`)
 