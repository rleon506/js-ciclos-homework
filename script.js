/*-----------------------------*/
/*EJEMPLOS CICLOS EN JAVASCRIPT*/
/*-----------------------------*/

////////////////////////
/*EJEMPLO DE CICLO FOR*/
////////////////////////
function ciclo_for() {

  const array = [1, 5, 10, 15, 20, 25];

  //Un ciclo for se repite hasta que una condición especificada se evalúe como false.
  for(let i = 0; i <= array.length-1; i++){
    console.log("Valor de " + i + " es: " + array[i]);
  }

}

///////////////////////////
/*EJEMPLO DE CICLO FOR_IN*/
///////////////////////////
function ciclo_for_in() {

  const array = [1, 5, 10, 15, 20, 25];
  
  //Itera sobre todas las propiedades no enumerables de un objeto que está codificado por cadenas. 
  //La "ventaja" del mismo tiene que ver con que no es necesario indicar el inicio y final del ciclo.
  for(i in array){
    console.log("Valor de " + i + " es: " + array[i]);
  }

}

///////////////////////////
/*EJEMPLO DE CICLO FOR_OF*/
///////////////////////////
function ciclo_for_of() {

  const array = [1, 5, 10, 15, 20, 25];
  
  //La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array.
  for(i of array){
    console.log("Valor de " + i);
  }

}

///////////////////////////
/*EJEMPLO DE CICLO FOR_EACH*/
///////////////////////////
function ciclo_for_each() {

  const array = [1, 5, 10, 15, 20, 25];
  
  //Este ciclo hace uso de una función anónima para realizar el recorrido de la información.
  array.forEach(function(i)
  {
    console.log("Valor de " + i);
  });

}

///////////////////////////
/*EJEMPLO DE CICLO WHILE*/
///////////////////////////
function ciclo_while() {

  let i = 0;

  //Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. 
  //Dicha condición es evaluada antes de ejecutar la sentencia
  while (i <= 10) {
      console.log(`Numero: ${i}`);
      i++;
  }

}

///////////////////////////
/*EJEMPLO DE CICLO DO-WHILE*/
///////////////////////////
function ciclo_do_while() {

  i = 0;

  //La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, 
  //hasta que la condición de comprobación se evalúa como falsa. 
  //La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
  do {
      console.log(`Numero: ${i}`);
      i++;
  } while (i < 10);

}

