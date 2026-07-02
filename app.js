// 1. O Banco de Dados 
const cardapio = [
    { 
        id: 1, 
        nome: "Kit Lembrancinha 💝", 
        categoria: "Kits Especiais", 
        preco: 12.00, 
        descricao: "Ideal para presentear quem você ama com muito carinho.", 
        itens: ["2 Pãozinhos Delícia", "1 Coxinha", "1 Empadinha"], 
        tag: "Mais Econômico",
        imagem: "imagens/kit-lembrancinha.jpg" // <-- Caminho da foto na sua pasta
    },
    { 
        id: 2, 
        nome: "Kit Café da Mamãe ☕", 
        categoria: "Kits Especiais", 
        preco: 28.00, 
        descricao: "Uma combinação perfeita para um café da manhã ou tarde especial.", 
        itens: ["3 Pãozinhos Delícia", "2 Coxinhas", "1 Empadinha", "1 Mini Quiche", "1 Salgado Sortido"], 
        tag: "Destaque",
        imagem: "imagens/kit-cafe.jpg" 
    },
    { 
        id: 3, 
        nome: "Kit Especial da Mamãe ✨", 
        categoria: "Kits Especiais", 
        preco: 40.00, 
        descricao: "O kit mais completo para surpreender e saborear.", 
        itens: ["3 Pãozinhos Delícia", "2 Coxinhas", "2 Empadinhas", "2 Mini Quiches", "1 Mini Pão Recheado"], 
        tag: "Quantidade Limitada!",
        imagem: "imagens/kit-especial.jpg"
    },
    { 
        id: 4, 
        nome: "Quiche Média 🥧", 
        categoria: "Pratos Principais", 
        preco: 100.00, 
        descricao: "Massa leve e recheio cremoso. Perfeito para completar sua celebração.", 
        itens: [], 
        tag: "Sugestão da Kah",
        imagem: "imagens/quiche.jpg"
    },
    { 
        id: 5, 
        nome: "Empadão Médio (Frango) 🥧", 
        categoria: "Pratos Principais", 
        preco: 100.00, 
        descricao: "Aquele empadão clássico bem recheado que derrete na boca.", 
        itens: [], 
        tag: "Sucesso de Vendas",
        imagem: "imagens/empadao.jpg"
    },
    {
        id: 6,
        nome: "Pãozinho Delícia com Recheio 🥖",
        categoria: "paes",
        preco: 2.30,
        descricao: "Pãozinho tradicional super fofinho com recheio cremoso.",
        itens: [],
        tag: "O Queridinho",
        imagem: "imagens/pao-recheado.jpg"
    },
    {
        id: 7,
        nome: "Bolo no Pote Ninho com Nutella 🍫",
        categoria: "doces",
        preco: 12.00,
        descricao: "Camadas generosas de creme de leite Ninho com Nutella pura.",
        itens: [],
        tag: "Mais Pedido",
        imagem: "imagens/ninho-nutella.jpg"
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

// 3. NOVA FUNÇÃO: Gerencia o clique nos botões e altera o visual deles
function filtrarCategoria(nomeCategoria) {
    categoriaAtual = nomeCategoria;
    
    // Manda renderizar a tela novamente, passando apenas a categoria escolhida
    renderizarCardapio(nomeCategoria);

    // Lógica visual: Seleciona todos os botões de categoria da tela
    const botoes = document.querySelectorAll('.categoria-btn');
    
    botoes.forEach(btn => {
        // Descobre qual categoria aquele botão específico dispara olhando o texto do onclick
        if (btn.getAttribute('onclick').includes(`'${nomeCategoria}'`)) {
            // Se for o botão clicado, bota fundo rosa e texto branco
            btn.className = "categoria-btn bg-[#D14175] text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm";
        } else {
            // Se não for, volta para o fundo branco com borda clarinha
            btn.className = "categoria-btn bg-white text-gray-600 border border-pink-100 text-xs font-medium px-4 py-2 rounded-full whitespace-nowrap";
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
    mensagem += `_Por favor, me envie as opções de entrega e chaves Pix!_`;

    const textoCodificado = encodeURIComponent(mensagem);
    const numeroWhatsApp = "5573988297549"; 
    const urlFinal = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoCodificado}`;

    window.open(urlFinal, '_blank');
}

// Inicializa o site exibindo todos os produtos da primeira vez
renderizarCardapio("todos");