export type ActionCredit = {
  label: string;
  title: string;
  text: string;
};

export type ActionDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  description: string[];
  meta: string;
  photos: string[];
  photoCaptions?: Record<string, string>;
  credit?: ActionCredit;
};

const gallery = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    `/images/gallery/${folder}/${String(index + 1).padStart(2, "0")}.jpg`,
  );

export const actionDetails: ActionDetail[] = [
  {
    slug: "economia-criativa",
    title: "Economia Criativa",
    category: "Arte, negócio e propósito",
    image: "/images/official/economia-criativa.jpg",
    summary: "Formação que integra território, identidades, comercialização e valorização do trabalho criativo.",
    description: [
      "Estruturado a partir dos pilares Arte, Negócio e Propósito, o curso cria um ambiente de aprendizagem que integra território e identidades, estimula trocas e oferece formação voltada à comercialização e às vendas.",
      "Os saberes ancestrais são reconhecidos como importantes impulsionadores da transformação social e econômica, fortalecendo o trabalho criativo e os empreendimentos dos participantes.",
    ],
    meta: "3 turmas · 64 estudantes",
    photos: gallery("economia-criativa", 2),
    credit: {
      label: "Facilitação",
      title: "Tati Otoni",
      text: "Educadora alimentar e facilitadora de projetos, formações e empreendimentos criativos. Cofundadora da Casa Orc e consultora gastronômica da Raízes - Desenvolvimento Sustentável.",
    },
  },
  {
    slug: "agroecologia",
    title: "Agroecologia",
    category: "Remédios da Terra",
    image: "/images/official/agroecologia.jpg",
    summary: "Cultivo agroecológico, plantas medicinais, compostagem e diálogo entre saberes ancestrais e científicos.",
    description: [
      "O curso Remédios da Terra compreende a agroecologia como prática que integra cultivo, cuidado e espiritualidade, reconhecendo que plantas medicinais e alimentos carregam saberes ancestrais e uma dimensão sagrada.",
      "A formação reúne mestres dos saberes tradicionais, agricultores, pesquisadores e estudantes em práticas de cultivo agroecológico, repelentes naturais, compostagem, xaropes e banhos de folhas, fortalecendo autonomia, saúde integral e uma relação ética com a terra.",
    ],
    meta: "2 turmas · 39 estudantes",
    photos: gallery("agroecologia", 4),
    credit: {
      label: "Facilitação",
      title: "Vinícius Moreira e mestres do território",
      text: "Curso conduzido pelo agrônomo Vinícius Moreira em parceria com mestras e mestres dos saberes tradicionais.",
    },
  },
  {
    slug: "bonecas-ancestrais",
    title: "Bonecas Ancestrais",
    category: "Memória e identidade",
    image: "/images/official/bonecas-ancestrais.jpg",
    summary: "Bonecas de pano, Abayomi e figuras simbólicas como tecnologias ancestrais de cuidado e resistência.",
    description: [
      "A formação convida os participantes a reencontrarem memórias da infância, do brincar e das tradições transmitidas entre gerações.",
      "Na confecção de bonecas de pano, Abayomi, cavalos de pau, orixás, santas e outras figuras simbólicas, são desenvolvidas técnicas de costura, bordado, modelagem e criação, compreendidas como tecnologias ancestrais de cuidado, identidade, espiritualidade e resistência cultural.",
    ],
    meta: "3 turmas · 32 estudantes",
    photos: gallery("bonecas-ancestrais", 4),
    credit: {
      label: "Facilitação",
      title: "Daise Aparecida",
      text: "Mulher negra, produtora cultural, mestra dos saberes tradicionais e ex-secretária municipal de Cultura de Matozinhos.",
    },
  },
  {
    slug: "biojoias-e-macrame",
    title: "Biojoias e Macramê",
    category: "Arte indígena",
    image: "/images/official/biojoias.jpg",
    summary: "Criação com sementes, pedras, fibras naturais e técnicas que valorizam natureza e identidade cultural.",
    description: [
      "O curso promove a criação de colares, brincos, filtros dos sonhos, peças decorativas e elementos cenográficos a partir de sementes, pedras, fibras naturais, linhas e outros materiais do território.",
      "As técnicas de macramê e de confecção de biojoias valorizam o uso sustentável da natureza, a arte e a identidade cultural em um espaço de troca de saberes e fortalecimento das tradições.",
    ],
    meta: "2 turmas · 31 estudantes",
    photos: gallery("biojoias-macrame", 1),
    credit: {
      label: "Facilitação",
      title: "Thayná Pataxó",
      text: "Artista e educadora indígena do povo Pataxó, natural de Aldeia Velha, no sul da Bahia.",
    },
  },
  {
    slug: "caderno-artesanal",
    title: "Caderno Artesanal",
    category: "Memória em papel",
    image: "/images/official/caderno-artesanal.jpg",
    summary: "Encadernação manual, reaproveitamento de materiais e criação de lugares de expressão e registro da vida.",
    description: [
      "A formação ensina técnicas de criação e encadernação manual de cadernos, livros, álbuns e outros objetos de papel, utilizando diferentes costuras, papéis, tecidos e materiais reaproveitados.",
      "Mais que produzir peças artesanais, compreende o livro e o caderno como lugares de memória, expressão e registro da vida, valorizando o fazer manual, a criatividade e a autonomia.",
    ],
    meta: "2 turmas · 18 estudantes",
    photos: gallery("caderno-artesanal", 1),
    credit: {
      label: "Facilitação",
      title: "Cláudia Maria",
      text: "Mulher negra e artesã, com trajetória na criação de peças autorais por meio da encadernação e de diferentes técnicas do artesanato.",
    },
  },
  {
    slug: "ceramica",
    title: "Cerâmica",
    category: "Terra e Patrimônio",
    image: "/images/official/ceramica.jpg",
    summary: "O barro como matéria de criação, memória e pertencimento, articulando técnicas e identidade territorial.",
    description: [
      "O curso convida os participantes a explorar o barro como matéria de criação, memória e pertencimento. Utensílios cotidianos, animais paleontológicos encontrados na região e elementos da natureza e do patrimônio cultural aproximam técnica cerâmica e identidade territorial.",
      "As atividades promovem o diálogo entre saberes tradicionais e acadêmicos, incluindo intercâmbio com o Grupo GESTO, da UFMG.",
    ],
    meta: "4 turmas · 54 estudantes",
    photos: gallery("ceramica", 8),
    credit: {
      label: "Facilitação",
      title: "Laila Kierulff",
      text: "Professora da Escola Guignard/UEMG, mestra ceramista e coordenadora do Grupo de Ceramistas Maria Quem Dera, de Pedro Leopoldo.",
    },
  },
  {
    slug: "cerveja-artesanal",
    title: "Cerveja Artesanal",
    category: "Saberes e experimentação",
    image: "/images/official/cerveja-artesanal.jpg",
    summary: "Produção artesanal em diálogo com ingredientes, ervas e especiarias presentes em diferentes culturas.",
    description: [
      "A formação percorre as etapas de produção da cerveja articulando técnicas contemporâneas e saberes ancestrais. Os participantes experimentam receitas com gengibre, capim-limão, ervas e especiarias tradicionalmente utilizadas em diferentes culturas.",
      "Realizado em parceria com a Cervejaria Tezius, o curso promove a troca entre cervejeiros e mestres de saberes tradicionais, valorizando experimentação e produção artesanal.",
    ],
    meta: "1 turma · 6 estudantes",
    photos: gallery("cerveja-artesanal", 1),
    credit: {
      label: "Facilitação",
      title: "Tezinho Machado",
      text: "Multiartista e cervejeiro artesanal, com experiência em processos laboratoriais e produção de cervejas.",
    },
  },
  {
    slug: "costura-criativa",
    title: "Costura Criativa",
    category: "Tradições têxteis",
    image: "/images/official/costura-criativa.jpg",
    summary: "Modelagem, costura e reaproveitamento de tecidos para peças autorais, festas e celebrações tradicionais.",
    description: [
      "O curso desenvolve técnicas de modelagem, costura e reaproveitamento de tecidos para vestimentas cotidianas, peças autorais e indumentárias destinadas a festas populares, celebrações e rituais religiosos.",
      "O fazer manual é tratado como tecnologia ancestral que articula criatividade, sustentabilidade, memória e identidade cultural, fortalecendo as tradições têxteis.",
    ],
    meta: "3 turmas · 31 estudantes",
    photos: gallery("costura-criativa", 1),
    credit: {
      label: "Facilitação",
      title: "Edite Ribeiro",
      text: "Costureira formada na tradição familiar e integrante da Casa de Umbanda TUFF, especialista em vestimentas para ritos e festas populares.",
    },
  },
  {
    slug: "culinaria-ancestral",
    title: "Culinária Ancestral",
    category: "Saberes e sabores",
    image: "/images/official/culinaria-ancestral.jpg",
    summary: "Receitas e modos de preparo afro-indígenas que reafirmam a cozinha como lugar de cuidado e memória.",
    description: [
      "O curso promove o encontro entre memória, território e alimentação por meio de receitas, ingredientes e modos de preparo transmitidos entre gerações.",
      "As atividades resgatam práticas culinárias afro-indígenas historicamente invisibilizadas e reafirmam a cozinha como lugar de cuidado, identidade, espiritualidade e produção de conhecimento.",
    ],
    meta: "3 turmas · 27 estudantes",
    photos: gallery("culinaria-ancestral", 1),
    credit: {
      label: "Parceria formativa",
      title: "MandakNega",
      text: "Equipe reconhecida pela valorização da culinária mineira ancestral e das tradições alimentares afro-brasileiras.",
    },
  },
  {
    slug: "educacao-patrimonial-e-arte",
    title: "Educação Patrimonial e Arte",
    category: "Patrimônio vivo",
    image: "/images/official/educacao-patrimonial-e-arte-detalhe.jpg",
    summary: "Memórias individuais e coletivas transformadas em processos artísticos por meio do fazer manual.",
    description: [
      "A formação promove o encontro entre memória, patrimônio e território, transformando lembranças individuais e coletivas em processos artísticos construídos pelo fazer manual.",
      "Escultura em papel, pintura, papier collé, papier-mâché e materiais reciclados dialogam com pinturas rupestres africanas e com o patrimônio arqueológico de Pedro Leopoldo, compreendendo o patrimônio como experiência viva.",
    ],
    meta: "3 turmas · 46 estudantes",
    photos: [],
    credit: {
      label: "Parceria formativa",
      title: "Eco das Artes",
      text: "Iniciativa com experiência em educação patrimonial e em projetos formativos realizados em diferentes municípios mineiros.",
    },
  },
  {
    slug: "grafite",
    title: "Grafite",
    category: "Arte Urbana",
    image: "/images/official/grafite.jpg",
    summary: "Expressão e ocupação simbólica do território a partir do congado, das tradições negras e da fé.",
    description: [
      "O curso compreende a arte urbana como forma de expressão, comunicação e ocupação simbólica do território, fortalecendo vínculos entre memória, identidade e pertencimento.",
      "As técnicas partem de referências locais - congado, tradições negras, ervas sagradas, expressões de fé e paisagens urbanas - e incluem composição, planejamento e cuidado com o espaço público.",
    ],
    meta: "4 turmas · 46 estudantes",
    photos: gallery("grafite", 1),
    credit: {
      label: "Facilitação",
      title: "Simone Carvalho",
      text: "Mulher negra, professora das redes pública e privada de ensino e formada pela Escola Guignard/UEMG.",
    },
  },
  {
    slug: "marcenaria-criativa",
    title: "Marcenaria Criativa",
    category: "Ofícios tradicionais",
    image: "/images/official/marcenaria-criativa.jpg",
    summary: "Trabalho com madeira, sustentabilidade e criação de peças inspiradas nas referências do território.",
    description: [
      "A formação reconhece o trabalho com a madeira como patrimônio cultural transmitido entre gerações em Pedro Leopoldo e região.",
      "Técnicas de marcenaria, sustentabilidade e reaproveitamento de materiais estimulam peças autorais, autonomia produtiva, fazer coletivo e economia criativa.",
    ],
    meta: "3 turmas · 18 estudantes",
    photos: gallery("marcenaria-criativa", 1),
    credit: {
      label: "Facilitação",
      title: "Artur Camargos",
      text: "Mestre de ofício com atuação em marcenaria criativa, restauração de móveis e reaproveitamento de madeira.",
    },
  },
  {
    slug: "teatro-negro",
    title: "Teatro Negro",
    category: "Corpo e identidade",
    image: "/images/official/teatro-negro.jpg",
    summary: "Criação coletiva, oralidade e ancestralidade para fortalecer narrativas afro-brasileiras e protagonismo.",
    description: [
      "Em parceria com o Grupo Ancês, o curso promove expressão artística, formação crítica e valorização das narrativas afro-brasileiras a partir das memórias e vivências dos territórios.",
      "Corpo, voz, oralidade e ancestralidade transformam experiências cotidianas em linguagem cênica, contribuindo para a educação antirracista, a memória negra local e o protagonismo.",
    ],
    meta: "3 turmas · 61 estudantes",
    photos: gallery("teatro-negro", 2),
    credit: {
      label: "Facilitação",
      title: "Joviane Àiyé",
      text: "Mulher trans, atriz, professora, formada pela Escola de Belas Artes da UFMG e coordenadora do Grupo de Teatro Ancês.",
    },
  },
  {
    slug: "armazem-ita",
    title: "Armazém ITA",
    category: "Economia solidária",
    image: "/images/official/armazem-ita.jpg",
    summary: "Espaço de exposição e comercialização das peças produzidas nos cursos, gerando recursos para novos insumos e ações.",
    description: [
      "Mais que uma loja, o Armazém ITA é uma estratégia de economia solidária e sustentabilidade institucional. Cada participante permanece com parte da produção dos cursos, enquanto outra parte é destinada ao espaço.",
      "A comercialização gera recursos para novos insumos, manutenção das atividades e continuidade dos projetos, conectando aprendizagem, geração de renda e valorização dos saberes ancestrais.",
    ],
    meta: "Ciclo de aprendizagem e sustentabilidade",
    photos: gallery("armazem", 1),
  },
  {
    slug: "feira-ita",
    title: "Feira ITA",
    category: "Economia criativa",
    image: "/images/official/feira-ita.jpg",
    summary: "Encontro de saberes, produtos artesanais, apresentações culturais e fortalecimento das redes locais.",
    description: [
      "A Feira ITA valoriza a economia criativa, os saberes tradicionais e a produção cultural comunitária. É espaço de circulação de conhecimentos, comercialização de produtos artesanais, apresentações e fortalecimento das redes locais.",
      "A primeira edição reuniu aproximadamente 150 participantes. A segunda, realizada como mostra de encerramento do Projeto Marãiwá, recebeu cerca de 250 pessoas.",
    ],
    meta: "2 edições · cerca de 400 participantes",
    photos: [
      "/images/gallery/eventos-culturais/03.jpg",
    ],
  },
  {
    slug: "ancestralidade-e-tradicao",
    title: "Ancestralidade e Tradição",
    category: "Patrimônio cultural",
    image: "/images/official/ancestralidade-e-tradicao.jpg",
    summary: "Salvaguarda e fortalecimento de Congados, Folias de Reis, Candombe, Festas de Terreiros e religiões de matriz africana.",
    description: [
      "O ITA atua na salvaguarda do patrimônio material e imaterial, contribuindo para fomentar, organizar e realizar Festas de Congado, Folias de Reis, Candombe e Festas de Terreiros.",
      "A ação reconhece a responsabilidade sociocultural de fortalecer expressões de cultura e religiosidade que construíram Minas Gerais e valoriza as religiões de matriz africana, seus saberes, práticas rituais e memórias comunitárias.",
    ],
    meta: "Memória, fé e pertencimento",
    photos: gallery("ancestralidade", 9),
    credit: {
      label: "Articulação territorial",
      title: "Terreiros e grupos tradicionais",
      text: "Trabalho realizado em parceria com comunidades tradicionais e terreiros da Região Metropolitana de Belo Horizonte e de outras localidades.",
    },
  },
  {
    slug: "circulo-terapeutico",
    title: "Círculo Terapêutico",
    category: "Saúde e bem viver",
    image: "/images/official/circulo-terapeutico.jpg",
    summary: "Escuta, acolhimento e práticas coletivas de cuidado comunitário com acompanhamento profissional.",
    description: [
      "Com acolhimento profissional da Psicologia, o Círculo Terapêutico promove práticas coletivas de escuta e cuidado comunitário, fortalecendo vínculos, saúde mental e bem viver.",
      "Rodas de conversa, práticas da Psicologia, exercícios de respiração, autoconhecimento, autoavaliação, expressão corporal e reflexão coletiva valorizam o círculo como prática ancestral de fortalecimento emocional, respeito e pertencimento.",
    ],
    meta: "1 turma · 15 mulheres",
    photos: gallery("circulo-terapeutico", 2),
    credit: {
      label: "Mediação",
      title: "Angela Valentim",
      text: "Mulher negra, psicóloga, terapeuta cognitivo-comportamental e especialista em Habilidades Sociais. Conselheira do CRP-MG e do Conselho Estadual de Direitos Humanos, presidenta da Comissão de Relações Étnico-Raciais do CRP-MG, atua na Assistência Social, no SUS, na Educação e na clínica, e é especializanda em Terapia do Esquema de Jeffrey Young.",
    },
  },
  {
    slug: "mutirao-de-saude-visual",
    title: "Mutirão de Saúde Visual",
    category: "Acesso à saúde",
    image: "/images/portfolio/page-28-01.jpeg",
    summary: "Exames especializados, atendimento médico, prescrição e encaminhamento para óculos gratuitos.",
    description: [
      "O Mutirão de Saúde Visual promove acesso gratuito à saúde ocular por meio de exames especializados, atendimento médico, prescrição de receitas e encaminhamento para óculos.",
      "A ação fortalece o direito à saúde, amplia o cuidado comunitário e contribui para a autonomia e a qualidade de vida das pessoas atendidas.",
    ],
    meta: "4 mutirões · 284 atendimentos · 205 óculos",
    photos: [],
    credit: {
      label: "Parceria",
      title: "Instituto IBIS",
      text: "Realização conjunta para garantir atendimento especializado e entrega gratuita de óculos.",
    },
  },
  {
    slug: "tratamento-medicinal-de-cannabis",
    title: "Tratamento Medicinal de Cannabis",
    category: "Cuidado integral",
    image: "/images/official/flor-da-vida-ita.png",
    summary: "Orientação e acesso responsável ao tratamento, em parceria com a Associação Flor da Vida.",
    description: [
      "A iniciativa oferece acolhimento, avaliação e encaminhamento qualificado para o uso terapêutico do óleo de cannabis com responsabilidade, segurança e cuidado.",
      "Consulta médica, avaliação social e acesso a óleos prescritos a preço social ou gratuitamente promovem qualidade de vida e democratizam terapias baseadas em evidências científicas. A expectativa é alcançar 50 beneficiários até o final de 2026.",
    ],
    meta: "25 pessoas contempladas",
    photos: [],
    credit: {
      label: "Parceria",
      title: "Associação Flor da Vida",
      text: "Parceria iniciada em 2025 com a associação de Franca (SP), incluindo acolhimento por assistente social e acompanhamento médico.",
    },
  },
  {
    slug: "cine-comunidade",
    title: "Cine Comunidade",
    category: "Cinema e direitos humanos",
    image: "/images/portfolio/page-31-01.jpeg",
    summary: "Sessões mensais de cinema acompanhadas de rodas de conversa, formação crítica e programação cultural.",
    description: [
      "O Cine Comunidade cria um espaço de formação crítica, convivência e acesso à arte por meio de sessões mensais acompanhadas de rodas de conversa e programação cultural.",
      "O projeto foi credenciado para a 15ª Mostra de Cinema e Direitos Humanos, realizada pelo Ministério da Cultura em parceria com o Ministério dos Direitos Humanos e da Cidadania.",
    ],
    meta: "8 sessões · 241 participantes",
    photos: [],
  },
  {
    slug: "rodas-de-conversa",
    title: "Rodas de conversa",
    category: "Educação e participação",
    image: "/images/official/rodas-de-conversa.jpg",
    summary: "Encontros entre mestres da tradição, pesquisadores, estudantes, artistas, lideranças e moradores.",
    description: [
      "As rodas são espaços de encontro, escuta e construção coletiva de conhecimento em torno de temas específicos e questões do território.",
      "O ITA reconhece a roda de conversa como tecnologia ancestral de educação, participação e cuidado, capaz de fortalecer vínculos, promover o diálogo entre diferentes saberes e contribuir para a formação cidadã.",
    ],
    meta: "8 encontros · 213 participantes",
    photos: gallery("rodas-de-conversa", 1),
  },
  {
    slug: "eventos-culturais",
    title: "Eventos Culturais",
    category: "Cultura viva",
    image: "/images/official/congadar.jpg",
    summary: "Apresentações, feiras, vivências e experiências gastronômicas que celebram a diversidade cultural.",
    description: [
      "Os eventos reúnem artistas, mestres da cultura popular, músicos, poetas, escritores, artesãos, pesquisadores e grupos tradicionais de diferentes territórios.",
      "Apresentações, feiras, vivências e experiências gastronômicas afro-indígenas conectam tradição e contemporaneidade, fortalecem o pertencimento comunitário e reconhecem a diversidade como patrimônio vivo.",
    ],
    meta: "643 participações em eventos culturais e Feira ITA",
    photos: gallery("eventos-culturais", 2),
    photoCaptions: {
      "/images/gallery/eventos-culturais/02.jpg": "Lavadeiras de Jequitibá",
    },
  },
];

export const actionSlug = (title: string) =>
  actionDetails.find((action) => action.title === title)?.slug ?? "";
