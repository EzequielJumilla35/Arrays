//keys: El keys()método devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice de la matriz.
const userPage = {
    name : "Ezequiel",
    surname: "Jumilla",
    country: "Argentina",
   
 }
 
 console.log(Object.keys(userPage)) //Devuelve la claves del objeto en formato array con Strings
 //Respuesta: ["name", "surname", "country"]