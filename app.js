// 1. O Banco de Dados 
const cardapio = [

    //kits 
    {
        id: 1,
        nome: "Kit Lembrancinha 💝",
        categoria: "Kits",
        preco: 12.00,
        descricao: "Ideal para presentear quem você ama com muito carinho.",
        itens: ["2 Pãozinhos Delícia", "1 Coxinha", "1 Empadinha"],
        tag: "Mais Econômico",
        imagem: "imagens/kit-lembrancinha.png"
    },
    {
        id: 2,
        nome: "Kit Café da Mamãe ☕",
        categoria: "Kits",
        preco: 28.00,
        descricao: "Uma combinação perfeita para um café da manhã ou tarde especial.",
        itens: ["3 Pãozinhos Delícia", "2 Coxinhas", "1 Empadinha", "1 Mini Quiche", "1 Salgado Sortido"],
        tag: "Destaque",
        imagem: "imagens/kit-cafe.png"
    },
    {
        id: 3,
        nome: "Kit Especial da Mamãe ✨",
        categoria: "Kits",
        preco: 40.00,
        descricao: "O kit mais completo para surpreender e saborear.",
        itens: ["3 Pãozinhos Delícia", "2 Coxinhas", "2 Empadinhas", "2 Mini Quiches", "1 Mini Pão Recheado"],
        tag: "Quantidade Limitada!",
        imagem: "imagens/kit-especial.png"
    },
    {
        id: 4,
        nome: "Kit Pãezinhos 💝",
        categoria: "Kits",
        preco: 13.00,
        descricao: "Ideal para presentear quem você ama com muito carinho, contendo uma seleção especial de 6 pãezinhos.",
        itens: ["6 Pãezinhos Delícia Tradicionais Com Recheio"],
        tag: "Mais Econômico",
        imagem: "imagens/kit-paezinhos-trad.jpeg"
    },

    //Salgados
    {
        id: 5,
        nome: "Quiche Média 🥧",
        categoria: "Salgados",
        preco: 100.00,
        descricao: "Massa leve e recheio cremoso. Perfeito para completar sua celebração.",
        itens: ["1 unidade de quiche média"],
        tag: "Sugestão da Kah",
        imagem: "imagens/quiche.png"
    },
    {
        id: 6,
        nome: "Empadão Médio (Frango) 🥧",
        categoria: "Salgados",
        preco: 100.00,
        descricao: "Aquele empadão clássico bem recheado que derrete na boca.",
        itens: ["1 unidade de empadão médio de frango"],
        tag: "Sucesso de Vendas",
        imagem: "imagens/empadao.png"
    },
    {
    id: 7,
    nome: "Coxinha de Festa 🍗",
    categoria: "Salgados",
    preco: 3.00,
    descricao: "Mini coxinha sequinha com recheio suculento de frango.",
    itens: ["1 unidade de mini coxinha"],
    tag: "Favorito",
    imagem: "imagens/coxinha.jpeg"
},
{
    id: 8,
    nome: "Kibe de festa ",
    categoria: "Salgados",
    preco: 3.00,
    descricao: "Kibe tradicional.",
    itens: ["1 unidade de mini kibe"],
    tag: "Tradicional",
    imagem: "imagens/kibe.jpeg"
},
{
    id: 9,
    nome: "Empadinha de Frango 🥧",
    categoria: "Salgados",
    preco: 3.00,
    descricao: "Massa que derrete na boca com recheio cremoso de frango.",
    itens: ["1 unidade de mini empadinha de frango"],
    tag: "Mais Pedido",
    imagem: "imagens/empadinha.jpeg"
},

    //Pães 
    {
        id: 10,
        nome: "Pãozinho Delícia com Recheio 🥖",
        categoria: "Pães",
        preco: 2.30,
        descricao: "Pãozinho tradicional super fofinho com recheio cremoso.",
        itens: ["1 unidade de pãozinho delícia com recheio"],
        tag: "O Queridinho",
        imagem: "imagens/pao-recheado.png"
    },
    {
        id: 11,
        nome: "Dogão no Forno 🌭",
        categoria: "Pães",
        preco: 20.00,
        descricao: "Salsicha de qualidade, molho especial, milho, ervilha, queijo derretido e batata palha crocante.",
        itens: ["1 unidade de pão com recheio de dogão"],
        tag: "Novo Sabor",
        imagem: "imagens/dogao-forno.png"
    },
    {
        id: 12,
        nome: "Carne Louca Premium 🥩",
        categoria: "Pães",
        preco: 25.00,
        descricao: "Massa artesanal recheada com carne louca temperada, decorada com pimenta biquinho e pitanga de catupiry.",
        itens: ["1 unidade de pão com recheio de carne louca"],
        tag: "Novo Sabor",
        imagem: "imagens/carne-louca.png"
    },
    {
        id: 13,
        nome: "Quatro Queijos Especial 🧀",
        categoria: "Pães",
        preco: 25.00,
        descricao: "Recheado com catupiry, mussarela, queijo do reino e cheddar, finalizado com queijo parmesão.",
        itens: ["1 unidade de pão com recheio de quatro queijos"],
        tag: "Novo Sabor",
        imagem: "imagens/pao-4-queijos.png"
    },
    {
        id: 14,
        nome: "Pão Recheado Calabresa 🥖",
        categoria: "Pães",
        preco: 20.00,
        descricao: "Sabor marcante de calabresa com queijo derretido.",
        itens: ["1 unidade de pão com recheio de calabresa"],
        tag: "Destaque",
        imagem: "imagens/paoDeCalabresa.png"
    },
    {
        id: 15,
        nome: "Pão Recheado Frango 🍗",
        categoria: "Pães",
        preco: 20.00,
        descricao: "Recheado com frango temperado e suculento.",
        itens: ["1 unidade de pão com recheio de frango"],
        tag: "Destaque",
        imagem: "imagens/pao-frango.png"
    },
    {
        id: 16,
        nome: "Pão Recheado Pizza 🍕",
        categoria: "Pães",
        preco: 20.00,
        descricao: "Queijo, presunto e molho de tomate.",
        itens: ["1 unidade de pão com recheio de pizza"],
        tag: "Destaque",
        imagem: "imagens/pao-pizza.png"
    },
    {
        id: 17,
        nome: "Pãozinho Delícia com Recheio de Queijo do Reino 🥖",
        categoria: "Pães",
        preco: 2.30,
        descricao: "Pãozinho super fofinho com recheio cremoso de queijo do reino.",
        itens: ["1 unidade de pãozinho delícia com recheio de queijo do reino"],
        tag: "O Queridinho",
        imagem: "imagens/paozinho-do-reino.png"
    },

    //Doces

    {
        id: 18,
        nome: "Brigadeiro 🍫",
        categoria: "Doces",
        preco: 1.50,
        descricao: "O clássico brasileiro feito com chocolate nobre.",
        itens: ["1 unidade de brigadeiro tradicional"],
        tag: "Favorito",
        imagem: "imagens/brigadeiro.jpg"
    },
    
    {
        id: 19,
        nome: "Uva Coberta 🍇",
        categoria: "Doces",
        preco: 1.70,
        descricao: "Uva verde selecionada envolta em brigadeiro branco.",
        itens: ["1 unidade de brigadeiro de uva coberta"],
        tag: "Destaque",
        imagem: "imagens/uva-coberta.jpg"
    },
    {
        id: 20,
        nome: "Beijinho 🥥",
        categoria: "Doces",
        preco: 1.50,
        descricao: "Doce de coco cremoso com acabamento delicado.",
        itens: ["1 unidade de brigadeiro beijinho"],
        tag: "Tradicional",
        imagem: "imagens/beijinho.jpg"
    },
    {
        id: 21,
        nome: "Moranguinho 🍓",
        categoria: "Doces",
        preco: 1.50,
        descricao: "Brigadeiro de morango macio e irresistível.",
        itens: ["1 unidade de brigadeiro moranguinho"],
        tag: "Tradicional",
        imagem: "imagens/moranguinho.png"
    },
    {
        id: 22,
        nome: "Casadinho 🍪",
        categoria: "Doces",
        preco: 1.50,
        descricao: "Duas massinhas macias com recheio de brigadeiro branco e brigadeiro tradicional.",
        itens: ["1 unidade de brigadeiro casadinho"],
        tag: "Tradicional",
        imagem: "imagens/casadinho.jpg"
    },
    {
        id: 23,
        nome: "Cajuzinho 🥜",
        categoria: "Doces",
        preco: 1.50,
        descricao: "Doce clássico de amendoim, irresistível e marcante.",
        itens: ["1 unidade de brigadeiro de cajuzinho"],
        tag: "Tradicional",
        imagem: "imagens/cajuzinho.png"
    }
    
];

let carrinho = [];
let categoriaAtual = "todos";
// 2. A função de desenhar agora aceita receber qual categoria ela deve listar
function renderizarCardapio(categoriaFiltrada = "todos") {
    const container = document.getElementById('lista-produtos');
    container.innerHTML = "";

    cardapio.forEach(doce => {
        // SE a categoria filtrada não for 'todos' E for diferente da categoria do doce, pule para o próximo
        if (categoriaFiltrada !== "todos" && doce.categoria !== categoriaFiltrada) {
            return; // Esse return dentro do forEach age como um "pular este item"
        }

        // Lógica de montagem dos itens da lista do kit (permanece idêntica)
        let listaItensHtml = "";
        if (doce.itens && doce.itens.length > 0) {
            listaItensHtml = `<ul class="text-[11px] text-gray-600 bg-pink-50 p-2 rounded-xl mt-2 space-y-0.5">`;
            doce.itens.forEach(i => { listaItensHtml += `<li>• ${i}</li>`; });
            listaItensHtml += `</ul>`;
        }

        let tagHtml = doce.tag ? `<span class="absolute top-2 left-2 z-10 bg-[#E3226D] text-white text-[9px] font-bold uppercase px-2 py-0.5 rounded-full shadow-sm">${doce.tag}</span>` : "";

        // Desenha apenas os produtos filtrados na tela
        container.innerHTML += `
            <div class="bg-white rounded-2xl shadow-sm border border-pink-50 flex flex-col justify-between overflow-hidden relative">
                ${tagHtml}
                <div class="w-full h-44 bg-gray-100 overflow-hidden relative">
                    <img src="${doce.imagem}" alt="${doce.nome}" class="w-full h-full object-cover">
                </div>
                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold text-gray-800 text-sm">${doce.nome}</h3>
                        <p class="text-xs text-gray-400 mt-0.5 leading-tight">${doce.descricao}</p>
                        ${listaItensHtml}
                    </div>
                    <div class="flex justify-between items-center mt-3 pt-2 border-t border-gray-50">
                        <span class="text-[#D14175] font-bold text-base">R$ ${doce.preco.toFixed(2)}</span>
                        <button onclick="adicionarAoCarrinho(${doce.id})" class="border border-[#D14175] text-[#D14175] hover:bg-[#D14175] hover:text-white font-bold px-4 py-1.5 rounded-full text-xs transition-all active:scale-95">
                            + Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Gerencia o clique nas categorias
function filtrarCategoria(nomeCategoria) {

    categoriaAtual = nomeCategoria;

    // Renderiza os produtos da categoria escolhida
    renderizarCardapio(nomeCategoria);

    // Atualiza o visual dos botões
    const botoes = document.querySelectorAll(".categoria-btn");

    botoes.forEach(btn => {

        // Categoria do botão (obtida pelo onclick)
        const categoriaBotao = btn
            .getAttribute("onclick")
            .match(/'([^']+)'/)[1];

        if (categoriaBotao.toLowerCase() === nomeCategoria.toLowerCase()) {

            btn.className =
                "categoria-btn bg-[#D14175] text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm";

        } else {

            btn.className =
                "categoria-btn bg-white text-gray-600 border border-pink-100 text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap";

        }

    });

}

// Mantemos as mesmas funções de carrinho e WhatsApp abaixo
function adicionarAoCarrinho(idDoce) {
    const produto = cardapio.find(item => item.id === idDoce);
    const itemNoCarrinho = carrinho.find(item => item.id === idDoce);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ id: produto.id, nome: produto.nome, preco: produto.preco, trackingQtd: 1, quantidade: 1 });
    }
    atualizarInterfaceCheckout();
}

// Função para remover item do carrinho
function removerDoCarrinho(idDoce) {

    const itemIndex = carrinho.findIndex(item => item.id === idDoce);

    if (itemIndex !== -1) {
        const item = carrinho[itemIndex];

        if (item.quantidade > 1) {
            // Se tiver mais de 1, diminui a quantidade
            item.quantidade -= 1;
        } else {
            // Se tiver apenas 1, remove o item completamente
            carrinho.splice(itemIndex, 1);
        }

        atualizarInterfaceCheckout();
    }
}


function atualizarInterfaceCheckout() {
    const containerCheckout = document.getElementById('container-checkout');
    const txtQtd = document.getElementById('checkout-qtd');
    const txtTotal = document.getElementById('checkout-total');
    const listaItensArea = document.getElementById('checkout-itens-lista');

    // 1. Calcula a quantidade total geral de itens para colocar na bolinha do topo
    let qtdTotalGeral = 0;
    carrinho.forEach(item => {
        qtdTotalGeral += item.quantidade;
    });

    // 2. Atualiza o contador do ícone de carrinho lá do topo
    const logoCarrinhoQtd = document.getElementById('carrinho-qtd');
    if (logoCarrinhoQtd) {
        logoCarrinhoQtd.innerText = qtdTotalGeral;
    }

    // 3. Se o carrinho estiver vazio, esconde a barra inferior e encerra a função
    if (carrinho.length === 0) {
        if (containerCheckout) containerCheckout.classList.add('hidden');
        return;
    }

    let qtdTotal = 0;
    let valorTotal = 0;
    listaItensArea.innerHTML = "";

    // 4. Monta a lista dos itens que estão no carrinho
    carrinho.forEach(item => {
        qtdTotal += item.quantidade;
        valorTotal += item.preco * item.quantidade;

        listaItensArea.innerHTML += `
            <div class="flex justify-between items-center py-1">
                <div>
                    <span>${item.quantidade}x ${item.nome}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="font-medium">R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
                    <button onclick="removerDoCarrinho(${item.id})" class="text-red-500 text-lg font-bold ml-2">-</button>
                </div>
            </div>
        `;
    });

    // 5. Atualiza as informações do resumo inferior e exibe a barra
    txtQtd.innerText = `${qtdTotal} ${qtdTotal === 1 ? 'item' : 'itens'}`;
    txtTotal.innerText = `R$ ${valorTotal.toFixed(2)}`;
    if (containerCheckout) containerCheckout.classList.remove('hidden');
}

function enviarParaWhatsApp() {
    // 1. Captura o valor do campo de observação
    const observacao = document.getElementById('observacao').value;

    let mensagem = `*🧁 NOVO PEDIDO - DELÍCIAS DA KAH* 🧁\n\n`;
    mensagem += `Olá, Karine! Montei meu pedido pelo site:\n`;
    mensagem += `------------------------------------------\n`;

    let total = 0;
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        mensagem += `*${item.quantidade}x* ${item.nome}\n`;
        mensagem += `   ↳ Subtotal: R$ ${subtotal.toFixed(2)}\n`;
        total += subtotal;
    });

    mensagem += `------------------------------------------\n`;
    mensagem += `*💰 TOTAL DO PEDIDO:* R$ ${total.toFixed(2)}\n\n`;

    // 2. Adiciona a observação se ela não estiver vazia
    if (observacao.trim() !== "") {
        mensagem += `*📝 OBSERVAÇÃO:* ${observacao}\n\n`;
    }

    mensagem += `_Por favor, me envie as opções de entrega e chaves Pix!_`;

    const textoCodificado = encodeURIComponent(mensagem);
    const numeroWhatsApp = "5573988297549";
    const urlFinal = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoCodificado}`;

    window.open(urlFinal, '_blank');
}

// Inicializa o site exibindo todos os produtos da primeira vez
renderizarCardapio();