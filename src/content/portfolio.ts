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
import sintesePdfAsset from "@/assets/wix/sintese-cuche.pdf.asset.json";
import teoriaDaEducacaoPaginasAsset from "@/assets/teoria-da-educacao-paginas.png.asset.json";
import cambridgeHandbookAsset from "@/assets/cambridge-handbook-acculturation.png.asset.json";
import sinteseSamBerryAsset from "@/assets/sintese-sam-berry.pdf.asset.json";
import candauArtigoAsset from "@/assets/candau-2020-artigo.png.asset.json";

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
  texto: [
    "Este espaço foi construído no âmbito da unidade curricular de Educação Intercultural e Mediação, lecionada pela professora Ana Paula Caetano, inserida no Mestrado em Educação e Formação, com especialização em Desenvolvimento Social e Cultural, no Instituto de Educação da Universidade de Lisboa, no ano letivo 2026/27.",
    "Aqui apresento de forma detalhada e reflexiva todo o trabalho desenvolvido na UC, que inclui elementos das leituras reflexivas de textos trabalhados em aula, apresentações do trabalho a pares a realizar no início da UC, reflexão sobre trabalho de grupo de apresentação de investigação, realizado em aula, e uma reflexão global, nomeadamente sobre os processos educativos e aprendizagens.",
  ],
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

export type ReflexaoBloco =
  | { tipo: "p"; texto: string }
  | { tipo: "citacao"; texto: string; autor: string };

export type Leitura = {
  sessao: string;
  data?: string;
  autor: string;
  titulo: string;
  editora?: string;
  capa?: string;
  pdf?: string;
  pdfEtiqueta?: string;
  ideiasTitulo?: string;
  ideias: string[];
  imagem?: string;
  imagemLegenda?: string;
  reflexao?: { titulo: string; blocos: ReflexaoBloco[] };
  comentario?: string;
};

export const leituras: Leitura[] = [
  {
    sessao: "Leitura 1",
    autor: "Cuche, Denys",
    titulo: "A noção de cultura nas ciências sociais",
    editora: "Capítulo 3",
    capa: cucheCapaAsset.url,
    pdf: sintesePdfAsset.url,
    ideiasTitulo: "ALGUMAS PERGUNTAS QUE O CAPÍTULO LEVANTA:",
    ideias: [
      "Se todo o ser humano é um ser cultural, como recebe a cultura do seu grupo e até que ponto o seu comportamento é por ela determinado?",
      "Um mesmo indivíduo pode mudar de cultura ou participar simultaneamente de várias culturas?",
      "Como se dá o encontro das culturas?",
      "As culturas dos grupos socialmente dominados estão destinadas a desaparecer ou a imitar as culturas dos grupos dominantes?",
    ],
    reflexao: {
      titulo: "Reflexão",
      blocos: [
        {
          tipo: "p",
          texto:
            "A palavra cultura tem origem no latim culturae e deriva do verbo colere, que significa «ação de tratar» e «cultivar», tendo posteriormente adquirido um sentido mais figurado, referindo-se ao «cultivo» da mente, do conhecimento e das capacidades humanas.",
        },
        {
          tipo: "p",
          texto:
            "A cultura está diretamente relacionada a mais do que uma área (educação, psicologia, sociologia, antropologia, etc.). As ciências sociais têm tido um papel central na definição deste termo e na formulação de teorias à volta dele.",
        },
        {
          tipo: "p",
          texto:
            "Afirmar que a cultura teve origem nos EUA é bastante redutor. Sendo a cultura associada à diversidade de grupos, hábitos, crenças e simbologia diferentes, a origem da cultura remonta a muitos anos atrás, muito antes do séc. XIX, quando a antropologia americana começou o estudo deste conceito — ainda por cima quando algumas nações europeias já tentavam pintar um retrato da cultura muito antes.",
        },
        {
          tipo: "p",
          texto:
            "No século XVIII, segundo Cuche, a «cultura» era sempre citada no singular, refletindo o universalismo e o humanismo do pensamento filosófico europeu: a cultura é própria do Homem. Falar em cultura no singular é limitante, especialmente perante tamanha diversidade de grupos de indivíduos.",
        },
        {
          tipo: "citacao",
          texto: "Por natureza, todos os homens são iguais. São os seus hábitos que os separam.",
          autor: "Confúcio",
        },
        {
          tipo: "p",
          texto:
            "É possível conciliar os dois conceitos se ligarmos o universalismo à biologia. Todo o ser humano tem um antepassado comum, o que nos deixa ao mesmo nível: não existem culturas superiores a outras. Esta visão anti-racista é compatível com o relativismo cultural de Franz Boas, apesar de este defender um pensamento particularista, segundo o qual cada cultura tem os seus elementos. Apresenta um pensamento muito à frente do seu tempo, tendo em conta que foi contemporâneo de uma época de bastantes conflitos de origem racial na Europa e no mundo.",
        },
        {
          tipo: "p",
          texto:
            "Imaginemos uma família brasileira que imigrou para Portugal e mantém o hábito de celebrar o Carnaval. Segundo o particularismo, o Carnaval é uma prática cultural brasileira, ligada à história e às tradições daquela sociedade. Já a interpretação universalista reconhece que a celebração está relacionada com necessidades humanas comuns, como reunir a comunidade e festejar. Estas duas vertentes são conciliáveis e ainda permitem debater a adaptação a diferentes culturas e o difusionismo.",
        },
        {
          tipo: "p",
          texto:
            "O difusionismo acaba por implicar que culturas geograficamente mais próximas são mais semelhantes por terem um contacto direto, porém o exemplo do Carnaval, que é celebrado em Portugal e no Brasil, apresenta um contra-argumento. Estes países apresentam muitas semelhanças culturais, ainda que separados por um oceano.",
        },
        {
          tipo: "p",
          texto:
            "No artigo de leitura facultativa, a cultura é apresentada como metáfora de água e ar. A cultura é como a água para um peixe ou como o ar que respiramos: está sempre à nossa volta, não nos damos conta da sua presença, mas ela influencia a nossa forma de agir, comunicar e pensar. Só quando estabelecemos contacto com pessoas com referências culturais diferentes ou mudamos de ambiente é que percebemos melhor a cultura que nos rodeia.",
        },
        {
          tipo: "p",
          texto:
            "Os empréstimos culturais ultrapassam fronteiras, até porque as próprias culturas o fazem. Dentro de fronteiras e dentro de cada indivíduo existem inúmeras culturas. Porque é que as culturas adotam elementos de outras culturas? Os empréstimos culturais enriquecem ou ameaçam a identidade cultural de uma sociedade? Porquê? Qual é a diferença entre empréstimo cultural e apropriação cultural? Quando uma prática cultural é adotada por outra sociedade, mantém o mesmo significado? Se todas as culturas estão constantemente a mudar através do contacto com outras culturas, até que ponto podemos falar em identidade cultural?",
        },
        {
          tipo: "p",
          texto:
            "Boas oferece uma resposta: um elemento emprestado não é simplesmente copiado — pode ser transformado, adaptado e recriado pela cultura que o recebe, distinguindo-se da apropriação por haver respeito mútuo como base desta troca. A meu ver, cada indivíduo é uma área cultural. Todos temos um core, um centro culturalmente estático onde definimos os nossos valores, identidade e cultura, mas somos sujeitos a mudanças à nossa volta que enriquecem a nossa perspetiva do que nos rodeia.",
        },
        {
          tipo: "p",
          texto:
            "Todavia, estar em contacto com outras culturas também não implica necessariamente absorvê-las. Quando as pessoas imigram, é muito mais comum procurarem uma comunidade com uma cultura mais parecida com a sua cultura de origem do que procederem a uma integração. Vivemos numa bolha cultural, que é um lugar de conforto. Será que somos tão mutáveis como a própria cultura? Por que oferecemos resistência à integração, ainda que subconsciente? Acredito que a resposta está presente numa espécie de egocentrismo cultural.",
        },
        {
          tipo: "p",
          texto:
            "Esta forma de egocentrismo é bastante compatível com o funcionalismo, que diz que uma cultura se desenvolve em torno de uma função, sendo mais fechada à mudança. Existem culturas associadas ao clima, como a cultura da vodka na Rússia, que se desenvolveu como resposta a uma necessidade. Uma pessoa que emigre do Brasil para a Rússia terá de mudar esse aspeto da sua cultura para responder a esta mudança externa. No entanto, a resposta a mudanças internas é uma limitação do funcionalismo e, na minha opinião, também deste egocentrismo cultural.",
        },
        {
          tipo: "p",
          texto:
            "Ruth Benedict defendia os modelos culturais, mas não me parece pertinente meter culturas em caixas, até porque acredito que um indivíduo contém uma pluralidade de culturas. Porém, reconheço que a pluralidade dessas culturas influencia a personalidade de cada indivíduo. Se a cultura traduz o contexto social de cada um, também a personalidade o faz, havendo uma interligação entre estes conceitos, sem que estes sejam exclusivamente relacionados.",
        },
        {
          tipo: "p",
          texto:
            "As teorias de Margaret Mead demonstram que as características consideradas masculinas ou femininas variam entre sociedades e não podem ser explicadas somente pela biologia, apoiando a ideia de que o contexto social influencia a personalidade, ao influenciar as normas e os valores com que crescemos. Esta perspetiva supõe que o género é uma construção social difundida segundo a cultura em que nos inserimos.",
        },
        {
          tipo: "p",
          texto:
            "Apesar dos progressos alcançados, na sociedade portuguesa continuam a existir expectativas relativamente ao comportamento, à aparência e aos papéis familiares de cada género, e quem não corresponde a esses padrões pode ser alvo de discriminação, exclusão ou violência. Muitas vezes, em relação aos homens europeus, ouvimos a expressão «gay or european» pelo facto de os homens europeus serem culturalmente mais femininos e de essa feminilidade estar associada à homossexualidade.",
        },
        {
          tipo: "p",
          texto:
            "Considero particularmente relevante esta distinção entre cultura e natureza. A existência de normas sociais sobre género não significa que todas as pessoas se identifiquem com elas: a cultura impõe rótulos invisíveis às pessoas por meio de expectativas. Esta pode influenciar a maneira como percecionamos a nossa identidade, mas não deve funcionar como uma autoridade que decide quem somos. O reconhecimento de que existem diferentes formas de viver e de expressões de género reforça a importância de uma sociedade em que cada pessoa pode construir a sua identidade sem ter de justificar a sua existência.",
        },
        {
          tipo: "p",
          texto:
            "A socialização é definida como um processo que permite a transmissão de normas e valores que tendemos a interiorizar desde a infância. A ideia de que uma pessoa bem socializada é aquela que se adapta às normas dominantes traduz-se numa confusão entre os conceitos de integração social e conformidade, e pode servir para legitimar a marginalização de quem vive de maneira diferente. Uma pessoa não deve ser considerada menos válida por rejeitar expectativas e questionar tradições.",
        },
        {
          tipo: "p",
          texto:
            "É durante a infância, na escola, que os indivíduos têm o seu primeiro choque cultural, pelo facto de entrarem em contacto com uma realidade mais ampla e diversa. A socialização e a educação nesta fase primordial da vida influenciam e solidificam uma grande parte dos valores de cada pessoa. Porém, identifico-me com a ideia de que a socialização não termina na infância e de que as pessoas podem rever os seus valores quando entram em contacto com novas realidades. Crescer implica também desenvolver pensamento crítico e questionar aquilo que nos foi transmitido.",
        },
        {
          tipo: "p",
          texto:
            "No que toca à influência da cultura nos sistemas de valores de cada um, enquanto pessoa ateia considero legítimo que cada indivíduo acredite numa religião, em várias ou nenhuma, mas não considero legítimo que a religião seja imposta a quem não a partilha, muito menos que sirva de justificação para limitar os direitos de outras pessoas. As convicções religiosas devem poder coexistir com perspetivas agnósticas, sem que tenham o direito de controlar a vida privada da população. As normas que uma sociedade considera tradicionais podem parecer naturais a quem cresceu com elas, mas isso não significa que sejam moralmente justas. Na minha perspetiva, os costumes podem e devem ser questionados, sobretudo quando contribuem para perpetuar desigualdades, restringir direitos ou silenciar minorias.",
        },
        {
          tipo: "p",
          texto:
            "A minha perspetiva política leva-me a considerar que a liberdade individual não pode ser analisada isoladamente das condições sociais e económicas. Embora cada pessoa deva ter o direito à liberdade, esse direito é condicionado quando existem desigualdades que impedem o acesso à educação, à habitação e à saúde. E essas desigualdades também podem ser impostas por determinadas culturas, nomeadamente em países menos desenvolvidos. Portanto, até que ponto a cultura não pode representar uma limitação em certos casos?",
        },
        {
          tipo: "p",
          texto:
            "Os indivíduos não são apenas receptores passivos da cultura, interpretando os valores que recebem e adaptando-os às suas experiências. Isto demonstra que a mudança cultural não depende apenas das maiorias: resulta, também, das experiências individuais, da ação coletiva de quem questiona as normas existentes e da resistência de grupos discriminados. Os movimentos feministas e LGBT+ são exemplos de ações que, dentro de algumas culturas, permitiram combater a ideia de que determinados modelos familiares, identidades ou orientações sexuais são os únicos legítimos.",
        },
        {
          tipo: "p",
          texto:
            "Para além disto, nenhuma cultura é completamente homogénea, e reduzir uma sociedade a uma única identidade cultural seria ignorar a sua diversidade, pois as pessoas que pertencem à mesma sociedade não partilham necessariamente os mesmos valores e experiências. É precisamente aqui que considero relevante a abordagem interacionista apresentada no capítulo. Se a cultura é produzida e transformada através das interações individuais ou coletivas, então não deve ser entendida como fixa e superior às pessoas que a constituem. As culturas mudam porque as pessoas estabelecem novas relações e têm experiências diferentes, questionando o que antes parecia evidente. Também por isso o conceito de subcultura deve ser questionado: chamar «subcultura» a um grupo minoritário pode sugerir, mesmo que involuntariamente, um carácter inferior face a uma suposta cultura dominante.",
        },
      ],
    },
  },
  {
    sessao: "Leitura 2",
    autor: "Sam, D. L., & Berry, J. W. (2006)",
    titulo: "The Cambridge handbook of acculturation psychology",
    editora: "Capítulos 2 e 3, pp. 11–42 · Cambridge University Press",
    capa: cambridgeHandbookAsset.url,
    pdf: sinteseSamBerryAsset.url,
    ideias: [],
  },
  {
    sessao: "Leitura 3",
    autor: "Santos Rego, M. A. (coord.); Lorenzo Moledo, M. del M.; Etxeberría Balerdi, F.; Mínguez Vallejos, R.; Jordán Sierra, J. A.; Ruiz Román, C.",
    titulo: "Contribuição do discurso intercultural para uma nova teoria da educação",
    editora: "In Boavida, J. & García del Dujo, Á. (coord.), Teoria da Educação: Contributos Ibéricos, Imprensa da Universidade de Coimbra, 2007, pp. 447–470",
    ideiasTitulo: "IDEIAS-CHAVE DO CAPÍTULO:",
    ideias: [
      "O texto aborda a importância da educação intercultural, defendendo que a educação deve reconhecer e valorizar as diferenças culturais.",
      "Numa sociedade multicultural e de crescente diversidade, esta não deve ser vista como um problema, mas como uma oportunidade de aprendizagem e enriquecimento. Para que tal seja possível, é necessário ultrapassar preconceitos, estereótipos e discriminação e promover a inclusão e o respeito, fator para atingir a igualdade de oportunidades.",
      "A educação intercultural não consiste em conhecer outras culturas; muito para além disso, é importante a comunicação e a interação entre pessoas culturalmente distintas. Esta convivência permite partilhar experiências e compreender diferentes perspetivas, o que permite reconhecer semelhanças, sem desvalorizar as diferenças.",
      "O papel dos professores e das instituições educativas é imprescindível na construção de ambientes inclusivos, o que torna importante a formação dos profissionais e a aprendizagem cooperativa.",
      "A participação das famílias e a colaboração entre a escola e a comunidade também se torna fundamental na inclusão.",
      "Os autores defendem que a competência intercultural envolve três dimensões principais: conhecimentos, para compreender diferentes culturas; capacidades, para comunicar e interagir com pessoas diferentes; e atitudes, como o respeito, a abertura, a empatia e a flexibilidade.",
    ],
    reflexao: {
      titulo: "Reflexão",
      blocos: [
        {
          tipo: "p",
          texto:
            "Apesar de ter sido escrito há cerca de 20 anos, este texto apresenta ideias bastante relevantes, revelando um pensamento à frente do seu tempo no que diz respeito aos conceitos de interculturalidade, inclusão, diversidade, uniformidade e educação de necessidades especiais. No entanto, um dos aspetos em que falha é ao assumir que a igualdade no acesso à educação é uma questão já resolvida.",
        },
        {
          tipo: "p",
          texto:
            "Em Portugal, foi apenas após o 25 de Abril de 1974 que a educação deixou de ser um privilégio de alguns e passou a ser um direito de todos. Contudo, o reconhecimento deste direito não significa que toda a população tenha as mesmas oportunidades ou a mesma facilidade no acesso à educação.",
        },
        {
          tipo: "p",
          texto:
            "Ainda hoje, existem barreiras que dificultam o acesso e a inclusão de determinadas minorias e culturas no meio escolar. As escolas portuguesas continuam a revelar fragilidades no que toca à integração e inclusão, nem sempre dispondo das condições necessárias para garantir que todos os alunos possam aprender, participar ativamente e permanecer no sistema educativo. Estas dificuldades não se limitam à escola, estendendo-se também a outros contextos educativos.",
        },
        {
          tipo: "p",
          texto:
            "Há algumas décadas, a escola era um espaço marcado pela segregação e pela homogeneidade, no qual a diversidade cultural tinha pouca expressão. Ao contrário do que acontece atualmente, o contacto com diferentes culturas não fazia parte da experiência quotidiana das crianças em contexto escolar. Hoje, a escola constitui frequentemente um dos primeiros espaços de contacto com a diferença e de confronto com outras culturas.",
        },
        {
          tipo: "p",
          texto:
            "A crescente diversidade do meio escolar poderia representar uma oportunidade de enriquecimento cultural e de aprendizagem. No entanto, apesar de a escola já não ser tão homogénea, a educação continua a estabelecer-se por meio de modelos uniformizados, que nem sempre respondem às necessidades e características individuais dos alunos. A educação não deveria ser neutra perante estas diferenças; pelo contrário, deveria existir uma maior consciência das suas implicações e da forma como influenciam as experiências e oportunidades de cada aluno.",
        },
        {
          tipo: "p",
          texto:
            "Neste contexto, a pedagogia do cuscuz merece uma reflexão crítica, uma vez que tende a abordar a diversidade cultural com base em estereótipos e culturalismos, contribuindo para a categorização dos indivíduos e para o preconceito. A desconstrução destas ideias exige diálogo, comunicação e reflexão crítica. A comunicação é, por isso, essencial para promover a compreensão mútua e valorizar as diferenças, não com o objetivo de as eliminar, mas de as reconhecer como parte da diversidade.",
        },
        {
          tipo: "p",
          texto:
            "É importante, ainda, distinguir os conceitos de inclusão e integração, frequentemente utilizados como sinónimos, apesar de terem implicações diferentes. Uma escola é inclusiva ao criar oportunidades e variadas respostas para todos os alunos e integradora quando permite aos indivíduos adaptarem-se a este contexto.",
        },
        {
          tipo: "p",
          texto:
            "Deste modo, importa reconhecer que estar incluído numa sala de aula não significa, necessariamente, estar integrado na comunidade escolar ou na sociedade. A verdadeira inclusão exige mais do que a presença física dos alunos: implica garantir a sua participação efetiva, o reconhecimento das suas diferenças e a igualdade de oportunidades, tanto no contexto educativo como na sociedade em geral.",
        },
      ],
    },
    imagem: teoriaDaEducacaoPaginasAsset.url,
    imagemLegenda: "\n",
  },
  {
    sessao: "Leitura 4",
    autor: "Candau, Vera Maria",
    titulo: "Diferenças, educação intercultural e decolonialidade: temas insurgentes",
    editora:
      "Revista Espaço do Currículo, v. 13, n. Especial, pp. 678–686, 2020 · http://periodicos.ufpb.br/ojs2/index.php",
    ideiasTitulo: "Os cinco temas principais",
    ideias: [
      "Igualdade e diferença: a justiça exige combater as desigualdades e respeitar as diferenças culturais. Igualdade não significa tratar todos como se fossem iguais.",
      "Interseccionalidade: analisa como diferentes formas de opressão se cruzam, como o racismo, o sexismo e as desigualdades económicas.",
      "Empoderamento: é o processo pelo qual pessoas e grupos marginalizados desenvolvem consciência crítica, autonomia e capacidade para transformar a sociedade. Possui dimensões epistemológica, subjetiva, política e económica.",
      "Branquitude: refere-se aos privilégios sociais e históricos associados à condição de pessoa branca. A autora defende que a escola deve questionar esses privilégios e combater o racismo estrutural.",
      "Ecologia de saberes: defende o diálogo entre o conhecimento científico e outros saberes, valorizando conhecimentos de diferentes culturas sem rejeitar a ciência.",
    ],
    imagem: candauArtigoAsset.url,
    reflexao: {
      titulo: "Reflexão",
      blocos: [
        { tipo: "p", texto: "A interculturalidade crítica é um conceito que me leva a refletir sobre a forma como nos relacionamos com outras culturas e sobre as desigualdades que continuam presentes na sociedade. Para mim, não basta reconhecer e respeitar a diversidade cultural; é também necessário questionar as relações de poder que fazem com que algumas culturas e conhecimentos sejam valorizados em detrimento de outros. Acredito, por isso, que a interculturalidade deve ser necessariamente crítica, porque a educação não é neutra e pode tanto perpetuar desigualdades como contribuir para as combater." },
        { tipo: "p", texto: "O contacto com conceitos como a decolonialidade, a branquitude e a interseccionalidade tem-me levado a olhar de forma mais crítica para mim próprio e para o lugar que ocupo na sociedade. Enquanto cidadão branco europeu, reconheço que tenho determinados privilégios que nem sempre são evidentes no meu quotidiano. Esta tomada de consciência faz-me questionar até que ponto a minha visão do mundo é influenciada pela educação que recebi e pelas perspetivas que aprendi a considerar como naturais. Ao mesmo tempo, a interseccionalidade ajuda-me a compreender que a minha identidade é complexa e que, embora beneficie de certos privilégios, também posso sentir-me numa posição de minoria em determinados contextos." },
        { tipo: "p", texto: "Uma das questões que mais me faz pensar é o caráter colonial que ainda pode estar presente na educação europeia. Recordo-me de uma colega brasileira que, durante as aulas de História, viveu uma experiência de profundo estranhamento colonial. O seu relato fez-me pensar na forma como aquilo que aprendemos na escola pode transmitir uma visão eurocêntrica da História, deixando de fora outras experiências e perspetivas. Fez-me também questionar algo que, provavelmente, durante muito tempo tomei como garantido: quem decide quais as histórias que merecem ser contadas e quais os conhecimentos que devem ser valorizados?" },
        { tipo: "p", texto: "Também tenho vindo a compreender o empoderamento como um processo que não acontece apenas a nível individual, mas que se constrói coletivamente. Na minha perspetiva, a interculturalidade crítica pode criar espaço para que pessoas e grupos historicamente marginalizados reconheçam o valor das suas experiências, dos seus conhecimentos e das suas identidades. Esta ideia faz-me pensar na importância de escutar outras vozes, reconhecer experiências diferentes das minhas e perceber que a transformação social depende também da capacidade de agir em conjunto." },
        { tipo: "p", texto: "Por fim, o conceito de pensamento abissal leva-me a questionar as divisões que estabelecem quais os saberes considerados legítimos e quais são silenciados ou desvalorizados. Penso, em particular, nos saberes ancestrais, que tantas vezes são excluídos ou colocados numa posição inferior face ao conhecimento ocidental. Para mim, promover a justiça cognitiva implica reconhecer que não existe apenas uma forma de conhecer e interpretar o mundo e que podemos aprender muito com conhecimentos que historicamente foram marginalizados." },
        { tipo: "p", texto: "Esta reflexão tem-me ajudado a perceber que a interculturalidade crítica não consiste apenas em aceitar a diferença, mas também em questionar as minhas próprias certezas, reconhecer os privilégios de que beneficio e estar disponível para aprender com outras perspetivas. Mais do que um conceito teórico, vejo-a como um processo contínuo de reflexão pessoal e de transformação coletiva, que me desafia a assumir uma postura mais consciente e crítica perante a educação e a sociedade." },
      ],
    },
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
