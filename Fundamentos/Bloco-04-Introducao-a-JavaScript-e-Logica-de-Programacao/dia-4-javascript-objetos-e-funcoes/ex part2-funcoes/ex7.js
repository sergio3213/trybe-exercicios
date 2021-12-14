let aux = "";
function caracteresFinais(word, ending) {
  for (let cont = ending.length; cont > 0; cont -= 1) {
    aux += word[word.length - cont];
  }
  return aux === ending ? true : false;
}

console.log(caracteresFinais("trybe", "be"));
