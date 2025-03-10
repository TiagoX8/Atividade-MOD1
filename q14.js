
const empresa = {
    departamentos: [
      {
        nome: "Desenvolvimento",
        funcionarios: [
          { nome: "João", cargo: "Desenvolvedor" },
          { nome: "Maria", cargo: "Analista" }
        ]
      },
      {
        nome: "Marketing",
        funcionarios: [
          { nome: "Carlos", cargo: "Coordenador" },
          { nome: "Ana", cargo: "Assistente" }
        ]
      }
    ]
  };
  
  
  for (const i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
  
    
    for (const funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`);
    }
  }
  