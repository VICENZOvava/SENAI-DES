const modalCarrinho = document.querySelector("#modalCarrinho");

var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const produtos = [
    { id: 1, nome: "Produto 1", preco: 50 },
    { id: 2, nome: "Produto 2", preco: 30 },
    { id: 3, nome: "Produto 3", preco: 20 },
    { id: 4, nome: "Produto 4", preco: 80 },
    { id: 5, nome: "Produto 5", preco: 100 },
    { id: 6, nome: "Produto 6", preco: 40 },
    { id: 7, nome: "Produto 7", preco: 60 },
    { id: 8, nome: "Produto 8", preco: 90 },
    { id: 9, nome: "Produto 9", preco: 15 },
    { id: 10, nome: "Produto 10", preco: 70 }
];

renderizarProdutos();
renderizarCarrinho();
atualizarContador();

function salvarLocal(){
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function abrirCarrinho(){
    modalCarrinho.style.display = "block";
    renderizarCarrinho();
}

function fecharCarrinho(){
    modalCarrinho.style.display = "none";
}

function renderizarProdutos(){
    const lista = document.querySelector("#listaProdutos");
    lista.innerHTML = "";

    produtos.forEach((p)=>{
        lista.innerHTML += `
        <div class="card">
            <img>
            <h4>${p.nome}</h4>
            <p>R$ ${p.preco}</p>
            <button onclick="adicionar(${p.id})">Add ao carrinho</button>
        </div>
        `;
    });
}

function adicionar(id){
    let item = carrinho.find(p => p.id === id);

    if(item){
        item.qtd += 1;
    } else {
        let produto = produtos.find(p => p.id === id);
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            qtd: 1
        });
    }

    salvarLocal();
    atualizarContador();
}

function renderizarCarrinho(){
    const corpo = document.querySelector("#tabelaCarrinho");
    corpo.innerHTML = "";

    let total = 0;

    carrinho.forEach((c, i)=>{
        total += c.preco * c.qtd;

        corpo.innerHTML += `
        <tr>
            <td>${c.nome}</td>
            <td>
                <button onclick="alterar(${i}, -1)">-</button>
                ${c.qtd}
                <button onclick="alterar(${i}, 1)">+</button>
            </td>
            <td>R$ ${c.preco * c.qtd}</td>
            <td><button onclick="excluir(${i})">Excluir</button></td>
        </tr>
        `;
    });

    document.querySelector("#total").innerText = "Total: R$ " + total;
}

function alterar(indice, valor){
    carrinho[indice].qtd += valor;

    if(carrinho[indice].qtd <= 0){
        carrinho.splice(indice,1);
    }

    salvarLocal();
    renderizarCarrinho();
    atualizarContador();
}

function excluir(indice){
    carrinho.splice(indice,1);
    salvarLocal();
    renderizarCarrinho();
    atualizarContador();
}

function atualizarContador(){
    document.querySelector("#contador").innerText = carrinho.length;
}

function finalizarPedido(){
    carrinho = [];
    localStorage.removeItem("carrinho");
    renderizarCarrinho();
    atualizarContador();
    fecharCarrinho();
    alert("Pedido realizado com sucesso!");
}