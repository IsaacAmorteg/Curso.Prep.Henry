
function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (i = 0; i < array.length; i++) {
        array[i]++;
    }return console.log(array);
  }

  //let arrayT = [];
  //console.log(arrayT.length);
  //arrayT = [1, 2, 3];
  //console.log(arrayT.length);
  //arrayT.push(10);
  //console.log(arrayT.length);
  //arrayT[4] = 0;
  //console.log(arrayT.length);
  //arrayT[4] =+ 1;
  //console.log(arrayT);

  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    console.log(palabras.join(" "));
  }



  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for (i = 0; i < array.length; i++) {
      if (array[i] === elemento) return console.log(true);
    }return console.log (false);
  }
  //arrayContiene([2, 4, 10, true, "lol", [5]], 5);

  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeros [i + 1]) return console.log(numeros[i]);
    }
  }
  //numeroMasGrande([0, 5, 898, 9484, 4, 7]);


  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length === 0) return console.log(0);
    if (arguments.length === 1) return console.log(arguments[0]);
  
    let product = 1;
    for (i = 0; i < arguments.length; i++) {
      product *= arguments[i];
    }return console.log(product);
  }

  //multiplicarArgumentos(100);
  function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let array = [];
  let sum = numero;
  for (i = 0; i < 10; i++) {
    sum = sum + 2;
    if (sum === i) break;
    else {
      array.push(sum);
    }
  }
  if (i < 10) {
    return console.log("Se interrumpio la ejecucion");
  }return console.log(array);
}
//breakStatement(6);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesOrdenados = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesOrdenados.push(array[i]);
      console.log(mesesOrdenados);
  }
    }
    if (!mesesOrdenados.includes("Enero", "Marzo", "Noviembre")) {
      return console.log("No se encontraron los meses pedidos");
    }
  }
//mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeros [i + 1]) return numeros[i];
  }
}