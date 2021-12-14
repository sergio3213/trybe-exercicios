const peca = "peao";

switch (peca) {
  case "cavalo".toLocaleLowerCase():
    console.log("Faz movimento de L para qualquer direção");
    break;

  case "bispo".toLocaleLowerCase():
    console.log("Se move nas diagonais");
    break;

  case "torre".toLocaleLowerCase():
    console.log("Se movimenta em linha reta em qualquer direção");
    break;

  case "rei".toLocaleLowerCase():
    console.log("Se movimenta para qualquer lado apenas 1 casa");
    break;

  case "dama".toLocaleLowerCase():
    console.log("Se movimenta quantas casas quiser para qualquer direção");
    break;

  case "peao".toLocaleLowerCase():
    console.log(
      "se movimenta 1 ou duas casas para frente e captura nas diagonais"
    );
    break;
  default:
    console.log('Peça invalida')
}
