let numRepeticoesCadaNumero = 0;
let auxNumRepeticoes = 0;
let numAnalisado;

function maisSeRepete(arrayInt) {
  for (let cont = 0; cont < arrayInt.length; cont += 1) {
    for (let cont2 = 0; cont2 < arrayInt.length; cont2 += 1) {
      if (arrayInt[cont] === arrayInt[cont2]) {
        numRepeticoesCadaNumero += 1;
      }
    }
    if (auxNumRepeticoes < numRepeticoesCadaNumero) {
      auxNumRepeticoes = numRepeticoesCadaNumero;
      numAnalisado = arrayInt[cont];
    }
    numRepeticoesCadaNumero = 0;
  }
  return numAnalisado;
}

console.log(maisSeRepete([2, 8, 2, 3, 3, 5, 8, 2, 3]));
