let leitor = {
    nome: "Julia",
    sobrenome: "Pessoa",
    idade: 21,
    livrosFavoritos: [
      {
        titulo: "O Pior Dia de Todos",
        autor: "Daniela Kopsch",
        editora: "Tordesilhas",
      },
    ],
  };
  
  leitor.livrosFavoritos[1] = {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editor: "Rocco",
  };
  console.log(leitor.livrosFavoritos)
  
console.log(`${leitor.nome} tem ${Object.keys(leitor.livrosFavoritos).length} livros favoritos`)  