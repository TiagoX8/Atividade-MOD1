const pedidos = [
    { cliente: "João", produto: "Camiseta", quantidade: 3 },
    { cliente: "Maria", produto: "Calça", quantidade: 2 },
    { cliente: "João", produto: "Tênis", quantidade: 1 },
    { cliente: "Carlos", produto: "Camiseta", quantidade: 5 },
    { cliente: "Maria", produto: "Tênis", quantidade: 1 }
  ];
  
 
  const totalPorCliente = {};
  
  
  pedidos.forEach(pedido => {
    
    if (totalPorCliente[pedido.cliente]) {
      totalPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
      
      totalPorCliente[pedido.cliente] = pedido.quantidade;
    }
  });
  
  
  console.log(totalPorCliente);