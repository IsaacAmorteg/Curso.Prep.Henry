function fizzBuzz(numero) {
    
    if ((numero % 3 === 0) && numero % 5 === 0) {
        console.log("fizzbuzz");  
    }else if (numero % 5 === 0) {
        console.log("buzz"); 
    }else if (numero % 3 === 0) {
        console.log("fizz");
    }else
    return console.log(numero);
  }

  function operadoresLogicos(num1, num2, num3) {

    if (num1 < 0 || num2 < 0 || num3 < 0) {
        console.log ("Hay negativos");
    }else if ((num1 > num2) && (num1 > num3) && (num1 > 0)) {
        console.log ("Número 1 es mayor y positivo");
    }else if ((num3 > num1) && (num3 > num2)) {
        console.log(++num3);
    }else if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log ("Error");
    } else
    return console.log(false);
  }

  function operadoresYcasos(num1, num2, num3) {
    switch (true) {
        case (num1 < 0 || num2 < 0 || num3 < 0):
            console.log ("Hay negativos");
            break;
        case (num1 === 0 || num2 === 0 || num3 === 0):
            console.log ("Error");
            break;
        case ((num1 > num2) && (num1 > num3) && (num1 > 0)):
            console.log ("Número 1 es mayor y positivo");
            break;
        case ((num3 > num1) && (num3 > num2)):
            console.log(++num3);
            break;
        default: console.log (false);

    }
}


function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if (numero === 2) return true;
    if (numero <= 1) return false;
    
        for (let i = 2; i < numero; i++) {

        if ((numero % i === 0)) {
            console.log (false);
        }
    } return (console.log (true));
  
  }





///////////////////////
function tablaDelSeis() { 
    let tablaSeis = [];
    for (let i = 0; i <= 60; i += 6 ) {
    tablaSeis.push(i);
    }return (tablaSeis);
  } 


  ///
  function isPrime(num) {
  if (num <= 1) return console.log(false);
  if (num === 2) return console.log(true);
   for (let i= 2; i < num; i++) {
  if (num % i === 0) {
   return console.log(false);
    }
   }
   return console.log(true);
  } 
 
 ////////
//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
  //Version 1.0
  function doWhile(numero) {
    do {
      numero = numero + (5*8);
    } while (false);
    console.log(numero);
}
  doWhile(5);

    //Version 1.1
  function doWhileV2(numero) {
      let limite = 0;
    do {
      numero = numero + 5;
      limite = limite +1;
    } while (limite < 8);
    console.log(numero);
}
doWhileV2(5);