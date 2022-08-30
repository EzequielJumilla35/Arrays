//toLocaleString: El método toLocaleString() devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas usando sus toLocaleStringmétodos y estas cadenas están separadas por una cadena específica de la configuración regional (como una coma ",").
const d = new Date();
let texto = d.toLocaleString();
console.log(texto) //=> Devuelve fecha y hora actual: 29/8/2022, 19:37:45