//lastIndexOf: El método lastIndexOf() devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente. La matriz se busca hacia atrás, comenzando en fromIndex.
let text = "Messi es el mejor";
let resultText = text.lastIndexOf("mejor");
console.log(resultText) //=> Resultado es 12 donde comienza la palabra

let text1 = "La camiseta violeta es completamente espantosa"
let resultText1 = text1.lastIndexOf("Leo")
console.log(resultText1) //=> Resultado es -1 porque no existe