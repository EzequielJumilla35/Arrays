//forEach: El método forEach() ejecuta la función indicada una vez por cada elemento del array.
const userNames = [
    {
 
       name:"Ezequiel",
       age:"23",
       profesion:"Frontend developer",
 
    },
 
    {
 
       name:"Lebron",
       age:"37",
       profesion:"Jugador profesional de Basquet",
 
    },
 
    {
 
       name:"Federer",
       age:"41",
       profesion:"Tenista",
 
    }
 ]

userNames.forEach((element, index)=> {
    console.log(element)
    console.log("indice nro:" + index)
 })
 //Itera y nos devuelve los elementos del objeto de manera ordenada y con index nos da el nro de indice del objeto