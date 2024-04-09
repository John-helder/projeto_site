import { catalogo } from "./utilidades";

export function renderizarCatalogo () {
    for (const produtoCatalogo of catalogo){
        const cardProduto = `<div class="border-solid w-64 m-2 flex flex-col p-2 justify-between group shadow-xl shadow-slate-400 rounded-lg" id="card-produto-${produtoCatalogo.id}">
        <img src="./assets/img/${produtoCatalogo.arquivo}" 
            alt="Produto 1 da loja StartGames"
            class="group-hover:scale-110 duration-300 my-3 rounded-lg"
        />
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p claass="text-sm">${produtoCatalogo.preco}</p>
        <button class="bg-slate-950 text-slate-200 hover:bg-slate-700">
            <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>`;

        document.getElementById("container-produto").innerHTML += cardProduto;
    }
}