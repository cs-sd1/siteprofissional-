document.documentElement.className += ' js'; /* Primeira linha: marca que o JavaScript está activo. Não mexer. */

/* =====================================================================
   KUWANDE ANGOLA, LDA. | script.js

   COMO EDITAR
   Todo o conteúdo que muda está nas constantes logo abaixo:
   EMPRESA, COMPROMISSOS, AREAS, PROCESSO, MOTIVOS, FAQ e EDICOES.
   Mude só o texto entre plicas ('assim'). Não apague vírgulas nem
   chavetas. Se precisar de uma plica dentro do texto, escreva \'

   Ícones disponíveis (campo "icone"): folha, livro, prancheta, caixa,
   espiga, certificado, relogio, terreno, calculadora, conversa, pessoas,
   pessoa, escudo, pin, telefone, email, calendario, whatsapp, alvo, lupa

   Nota técnica: este ficheiro usa só JavaScript antigo (ES5), para
   funcionar nos telemóveis Android mais velhos. Se acrescentar código,
   use "var" e "function", nunca "let", "const" ou "=>".
   ===================================================================== */


/* =====================================================================
   1. DADOS DA EMPRESA
   ===================================================================== */
var EMPRESA = {
  whatsapp: '244974477016',                  // Número do WhatsApp: só algarismos, com o 244 à frente, sem + nem espaços.
  telefoneVisivel: '+244 974 477 016',       // Número tal como aparece escrito no site.
  email: '',                                 // E-mail da empresa. Enquanto estiver vazio, o bloco do e-mail não aparece.
  morada: 'Lubango, Huíla, Angola',          // Morada mostrada nos contactos e no rodapé.
  horario: 'Segunda a sexta, das 08h00 às 17h00. Sábado, das 08h00 às 12h00.', // Horário de atendimento.
  slogan: 'Atitudes que geram valor',        // Slogan (hero e rodapé).
  mensagemBase: 'Olá, Kuwande Angola. Vim pelo vosso site e gostaria de mais informações.' // Primeira frase das mensagens de WhatsApp.
};


/* =====================================================================
   2. COMPROMISSOS (faixa logo abaixo do hero). Quatro itens.
   ===================================================================== */
var COMPROMISSOS = [
  { icone: 'conversa',    titulo: 'Linguagem simples',  texto: 'Explicamos com palavras do dia a dia. Termos técnicos só quando fazem falta, e sempre explicados.' },
  { icone: 'terreno',     titulo: 'Prática no terreno', texto: 'O que se aprende na sala vê-se e faz-se numa exploração a funcionar.' },
  { icone: 'calculadora', titulo: 'Contas claras',      texto: 'Mostramos os custos reais antes de começar, para decidir com os pés no chão.' },
  { icone: 'pessoas',     titulo: 'Acompanhamento',     texto: 'Depois da formação ou do serviço, continuamos disponíveis para as dúvidas que aparecem.' }
];


/* =====================================================================
   3. ÁREAS DE ACTUAÇÃO. Quatro cartões, cada um com três pontos.
   ===================================================================== */
var AREAS = [
  {
    icone: 'livro',                                        // Ícone do cartão.
    titulo: 'Formação profissional',                       // Título do cartão.
    texto: 'Cursos práticos para quem quer começar ou melhorar uma actividade no campo.', // Descrição curta.
    pontos: ['Cursos intensivos de curta duração', 'Aulas na sala e prática no terreno', 'Manual de apoio e certificado'] // O que inclui.
  },
  {
    icone: 'espiga',
    titulo: 'Produção agropecuária',
    texto: 'Produzimos e acompanhamos actividades agrícolas e de criação animal na região.',
    pontos: ['Criação animal, com foco em aves', 'Produção agrícola adaptada ao clima da Huíla', 'Boas práticas de maneio e sanidade']
  },
  {
    icone: 'prancheta',
    titulo: 'Consultoria e projectos',
    texto: 'Ajudamos a planear antes de investir, para evitar erros que saem caros.',
    pontos: ['Estudos de viabilidade simples', 'Planos de instalação e de produção', 'Orçamentos e cálculo de custos']
  },
  {
    icone: 'caixa',
    titulo: 'Comércio de material e equipamento',
    texto: 'Fornecemos material e equipamento para explorações agrícolas e pecuárias.',
    pontos: ['Equipamento para aviários', 'Material de apoio à produção', 'Ajuda a escolher o que comprar']
  }
];


/* =====================================================================
   4. COMO TRABALHAMOS. Quatro passos, pela ordem em que acontecem.
   ===================================================================== */
var PROCESSO = [
  { titulo: 'Ouvimos',      texto: 'Conversamos consigo para perceber o que tem, o que quer fazer e com que meios conta.' },
  { titulo: 'Analisamos',   texto: 'Vemos o terreno, os números e as opções. Dizemos com franqueza o que faz sentido.' },
  { titulo: 'Propomos',     texto: 'Apresentamos um plano claro, com passos, prazos e custos por escrito.' },
  { titulo: 'Acompanhamos', texto: 'Executamos ou ensinamos a executar, e ficamos por perto nas primeiras dúvidas.' }
];


/* =====================================================================
   5. PORQUÊ A KUWANDE. Seis motivos.
   ===================================================================== */
var MOTIVOS = [
  { icone: 'pin',         titulo: 'Somos do Lubango',         texto: 'Conhecemos o clima, os mercados e as pessoas da Huíla.' },
  { icone: 'conversa',    titulo: 'Explicamos sem complicar', texto: 'Linguagem clara, pensada para quem está a começar.' },
  { icone: 'terreno',     titulo: 'Mãos na terra',            texto: 'A teoria serve a prática. Aprende-se a fazer, fazendo.' },
  { icone: 'calculadora', titulo: 'Números à vista',          texto: 'Custos explicados antes de qualquer compromisso.' },
  { icone: 'escudo',      titulo: 'Franqueza',                texto: 'Se uma ideia não compensa, dizemos. Preferimos perder um negócio a enganar alguém.' },
  { icone: 'relogio',     titulo: 'Resposta rápida',          texto: 'Atendemos pelo WhatsApp e procuramos responder no mesmo dia útil.' }
];


/* =====================================================================
   6. PERGUNTAS FREQUENTES. Seis perguntas e respostas.
   ===================================================================== */
var FAQ = [
  { pergunta: 'Preciso de experiência para fazer os cursos?', resposta: 'Não. Os cursos são pensados para iniciantes e também para quem já cria ou cultiva e quer organizar melhor o trabalho. Começamos sempre pelo básico.' },
  { pergunta: 'Como faço a inscrição?', resposta: 'Preencha o formulário no fim da página ou escreva-nos pelo WhatsApp. Confirmamos a vaga e explicamos a forma de pagamento.' },
  { pergunta: 'Recebo certificado?', resposta: 'Sim. No fim de cada curso, quem cumpre a carga horária recebe certificado de participação da Kuwande Angola.' },
  { pergunta: 'Os cursos são só no Lubango?', resposta: 'A maior parte decorre no Lubango, com prática em explorações da região. Para grupos organizados, podemos estudar uma formação noutro município da Huíla.' },
  { pergunta: 'Fazem consultoria para projectos pequenos?', resposta: 'Sim. Trabalhamos com projectos de todos os tamanhos. O primeiro passo é uma conversa para perceber a sua situação.' },
  { pergunta: 'Garantem que vou ganhar dinheiro?', resposta: 'Não. Ninguém sério pode garantir lucro. O que garantimos é que sai a saber fazer as contas, os cuidados e os passos certos para decidir bem.' }
];


/* =====================================================================
   7. EDIÇÕES DOS CURSOS (de 0 a 10)

   Se apagar todas as edições (deixando só "var EDICOES = [ ];"), o site
   continua completo: aparece o convite para deixar contacto.

   CAMPOS DE CADA EDIÇÃO
   numero     Número da edição (1 a 10).
   estado     'inscricoes' (inscrições abertas), 'decorrer' (a decorrer)
              ou 'concluida' (já terminou).
   titulo     Nome do curso.
   subtitulo  Frase curta. Se for 'A confirmar', não aparece no cartão.
   datas      Texto livre, por exemplo '14 a 17 de Setembro de 2026'.
   horario    Texto livre.
   local      Onde decorrem as aulas.
   pratica    Onde decorre a aula prática.
   duracao    Carga horária, por exemplo '10 horas'.
   formador   Nome do formador.
   preco      Texto livre com os valores.
   prazo      Último dia de inscrição no formato AAAA-MM-DD
              (exemplo: '2026-10-03'). O site conta os dias sozinho.
              Deixe '' se não houver prazo.
   modulos    Lista com os temas do programa.
   inclui     Lista com o que a inscrição inclui.
   capa       Fotografia do cartão, por exemplo 'imagens/edicao-01/capa.jpg'.
   galeria    Lista de fotografias para a galeria. Se um ficheiro não
              existir, é ignorado em silêncio.
   vozes      Testemunhos: lista de { texto, nome, origem }.

   PARA ACTIVAR AS EDIÇÕES 3 A 10
   Cada bloco começa com uma linha "INÍCIO DA EDIÇÃO" e acaba com uma
   linha "FIM DA EDIÇÃO". Apague essas duas linhas inteiras e troque
   os dados. O cartão, o programa, as
   fotografias, o filtro da galeria, os testemunhos e a opção do
   formulário aparecem sozinhos.
   ===================================================================== */
var EDICOES = [

  /* ------------------------------------------------------------------
     1.ª EDIÇÃO (dados reais)
     ------------------------------------------------------------------ */
  {
    numero: 1,
    estado: 'concluida',
    titulo: 'Curso Intensivo de Avicultura',
    subtitulo: 'Poedeiras e frangos de corte, da instalação à venda',
    datas: '14 a 17 de Setembro de 2026',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Aviário Katukembwa, na Palanca',
    duracao: '10 horas',
    formador: 'Eng.º Pedro Sadrac Mussinda',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '',
    modulos: [
      'Fundamentos e instalações',
      'Isa Brown, a poedeira',
      'Ross 308, o frango de corte',
      'Sanidade e biossegurança',
      'Custos e venda'
    ],
    inclui: ['Manual de apoio', 'Certificado', 'T-shirt', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-01/capa.jpg',
    galeria: [
      'imagens/edicao-01/foto-01.jpg',
      'imagens/edicao-01/foto-02.jpg',
      'imagens/edicao-01/foto-03.jpg',
      'imagens/edicao-01/foto-04.jpg',
      'imagens/edicao-01/foto-05.jpg',
      'imagens/edicao-01/foto-06.jpg'
    ],
    vozes: [
      // Quando tiver testemunhos reais dos formandos, escreva-os assim:
      // { texto: 'Frase do formando.', nome: 'Nome do formando', origem: 'Criador, Humpata' }
    ]
  },

  /* ------------------------------------------------------------------
     2.ª EDIÇÃO
     ------------------------------------------------------------------ */
  {
    numero: 2,
    estado: 'inscricoes',
    titulo: 'Formulação e Produção de Ração',
    subtitulo: 'A confirmar',
    datas: '7 a 9 de Outubro de 2026',
    horario: 'A confirmar',
    local: 'Mediateca do Lubango',
    pratica: 'A confirmar',
    duracao: 'A confirmar',
    formador: 'A confirmar',
    preco: 'A confirmar',
    prazo: '2026-10-03',
    modulos: ['A confirmar'],
    inclui: ['A confirmar'],
    capa: 'imagens/edicao-02/capa.jpg',
    galeria: [],
    vozes: []
  }

  /* INÍCIO DA EDIÇÃO 3 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 3,
    estado: 'inscricoes',
    titulo: 'Suinicultura para Iniciantes',
    subtitulo: 'Da pocilga ao primeiro lote vendido',
    datas: '9 a 12 de Novembro de 2026',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da exploração, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2026-11-05',
    modulos: ['Instalações', 'Raças e reprodução', 'Alimentação', 'Sanidade', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-03/capa.jpg',
    galeria: ['imagens/edicao-03/foto-01.jpg', 'imagens/edicao-03/foto-02.jpg', 'imagens/edicao-03/foto-03.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Criador, Humpata' }
    ]
  }
  FIM DA EDIÇÃO 3: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 4 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 4,
    estado: 'inscricoes',
    titulo: 'Horticultura Familiar e Comercial',
    subtitulo: 'Hortícolas de época no clima da Huíla',
    datas: '7 a 10 de Dezembro de 2026',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da horta, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2026-12-03',
    modulos: ['Solo e preparação', 'Sementeira e viveiro', 'Rega e adubação', 'Pragas e doenças', 'Colheita, custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-04/capa.jpg',
    galeria: ['imagens/edicao-04/foto-01.jpg', 'imagens/edicao-04/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Agricultora, Lubango' }
    ]
  }
  FIM DA EDIÇÃO 4: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 5 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 5,
    estado: 'inscricoes',
    titulo: 'Cunicultura: Criação de Coelhos',
    subtitulo: 'Pouco espaço, ciclo curto, venda rápida',
    datas: '18 a 21 de Janeiro de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da exploração, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-01-14',
    modulos: ['Gaiolas e instalações', 'Raças e reprodução', 'Alimentação', 'Sanidade', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-05/capa.jpg',
    galeria: ['imagens/edicao-05/foto-01.jpg', 'imagens/edicao-05/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Estudante, Lubango' }
    ]
  }
  FIM DA EDIÇÃO 5: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 6 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 6,
    estado: 'inscricoes',
    titulo: 'Piscicultura em Tanques',
    subtitulo: 'Tilápia em pequena escala',
    datas: '15 a 18 de Fevereiro de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da exploração, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-02-11',
    modulos: ['Escolha do local e tanques', 'Qualidade da água', 'Alevinos e povoamento', 'Alimentação e crescimento', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-06/capa.jpg',
    galeria: ['imagens/edicao-06/foto-01.jpg', 'imagens/edicao-06/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Pequeno empresário, Chibia' }
    ]
  }
  FIM DA EDIÇÃO 6: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 7 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 7,
    estado: 'inscricoes',
    titulo: 'Gestão de Pequenas Explorações',
    subtitulo: 'Registos, custos e preço de venda',
    datas: '15 a 18 de Março de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Estudo de casos reais em sala',
    duracao: '8 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-03-11',
    modulos: ['Registos simples', 'Custos fixos e variáveis', 'Preço de venda', 'Fluxo de caixa', 'Plano do próximo ano'],
    inclui: ['Manual de apoio', 'Certificado', 'Folhas de registo'],
    capa: 'imagens/edicao-07/capa.jpg',
    galeria: ['imagens/edicao-07/foto-01.jpg', 'imagens/edicao-07/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Comerciante, Lubango' }
    ]
  }
  FIM DA EDIÇÃO 7: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 8 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 8,
    estado: 'inscricoes',
    titulo: 'Caprinocultura',
    subtitulo: 'Cabras para carne e leite',
    datas: '12 a 15 de Abril de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da exploração, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-04-08',
    modulos: ['Instalações', 'Raças e reprodução', 'Pastagem e suplemento', 'Sanidade', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-08/capa.jpg',
    galeria: ['imagens/edicao-08/foto-01.jpg', 'imagens/edicao-08/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Criador, Quilengues' }
    ]
  }
  FIM DA EDIÇÃO 8: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 9 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 9,
    estado: 'inscricoes',
    titulo: 'Apicultura',
    subtitulo: 'Colmeias, colheita e venda de mel',
    datas: '10 a 13 de Maio de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome do apiário, bairro',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-05-06',
    modulos: ['Biologia da abelha', 'Colmeias e equipamento', 'Maneio do apiário', 'Colheita e extracção', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-09/capa.jpg',
    galeria: ['imagens/edicao-09/foto-01.jpg', 'imagens/edicao-09/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Agricultor, Humpata' }
    ]
  }
  FIM DA EDIÇÃO 9: apague também esta linha inteira */

  /* INÍCIO DA EDIÇÃO 10 (exemplo): apague esta linha inteira para activar
  ,{
    numero: 10,
    estado: 'inscricoes',
    titulo: 'Bovinocultura de Leite',
    subtitulo: 'Do maneio da vaca à venda do leite',
    datas: '14 a 17 de Junho de 2027',
    horario: '08h00 às 10h00',
    local: 'Mediateca do Lubango',
    pratica: 'Nome da fazenda, município',
    duracao: '10 horas',
    formador: 'Nome do formador',
    preco: '5.000 Kz de inscrição e 15.000 Kz de formação',
    prazo: '2027-06-10',
    modulos: ['Instalações', 'Alimentação', 'Ordenha e higiene', 'Sanidade', 'Custos e venda'],
    inclui: ['Manual de apoio', 'Certificado', 'Deslocação para a aula prática'],
    capa: 'imagens/edicao-10/capa.jpg',
    galeria: ['imagens/edicao-10/foto-01.jpg', 'imagens/edicao-10/foto-02.jpg'],
    vozes: [
      { texto: 'Exemplo de testemunho. Troque por uma frase real de um formando.', nome: 'Nome do formando', origem: 'Criador, Matala' }
    ]
  }
  FIM DA EDIÇÃO 10: apague também esta linha inteira */

];


/* =====================================================================
   A PARTIR DAQUI É O FUNCIONAMENTO DO SITE.
   Não precisa de mexer para actualizar conteúdos.
   ===================================================================== */
(function () {
  'use strict';

  var html = document.documentElement;
  var LARGURA_MENU = 860;               // Abaixo disto, o menu vira painel.
  var ASSUNTO_AVISO = 'Quero ser avisado do próximo curso';
  var ESTADOS = { inscricoes: 'Inscrições abertas', decorrer: 'A decorrer', concluida: 'Concluída' };
  var MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  var movimentoReduzido = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var edicoes = [];                     // Edições válidas, preenchidas no arranque.
  var pilha = [];                       // Janelas abertas (para prender o foco e fechar com Escape).
  var pendentesRevelar = [];            // Elementos à espera de aparecer.
  var arranqueOk = false;


  /* -------------------------------------------------------------------
     UTILITÁRIOS
     ------------------------------------------------------------------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function paraCada(lista, fn) { for (var i = 0; i < lista.length; i++) { fn(lista[i], i); } }

  function temClasse(el, c) { return (' ' + el.className + ' ').indexOf(' ' + c + ' ') > -1; }
  function addClasse(el, c) { if (el && !temClasse(el, c)) { el.className = (el.className + ' ' + c).replace(/^\s+/, ''); } }
  function remClasse(el, c) {
    if (!el) { return; }
    el.className = (' ' + el.className + ' ').replace(' ' + c + ' ', ' ').replace(/^\s+|\s+$/g, '');
  }

  function mostrar(el) { if (el) { el.removeAttribute('hidden'); } }
  function esconder(el) { if (el) { el.setAttribute('hidden', ''); } }

  function escapar(t) {
    return String(t === undefined || t === null ? '' : t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function temValor(t) { return typeof t === 'string' && t.replace(/\s/g, '') !== ''; }
  function aConfirmar(t) { return !temValor(t) || t.toLowerCase().replace(/\s+/g, ' ') === 'a confirmar'; }
  function lista(v) { return Object.prototype.toString.call(v) === '[object Array]' ? v : []; }

  function icone(nome, classe) {
    return '<svg class="ico' + (classe ? ' ' + classe : '') + '" aria-hidden="true" focusable="false"><use xlink:href="#i-' + escapar(nome) + '"></use></svg>';
  }
  function ordinal(n) { return n + '.ª'; }
  function ligacaoWhatsApp(texto) { return 'https://wa.me/' + EMPRESA.whatsapp + '?text=' + encodeURIComponent(texto); }

  var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) { return window.setTimeout(fn, 16); };
  function pedirQuadro(fn) { return raf.call(window, fn); }
  function agora() { return new Date().getTime(); }

  function rolagemY() { return window.pageYOffset || html.scrollTop || 0; }
  function alturaJanela() { return window.innerHeight || html.clientHeight; }
  function larguraJanela() { return window.innerWidth || html.clientWidth; }

  function transformar(el, valor) { el.style.webkitTransform = valor; el.style.transform = valor; }

  /* Corre cada parte do arranque isolada: se uma falhar, as outras continuam */
  function passo(nome, fn) {
    try { fn(); } catch (erro) {
      if (window.console && console.error) { console.error('[Kuwande] Falhou o passo "' + nome + '":', erro); }
    }
  }

  /* Leva a página até uma secção, descontando a barra fixa */
  function irPara(el) {
    if (!el) { return; }
    var topo = el.getBoundingClientRect().top + rolagemY() - 76;
    window.scrollTo(0, topo < 0 ? 0 : topo);
  }

  /* Elementos que podem receber foco e estão visíveis */
  function focaveis(contentor) {
    var todos = $$('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', contentor);
    var visiveis = [];
    paraCada(todos, function (el) {
      if (el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0) { visiveis.push(el); }
    });
    return visiveis;
  }

  /* Procura, a partir do elemento clicado, o primeiro que tenha um dos atributos */
  function subirAte(el, atributos) {
    while (el && el !== document && el.getAttribute) {
      for (var i = 0; i < atributos.length; i++) {
        if (el.hasAttribute(atributos[i])) { return { el: el, atributo: atributos[i] }; }
      }
      el = el.parentNode;
    }
    return null;
  }


  /* -------------------------------------------------------------------
     EDIÇÕES: validação, prazos e textos
     ------------------------------------------------------------------- */
  function prepararEdicoes() {
    var brutas = lista(EDICOES);
    for (var i = 0; i < brutas.length && edicoes.length < 10; i++) {
      var e = brutas[i];
      if (!e || !temValor(e.titulo)) { continue; }
      if (!e.numero) { e.numero = edicoes.length + 1; }
      if (!ESTADOS[e.estado]) { e.estado = 'inscricoes'; }
      e.modulos = lista(e.modulos);
      e.inclui = lista(e.inclui);
      e.galeria = lista(e.galeria);
      e.vozes = lista(e.vozes);
      edicoes.push(e);
    }
  }

  function acharEdicao(numero) {
    for (var i = 0; i < edicoes.length; i++) { if (String(edicoes[i].numero) === String(numero)) { return edicoes[i]; } }
    return null;
  }

  function lerData(texto) {
    var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto || '');
    return p ? new Date(parseInt(p[1], 10), parseInt(p[2], 10) - 1, parseInt(p[3], 10)) : null;
  }
  function diasAte(texto) {
    var alvo = lerData(texto);
    if (!alvo) { return null; }
    var h = new Date();
    var hoje = new Date(h.getFullYear(), h.getMonth(), h.getDate());
    return Math.round((alvo.getTime() - hoje.getTime()) / 86400000);
  }
  function dataPorExtenso(texto) {
    var d = lerData(texto);
    return d ? d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear() : '';
  }

  function infoPrazo(e) {
    if (e.estado !== 'inscricoes') { return null; }
    var d = diasAte(e.prazo);
    if (d === null) { return null; }
    if (d < 0) { return { texto: 'Inscrições encerradas', classe: 'prazo--fechado' }; }
    if (d === 0) { return { texto: 'As inscrições terminam hoje', classe: '' }; }
    if (d === 1) { return { texto: 'Falta 1 dia para o fim das inscrições', classe: '' }; }
    return { texto: 'Faltam ' + d + ' dias para o fim das inscrições', classe: '' };
  }

  function podeInscrever(e) {
    if (e.estado !== 'inscricoes') { return false; }
    var d = diasAte(e.prazo);
    return d === null || d >= 0;
  }

  function valorAssunto(e) { return 'Inscrição: ' + e.titulo + ' (' + ordinal(e.numero) + ' edição)'; }

  function molduraHtml(src, alt, classeExtra) {
    if (!temValor(src)) { return '<div class="moldura moldura--vazia ' + classeExtra + '"></div>'; }
    return '<div class="moldura ' + classeExtra + '"><img src="' + escapar(src) + '" alt="' + escapar(alt) + '" loading="lazy" data-moldura></div>';
  }

  /* Imagens que não existem dão lugar à trama da marca */
  function prepararMolduras(ctx) {
    paraCada($$('img[data-moldura]', ctx), function (img) {
      function falhou() {
        var m = img.parentNode;
        if (m) { addClasse(m, 'moldura--vazia'); m.removeChild(img); }
      }
      img.onerror = falhou;
      if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) { falhou(); }
    });
  }

  function linhaDado(nomeIcone, rotulo, valor) {
    if (!temValor(valor)) { return ''; }
    return '<li>' + icone(nomeIcone) + '<span><span class="dados__rotulo">' + escapar(rotulo) + '</span>' + escapar(valor) + '</span></li>';
  }


  /* -------------------------------------------------------------------
     DESENHO DAS SECÇÕES A PARTIR DOS DADOS
     Se uma lista estiver vazia, fica o texto de recurso do HTML.
     ------------------------------------------------------------------- */
  function renderContactos() {
    var ligacao = ligacaoWhatsApp(EMPRESA.mensagemBase);
    paraCada($$('[data-whatsapp]'), function (a) { a.setAttribute('href', ligacao); });

    var form = $('#formulario');
    if (form) { form.setAttribute('action', 'https://wa.me/' + EMPRESA.whatsapp); }

    paraCada($$('[data-campo]'), function (el) {
      var campo = el.getAttribute('data-campo');
      if (campo === 'telefone' && temValor(EMPRESA.telefoneVisivel)) {
        el.textContent = EMPRESA.telefoneVisivel;
        if (el.tagName === 'A') { el.setAttribute('href', 'tel:+' + EMPRESA.whatsapp); }
      } else if (campo === 'email' && temValor(EMPRESA.email)) {
        el.textContent = EMPRESA.email;
        el.setAttribute('href', 'mailto:' + EMPRESA.email);
      } else if (campo === 'morada' && temValor(EMPRESA.morada)) {
        el.textContent = EMPRESA.morada;
      } else if (campo === 'horario' && temValor(EMPRESA.horario)) {
        el.textContent = EMPRESA.horario;
      } else if (campo === 'slogan' && temValor(EMPRESA.slogan)) {
        el.textContent = EMPRESA.slogan;
      }
    });

    paraCada($$('[data-bloco="email"]'), function (el) {
      if (temValor(EMPRESA.email)) { mostrar(el); } else { esconder(el); }
    });
  }

  function renderCompromissos() {
    var alvo = $('[data-render="compromissos"]');
    if (!alvo || !lista(COMPROMISSOS).length) { return; }
    var h = '';
    paraCada(COMPROMISSOS, function (c) {
      h += '<li class="compromisso revelar">' + icone(c.icone, 'compromisso__icone') +
        '<div><h3 class="compromisso__titulo">' + escapar(c.titulo) + '</h3><p>' + escapar(c.texto) + '</p></div></li>';
    });
    alvo.innerHTML = h;
  }

  function renderAreas() {
    var alvo = $('[data-render="areas"]');
    if (!alvo || !lista(AREAS).length) { return; }
    var h = '';
    var rodape = '';
    paraCada(AREAS, function (a) {
      var pontos = '';
      paraCada(lista(a.pontos), function (p) { pontos += '<li>' + icone('check') + escapar(p) + '</li>'; });
      h += '<article class="area revelar"><div class="area__icone">' + icone(a.icone) + '</div>' +
        '<h3>' + escapar(a.titulo) + '</h3><p>' + escapar(a.texto) + '</p>' +
        (pontos ? '<ul class="lista-check">' + pontos + '</ul>' : '') + '</article>';
      rodape += '<li><a href="#areas">' + escapar(a.titulo) + '</a></li>';
    });
    alvo.innerHTML = h;
    var listaRodape = $('[data-render="rodape-areas"]');
    if (listaRodape) { listaRodape.innerHTML = rodape; }
  }

  function renderProcesso() {
    var alvo = $('[data-render="processo"]');
    if (!alvo || !lista(PROCESSO).length) { return; }
    var h = '';
    paraCada(PROCESSO, function (p, i) {
      h += '<li class="passo revelar"><span class="passo__numero"><span>' + (i + 1) + '</span></span>' +
        '<div><h3>' + escapar(p.titulo) + '</h3><p>' + escapar(p.texto) + '</p></div></li>';
    });
    alvo.innerHTML = h;
  }

  function renderMotivos() {
    var alvo = $('[data-render="motivos"]');
    if (!alvo || !lista(MOTIVOS).length) { return; }
    var h = '';
    paraCada(MOTIVOS, function (m) {
      h += '<li class="motivo revelar">' + icone(m.icone, 'motivo__icone') +
        '<div><h3>' + escapar(m.titulo) + '</h3><p>' + escapar(m.texto) + '</p></div></li>';
    });
    alvo.innerHTML = h;
  }

  function renderFaq() {
    var alvo = $('[data-render="faq"]');
    if (!alvo || !lista(FAQ).length) { return; }
    var h = '';
    paraCada(FAQ, function (f, i) {
      var n = i + 1;
      h += '<li class="faq__item revelar"><h3 class="faq__pergunta">' +
        '<button type="button" aria-expanded="false" aria-controls="faq-' + n + '" id="faq-b' + n + '"><span>' + escapar(f.pergunta) + '</span>' + icone('mais') + '</button></h3>' +
        '<div class="faq__painel" id="faq-' + n + '" role="region" aria-labelledby="faq-b' + n + '"><div class="faq__resposta"><p>' + escapar(f.resposta) + '</p></div></div></li>';
    });
    alvo.innerHTML = h;
  }

  /* Cartões das edições e convite */
  function renderEdicoes() {
    var bloco = $('#edicoes');
    var alvo = $('#lista-edicoes');
    var convite = $('#convite');
    if (!bloco || !alvo) { return; }

    var abertas = 0;
    paraCada(edicoes, function (e) { if (podeInscrever(e) || e.estado === 'decorrer') { abertas++; } });
    if (convite) { if (abertas > 0) { esconder(convite); } else { mostrar(convite); } }

    if (!edicoes.length) { esconder(bloco); return; }

    /* Ordem: inscrições abertas, a decorrer, concluídas; dentro de cada grupo, a mais recente primeiro */
    var peso = { inscricoes: 0, decorrer: 1, concluida: 2 };
    var ordenadas = edicoes.slice(0);
    ordenadas.sort(function (a, b) {
      var pa = peso[a.estado] + (a.estado === 'inscricoes' && !podeInscrever(a) ? 1.5 : 0);
      var pb = peso[b.estado] + (b.estado === 'inscricoes' && !podeInscrever(b) ? 1.5 : 0);
      return pa !== pb ? pa - pb : b.numero - a.numero;
    });

    var h = '';
    paraCada(ordenadas, function (e) {
      var prazo = infoPrazo(e);
      h += '<article class="edicao revelar">';
      h += molduraHtml(e.capa, 'Capa da ' + ordinal(e.numero) + ' edição: ' + e.titulo, 'moldura--capa');
      h += '<div class="edicao__corpo">';
      h += '<p class="edicao__meta"><span class="selo selo--' + e.estado + '">' + ESTADOS[e.estado] + '</span><span class="edicao__numero">' + ordinal(e.numero) + ' edição</span></p>';
      h += '<h4 class="edicao__titulo">' + escapar(e.titulo) + '</h4>';
      if (!aConfirmar(e.subtitulo)) { h += '<p class="edicao__subtitulo">' + escapar(e.subtitulo) + '</p>'; }
      h += '<ul class="dados">' +
        linhaDado('calendario', 'Datas', e.datas) +
        linhaDado('pin', 'Local', e.local) +
        linhaDado('pessoa', 'Formador', e.formador) +
        linhaDado('moeda', 'Preço', e.preco) + '</ul>';
      if (prazo) { h += '<p class="prazo ' + prazo.classe + '">' + icone('relogio') + '<span>' + prazo.texto + '</span></p>'; }
      h += '<div class="edicao__accoes">';
      h += '<button type="button" class="botao botao--contorno botao--pequeno" data-programa="' + e.numero + '">Ver programa</button>';
      if (podeInscrever(e)) {
        h += '<button type="button" class="botao botao--accao botao--pequeno" data-inscrever="' + e.numero + '">Inscrever-me</button>';
      }
      if (e.galeria.length) {
        h += '<button type="button" class="botao botao--texto" data-ver-fotos="' + e.numero + '" hidden>Ver fotografias</button>';
      }
      h += '</div></div></article>';
    });
    alvo.innerHTML = h;
    mostrar(bloco);
    prepararMolduras(alvo);
  }

  /* Opções do campo "Assunto" do formulário */
  function renderAssuntos() {
    var sel = $('#campo-assunto');
    if (!sel) { return; }
    var h = '<option value="">Escolha uma opção</option>';
    var cursos = '';
    paraCada(edicoes, function (e) {
      if (podeInscrever(e)) {
        cursos += '<option value="' + escapar(valorAssunto(e)) + '" data-edicao="' + e.numero + '">' + escapar(e.titulo) + ' (' + ordinal(e.numero) + ' edição)</option>';
      }
    });
    if (cursos) { h += '<optgroup label="Inscrição num curso">' + cursos + '</optgroup>'; }
    var gerais = '';
    paraCada(lista(AREAS), function (a) { gerais += '<option>' + escapar(a.titulo) + '</option>'; });
    gerais += '<option>' + ASSUNTO_AVISO + '</option><option>Outro assunto</option>';
    h += cursos ? '<optgroup label="Outros assuntos">' + gerais + '</optgroup>' : gerais;
    sel.innerHTML = h;
  }

  /* Dados estruturados do tipo Course, só quando há edições */
  function dadosEstruturadosCursos() {
    if (!edicoes.length || !window.JSON) { return; }
    var cursos = [];
    paraCada(edicoes, function (e) {
      cursos.push({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: e.titulo,
        description: aConfirmar(e.subtitulo) ? 'Curso prático: ' + e.titulo + ', no Lubango.' : e.subtitulo,
        inLanguage: 'pt-AO',
        provider: { '@type': 'Organization', name: 'Kuwande Angola, Lda.' }
      });
    });
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(cursos.length === 1 ? cursos[0] : cursos);
    document.getElementsByTagName('head')[0].appendChild(s);
  }


  /* -------------------------------------------------------------------
     JANELAS (programa, visualizador, menu): foco preso e Escape
     ------------------------------------------------------------------- */
  function abrirJanela(el, classeAberta, entrada) {
    entrada.voltarFoco = document.activeElement;
    mostrar(el);
    void el.offsetWidth;                 // Força o navegador a desenhar antes da transição.
    addClasse(el, classeAberta);
    addClasse(html, 'sem-rolagem');
    pilha.push(entrada);
    var f = focaveis(el);
    if (f.length) { f[0].focus(); }
  }

  function fecharJanela(el, classeAberta, entrada) {
    remClasse(el, classeAberta);
    for (var i = pilha.length - 1; i >= 0; i--) { if (pilha[i] === entrada) { pilha.splice(i, 1); } }
    if (!pilha.length) { remClasse(html, 'sem-rolagem'); }
    window.setTimeout(function () { if (!temClasse(el, classeAberta)) { esconder(el); } }, movimentoReduzido ? 0 : 320);
    if (entrada.voltarFoco && entrada.voltarFoco.focus) { entrada.voltarFoco.focus(); }
  }

  function iniciarTeclado() {
    document.addEventListener('keydown', function (ev) {
      if (!pilha.length) { return; }
      var topo = pilha[pilha.length - 1];
      var k = ev.key;
      var c = ev.keyCode;

      if (k === 'Escape' || k === 'Esc' || c === 27) { ev.preventDefault(); topo.fechar(); return; }

      if (k === 'Tab' || c === 9) {
        var extras = [];
        paraCada(topo.extras || [], function (x) { if (x.offsetWidth > 0 || x.offsetHeight > 0) { extras.push(x); } });
        var lista2 = extras.concat(focaveis(topo.contentor));
        if (!lista2.length) { return; }
        var primeiro = lista2[0];
        var ultimo = lista2[lista2.length - 1];
        var activo = document.activeElement;
        var dentro = lista2.indexOf(activo) > -1;
        if (ev.shiftKey && (activo === primeiro || !dentro)) { ev.preventDefault(); ultimo.focus(); }
        else if (!ev.shiftKey && (activo === ultimo || !dentro)) { ev.preventDefault(); primeiro.focus(); }
        return;
      }

      if (topo.setas) {
        if (k === 'ArrowLeft' || k === 'Left' || c === 37) { ev.preventDefault(); topo.setas(-1); }
        else if (k === 'ArrowRight' || k === 'Right' || c === 39) { ev.preventDefault(); topo.setas(1); }
      }
    });
  }


  /* -------------------------------------------------------------------
     MENU DO TELEMÓVEL
     ------------------------------------------------------------------- */
  var menu = { aberto: false, fechar: function () {} };

  function iniciarMenu() {
    var botao = $('#botao-menu');
    var painel = $('#menu');
    var veu = $('#veu-menu');
    if (!botao || !painel) { return; }

    var entrada = { contentor: painel, extras: [botao], fechar: function () { fecharMenu(false); } };

    function abrirMenu() {
      menu.aberto = true;
      addClasse(painel, 'menu--aberto');
      addClasse(veu, 'veu--visivel');
      addClasse(botao, 'hamburguer--aberto');
      botao.setAttribute('aria-expanded', 'true');
      botao.setAttribute('aria-label', 'Fechar menu');
      addClasse(html, 'sem-rolagem');
      pilha.push(entrada);
      var f = focaveis(painel);
      if (f.length) { f[0].focus(); }
    }

    function fecharMenu(semFoco) {
      if (!menu.aberto) { return; }
      menu.aberto = false;
      remClasse(painel, 'menu--aberto');
      remClasse(veu, 'veu--visivel');
      remClasse(botao, 'hamburguer--aberto');
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-label', 'Abrir menu');
      for (var i = pilha.length - 1; i >= 0; i--) { if (pilha[i] === entrada) { pilha.splice(i, 1); } }
      if (!pilha.length) { remClasse(html, 'sem-rolagem'); }
      if (!semFoco) { botao.focus(); }
    }
    menu.fechar = fecharMenu;

    botao.addEventListener('click', function () { if (menu.aberto) { fecharMenu(false); } else { abrirMenu(); } });
    if (veu) { veu.addEventListener('click', function () { fecharMenu(false); }); }
    painel.addEventListener('click', function (ev) {
      var a = subirAte(ev.target, ['href']);
      if (a && menu.aberto) { fecharMenu(true); }
    });
    window.addEventListener('resize', function () {
      if (menu.aberto && larguraJanela() > LARGURA_MENU) { fecharMenu(true); }
    });
  }


  /* -------------------------------------------------------------------
     ACORDEÃO DAS PERGUNTAS
     ------------------------------------------------------------------- */
  function abrirPainel(painel) {
    if (movimentoReduzido) { painel.style.height = 'auto'; return; }
    painel.style.height = painel.scrollHeight + 'px';
    window.setTimeout(function () {
      if (painel.style.height !== '0px') { painel.style.height = 'auto'; }
    }, 470);
  }
  function fecharPainel(painel) {
    if (movimentoReduzido) { painel.style.height = '0px'; return; }
    painel.style.height = painel.scrollHeight + 'px';
    void painel.offsetHeight;
    painel.style.height = '0px';
  }
  function alternarFaq(botao) {
    var painel = document.getElementById(botao.getAttribute('aria-controls'));
    var item = botao.parentNode ? botao.parentNode.parentNode : null;
    if (!painel) { return; }
    if (botao.getAttribute('aria-expanded') === 'true') {
      botao.setAttribute('aria-expanded', 'false');
      remClasse(item, 'faq__item--aberto');
      fecharPainel(painel);
    } else {
      botao.setAttribute('aria-expanded', 'true');
      addClasse(item, 'faq__item--aberto');
      abrirPainel(painel);
    }
  }


  /* -------------------------------------------------------------------
     JANELA DO PROGRAMA
     ------------------------------------------------------------------- */
  var programa = { entrada: null };

  function listaHtml(itens, ordenada, comCheck) {
    if (!itens.length || (itens.length === 1 && aConfirmar(itens[0]))) { return '<p>A confirmar.</p>'; }
    var h = ordenada ? '<ol class="modulos">' : '<ul class="lista-check">';
    paraCada(itens, function (t) { h += '<li>' + (comCheck ? icone('check') : '') + escapar(t) + '</li>'; });
    return h + (ordenada ? '</ol>' : '</ul>');
  }

  function abrirPrograma(numero) {
    var e = acharEdicao(numero);
    var janela = $('#janela-programa');
    var conteudo = $('#janela-conteudo');
    if (!e || !janela || !conteudo) { return; }

    var prazo = infoPrazo(e);
    var h = '<p class="edicao__meta"><span class="selo selo--' + e.estado + '">' + ESTADOS[e.estado] + '</span><span class="edicao__numero">' + ordinal(e.numero) + ' edição</span></p>';
    h += '<h2 class="janela__titulo" id="janela-titulo">' + escapar(e.titulo) + '</h2>';
    if (!aConfirmar(e.subtitulo)) { h += '<p class="introducao">' + escapar(e.subtitulo) + '</p>'; }
    h += '<ul class="dados dados--janela">' +
      linhaDado('calendario', 'Datas', e.datas) +
      linhaDado('relogio', 'Horário', e.horario) +
      linhaDado('pin', 'Aulas', e.local) +
      linhaDado('terreno', 'Prática', e.pratica) +
      linhaDado('alvo', 'Duração', e.duracao) +
      linhaDado('pessoa', 'Formador', e.formador) +
      linhaDado('moeda', 'Preço', e.preco) +
      (e.estado === 'inscricoes' && lerData(e.prazo) ? linhaDado('calendario', 'Inscrições até', dataPorExtenso(e.prazo)) : '') +
      '</ul>';
    if (prazo) { h += '<p class="prazo ' + prazo.classe + '" style="margin-top:16px">' + icone('relogio') + '<span>' + prazo.texto + '</span></p>'; }
    h += '<h3>Programa</h3>' + listaHtml(e.modulos, true, false);
    h += '<h3>A inscrição inclui</h3>' + listaHtml(e.inclui, false, true);

    h += '<div class="janela__accoes">';
    if (podeInscrever(e)) {
      h += '<button type="button" class="botao botao--accao" data-inscrever="' + e.numero + '">Inscrever-me</button>';
    } else if (e.estado === 'concluida') {
      h += '<p class="janela__nota">Esta edição já terminou. Deixe o contacto e avisamos quando houver a próxima.</p>';
      h += '<button type="button" class="botao botao--accao" data-assunto="aviso">Quero ser avisado</button>';
    }
    h += '<a class="botao--texto botao" href="' + escapar(ligacaoWhatsApp(EMPRESA.mensagemBase + ' Tenho uma dúvida sobre o curso ' + e.titulo + ' (' + ordinal(e.numero) + ' edição).')) + '">Tirar dúvidas pelo WhatsApp</a>';
    h += '</div>';

    conteudo.innerHTML = h;
    var caixa = $('.janela__caixa', janela);
    if (caixa) { caixa.scrollTop = 0; }

    programa.entrada = { contentor: janela, fechar: fecharPrograma };
    abrirJanela(janela, 'janela--aberta', programa.entrada);
  }

  function fecharPrograma() {
    var janela = $('#janela-programa');
    if (janela && programa.entrada) { fecharJanela(janela, 'janela--aberta', programa.entrada); programa.entrada = null; }
  }


  /* -------------------------------------------------------------------
     FORMULÁRIO: escolher assunto e ir até ele
     ------------------------------------------------------------------- */
  function escolherAssunto(tipo, numero) {
    var sel = $('#campo-assunto');
    if (!sel) { return; }
    for (var i = 0; i < sel.options.length; i++) {
      var op = sel.options[i];
      if ((tipo === 'edicao' && op.getAttribute('data-edicao') === String(numero)) ||
          (tipo === 'aviso' && (op.value || op.text) === ASSUNTO_AVISO)) {
        sel.selectedIndex = i;
        break;
      }
    }
    var campo = sel.parentNode;
    remClasse(campo, 'campo--erro');
    var erro = $('#erro-assunto');
    if (erro) { erro.textContent = ''; }
  }

  function irParaFormulario() {
    if (programa.entrada) { fecharPrograma(); }
    irPara($('#contacto'));
    var nome = $('#campo-nome');
    if (nome) {
      window.setTimeout(function () {
        try { nome.focus({ preventScroll: true }); } catch (e) { nome.focus(); }
      }, movimentoReduzido ? 0 : 450);
    }
  }

  function iniciarFormulario() {
    var form = $('#formulario');
    if (!form) { return; }
    var nome = $('#campo-nome');
    var tel = $('#campo-telefone');
    var assunto = $('#campo-assunto');
    var estado = $('#formulario-estado');

    function marcar(campo, idErro, mensagem) {
      var caixa = campo.parentNode;
      var erro = document.getElementById(idErro);
      if (mensagem) {
        addClasse(caixa, 'campo--erro');
        campo.setAttribute('aria-invalid', 'true');
      } else {
        remClasse(caixa, 'campo--erro');
        campo.removeAttribute('aria-invalid');
      }
      if (erro) { erro.textContent = mensagem || ''; }
      return !mensagem;
    }

    function validarNome() {
      var v = nome.value.replace(/^\s+|\s+$/g, '');
      if (v.length < 3) { return marcar(nome, 'erro-nome', 'Escreva o seu nome, com pelo menos 3 letras.'); }
      if (/\d/.test(v)) { return marcar(nome, 'erro-nome', 'O nome não pode ter números.'); }
      return marcar(nome, 'erro-nome', '');
    }
    function validarTelefone() {
      var bruto = tel.value.replace(/^\s+|\s+$/g, '');
      var digitos = bruto.replace(/\D/g, '');
      if (!digitos.length) { return marcar(tel, 'erro-telefone', 'Escreva o seu número de telefone.'); }
      if (digitos.length === 12 && digitos.indexOf('244') === 0) { digitos = digitos.slice(3); }
      var estrangeiro = bruto.charAt(0) === '+' && bruto.indexOf('+244') !== 0;
      if (estrangeiro) {
        if (digitos.length < 8 || digitos.length > 15) { return marcar(tel, 'erro-telefone', 'Confirme o número: parece incompleto.'); }
        return marcar(tel, 'erro-telefone', '');
      }
      if (digitos.length !== 9 || digitos.charAt(0) !== '9') {
        return marcar(tel, 'erro-telefone', 'Indique um número angolano com 9 algarismos, a começar por 9. Exemplo: 923 456 789.');
      }
      return marcar(tel, 'erro-telefone', '');
    }
    function validarAssunto() {
      if (!assunto.value) { return marcar(assunto, 'erro-assunto', 'Escolha o assunto da mensagem.'); }
      return marcar(assunto, 'erro-assunto', '');
    }

    nome.addEventListener('blur', function () { if (nome.value) { validarNome(); } });
    tel.addEventListener('blur', function () { if (tel.value) { validarTelefone(); } });
    nome.addEventListener('input', function () { if (temClasse(nome.parentNode, 'campo--erro')) { validarNome(); } });
    tel.addEventListener('input', function () { if (temClasse(tel.parentNode, 'campo--erro')) { validarTelefone(); } });
    assunto.addEventListener('change', validarAssunto);

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var okNome = validarNome();
      var okTel = validarTelefone();
      var okAssunto = validarAssunto();
      if (!okNome) { nome.focus(); return; }
      if (!okTel) { tel.focus(); return; }
      if (!okAssunto) { assunto.focus(); return; }

      var textoAssunto = assunto.options[assunto.selectedIndex].value || assunto.options[assunto.selectedIndex].text;
      var mensagem = EMPRESA.mensagemBase + '\n\n' +
        'Nome: ' + nome.value.replace(/^\s+|\s+$/g, '') + '\n' +
        'Telefone: ' + tel.value.replace(/^\s+|\s+$/g, '') + '\n' +
        'Assunto: ' + textoAssunto;
      var url = ligacaoWhatsApp(mensagem);

      if (estado) { estado.textContent = 'A abrir o WhatsApp com a sua mensagem. Só tem de carregar em enviar.'; }
      var nova = window.open(url, '_blank');
      if (!nova) { window.location.href = url; }
    });
  }


  /* -------------------------------------------------------------------
     GALERIA E VISUALIZADOR
     Só aparece quando pelo menos uma fotografia carrega.
     ------------------------------------------------------------------- */
  var galeria = { fotos: [], filtro: 'todas', temporizador: null, visiveis: [], indice: 0, entrada: null };

  function prepararGaleria() {
    var mosaico = $('#mosaico');
    if (!mosaico) { return; }

    paraCada(edicoes, function (e) {
      paraCada(e.galeria, function (src, j) {
        if (!temValor(src)) { return; }
        galeria.fotos.push({
          src: src,
          alt: 'Fotografia ' + (j + 1) + ' da ' + ordinal(e.numero) + ' edição: ' + e.titulo,
          legenda: e.titulo + ' (' + ordinal(e.numero) + ' edição)',
          edicao: String(e.numero),
          titulo: e.titulo,
          ok: false,
          el: null
        });
      });
    });
    if (!galeria.fotos.length) { return; }

    paraCada(galeria.fotos, function (foto, indice) {
      var fig = document.createElement('figure');
      fig.className = 'mosaico__item a-carregar';
      fig.setAttribute('data-edicao', foto.edicao);

      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'mosaico__botao';
      botao.setAttribute('data-foto', String(indice));
      botao.setAttribute('aria-label', 'Abrir em ecrã inteiro: ' + foto.alt);

      var img = document.createElement('img');
      img.alt = foto.alt;
      img.onload = function () {
        foto.ok = true;
        remClasse(fig, 'a-carregar');
        agendarGaleria();
      };
      img.onerror = function () {
        if (fig.parentNode) { fig.parentNode.removeChild(fig); }
        agendarGaleria();
      };

      botao.appendChild(img);
      fig.appendChild(botao);
      mosaico.appendChild(fig);
      foto.el = fig;
      img.src = foto.src;
    });
  }

  function agendarGaleria() {
    if (galeria.temporizador) { window.clearTimeout(galeria.temporizador); }
    galeria.temporizador = window.setTimeout(actualizarGaleria, 60);
  }

  function actualizarGaleria() {
    var seccao = $('#galeria');
    var filtros = $('#filtros');
    var contagem = {};
    var total = 0;
    paraCada(galeria.fotos, function (f) {
      if (f.ok) { total++; contagem[f.edicao] = (contagem[f.edicao] || 0) + 1; }
    });

    if (!total) {
      esconder(seccao);
      paraCada($$('[data-menu="galeria"]'), esconder);
      return;
    }
    mostrar(seccao);
    paraCada($$('[data-menu="galeria"]'), mostrar);

    /* Botões "Ver fotografias" nos cartões */
    paraCada($$('[data-ver-fotos]'), function (b) {
      if (contagem[b.getAttribute('data-ver-fotos')]) { mostrar(b); } else { esconder(b); }
    });

    /* Filtros: só fazem sentido com fotografias de duas edições ou mais */
    var comFotos = [];
    paraCada(edicoes, function (e) { if (contagem[String(e.numero)]) { comFotos.push(e); } });
    if (filtros) {
      if (comFotos.length < 2) {
        esconder(filtros);
        galeria.filtro = 'todas';
      } else {
        var h = '<button type="button" class="filtro" data-filtro="todas" aria-pressed="' + (galeria.filtro === 'todas') + '">Todas (' + total + ')</button>';
        paraCada(comFotos, function (e) {
          var n = String(e.numero);
          h += '<button type="button" class="filtro" data-filtro="' + n + '" aria-pressed="' + (galeria.filtro === n) + '">' + escapar(e.titulo) + ' (' + contagem[n] + ')</button>';
        });
        filtros.innerHTML = h;
        mostrar(filtros);
      }
    }
    aplicarFiltro(galeria.filtro);
  }

  function aplicarFiltro(valor) {
    galeria.filtro = valor;
    paraCada(galeria.fotos, function (f) {
      if (!f.el) { return; }
      if (valor === 'todas' || f.edicao === valor) { remClasse(f.el, 'filtrado'); } else { addClasse(f.el, 'filtrado'); }
    });
    paraCada($$('[data-filtro]'), function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filtro') === valor ? 'true' : 'false'); });
  }

  function fotosVisiveis() {
    var r = [];
    paraCada(galeria.fotos, function (f) { if (f.ok && (galeria.filtro === 'todas' || f.edicao === galeria.filtro)) { r.push(f); } });
    return r;
  }

  function mostrarFoto(i) {
    var lista3 = galeria.visiveis;
    if (!lista3.length) { return; }
    galeria.indice = (i + lista3.length) % lista3.length;
    var f = lista3[galeria.indice];
    var img = $('#visor-img');
    var legenda = $('#visor-legenda');
    var contador = $('#visor-contador');
    if (!img) { return; }
    addClasse(img, 'a-trocar');
    window.setTimeout(function () {
      img.onload = function () { remClasse(img, 'a-trocar'); };
      img.src = f.src;
      img.alt = f.alt;
      if (img.complete) { remClasse(img, 'a-trocar'); }
    }, movimentoReduzido ? 0 : 120);
    if (legenda) { legenda.textContent = f.legenda; }
    if (contador) { contador.textContent = (galeria.indice + 1) + ' de ' + lista3.length; }
  }

  function abrirVisor(indiceGlobal) {
    var visor = $('#visor');
    if (!visor) { return; }
    galeria.visiveis = fotosVisiveis();
    var alvo = galeria.fotos[indiceGlobal];
    var pos = galeria.visiveis.indexOf(alvo);
    galeria.entrada = { contentor: visor, fechar: fecharVisor, setas: function (d) { mostrarFoto(galeria.indice + d); } };
    mostrarFoto(pos < 0 ? 0 : pos);
    abrirJanela(visor, 'visor--aberto', galeria.entrada);
  }

  function fecharVisor() {
    var visor = $('#visor');
    if (visor && galeria.entrada) { fecharJanela(visor, 'visor--aberto', galeria.entrada); galeria.entrada = null; }
  }

  function iniciarVisor() {
    var visor = $('#visor');
    if (!visor) { return; }
    /* Deslizar o dedo para mudar de fotografia */
    var inicioX = null;
    visor.addEventListener('touchstart', function (ev) { inicioX = ev.touches[0].clientX; }, false);
    visor.addEventListener('touchend', function (ev) {
      if (inicioX === null) { return; }
      var dx = ev.changedTouches[0].clientX - inicioX;
      if (Math.abs(dx) > 50) { mostrarFoto(galeria.indice + (dx < 0 ? 1 : -1)); }
      inicioX = null;
    }, false);
  }


  /* -------------------------------------------------------------------
     TESTEMUNHOS: carrossel com avanço de 6 em 6 segundos
     Pára de vez assim que a pessoa mexe nele.
     ------------------------------------------------------------------- */
  var carrossel = { indice: 0, total: 0, temporizador: null };

  function prepararTestemunhos() {
    var seccao = $('#testemunhos');
    var pista = $('#carrossel-pista');
    var pontos = $('#carrossel-pontos');
    var controlos = $('#carrossel-controlos');
    var raiz = $('#carrossel');
    var janela = $('#carrossel-janela');
    if (!seccao || !pista) { return; }

    var vozes = [];
    paraCada(edicoes, function (e) {
      paraCada(e.vozes, function (v) {
        if (v && temValor(v.texto)) { vozes.push({ texto: v.texto, nome: v.nome, origem: v.origem, curso: e.titulo }); }
      });
    });
    if (!vozes.length) { return; }

    var h = '';
    var hp = '';
    paraCada(vozes, function (v, i) {
      var origem = [];
      if (temValor(v.origem)) { origem.push(escapar(v.origem)); }
      origem.push(escapar(v.curso));
      h += '<figure class="testemunho" role="group" aria-roledescription="testemunho" aria-label="' + (i + 1) + ' de ' + vozes.length + '">' +
        '<blockquote class="testemunho__texto"><p>' + escapar(v.texto) + '</p></blockquote>' +
        '<figcaption class="testemunho__autor">' + escapar(v.nome || 'Formando') + '<span class="testemunho__origem">' + origem.join(', ') + '</span></figcaption></figure>';
      hp += '<button type="button" class="ponto" data-ponto="' + i + '" aria-label="Ver testemunho ' + (i + 1) + ' de ' + vozes.length + '"></button>';
    });
    pista.innerHTML = h;
    if (pontos) { pontos.innerHTML = hp; }
    carrossel.total = vozes.length;

    mostrar(seccao);
    paraCada($$('[data-menu="testemunhos"]'), mostrar);

    if (carrossel.total < 2) { esconder(controlos); irTestemunho(0); return; }
    irTestemunho(0);

    function pararDeVez() {
      if (carrossel.temporizador) { window.clearInterval(carrossel.temporizador); carrossel.temporizador = null; }
      if (janela) { janela.setAttribute('aria-live', 'polite'); }
    }
    paraCada(['click', 'touchstart', 'keydown', 'focus'], function (tipo) {
      raiz.addEventListener(tipo, pararDeVez, tipo === 'focus');
    });

    if (!movimentoReduzido) {
      carrossel.temporizador = window.setInterval(function () { irTestemunho(carrossel.indice + 1); }, 6000);
    }

    /* Deslizar o dedo */
    var inicioX = null;
    pista.addEventListener('touchstart', function (ev) { inicioX = ev.touches[0].clientX; }, false);
    pista.addEventListener('touchend', function (ev) {
      if (inicioX === null) { return; }
      var dx = ev.changedTouches[0].clientX - inicioX;
      if (Math.abs(dx) > 50) { irTestemunho(carrossel.indice + (dx < 0 ? 1 : -1)); }
      inicioX = null;
    }, false);
  }

  function irTestemunho(n) {
    var pista = $('#carrossel-pista');
    if (!pista || !carrossel.total) { return; }
    carrossel.indice = (n + carrossel.total) % carrossel.total;
    transformar(pista, 'translateX(' + (-100 * carrossel.indice) + '%)');
    paraCada($$('.testemunho', pista), function (t, i) {
      if (i === carrossel.indice) { t.removeAttribute('aria-hidden'); } else { t.setAttribute('aria-hidden', 'true'); }
    });
    paraCada($$('[data-ponto]'), function (p, i) {
      if (i === carrossel.indice) { p.setAttribute('aria-current', 'true'); } else { p.removeAttribute('aria-current'); }
    });
  }


  /* -------------------------------------------------------------------
     CLIQUES (um só ouvinte para todos os botões dinâmicos)
     ------------------------------------------------------------------- */
  function iniciarCliques() {
    document.addEventListener('click', function (ev) {
      var r = subirAte(ev.target, ['data-programa', 'data-inscrever', 'data-ver-fotos', 'data-assunto', 'data-fechar',
        'data-visor', 'data-foto', 'data-filtro', 'data-carrossel', 'data-ponto', 'aria-controls']);
      if (!r) { return; }
      var el = r.el;
      var v = el.getAttribute(r.atributo);

      if (r.atributo === 'data-programa') { abrirPrograma(v); }
      else if (r.atributo === 'data-inscrever') { escolherAssunto('edicao', v); irParaFormulario(); }
      else if (r.atributo === 'data-assunto') { ev.preventDefault(); escolherAssunto('aviso'); irParaFormulario(); }
      else if (r.atributo === 'data-ver-fotos') { aplicarFiltro(v); irPara($('#galeria')); }
      else if (r.atributo === 'data-fechar') {
        if (subirAte(el, ['aria-modal']) && subirAte(el, ['aria-modal']).el.id === 'visor') { fecharVisor(); } else { fecharPrograma(); }
      }
      else if (r.atributo === 'data-visor') { mostrarFoto(galeria.indice + parseInt(v, 10)); }
      else if (r.atributo === 'data-foto') { abrirVisor(parseInt(v, 10)); }
      else if (r.atributo === 'data-filtro') { aplicarFiltro(v); }
      else if (r.atributo === 'data-carrossel') { irTestemunho(carrossel.indice + parseInt(v, 10)); }
      else if (r.atributo === 'data-ponto') { irTestemunho(parseInt(v, 10)); }
      else if (r.atributo === 'aria-controls' && el.id && el.id.indexOf('faq-b') === 0) { alternarFaq(el); }
    });
  }


  /* -------------------------------------------------------------------
     REVELAÇÃO AO ROLAR E CONTADORES
     ------------------------------------------------------------------- */
  function registarRevelacao() {
    paraCada($$('.revelar'), function (el) {
      if (el.getAttribute('data-rev')) { return; }
      el.setAttribute('data-rev', '1');
      /* Desfasamento em cascata entre irmãos */
      var irmaos = 0;
      var anterior = el.previousElementSibling;
      while (anterior) { if (temClasse(anterior, 'revelar')) { irmaos++; } anterior = anterior.previousElementSibling; }
      var atraso = Math.min(irmaos, 5) * 80;
      if (atraso && !movimentoReduzido) {
        el.style.webkitTransitionDelay = atraso + 'ms';
        el.style.transitionDelay = atraso + 'ms';
      }
      pendentesRevelar.push(el);
    });
  }

  function revelar(el) {
    addClasse(el, 'visivel');
    paraCada($$('.contador', el), contar);
    /* Depois de aparecer, tira o atraso para não atrasar o efeito ao passar o rato */
    window.setTimeout(function () { el.style.webkitTransitionDelay = ''; el.style.transitionDelay = ''; }, 1100);
  }

  function actualizarRevelacao(vh) {
    if (!pendentesRevelar.length) { return; }
    var restantes = [];
    paraCada(pendentesRevelar, function (el) {
      var r = el.getBoundingClientRect();
      if (movimentoReduzido || r.top < vh * 0.92) { revelar(el); } else { restantes.push(el); }
    });
    pendentesRevelar = restantes;
  }

  function contar(el) {
    if (el.getAttribute('data-contado')) { return; }
    el.setAttribute('data-contado', '1');
    var alvo = parseInt(el.getAttribute('data-alvo'), 10);
    if (isNaN(alvo)) { return; }
    if (movimentoReduzido) { el.textContent = alvo; return; }
    var inicio = agora();
    var duracao = 600;
    el.textContent = '0';
    function quadro() {
      var p = Math.min((agora() - inicio) / duracao, 1);
      var suave = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(alvo * suave);
      if (p < 1) { pedirQuadro(quadro); }
    }
    pedirQuadro(quadro);
  }

  /* Rede de segurança: se algo correr mal, mostra tudo */
  function mostrarTudo() {
    paraCada($$('.revelar'), function (el) { addClasse(el, 'visivel'); });
  }


  /* -------------------------------------------------------------------
     ROLAGEM: um único ouvinte, limitado por requestAnimationFrame
     ------------------------------------------------------------------- */
  var rolagem = { agendada: false };
  var elementos = {};

  function aoRolar() {
    if (rolagem.agendada) { return; }
    rolagem.agendada = true;
    pedirQuadro(tratarRolagem);
  }

  function tratarRolagem() {
    rolagem.agendada = false;
    var y = rolagemY();
    var vh = alturaJanela();
    try { actualizarBarra(y); } catch (e1) {}
    try { actualizarRevelacao(vh); } catch (e2) { mostrarTudo(); }
    try { actualizarProcesso(vh); } catch (e3) {}
    try { actualizarMenuActivo(); } catch (e4) {}
    try { actualizarFlutuante(y, vh); } catch (e5) {}
  }

  function actualizarBarra(y) {
    if (!elementos.topo) { return; }
    if (y > 30) { addClasse(elementos.topo, 'topo--compacta'); } else { remClasse(elementos.topo, 'topo--compacta'); }
  }

  /* Linha do processo que se desenha à medida que se desce */
  function actualizarProcesso(vh) {
    var linha = elementos.linha;
    var caixa = elementos.passos;
    if (!linha || !caixa) { return; }
    var r = caixa.getBoundingClientRect();
    var progresso = (vh * 0.75 - r.top) / (r.height * 0.9 || 1);
    if (movimentoReduzido) { progresso = 1; }
    progresso = Math.max(0, Math.min(1, progresso));
    var horizontal = larguraJanela() > LARGURA_MENU;
    transformar(linha, horizontal ? 'scaleX(' + progresso + ')' : 'scaleY(' + progresso + ')');

    var passos = $$('.passo', caixa);
    paraCada(passos, function (p, i) {
      var limite = passos.length > 1 ? i / (passos.length - 1) : 0;
      if (progresso >= limite - 0.02 && progresso > 0) { addClasse(p, 'passo--activo'); } else { remClasse(p, 'passo--activo'); }
    });
  }

  /* Sublinhado do menu na secção onde a pessoa está */
  function actualizarMenuActivo() {
    var ligacoes = $$('.menu a[href^="#"]');
    var actual = null;
    paraCada(ligacoes, function (a) {
      var li = a.parentNode;
      if (li && li.hasAttribute('hidden')) { return; }
      var seccao = document.getElementById(a.getAttribute('href').slice(1));
      if (!seccao || seccao.hasAttribute('hidden')) { return; }
      if (seccao.getBoundingClientRect().top <= 120) { actual = a; }
    });
    paraCada(ligacoes, function (a) {
      if (a === actual) { addClasse(a, 'activo'); a.setAttribute('aria-current', 'location'); }
      else { remClasse(a, 'activo'); a.removeAttribute('aria-current'); }
    });
  }

  /* Botão flutuante a partir de 30% da página */
  function actualizarFlutuante(y, vh) {
    var b = elementos.flutuante;
    if (!b) { return; }
    var maximo = Math.max(document.body.scrollHeight, html.scrollHeight) - vh;
    var fraccao = maximo > 0 ? y / maximo : 0;
    if (fraccao >= 0.3) { addClasse(b, 'flutuante--visivel'); } else { remClasse(b, 'flutuante--visivel'); }
  }

  function iniciarRolagem() {
    elementos.topo = $('#topo');
    elementos.linha = $('#linha-processo');
    elementos.passos = $('.passos-caixa');
    elementos.flutuante = $('#flutuante');
    window.addEventListener('scroll', aoRolar, false);
    window.addEventListener('resize', aoRolar, false);
    tratarRolagem();
  }


  /* -------------------------------------------------------------------
     ARRANQUE, passo a passo
     ------------------------------------------------------------------- */
  function arrancar() {
    passo('edições', prepararEdicoes);
    passo('contactos', renderContactos);
    passo('compromissos', renderCompromissos);
    passo('áreas', renderAreas);
    passo('processo', renderProcesso);
    passo('motivos', renderMotivos);
    passo('perguntas', renderFaq);
    passo('cartões das edições', renderEdicoes);
    passo('assuntos do formulário', renderAssuntos);
    passo('dados estruturados', dadosEstruturadosCursos);
    passo('teclado', iniciarTeclado);
    passo('menu', iniciarMenu);
    passo('cliques', iniciarCliques);
    passo('formulário', iniciarFormulario);
    passo('galeria', prepararGaleria);
    passo('visualizador', iniciarVisor);
    passo('testemunhos', prepararTestemunhos);
    passo('ano do rodapé', function () {
      var ano = $('#ano');
      if (ano) { ano.textContent = new Date().getFullYear(); }
    });
    passo('revelação', function () {
      registarRevelacao();
      arranqueOk = true;
    });
    passo('rolagem', iniciarRolagem);
    if (!arranqueOk) { mostrarTudo(); }
  }

  /* Se, por qualquer razão, a revelação não arrancar em 3 segundos,
     tira a classe "js" e a página aparece toda */
  window.setTimeout(function () {
    if (!arranqueOk) { html.className = html.className.replace(/(^|\s)js(\s|$)/, ' '); }
  }, 3000);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar, false);
  } else {
    arrancar();
  }
})();
