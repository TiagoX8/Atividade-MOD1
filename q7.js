const produtos = [
    { nome: "Camiseta", preco: 50, desconto: 0.1 },
    { nome: "Calça", preco: 100, desconto: 0.1 },
    { nome: "Tênis", preco: 150, desconto: 0.1 }
  ];
  
  
  produtos.forEach(produto => {
    const novoPreco = produto.preco * (1 - produto.desconto);
    console.log(`Produto: ${produto.nome}, Novo preço: R$ ${novoPreco.toFixed(2)}`);
  });