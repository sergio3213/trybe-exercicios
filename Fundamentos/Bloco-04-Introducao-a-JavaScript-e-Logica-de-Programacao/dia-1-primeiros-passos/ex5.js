const l1 = 60,
  l2 = 60,
  l3 = 60;

if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
  console.log('Erro');
}else{
    console.log(l1 + l2 + l3 === 180 ? true : false);
}
