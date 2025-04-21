console.log("hola mundo");

//variables
let nombre ="Hebe";
let apellido= "Pereyra";

console.log(`Hola ${nombre}, ${apellido}`)

//constantes

const PI= 3.14;

//operadores logicos

let nro1= 100;
let nro2= 200;

if(nro1> 99 && nro2<= 200){
    console.log(`Observamos que ${nro1} es mayor a 99 y ${nro2} es menor o igual a 200`)

}
else{
    console.log(`No se cumple la condición`)
}

//operador ternario

nro1>99 && nro2<=200 ? console.log(`Obervamos que ${nro1} es mayor a 99 y ${nro2}es menor o igual a 200`) : console.log(`No se cumple la condición`)

//funciones

//function saludar(nombre="", apellido= ""){
//   return `hola ${nombre}, ${apellido}, bienvenido!`
//}

//const mensajeSaludo= saludar("Charly", "Garcia")
//console.log(mensajeSaludo)

//funciones flechas

const MENSAJE_SALUDO = (nombre="", apellido="")=>{ return `hola ${nombre}, ${apellido}, bienvenido!`}

console.log(MENSAJE_SALUDO("Charly", "Garcia"))

let numeros= [1,2,3,4,5,6,7,8,9,10];

let acumulador = 0;

for(let i=0; i < numeros.length; i ++){
    acumulador += numeros[i];
}
console.log(`La suma de los numeros da como resultado ${acumulador}`);

for(const numero of numeros){
    acumulador +=numero;
}
console.log(`La suma de los numeros da como resultado ${acumulador}`);

//metodos filter, map y reduce
let numeros2=[11,12,13,14,15,16,17,18,19,20];
let filtrados=numeros2.filter((nro)=>{return nro % 2 === 0});
console.log(`Los numeros pares son: ${filtrados}`);

let mapeados=numeros2.map((nro)=>{return nro *2});
console.log(`La lista de nuemros mapeados es: ${mapeados}`);

let reducidos=numeros2.reduce((acumulador,nro)=>{return acumulador + nro;},0);
console.log(`la suma de los numeros es ; ${reducidos}`);

let mapeados_reducidos=numeros2.map((nro)=>{return nro *2}).reduce((acumulador,nro)=>{return acumulador + nro;},0);
console.log(`La suma de los numeros mapeados *2 es: ${mapeados_reducidos}`);