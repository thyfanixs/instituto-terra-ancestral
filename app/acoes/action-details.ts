export type ActionDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  meta: string;
  photos: string[];
};

const gallery = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    `/images/gallery/${folder}/${String(index + 1).padStart(2, "0")}.jpg`,
  );

export const actionDetails: ActionDetail[] = [
  { slug: "economia-criativa", title: "Economia criativa", category: "Arte, negócio e propósito", image: "/images/official/economia-criativa.jpg", summary: "Formação que integra território, identidades, comercialização e valorização do trabalho criativo.", meta: "3 turmas · 64 estudantes", photos: gallery("economia-criativa", 2) },
  { slug: "agroecologia", title: "Agroecologia", category: "Remédios da Terra", image: "/images/official/agroecologia.jpg", summary: "Cultivo agroecológico, plantas medicinais, compostagem e diálogo entre saberes ancestrais e científicos.", meta: "2 turmas · 39 estudantes", photos: gallery("agroecologia", 4) },
  { slug: "bonecas-ancestrais", title: "Bonecas ancestrais", category: "Memória e identidade", image: "/images/official/bonecas-ancestrais.jpg", summary: "Bonecas de pano, Abayomi e figuras simbólicas como tecnologias ancestrais de cuidado e resistência.", meta: "3 turmas · 32 estudantes", photos: gallery("bonecas-ancestrais", 4) },
  { slug: "biojoias-e-macrame", title: "Biojoias e macramê", category: "Arte indígena", image: "/images/official/biojoias.jpg", summary: "Criação com sementes, pedras, fibras naturais e técnicas que valorizam natureza e identidade cultural.", meta: "2 turmas · 31 estudantes", photos: gallery("biojoias-macrame", 1) },
  { slug: "caderno-artesanal", title: "Caderno artesanal", category: "Memória em papel", image: "/images/official/caderno-artesanal.jpg", summary: "Encadernação manual, reaproveitamento de materiais e criação de lugares de expressão e registro da vida.", meta: "2 turmas · 18 estudantes", photos: gallery("caderno-artesanal", 1) },
  { slug: "ceramica", title: "Cerâmica", category: "Terra e patrimônio", image: "/images/official/ceramica.jpg", summary: "O barro como matéria de criação, memória e pertencimento, articulando técnicas e identidade territorial.", meta: "4 turmas · 54 estudantes", photos: gallery("ceramica", 8) },
  { slug: "cerveja-artesanal", title: "Cerveja artesanal", category: "Saberes e experimentação", image: "/images/official/cerveja-artesanal.jpg", summary: "Produção artesanal em diálogo com ingredientes, ervas e especiarias presentes em diferentes culturas.", meta: "1 turma · 6 estudantes", photos: gallery("cerveja-artesanal", 1) },
  { slug: "costura-criativa", title: "Costura criativa", category: "Tradições têxteis", image: "/images/official/costura-criativa.jpg", summary: "Modelagem, costura e reaproveitamento de tecidos para peças autorais, festas e celebrações tradicionais.", meta: "3 turmas · 31 estudantes", photos: gallery("costura-criativa", 1) },
  { slug: "culinaria-ancestral", title: "Culinária ancestral", category: "Saberes e sabores", image: "/images/official/culinaria-ancestral.jpg", summary: "Receitas e modos de preparo afro-indígenas que reafirmam a cozinha como lugar de cuidado e memória.", meta: "3 turmas · 27 estudantes", photos: gallery("culinaria-ancestral", 1) },
  { slug: "educacao-patrimonial-e-arte", title: "Educação patrimonial e arte", category: "Patrimônio vivo", image: "/images/official/ancestralidade.jpg", summary: "Memórias individuais e coletivas transformadas em processos artísticos por meio do fazer manual.", meta: "3 turmas · 46 estudantes", photos: gallery("ancestralidade", 9) },
  { slug: "grafite", title: "Grafite", category: "Arte urbana", image: "/images/official/grafite.jpg", summary: "Expressão e ocupação simbólica do território a partir do congado, das tradições negras e da fé.", meta: "4 turmas · 46 estudantes", photos: gallery("grafite", 1) },
  { slug: "marcenaria-criativa", title: "Marcenaria criativa", category: "Ofícios tradicionais", image: "/images/official/marcenaria-criativa.jpg", summary: "Trabalho com madeira, sustentabilidade e criação de peças inspiradas nas referências do território.", meta: "3 turmas · 18 estudantes", photos: gallery("marcenaria-criativa", 1) },
  { slug: "teatro-negro", title: "Teatro negro", category: "Corpo e identidade", image: "/images/official/teatro-negro.jpg", summary: "Criação coletiva, oralidade e ancestralidade para fortalecer narrativas afro-brasileiras e protagonismo.", meta: "3 turmas · 61 estudantes", photos: gallery("teatro-negro", 2) },
  { slug: "armazem-ita", title: "Armazém ITA", category: "Economia solidária", image: "/images/official/armazem-ita.jpg", summary: "Espaço de exposição e comercialização das peças produzidas nos cursos, gerando recursos para novos insumos e ações.", meta: "Ciclo de aprendizagem e sustentabilidade", photos: ["/images/official/armazem-ita.jpg", ...gallery("armazem", 1)] },
  { slug: "feira-ita", title: "Feira ITA", category: "Economia criativa", image: "/images/official/feira-ita.jpg", summary: "Encontro de saberes, produtos artesanais, apresentações culturais e fortalecimento das redes locais.", meta: "2 edições · cerca de 400 participantes", photos: ["/images/official/feira-ita.jpg", ...gallery("eventos-culturais", 3)] },
  { slug: "ancestralidade-e-tradicao", title: "Ancestralidade e tradição", category: "Patrimônio cultural", image: "/images/official/ancestralidade.jpg", summary: "Salvaguarda e fortalecimento de Congados, Folias de Reis, Candombe, Festas de Terreiros e religiões de matriz africana.", meta: "Memória, fé e pertencimento", photos: gallery("ancestralidade", 9) },
  { slug: "circulo-terapeutico", title: "Círculo Terapêutico", category: "Saúde e bem viver", image: "/images/official/circulo-terapeutico.jpg", summary: "Escuta, acolhimento e práticas coletivas de cuidado comunitário com acompanhamento profissional.", meta: "1 turma · 15 mulheres", photos: gallery("circulo-terapeutico", 2) },
  { slug: "mutirao-de-saude-visual", title: "Mutirão de Saúde Visual", category: "Acesso à saúde", image: "/images/portfolio/page-28-01.jpeg", summary: "Exames especializados, atendimento médico, prescrição e encaminhamento para óculos gratuitos.", meta: "4 mutirões · 284 atendimentos · 205 óculos", photos: ["/images/portfolio/page-28-01.jpeg", "/images/gallery/parcerias/01.jpg", "/images/gallery/parcerias/02.jpg"] },
  { slug: "tratamento-medicinal-de-cannabis", title: "Tratamento medicinal de cannabis", category: "Cuidado integral", image: "/images/portfolio/page-26-02.jpeg", summary: "Orientação e acesso responsável ao tratamento, em parceria com a Associação Flor da Vida.", meta: "25 pessoas contempladas", photos: ["/images/portfolio/page-26-02.jpeg", "/images/gallery/parcerias/03.jpg", "/images/gallery/parcerias/04.jpg"] },
  { slug: "cine-comunidade", title: "Cine Comunidade", category: "Cinema e direitos humanos", image: "/images/portfolio/page-31-01.jpeg", summary: "Sessões mensais de cinema acompanhadas de rodas de conversa, formação crítica e programação cultural.", meta: "8 sessões · 241 participantes", photos: ["/images/portfolio/page-31-01.jpeg", ...gallery("eventos-culturais", 3)] },
  { slug: "rodas-de-conversa", title: "Rodas de conversa", category: "Educação e participação", image: "/images/official/rodas-de-conversa.jpg", summary: "Encontros entre mestres da tradição, pesquisadores, estudantes, artistas, lideranças e moradores.", meta: "8 encontros · 213 participantes", photos: ["/images/official/rodas-de-conversa.jpg", ...gallery("rodas-de-conversa", 1)] },
  { slug: "eventos-culturais", title: "Eventos culturais", category: "Cultura viva", image: "/images/official/congadar.jpg", summary: "Apresentações, feiras, vivências e experiências gastronômicas que celebram a diversidade cultural.", meta: "11 eventos · cerca de 643 participantes", photos: ["/images/official/congadar.jpg", ...gallery("eventos-culturais", 3)] },
];

export const actionSlug = (title: string) => actionDetails.find((action) => action.title === title)?.slug ?? "";
