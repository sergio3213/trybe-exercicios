const salBruto = 3000;
let salLiquido;

if (salBruto > 5189.82) {
  salLiquido = salBruto - 570.88;
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
  salLiquido = salBruto - salBruto * 0.11;
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
  salLiquido = salBruto - salBruto * 0.09;
} else {
  salLiquido = salBruto - salBruto * 0.08;
}

if (salLiquido > 4664.68) {
  const aliquotaParcela = salLiquido * 0.275 - 869.36;
  salLiquido = salLiquido - aliquotaParcela;
} else if (salLiquido >= 3751.06 && salLiquido <= 4664.68) {
  const aliquotaParcela = salLiquido * 0.225 - 636.13;
  salLiquido = salLiquido - aliquotaParcela;
} else if (salLiquido >= 2826.66 && salLiquido <= 3751.05) {
  const aliquotaParcela = salLiquido * 0.15 - 354.8;
  salLiquido = salLiquido - aliquotaParcela;
} else if (salLiquido >= 1903.99 && salLiquido <= 2826.65) {
  const aliquotaParcela = salLiquido * 0.075 - 142.8;
  salLiquido = salLiquido - aliquotaParcela;
}

console.log(salLiquido);
