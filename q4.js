const pessoas = [
    { nome: "Ana", idade: 30, cidade: "São Paulo" },
    { nome: "Carlos", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Maria", idade: 28, cidade: "Belo Horizonte" }
  ];
  
  
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }