/*

Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
Si es más pequeño, la consola registra "¡El número es menor que 50!"

*/

function ejercicio(arg1, arg2, arg3, arg4){
    if(arguments.length !== 4){
        console.log('Falta algún argumento. Tiene que insertar 4 números.');
        return -1;
    }

    var sum1 = arg1 + arg2;
    var sum2 = arg3 + arg4;
    var result = sum1 * sum2;

    if(result > 50){
        console.log("¡El número es mayor que 50!");
    }else if(result < 50){
        console.log("¡El número es menor que 50!");
    }else{
        console.log("¡El número es igual a 50!");
    }
}

ejercicio(8,3,4,1); //¡El número es mayor que 50!
ejercicio(7,3,4,1); //¡El número es igual a 50!
ejercicio(6,3,4,1); //¡El número es menor que 50!
ejercicio(3,3,4);   //Falta algún argumento. Tiene que insertar 4 números.
