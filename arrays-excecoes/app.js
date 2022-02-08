try {
  const listaDeProdutosDisponiveis = [
    "Notebook",
    "Impressora",
    "Mouse",
    "Teclado",
    "Monitor",
    "Cadeira",
    "Fone de ouvido",
    "Cabo de rede",
    "Cabo de áudio",
    "Cabo de vídeo" ];
  
    const listaDeArgumentos = process.argv.slice(2);
  
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
      return listaDeArgumentos.find(argumento => argumento === produto);
    }
  );
  
  listaDeProdutosSolicitadosDisponiveis.forEach(produto => {
    console.log(`${produto} está disponível`);
  });
  
  
  const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponiveis.find(produto => argumento === produto);
  });
  
  listaDeProdutosSolicitadosNaoDisponiveis.forEach(produto => {
    console.log(`${produto} não está disponível`);
  });
  
  listaDeProdutosDisponiveis.sort();
  
  listaDeProdutosDisponiveis.forEach(produto => {
    console.log(`${produto} está disponível ordenado`);
  
  })
} catch (error) {
  console.log("Nao foi possivel executar pedido de compra");
}