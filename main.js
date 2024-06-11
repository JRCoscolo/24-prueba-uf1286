function generarArrayBidimensional() {
  function generarArray() {
    let arr = Math.floor(Math.random() * 10 + 1)
    return [arr, arr, arr]; //debería meter 3 veces en el array la función random
  }

  if (i > 10) {

    var array = [];
    for (var i = Math.floor(Math.random() * 6 + 4); i < 10;)
      // si hacemos del índice algo random, la cantidad de arrays bailará de forma aleatoria
      //entre 4 y 10
      break;
  }
  //metemos un final porque si no la función no acaba nunca
  {
    array.push(generarArray());
  }
  return array;




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
}
