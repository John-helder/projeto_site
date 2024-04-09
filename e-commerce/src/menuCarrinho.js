function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-300px]");
}

function abrirCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[-300px]");
    document.getElementById("carrinho").classList.add("right-[0px]");
}

export function iniciarCarrinho() {
    const btnFecharCarrinho = document.getElementById("fechar-carrinho");
    const btnAbrirCarrinho = document.getElementById("abrir-carrinho");

    btnFecharCarrinho.addEventListener("click", fecharCarrinho);
    btnAbrirCarrinho.addEventListener("click", abrirCarrinho);
}
export function adicionarAoCarrinho () {
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    const cardProdutoCarrinho = `<article class="flex bg-slate-50 rounded-lg p-1 relative">
    <button id="excluir-produto" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-400 hover:text-cyan-950"></i>
    </button>
    <img src="./assets/img/produto-1.jpg" 
    alt="Controles" 
    class="h-24 rounded-lg"
    />
    <div class="py-2">
      <p class="text-cyan-950 text-sm">
        Controles recondicionados
      </p>
      <p class="text-slate-400 text-xs">Qnt: 1</p>
      <p class="text-green-800 text-lg">R$ 35</p>
    </div>
    
  </article>`;

  containerProdutosCarrinho.innerHTML += cardProdutoCarrinho;
}