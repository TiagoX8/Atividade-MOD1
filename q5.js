const alunos = [
    { nome: "João", nota1: 7, nota2: 8 },
    { nome: "Maria", nota1: 9, nota2: 6 },
    { nome: "Pedro", nota1: 5, nota2: 7 }
  ];
  
  
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Média: ${media.toFixed(2)}`);
  }