/*Objetivo: Verificar la comprensión de objetos, acceso a propiedades y
desestructuración.
Instrucciones:
Dado el siguiente objeto:
const persona = {
 nombre: "Lucía",
 edad: 28,
 profesion: "Diseñadora",
};
1. Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja
como Diseñadora." usando desestructuración.
2. Agregar una nueva propiedad al objeto llamada ciudad con el valor "Rosario" .
*/ 
const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
   };

persona.ciudad="Rosario"; // agregado

function mostrar_persona({nombre,edad,profesion, ciudad}){
       console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}. Vive en ${ciudad}`)
};
mostrar_persona(persona);



