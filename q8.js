
const filmes = [
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "The Matrix", diretor: "Lana Wachowski, Lilly Wachowski", anoLancamento: 1999 },
    { titulo: "The Dark Knight", diretor: "Christopher Nolan", anoLancamento: 2008 }
  ];
  
 
  const titulos = [];
  
  
  filmes.forEach(filme => {
    titulos.push(filme.titulo);
  });
  
  
  console.log(titulos);