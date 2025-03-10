const estoque = [
    { produto: "Camiseta", quantidade: 5, minimo: 10 },
    { produto: "Calça", quantidade: 15, minimo: 10 },
    { produto: "Tênis", quantidade: 3, minimo: 6 }
  ];
  
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;  
    }
  });
  
  
  console.log(estoque);