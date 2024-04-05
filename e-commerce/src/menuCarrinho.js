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