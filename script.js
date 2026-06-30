// ===========================
// MENU HAMBÚRGUER
// ===========================
const botaoHamburguer = document.querySelector("#menuHamburguer");
const menu = document.querySelector("#menuPrincipal");

botaoHamburguer.addEventListener("click", function () {
  menu.classList.toggle("ativo");
  botaoHamburguer.classList.toggle("ativo");

  const aberto = menu.classList.contains("ativo");
  botaoHamburguer.setAttribute("aria-expanded", aberto);
});

// Fecha o menu automaticamente ao clicar em um link (útil no mobile)
const linksMenu = document.querySelectorAll("#menuPrincipal a");

linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("ativo");
    botaoHamburguer.classList.remove("ativo");
    botaoHamburguer.setAttribute("aria-expanded", "false");
  });
});

// ===========================
// CARDS DE SERVIÇO (prévia ao vivo)
// ===========================
const cardsServico = document.querySelectorAll(".servico-card");
const detalheServico = document.querySelector("#servicoDetalhe");

const textosServico = {
  institucional: "Indicado para: clínicas, consultórios, escritórios e prestadores de serviço. Inclui: seções de serviços, sobre o negócio, localização, depoimentos e botão direto para o WhatsApp — tudo pensado para transmitir confiança já na primeira visita.",
  landing: "Indicado para: promoções, lançamentos ou um serviço específico que precisa de atenção total do visitante. Inclui: página única, foco total em uma ação (comprar, agendar ou chamar no WhatsApp), sem distrações no caminho.",
  portfolio: "Indicado para: arquitetos, fotógrafos, ateliês e estúdios — qualquer negócio que vende pelo olhar. Inclui: galeria visual organizada por categoria, página de cada projeto em destaque e contato direto para orçamento."
};

cardsServico.forEach(function (card) {
  card.addEventListener("click", function () {
    // Remove o estado "ativo" de todos os cards
    cardsServico.forEach(function (c) {
      c.setAttribute("aria-pressed", "false");
    });

    // Ativa só o card clicado
    card.setAttribute("aria-pressed", "true");

    // Troca o texto de detalhe conforme o tipo do card
    const tipo = card.getAttribute("data-tipo");
    detalheServico.textContent = textosServico[tipo];
  });
});

// ===========================
// FAQ (acordeão)
// ===========================
const perguntasFaq = document.querySelectorAll(".faq-pergunta");

perguntasFaq.forEach(function (pergunta) {
  pergunta.addEventListener("click", function () {
    const resposta = pergunta.nextElementSibling;
    const expandido = pergunta.getAttribute("aria-expanded") === "true";

    // Fecha qualquer outra pergunta aberta antes de abrir a nova
    perguntasFaq.forEach(function (outraPergunta) {
      outraPergunta.setAttribute("aria-expanded", "false");
      outraPergunta.nextElementSibling.style.maxHeight = null;
    });

    // Se a pergunta clicada já estava aberta, deixa fechada (efeito de alternar)
    if (!expandido) {
      pergunta.setAttribute("aria-expanded", "true");
      resposta.style.maxHeight = resposta.scrollHeight + "px";
    }
  });
});

// ===========================
// ANO ATUAL NO RODAPÉ
// ===========================
const anoAtual = document.querySelector("#anoAtual");
anoAtual.textContent = new Date().getFullYear();
