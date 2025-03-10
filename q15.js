
const transacoes = [
    { tipo: "entrada", valor: 1000 },
    { tipo: "saida", valor: 300 },
    { tipo: "entrada", valor: 500 },
    { tipo: "saida", valor: 200 },
    { tipo: "entrada", valor: 700 }
  ];
  
  
  let saldoFinal = 0;
  
 
  transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
      saldoFinal += transacao.valor; 
    } else if (transacao.tipo === "saida") {
      saldoFinal -= transacao.valor; 
    }
  });
  
  
  console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);