import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "out");

async function readPage(pathname = "/") {
  const relative = pathname === "/" ? "index.html" : `${pathname.replace(/^\/|\/$/g, "")}/index.html`;
  return readFile(path.join(outputRoot, relative), "utf8");
}

async function allHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return allHtmlFiles(entryPath);
    return entry.name.endsWith(".html") ? [entryPath] : [];
  }));
  return files.flat();
}

test("renderiza todas as páginas institucionais do ITA", async () => {
  const pages = [
    ["/", /Raízes que/],
    ["/quem-somos", /Memória que/],
    ["/acoes", /Saberes em/],
    ["/impacto", /Presença que/],
    ["/noticias", /ITA na/],
    ["/apoie", /Faça parte dessa transformação/],
    ["/contato", /Uma conversa pode abrir muitos caminhos/],
  ];

  for (const [pathname, expected] of pages) {
    const html = await readPage(pathname);
    assert.match(html, expected, pathname);
    assert.match(html, /Instituto Terra Ancestral/, pathname);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  }
});

test("apresenta os indicadores atualizados de impacto", async () => {
  const home = await readPage("/");
  const impact = await readPage("/impacto");
  const healthLabel = /pessoas acolhidas\/beneficiadas com as ações de saúde do ITA - Instituto Terra Ancestral/;
  const trainingLabel = /participações em oficinas e cursos gratuitos do ITA/;
  const cultureLabel = /participações em eventos culturais e Feira ITA/;

  assert.match(home, /324/);
  assert.match(home, healthLabel);
  assert.match(home, /473/);
  assert.match(home, trainingLabel);
  assert.match(home, /643/);
  assert.match(home, cultureLabel);
  assert.match(home, /impact-featured impact-health/);
  assert.match(home, /impact-featured impact-fair/);
  assert.match(home, /<small class="impact-badge">Saúde<\/small>/);
  assert.match(home, /<small class="impact-badge">Feira ITA<\/small>/);
  assert.match(impact, /324/);
  assert.match(impact, healthLabel);
  assert.match(impact, /473/);
  assert.match(impact, trainingLabel);
  assert.match(impact, /643/);
  assert.match(impact, cultureLabel);
  assert.doesNotMatch(home, /259/);
  assert.doesNotMatch(impact, /259/);
  assert.doesNotMatch(home, /205[^<]*óculos entregues gratuitamente/);
  assert.doesNotMatch(impact, /205[^<]*óculos entregues gratuitamente/);
});

test("usa a foto indicada no banner principal", async () => {
  const home = await readPage("/");
  assert.match(home, /\/images\/gallery\/ancestralidade\/01\.jpg/);
  assert.doesNotMatch(home, /--home-hero-image[^;]*teatro-negro\.jpg/);
});

test("usa a identidade visual colorida na seção de destaque inicial", async () => {
  const home = await readPage("/");
  assert.match(home, /\/images\/official\/logo-1-3-colorida\.png/);
  assert.doesNotMatch(home, /\/images\/official\/culinaria-ancestral\.jpg/);
});

test("oferece acesso direto para apoiar o ITA no banner inicial", async () => {
  const home = await readPage("/");
  assert.match(home, /class="button button-pink" href="\/instituto-terra-ancestral\/apoie\/">Apoie o ITA/);
});

test("usa a foto indicada na seção de missão", async () => {
  const about = await readPage("/quem-somos");
  assert.match(about, /\/images\/official\/depoimento-barbara-ione-estudantes\.jpg/);
  assert.match(about, /Bárbara e Ione, estudantes do ITA, em um abraço/);
});

test("explica a origem e o significado do nome ITA antes da história institucional", async () => {
  const about = await readPage("/quem-somos");
  const whyIndex = about.indexOf("POR QUE");
  const historyIndex = about.indexOf("Nossa história");

  assert.ok(whyIndex >= 0 && whyIndex < historyIndex);
  assert.match(about, /“ITA” vem do Tupi-Guarani e significa pedra/);
  assert.match(about, /Representa força, resistência e ancestralidade/);
  assert.match(about, /as pedras são guardiãs da sabedoria ancestral/);
  assert.match(about, /pedra fundamental de uma sociedade que respeita o passado/);
  assert.match(about, /futuro de bem viver/);
});

test("apresenta todas as frentes de atuação depois dos valores", async () => {
  const about = await readPage("/quem-somos");
  const valuesIndex = about.indexOf("Valores que viram prática");
  const actingIndex = about.indexOf("Nossa atuação");

  assert.ok(valuesIndex >= 0 && actingIndex > valuesIndex);

  const expectedContent = [
    "Educação Popular",
    "Saúde Coletiva",
    "Educação Socioambiental",
    "Saberes Ancestrais",
    "Justiça e Direitos",
    "Cultura e Identidade",
    "Soberania Alimentar",
    "Economia Criativa",
    "Lazer e Articulação Comunitária",
    "Pesquisa e Políticas Públicas",
    "Educação Popular e Formação Profissional",
    "Saúde Coletiva e Farmácias Vivas",
    "Comunidades Tradicionais e Defesa de Direitos",
    "Cultura e Expressões Ancestrais",
    "Lazer, Comunidade e Educação",
    "Lei 10.639/03 em todas as formações",
    "LGBTQIAPN+",
    "Nosso impacto vai além da técnica",
    "sociedade mais justa, solidária e sustentável",
  ];

  for (const content of expectedContent) {
    assert.ok(about.includes(content), content);
  }
});

test("usa a foto indicada no banner de apoio", async () => {
  const support = await readPage("/apoie");
  assert.match(support, /\/images\/official\/thayna-vini-feira-ita\.jpg/);
  assert.match(support, /Thayná e Vini durante a Feira ITA/);
});

test("reúne as aparições do ITA na imprensa", async () => {
  const news = await readPage("/noticias");
  const links = [
    "https://www.otempo.com.br/cidades/2025/6/26/evento-em-pedro-leopoldo-propaga-saberes-ancestrais-no-proximo-sabado",
    "https://www.otempo.com.br/entretenimento/2025/9/5/projeto-promove-a-ancestralidade-com-cursos-gratuitos-e-continuos-na-grande-bh",
    "https://www.otempo.com.br/entretenimento/2025/9/25/instituto-de-promove-ancestralidade-na-grande-bh-inaugura-sede-com-programacao-cultural",
  ];

  for (const link of links) assert.ok(news.includes(link), link);
  assert.match(news, /href="\/instituto-terra-ancestral\/noticias\/"/);
  assert.match(news, /O TEMPO/);
  assert.match(news, /target="_blank"/);
});

test("usa a foto indicada no card de educação patrimonial e arte", async () => {
  const actions = await readPage("/acoes");
  assert.match(actions, /\/images\/official\/educacao-patrimonial-e-arte\.jpeg/);
  assert.match(actions, /Registro da ação Educação patrimonial e arte/);
});

test("usa a foto indicada no card de costura criativa", async () => {
  const actions = await readPage("/acoes");
  assert.match(actions, /\/images\/official\/curso-de-costura-criativa\.jpeg/);
  assert.match(actions, /Registro da ação Costura criativa/);
});

test("usa a foto indicada no card de marcenaria criativa", async () => {
  const actions = await readPage("/acoes");
  assert.match(actions, /\/images\/official\/marcenaria-criativa-card\.jpeg/);
  assert.match(actions, /Registro da ação Marcenaria criativa/);
});

test("mantém contatos, redes sociais, bazar e apoio fiscal visíveis", async () => {
  const contact = await readPage("/contato");
  const support = await readPage("/apoie");

  assert.match(contact, /institutoita\.gerais@gmail\.com/);
  assert.match(contact, /@ita\.gerais/);
  assert.match(contact, /youtube\.com\/@itainstitutoterraancestral/);
  assert.match(contact, /facebook\.com\/@itagerais/);
  assert.match(contact, /www\.institutoterraancestral\.com\.br/);
  assert.match(contact, /\(31\) 97243\.2240/);
  assert.match(contact, /Abrir no Google Maps/);
  assert.match(support, /Incentivo fiscal/);
  assert.match(support, /Bazar Beneficente Reconvexo/);
  assert.match(support, /Todo o valor arrecadado é integralmente destinado/);
  assert.match(support, /60\.485\.003\/0001-94/);
  assert.match(support, /cursos gratuitos e projetos de impacto social/);
  assert.match(support, /Obter parceria/);
  assert.match(support, /não substitui orientação contábil ou tributária/);
});

test("exibe o TikTok oficial em todos os pontos de redes sociais", async () => {
  const home = await readPage("/");
  const contact = await readPage("/contato");
  const support = await readPage("/apoie");
  const profile = /https:\/\/www\.tiktok\.com\/@ita\.gerais/;

  assert.match(home, profile);
  assert.match(home, /TikTok <span aria-hidden="true">↗<\/span>/);
  assert.match(contact, profile);
  assert.match(contact, /<span>TikTok<\/span><strong>@ita\.gerais<\/strong>/);
  assert.match(support, profile);
  assert.match(support, /<span>TikTok<\/span><strong>@ita\.gerais<\/strong>/);
  assert.match(contact, />TikTok ↗<\/a>/);
});

test("gera as páginas detalhadas das 22 ações", async () => {
  const actionSlugs = [
    "economia-criativa",
    "agroecologia",
    "bonecas-ancestrais",
    "biojoias-e-macrame",
    "caderno-artesanal",
    "ceramica",
    "cerveja-artesanal",
    "costura-criativa",
    "culinaria-ancestral",
    "educacao-patrimonial-e-arte",
    "grafite",
    "marcenaria-criativa",
    "teatro-negro",
    "armazem-ita",
    "feira-ita",
    "ancestralidade-e-tradicao",
    "circulo-terapeutico",
    "mutirao-de-saude-visual",
    "tratamento-medicinal-de-cannabis",
    "cine-comunidade",
    "rodas-de-conversa",
    "eventos-culturais",
  ];

  for (const slug of actionSlugs) {
    const html = await readPage(`/acoes/${slug}`);
    assert.match(html, /Saberes que viram prática/, slug);
    assert.match(html, /Todas as ações/, slug);
  }
});

test("usa as descrições ampliadas do portfólio institucional", async () => {
  const economy = await readPage("/acoes/economia-criativa");
  const health = await readPage("/acoes/mutirao-de-saude-visual");
  const cannabis = await readPage("/acoes/tratamento-medicinal-de-cannabis");
  const cinema = await readPage("/acoes/cine-comunidade");
  const circle = await readPage("/acoes/circulo-terapeutico");

  assert.match(economy, /Tati Otoni/);
  assert.match(health, /Instituto IBIS/);
  assert.match(cannabis, /50 beneficiários/);
  assert.match(cinema, /15ª Mostra de Cinema e Direitos Humanos/);
  assert.match(circle, /Angela Valentim/);
  assert.match(circle, /Terapia do Esquema de Jeffrey Young/);
});

test("mantém as fotos no contexto correto e exibe os 62 registros", async () => {
  const health = await readPage("/acoes/mutirao-de-saude-visual");
  const cannabis = await readPage("/acoes/tratamento-medicinal-de-cannabis");
  assert.doesNotMatch(health, /\/images\/gallery\/parcerias\//);
  assert.doesNotMatch(cannabis, /\/images\/gallery\/parcerias\//);

  const htmlFiles = await allHtmlFiles(outputRoot);
  const html = (await Promise.all(htmlFiles.map((file) => readFile(file, "utf8")))).join("\n");
  const galleryPhotos = new Set(
    [...html.matchAll(/\/images\/gallery\/[^"&<>\s)]+\.jpg/g)].map(([photo]) => photo),
  );
  assert.equal(galleryPhotos.size, 62, "todas as 62 imagens oficiais devem aparecer no site");
});
