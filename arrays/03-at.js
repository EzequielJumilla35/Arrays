//at() => Acceder a la posicion del array 
const posicionAt = ["posicion1", "posicion2", "posicion3"]
console.log(posicionAt.at(0)) // Resultado: "posicion1"
console.log(posicionAt.at(1)) // Resultado: "posicion2"
console.log(posicionAt.at(2)) // Resultado: "posicion3"
console.log(posicionAt.at(-1)) // Resultado: Último array => "posicion3"
console.log(posicionAt.at(-2)) // Resultado: Anteúltimo array => "posicion2"

//Otro ejemplo
const nbaTeams = ["Warriors","Boston","Mavs","Heats"]
console.log(`Campeón NBA 2021-22: ${nbaTeams.at(0)} 4 vs 2 ${nbaTeams.at(1)}`)
//Resultado: Campeón NBA 2021-22: Warriors 4 vs 2 Boston

console.log(` Final Este 2021-22: ${nbaTeams.at(1)} 4 vs 3 ${nbaTeams.at(3)}`)
// Resultado: Final Este 2021-22: Boston 4 vs 3 Heats

console.log(` Final Oeste 2021-22: ${nbaTeams.at(0)} 4 vs 1 ${nbaTeams.at(2)} `)
// Resultado: Final Oeste 2021-22: Warriors vs Mavs 