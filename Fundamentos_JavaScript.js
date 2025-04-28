/*Escribir un programa que:
Declare dos variables ( nombre y edad )
Imprima un mensaje como: "Hola, me llamo Ana y tengo 22 años."*/

let nombre="Hebe";
let edad=37;

console.log (`Hola! mi nombre es ${nombre} y tengo ${edad} años`);


/*2. Dado el siguiente array:
const numeros = [3, 7, 12, 5, 2];
Usar map para generar un nuevo array con los números al cuadrado.
Usar filter para obtener los números mayores a 5.
 */

const numeros =[3,7,12,5,2]

let numeros_mapeados= numeros.map((nro)=>{return nro**2});

console.log(`La lista inicial es: ${numeros}`)
console.log(`La lista de numeros mapeados elevados al cuadrado es: ${numeros_mapeados}`);

let numeros_filtrados=numeros.filter((nro)=>{return nro> 5});

console.log (`La lista de numeros filtrados mayores a 5 es: ${numeros_filtrados}`);


/*1. Escribir una función flecha que reciba un número y devuelva si es par o
impar.1. */

const par_o_impar=(numero)=>{ return numero %2 === 0 ? "par":"impar";};

console.log(`El número 6 es ${par_o_impar(6)}`);
console.log(`El número 11 es ${par_o_impar(11)}`); 


