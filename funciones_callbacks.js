/*Actividad 3: Funciones y callbacks
Objetivo: Comprobar el uso de funciones como parámetros (callbacks).
Instrucciones:
1. Escribir una función que reciba un array y una función callback. La función
debe aplicar el callback a cada elemento del array y retornar el nuevo array.
Ejemplo de uso:
procesar([1, 2, 3], x => x * 2); // [2, 4, 6]*/



let arreglo_numeros = [2, 4, 6, 8, 10, 12, 14];

function procesar(arreglo, operacion) {
    let numeros_mapeados = arreglo.map(operacion);
    let numeros_filtrados = numeros_mapeados.filter((nro) => nro < 8);

    return numeros_filtrados;
}

let resultado = procesar(arreglo_numeros, (nro) => nro / 2);
console.log(`Los números procesados son: ${resultado}`);


//primer intento, segun entendi, que anide dos funciones, pero no use el callback.
/*let arreglo_numeros=[2,4,6,8,10,12,14];
function calcular(arreglo_numeros,numeros_mapeados= arreglo_numeros.map((nro)=>{return nro/2})){
    let numeros_filtrados=numeros_mapeados.filter((nro)=>{return nro< 8})
    return numeros_filtrados;
}

console.log(calcular(arreglo_numeros));*/
