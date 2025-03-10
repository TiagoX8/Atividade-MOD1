function filtrarPropriedades(produto, valorMinimo) {
    let resultado = {};
    for (let propriedade in produto) {
      if (produto[propriedade] > valorMinimo) {
        resultado[propriedade] = produto[propriedade];
      }
    }
    return resultado;
  }
  
 
  const produto = {
    preco: 150,
    estoque: 30,
    desconto: 10,
    peso: 2
  };
  
  console.log(filtrarPropriedades(produto, 20));