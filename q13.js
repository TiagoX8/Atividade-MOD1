
const carrinho = {
    itens: [
      { nome: "Camiseta", quantidade: 2, precoUnitario: 50 },
      { nome: "Calça", quantidade: 1, precoUnitario: 100 },
      { nome: "Tênis", quantidade: 1, precoUnitario: 150 }
    ]
  };
  
  
  let valorTotal = 0;
  
  
  carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
  });
  
  
  console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);