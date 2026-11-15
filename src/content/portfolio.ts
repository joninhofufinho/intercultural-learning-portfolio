// Conteúdo do portefólio — edite aqui os textos de cada secção.
import capa from "@/assets/capa.jpg";
import leiturasImg from "@/assets/leituras.jpg";
import paresImg from "@/assets/pares.jpg";
import pesquisaImg from "@/assets/pesquisa.jpg";
import grupoImg from "@/assets/grupo.jpg";
import reflexaoImg from "@/assets/reflexao.jpg";

export const images = { capa, leiturasImg, paresImg, pesquisaImg, grupoImg, reflexaoImg };

export const info = {
  titulo: "Portefólio de Educação Intercultural",
  subtitulo: "Leituras, trabalhos e reflexões sobre a diversidade na escola",
  estudante: "Nome do Estudante",
  numero: "N.º 00000",
  curso: "Licenciatura em Educação Básica",
  instituicao: "Escola Superior de Educação",
  unidadeCurricular: "Educação Intercultural",
  docente: "Prof.ª Doutora Nome da Docente",
  anoLetivo: "2026/2027",
  semestre: "1.º semestre",
  local: "Lisboa",
  data: "novembro de 2026",
};

export type SectionPath =
  | "/leituras"
  | "/trabalho-pares"
  | "/trabalho-pesquisa"
  | "/trabalho-grupo"
  | "/reflexao";

export const sections: {
  to: SectionPath;
  numero: string;
  titulo: string;
  resumo: string;
  imagem: string;
}[] = [
  {
    to: "/leituras",
    numero: "01",
    titulo: "Leituras das Aulas",
    resumo: "Sínteses e comentários críticos aos textos trabalhados em cada sessão.",
    imagem: leiturasImg,
  },
  {
    to: "/trabalho-pares",
    numero: "02",
    titulo: "Trabalho a Pares",
    resumo: "Análise conjunta de uma situação de diversidade cultural em contexto escolar.",
    imagem: paresImg,
  },
  {
    to: "/trabalho-pesquisa",
    numero: "03",
    titulo: "Trabalho de Pesquisa",
    resumo: "Investigação individual sobre práticas de inclusão de alunos migrantes.",
    imagem: pesquisaImg,
  },
  {
    to: "/trabalho-grupo",
    numero: "04",
    titulo: "Trabalho de Grupo",
    resumo: "Projeto colaborativo: uma proposta de atividade intercultural para a sala de aula.",
    imagem: grupoImg,
  },
  {
    to: "/reflexao",
    numero: "05",
    titulo: "Reflexão",
    resumo: "Balanço pessoal do percurso, aprendizagens e desafios futuros.",
    imagem: reflexaoImg,
  },
];

export const fotosPartida = [
  { src: capa, legenda: "Mãos que se encontram — o ponto de partida da unidade curricular." },
  { src: grupoImg, legenda: "Primeira sessão: mapear as nossas origens." },
  { src: leiturasImg, legenda: "Os primeiros textos e as primeiras perguntas." },
];

export const referenciasUC = [
  "Abdallah-Pretceille, M. (2001). La educación intercultural. Idea Books.",
  "Banks, J. A. (2016). Cultural diversity and education: Foundations, curriculum, and teaching (6.ª ed.). Routledge.",
  "Candau, V. M. (2008). Direitos humanos, educação e interculturalidade: As tensões entre igualdade e diferença. Revista Brasileira de Educação, 13(37), 45–56.",
  "Cardoso, C. (1996). Educação multicultural: Percursos para práticas reflexivas. Texto Editora.",
  "Freire, P. (1970/2018). Pedagogia do oprimido. Paz e Terra.",
  "Ouellet, F. (1991). L'éducation interculturelle: Essai sur le contenu de la formation des maîtres. L'Harmattan.",
  "Peres, A. N. (2000). Educação intercultural: Utopia ou realidade? Profedições.",
  "Perotti, A. (1997). Apologia do intercultural. Secretariado Coordenador dos Programas de Educação Multicultural.",
];

export const leituras = [
  {
    sessao: "Aula 1",
    data: "16 set.",
    autor: "Peres, A. N. (2000)",
    titulo: "Educação intercultural: Utopia ou realidade?",
    ideias: [
      "Distinção entre multiculturalidade (facto) e interculturalidade (projeto).",
      "A escola como espaço de encontro e não apenas de coexistência.",
    ],
    comentario:
      "Este texto obrigou-me a repensar a ideia de que basta 'juntar' culturas diferentes na mesma sala. A interculturalidade exige intenção pedagógica, diálogo e reciprocidade.",
  },
  {
    sessao: "Aula 2",
    data: "23 set.",
    autor: "Perotti, A. (1997)",
    titulo: "Apologia do intercultural",
    ideias: [
      "O intercultural como resposta ética e política à diversidade.",
      "Crítica às abordagens folclóricas da cultura.",
    ],
    comentario:
      "Reconheci práticas que já observei em estágio — a 'semana das culturas' — que, embora bem-intencionadas, reduzem a cultura a gastronomia e trajes.",
  },
  {
    sessao: "Aula 3",
    data: "30 set.",
    autor: "Cardoso, C. (1996)",
    titulo: "Educação multicultural: Percursos para práticas reflexivas",
    ideias: [
      "O professor reflexivo face aos seus próprios preconceitos.",
      "Currículo oculto e expectativas diferenciadas.",
    ],
    comentario:
      "A leitura mais pessoal até agora: fez-me identificar estereótipos que trago comigo e que podem condicionar o modo como olho para os alunos.",
  },
  {
    sessao: "Aula 4",
    data: "7 out.",
    autor: "Banks, J. A. (2016)",
    titulo: "As cinco dimensões da educação multicultural",
    ideias: [
      "Integração de conteúdos, construção do conhecimento, redução do preconceito, pedagogia da equidade e cultura escolar.",
    ],
    comentario:
      "O modelo de Banks dá uma grelha prática para avaliar projetos escolares. Usei-o mais tarde no trabalho de grupo.",
  },
  {
    sessao: "Aula 5",
    data: "14 out.",
    autor: "Freire, P. (1970)",
    titulo: "Pedagogia do oprimido (excertos)",
    ideias: ["Educação bancária vs. educação problematizadora.", "Diálogo como condição de libertação."],
    comentario:
      "Freire lembra que não há interculturalidade sem escuta verdadeira — o aluno não é um recipiente, é um sujeito com história.",
  },
];

export const trabalhoPares = {
  titulo: "Entre duas línguas: o caso da Amina",
  elementos: ["Nome do Estudante", "Nome do Colega"],
  data: "outubro de 2026",
  objetivo:
    "Analisar um estudo de caso de uma aluna recém-chegada a uma escola do 1.º ciclo e propor estratégias de acolhimento à luz das leituras da unidade curricular.",
  desenvolvimento: [
    "Partimos de um caso apresentado em aula: a Amina, 8 anos, chegou de Marrocos a meio do ano letivo e fala pouco português. A professora titular descreve-a como 'muito calada' e 'com dificuldades'.",
    "Discutimos em conjunto de que forma a leitura de Cardoso (1996) sobre expectativas diferenciadas ajuda a perceber que o silêncio da Amina pode ser lido como um défice ou como uma fase natural de adaptação linguística.",
    "Construímos uma proposta com três eixos: valorização da língua materna, tutoria entre pares e envolvimento da família através de um mediador cultural.",
  ],
  estrategias: [
    "Cantinho das línguas na sala, com palavras em árabe, português e outras línguas da turma.",
    "Sistema de 'colega-guia' rotativo nas primeiras semanas.",
    "Reunião com a família mediada, num horário compatível.",
  ],
  aprendizagens:
    "Trabalhar a pares obrigou-nos a negociar perspetivas: o meu colega tinha uma visão mais centrada na língua, eu na relação. A proposta final ficou mais rica por integrar as duas.",
};

export const trabalhoPesquisa = {
  titulo: "Acolher alunos migrantes no 1.º ciclo: práticas e desafios em escolas de Lisboa",
  data: "novembro de 2026",
  pergunta:
    "Que práticas de acolhimento são utilizadas por professores do 1.º ciclo com alunos recém-chegados de outros países, e como são percecionadas pelos próprios professores?",
  metodologia: [
    { etapa: "Revisão de literatura", texto: "Leitura de documentos normativos (Perfil dos Alunos, PLNM) e de autores da UC." },
    { etapa: "Entrevistas", texto: "Três entrevistas semiestruturadas a professoras de escolas do concelho de Lisboa." },
    { etapa: "Análise", texto: "Análise de conteúdo temática, com categorias emergentes." },
  ],
  resultados: [
    "As professoras valorizam o acolhimento afetivo, mas sentem falta de formação específica.",
    "O Português Língua Não Materna (PLNM) é visto como essencial, mas com poucas horas disponíveis.",
    "A relação com as famílias é apontada como o maior desafio, sobretudo pela barreira linguística.",
  ],
  conclusao:
    "A pesquisa confirmou a distância entre o discurso intercultural e as condições reais das escolas. Ficou clara a importância de redes de apoio — mediadores, associações locais e trabalho colaborativo entre docentes.",
  referencias: [
    "Direção-Geral da Educação. (2017). Perfil dos alunos à saída da escolaridade obrigatória. Ministério da Educação.",
    "Peres, A. N. (2000). Educação intercultural: Utopia ou realidade? Profedições.",
  ],
};

export const trabalhoGrupo = {
  titulo: "Mapa das nossas histórias",
  subtitulo: "Proposta de projeto intercultural para uma turma do 3.º ano",
  elementos: ["Nome do Estudante", "Colega 2", "Colega 3", "Colega 4"],
  data: "novembro de 2026",
  descricao: [
    "O grupo desenhou um projeto de quatro semanas em que cada aluno investiga a história da sua família — de onde vieram, que línguas falam, que tradições guardam — e a partilha num grande mapa coletivo da turma.",
    "A proposta foi analisada à luz das cinco dimensões de Banks (2016), garantindo que não se ficava pela integração de conteúdos, mas chegava à redução do preconceito e à transformação da cultura escolar.",
  ],
  fases: [
    { semana: "Semana 1", titulo: "Quem sou eu?", texto: "Autorretratos e partilha de nomes e o seu significado." },
    { semana: "Semana 2", titulo: "De onde vimos", texto: "Entrevista a um familiar e recolha de objetos com história." },
    { semana: "Semana 3", titulo: "O nosso mapa", texto: "Construção do mapa coletivo com fios que ligam lugares e pessoas." },
    { semana: "Semana 4", titulo: "Abrir a porta", texto: "Exposição aberta às famílias, com contos em várias línguas." },
  ],
  papel:
    "Fui responsável pela fundamentação teórica e pela articulação com as Aprendizagens Essenciais de Estudo do Meio.",
};

export const reflexao = {
  citacao: {
    texto: "Ninguém educa ninguém, ninguém educa a si mesmo, os homens educam-se entre si, mediatizados pelo mundo.",
    autor: "Paulo Freire",
  },
  paragrafos: [
    "Quando comecei esta unidade curricular, pensava na interculturalidade como um tema — algo a 'tratar' em determinadas datas ou atividades. Ao longo do semestre, percebi que é sobretudo uma postura: um modo de olhar, escutar e organizar a sala de aula.",
    "As leituras deram-me linguagem para nomear coisas que já sentia, mas não sabia explicar. Os trabalhos práticos, sobretudo o trabalho a pares e o de grupo, mostraram-me que a diversidade também existe entre nós, futuros professores, e que negociar perspetivas é já um exercício intercultural.",
    "O maior desafio foi confrontar os meus próprios estereótipos. Não foi confortável, mas foi necessário. Saio com mais perguntas do que certezas — e parece-me que é esse o ponto de partida certo.",
  ],
  aprendizagens: [
    "Distinguir multicultural de intercultural.",
    "Reconhecer abordagens folclóricas e superá-las.",
    "Valorizar as línguas maternas dos alunos.",
    "Envolver as famílias como parceiras.",
  ],
  futuro:
    "Quero levar para o estágio o hábito de perguntar, antes de cada atividade: de quem é esta história? Quem fica de fora? Como posso abrir espaço para outras vozes?",
};
