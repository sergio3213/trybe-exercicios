function maiorQtdCaracteres(arrayNomes) {
  let maiorNome;
  let qtdCaracteres = 0;
  for (cont = 0; cont < arrayNomes.length; cont += 1) {
    if (qtdCaracteres < arrayNomes[cont].length) {
      qtdCaracteres = arrayNomes[cont].length;
      maiorNome = arrayNomes[cont];
    }
  }
  return maiorNome
}

console.log(
  maiorQtdCaracteres([
    "sergio",
    "joao",
    "paralelepipidos",
    "pedro",
    "josesvaldo",
  ])
);
