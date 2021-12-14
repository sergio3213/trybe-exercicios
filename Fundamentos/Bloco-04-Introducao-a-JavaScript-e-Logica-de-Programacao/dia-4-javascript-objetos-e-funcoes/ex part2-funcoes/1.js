function verifica(palindromo) {
  let aux = "";
  for (cont = 0; cont < palindromo.length; cont += 1) {
    aux += palindromo[palindromo.length - 1 - cont];
  }
  if(aux === palindromo){
      return true;
  }else{
      return false;
  }

}


console.log(verifica("desenvolvimento"));
