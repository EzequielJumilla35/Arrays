//Arrays de objetos
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
 
 
 //Con forEach iteramos los objetos del array y los vemos por la consola
 userNames.forEach(element => {
    console.log(`Nombre:${element.name}
    Edad:${element.age}
    Profesion:${element.profesion}`) 
 });
 //Respuesta: Nombre : Ezequiel Edad:23 Profesion: Developer
 //           Nombre : Lebron Edad:37 Profesion: Jugador profesional de Basquet
 //           Nombre : Ezequiel Edad:23 Profesion: Tenista