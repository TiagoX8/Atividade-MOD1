
const vendas = [
    { produto: "Camiseta", quantidade: 5, valor: 50 },
    { produto: "Calça", quantidade: 3, valor: 100 },
    { produto: "Tênis", quantidade: 2, valor: 150 }
  ];
  
  
  let valorTotal = 0;
  
  
  vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
  });
  
 
  console.log(`Valor total das vendas: R$ ${valorTotal.toFixed(2)}`);