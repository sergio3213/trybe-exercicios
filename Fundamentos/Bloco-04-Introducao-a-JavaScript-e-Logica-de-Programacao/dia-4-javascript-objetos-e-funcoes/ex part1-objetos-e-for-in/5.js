let info1 = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let key in info1) {
  if (key === "recorrente" && info1[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos recorrentes");
    break;
  }
  console.log(`${info1[key]} e ${info2[key]}`);
}
