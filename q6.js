const funcionarios = [
    { nome: "Ana", cargo: "Desenvolvedora", salario: 5000 },
    { nome: "Carlos", cargo: "Designer", salario: 3000 },
    { nome: "Maria", cargo: "Gerente", salario: 7000 },
    { nome: "Pedro", cargo: "Analista", salario: 4500 }
  ];
  
  
  const salarioMinimo = 4000;
  
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario}`);
    }
  }