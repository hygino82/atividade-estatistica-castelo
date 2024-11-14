let lista = [];
let txtValor = document.getElementById("valor");
let txtQuantidade = document.getElementById("quantidade");
let btnAdicionar = document.getElementById("adicionar");

let resultado = document.getElementById("resultado");

function adicionarValor() {
  const valor = Number(txtValor.value);
  const quantidade = Number(txtQuantidade.value);
  let elementos = 0;
  let soma = 0.0;

  lista.push({
    valor,
    quantidade,
  });

  lista.forEach((elemento) => {
    soma += elemento.valor * elemento.quantidade;
    elementos += elemento.quantidade;
  });

  const media = soma / elementos;

  resultado.innerHTML = `<h2>Media ${media}</h2>`;

  let somaQuadDif = 0.0;
  
  lista.forEach(
    (item) => (somaQuadDif += item.quantidade * Math.pow(media - item.valor, 2))
  );

  const variancia = somaQuadDif / elementos;
  const desvioPadrao = Math.sqrt(variancia);
  resultado.innerHTML += `
        <h2>Variancia ${variancia}</h2>
        <h2>Desvio padrão ${desvioPadrao}</h2>
  `;
}

btnAdicionar.addEventListener("click", adicionarValor, false);
