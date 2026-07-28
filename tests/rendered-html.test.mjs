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
