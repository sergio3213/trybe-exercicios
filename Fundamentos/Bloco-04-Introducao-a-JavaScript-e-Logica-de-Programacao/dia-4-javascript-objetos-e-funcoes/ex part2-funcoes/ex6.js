function somatorio(n) {
  let aux = 0;
  for (let cont = 0; cont <= n; cont += 1) {
    aux += cont;
  }
  return aux;
}

console.log(somatorio(5));
