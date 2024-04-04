const catalogo = [{
    id: 1,
    nome: 'controles recondicionados diversos',
    marca: 'XBOX e PlayStation',
    preco: 'R$ 35.00',
    arquivo: 'produto-1.jpg',
}, {
    id: 2,
    nome: 'Game portátil',
    marca: 'GameBoy',
    preco: 'R$ 45.00',
    arquivo: 'produto-2.jpg',
}, {
    id: 3,
    nome: 'Console PlayStation 2',
    marca: 'PlayStation',
    preco: 'R$ 350.00',
    arquivo: 'produto-3.jpg',
}, {
    id: 4,
    nome: 'Super Nitendo + controle original',
    marca: 'Nitendo',
    preco: 'R$ 500.00',
    arquivo: 'produto-4.jpg',
}, {
    id: 5,
    nome: 'Console Wii + controle',
    marca: 'Nitendo',
    preco: 'R$ 999.00',
    arquivo: 'produto-5.jpg',
}, {
    id: 6,
    nome: 'XBOX 360',
    marca: 'XBOX',
    preco: 'R$ 1.112.00',
    arquivo: 'produto-6.jpg',
}];

for (const produtoCatalogo of catalogo){
    const cardProduto = `<div class="border-dashed border-2 border-sky-500 w-64 m-2" id="card-produto-${produtoCatalogo.id}">
    <img src="./assets/img/${produtoCatalogo.arquivo}" 
        alt="Produto 1 da loja StartGames"
        style="height: 200px;"
    />
    <p class="nome-produto">${produtoCatalogo.nome}</p>
    <p class="marca-produto">${produtoCatalogo.marca}</p>
    <p claass="preco-produto">${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cardProduto;
}
