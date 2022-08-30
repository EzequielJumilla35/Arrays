//includes: El método includes() determina si una matriz incluye un determinado valor entre sus entradas, devolviendo true o false según corresponda.
let arrIncludes = ["Argentina", "Brasil", "Uruguay","Chile","Bolivia","Paraguay"]
let resultadoArrIncludes = arrIncludes.includes("Argentina") // Resultado:true
console.log(resultadoArrIncludes)

let resultadoArrIncludes1 = arrIncludes.includes("Brasil") // Resultado:true
console.log(resultadoArrIncludes1)
let resultadoArrIncludes2 = arrIncludes.includes("Uruguay") // Resultado:true
console.log(resultadoArrIncludes2)

let resultadoArrIncludes3 = arrIncludes.includes("Chile") // Resultado:true
console.log(resultadoArrIncludes3)

let resultadoArrIncludes4 = arrIncludes.includes("Bolivia") // Resultado:true
console.log(resultadoArrIncludes4)

let resultadoArrIncludes5 = arrIncludes.includes("Paraguay") // Resultado:true
console.log(resultadoArrIncludes5)

let resultadoArrIncludes6 = arrIncludes.includes("Mexico") // Resultado:false
console.log(resultadoArrIncludes6)