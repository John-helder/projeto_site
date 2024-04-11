import { catalogo } from "./utilidades";

const idsQuantidadeDeProdutosCarrinho = {};

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-300px]");
};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[-300px]");
  document.getElementById("carrinho").classList.add("right-[0px]");
} ;

export function iniciarCarrinho() {
  const btnFecharCarrinho = document.getElementById("fechar-carrinho");
  const btnAbrirCarrinho = document.getElementById("abrir-carrinho");

  btnFecharCarrinho.addEventListener("click", fecharCarrinho);
  btnAbrirCarrinho.addEventListener("click", abrirCarrinho);
};


function removerDoCarrinho (idProduto) {
  delete idsQuantidadeDeProdutosCarrinho[idProduto];
  renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto (idProduto) {
  idsQuantidadeDeProdutosCarrinho[idProduto]++;
  atualizarQuantidadeCarrinho(idProduto);
};

function decrementarQuantidadeProduto (idProduto) {
  if (idsQuantidadeDeProdutosCarrinho[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsQuantidadeDeProdutosCarrinho[idProduto]--;
  atualizarQuantidadeCarrinho(idProduto);
};

function atualizarQuantidadeCarrinho (idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsQuantidadeDeProdutosCarrinho[idProduto];
}

function desenharProdutosNoCarrinho (idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement('article');
  const articleClasses = [
    'flex',
    'bg-slate-50',
    'rounded-lg',
    'p-1',
    'relative',
  ];
  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  const cardProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-400 hover:text-cyan-950"></i>
    </button>
    <img src="./assets/img/${produto.arquivo}" 
    alt="Controles: ${produto.nome}" 
    class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-cyan-950 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Qnt: 1</p>
      <p class="text-green-800 text-lg">${produto.preco}</p>
    </div>
    <div class="flex text-cyan-900 items-end absolute bottom-0 right-2 text-lg">
      <button class="mr-2" id="decrementar-produto-${produto.id}">-</button>
      <p id="quantidade-${produto.id}">${idsQuantidadeDeProdutosCarrinho[produto.id]}</p>
      <button class="ml-2" id="incrementar-produto-${produto.id}">+</button>
    </div>`;
  elementoArticle.innerHTML = cardProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () => incrementarQuantidadeProduto(produto.id));
  document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () => removerDoCarrinho(produto.id));
}

function renderizarProdutosCarrinho () {
  const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";

  for (const idProduto in idsQuantidadeDeProdutosCarrinho) {
    desenharProdutosNoCarrinho(idProduto);
  }
}


export function adicionarAoCarrinho (idProduto) {
  if (idProduto in idsQuantidadeDeProdutosCarrinho){
    incrementarQuantidadeProduto(idProduto)
    return;
  };

  idsQuantidadeDeProdutosCarrinho[idProduto] = 1; 
  desenharProdutosNoCarrinho(idProduto);

} 
