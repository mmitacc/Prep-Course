// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  // let for_titulo = [];
  // for (var i = 0; i < nombre.length; i++) {
  //   if (i === 0) {
  //     for_titulo = for_titulo + nombre[i].toUpperCase();
  //   }
  //   else {
  //     for_titulo = for_titulo + nombre[i];
  //   }
  // };
  // return for_titulo;
  let for_titulo = nombre[0].toUpperCase();
  for (var i = 1; i < nombre.length; i++) {
    for_titulo = for_titulo + nombre[i];
  }
  return for_titulo;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // var sumados = numeros.reduce(function(a,b){return a+b});
  let suma = numeros.reduce((a,b)=>(a+b));
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // array.forEach(function(item, i){ cb(item); });
  array.forEach((item,i)=>(cb(item)));
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // let nuevo_array = array.map(function(item) {
  //   return cb(item);
  // });
  let nuevo_array = array.map((item)=>(cb(item)));
  return nuevo_array;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // let nuevo_array = array.filter(function(item) {return item[0] === 'a'; });
  let nuevo_array = array.filter((item)=>(item[0]==='a'));
  return nuevo_array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
