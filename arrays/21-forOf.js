//forOf:La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array, objetos similares a array (por ejemplo, arguments or NodeList), TypedArray, Map, Set e iterables definidos por el usuario.

//En este caso usamos de ejemplo para forOf el array de objetos de la linea 332

for (const e of userNames) {
    console.log(`Iteracion de nombres con forOf: ${e.name}`)
    console.log(`Iteracion de edad con forOf: ${e.age}`)
    console.log(`Iteracion de profesion con forOf: ${e.profesion}`)
 }