// Conteúdo do portefólio — edite aqui os textos de cada secção.
import capa from "@/assets/capa.jpg";
import leiturasImg from "@/assets/leituras.jpg";
import paresImg from "@/assets/pares.jpg";
import pesquisaImg from "@/assets/pesquisa.jpg";
import grupoImg from "@/assets/grupo.jpg";
import reflexaoImg from "@/assets/reflexao.jpg";
import colagemAsset from "@/assets/wix/fotos-de-partida-colagem.jpg.asset.json";
import joniAsset from "@/assets/wix/joni-freitas.jpg.asset.json";
import cucheCapaAsset from "@/assets/wix/cuche-capa.jpg.asset.json";
import cuchePdfAsset from "@/assets/wix/cuche-a-nocao-de-cultura.pdf.asset.json";

export const images = { capa, leiturasImg, paresImg, pesquisaImg, grupoImg, reflexaoImg };

export const info = {
  titulo: "Entre leituras, reflexões, ideias e diálogos",
  subtitulo: "Um percurso de aprendizagem",
  estudante: "Joni Freitas",
  curso: "Mestrado em Educação e Formação",
  especializacao: "Desenvolvimento Social e Cultural",
  licenciatura: "Biorrecursos",
  instituicao: "Instituto de Educação da Universidade de Lisboa",
  unidadeCurricular: "Educação Intercultural e Mediação",
  docente: "Prof.ª Ana Paula Caetano",
  anoLetivo: "2026/27",
  local: "Lisboa",
  data: "novembro de 2026",
};

export const boasVindas = {
  titulo: "Bem-vindes ao meu portefólio!",
  texto:
    "Este espaço foi construído no âmbito da unidade curricular de Educação Intercultural e Mediação, lecionada pela professora Ana Paula Caetano, inserida no Mestrado em Educação e Formação, com especialização em Desenvolvimento Social e Cultural, no Instituto de Educação da Universidade de Lisboa, no ano letivo 2026/27.",
};

export const quemSouEu = {
  foto: joniAsset.url,
  nome: "Joni Freitas",
  bio: [
    "Sou uma pessoa não binária trans masc e queer, de 24 anos. Sou licenciado em Biorrecursos e encontro-me atualmente a frequentar o Mestrado em Educação e Formação.",
    "Apesar de ter iniciado o meu caminho académico em engenharia, acabei por redescobrir a minha vocação na educação. Percebi que tenho um grande gosto por partilhar conhecimento, despertar a curiosidade e contribuir para as aprendizagens dos outros.",
    "Fora do contexto académico e profissional, sou uma pessoa com interesses bastante diversos. Admiro particularmente a cultura drag e ballroom, espaços de expressão artística, criatividade, identidade e resistência. Também gosto de puzzles, matemática e xadrez, que alimentam o meu lado mais estratégico e desafiam o meu raciocínio. Sou apaixonado pela natureza e pelos animais.",
    "Gosto de questionar o mundo e desafiar as normas e expectativas sociais. Acredito que somos todos iguais em valor, mas únicos naquilo que somos.",
  ],
  citacao: {
    texto: "We are all born naked and the rest is drag.",
    autor: "RuPaul",
  },
};

export const fotosPartida = {
  src: colagemAsset.url,
  legenda: "Colagem de fotografias de partida: memórias, lugares, pessoas e causas que trago comigo.",
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

export const referenciasUC = [
  "Cuche, D. (2002). A noção de cultura nas ciências sociais (2.ª ed.). EDUSC.",
  "Abdallah-Pretceille, M. (2001). La educación intercultural. Idea Books.",
  "Banks, J. A. (2016). Cultural diversity and education: Foundations, curriculum, and teaching (6.ª ed.). Routledge.",
  "Candau, V. M. (2008). Direitos humanos, educação e interculturalidade: As tensões entre igualdade e diferença. Revista Brasileira de Educação, 13(37), 45–56.",
  "Cardoso, C. (1996). Educação multicultural: Percursos para práticas reflexivas. Texto Editora.",
  "Freire, P. (1970/2018). Pedagogia do oprimido. Paz e Terra.",
  "Ouellet, F. (1991). L'éducation interculturelle: Essai sur le contenu de la formation des maîtres. L'Harmattan.",
  "Peres, A. N. (2000). Educação intercultural: Utopia ou realidade? Profedições.",
  "Perotti, A. (1997). Apologia do intercultural. Secretariado Coordenador dos Programas de Educação Multicultural.",
];

export type Leitura = {
  sessao: string;
  data?: string;
  autor: string;
  titulo: string;
  editora?: string;
  capa?: string;
  pdf?: string;
  ideiasTitulo?: string;
  ideias: string[];
  comentario?: string;
};

export const leituras: Leitura[] = [
  {
    sessao: "Leitura 1",
    autor: "Cuche, Denys",
    titulo: "A noção de cultura nas ciências sociais",
    editora: "EDUSC · 2.ª edição",
    capa: cucheCapaAsset.url,
    pdf: cuchePdfAsset.url,
    ideiasTitulo: "Perguntas que o livro levanta",
    ideias: [
      "Se todo o ser humano é um ser cultural, como recebe a cultura do seu grupo e até que ponto o seu comportamento é por ela determinado?",
      "Um mesmo indivíduo pode mudar de cultura ou participar simultaneamente de várias culturas?",
      "Como se dá o encontro das culturas?",
      "As culturas dos grupos socialmente dominados estão destinadas a desaparecer ou a imitar as culturas dos grupos dominantes?",
    ],
  },
];

export const trabalhoPares = {
  titulo: "Entre duas línguas: o caso da Amina",
  elementos: ["Joni Freitas", "Nome do Colega"],
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
  elementos: ["Joni Freitas", "Colega 2", "Colega 3", "Colega 4"],
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
    "As leituras deram-me linguagem para nomear coisas que já sentia, mas não sabia explicar. Os trabalhos práticos, sobretudo o trabalho a pares e o de grupo, mostraram-me que a diversidade também existe entre nós, estudantes, e que negociar perspetivas é já um exercício intercultural.",
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
