function generarArrayBidimensional() {
  function generarArray() {
    let arr = Math.floor(Math.random() * 10 + 1)
    return [arr, arr, arr]; //debería meter 3 veces en el array la función random
  }

  if (i => 10) {

    var array = [];
    var randomNumber = Math.floor((Math.random() * 6) + 4)
    // si hacemos del índice algo random, la cantidad de arrays bailará de forma aleatoria
    //entre 4 y 10
    for (i = randomNumber; i <= 10; i++) {
      array.push(generarArray());
    }


  }
  //metemos un break al final porque si no la función no acaba nunca

  return array;
}



function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}



mostrarArrayBidimensional(generarArrayBidimensional());

