import assert from "node:assert/strict";
import test from "node:test";

async function getWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function render(worker, pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza todas as páginas institucionais do ITA", async () => {
  const worker = await getWorker();
  const pages = [
    ["/", /Raízes que/],
    ["/quem-somos", /Memória que/],
    ["/acoes", /Saberes em/],
    ["/impacto", /Presença que/],
    ["/apoie", /Faça parte dessa transformação/],
    ["/contato", /Uma conversa pode abrir muitos caminhos/],
  ];

  for (const [pathname, expected] of pages) {
    const response = await render(worker, pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, expected, pathname);
    assert.match(html, /Instituto Terra Ancestral/, pathname);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  }
});

test("mantém contatos, redes sociais, bazar e apoio fiscal visíveis", async () => {
  const worker = await getWorker();
  const contact = await (await render(worker, "/contato")).text();
  const support = await (await render(worker, "/apoie")).text();

  assert.match(contact, /institutoita\.gerais@gmail\.com/);
  assert.match(contact, /@ita\.gerais/);
  assert.match(contact, /youtube\.com\/@itainstitutoterraancestral/);
  assert.match(contact, /facebook\.com\/@itagerais/);
  assert.match(contact, /www\.institutoterraancestral\.com\.br/);
  assert.match(contact, /\(31\) 97243\.2240/);
  assert.match(support, /Incentivo fiscal/);
  assert.match(support, /Bazar Beneficente Reconvexo/);
  assert.match(support, /Todo o valor arrecadado é integralmente destinado/);
  assert.match(support, /60\.485\.003\/0001-94/);
  assert.match(support, /cursos gratuitos e projetos de impacto social/);
  assert.match(support, /Propor uma parceria/);
  assert.match(support, /não substitui orientação contábil ou tributária/);
});

test("apresenta as formações e demais ações do portfólio institucional", async () => {
  const worker = await getWorker();
  const actions = await (await render(worker, "/acoes")).text();
  const expectedActions = [
    "Economia criativa",
    "Agroecologia",
    "Bonecas ancestrais",
    "Biojoias e macramê",
    "Caderno artesanal",
    "Cerâmica",
    "Cerveja artesanal",
    "Costura criativa",
    "Culinária ancestral",
    "Educação patrimonial e arte",
    "Grafite",
    "Marcenaria criativa",
    "Teatro negro",
    "Armazém ITA",
    "Feira ITA",
    "Ancestralidade e tradição",
    "Círculo Terapêutico",
    "Mutirão de Saúde Visual",
    "Tratamento medicinal de cannabis",
    "Cine Comunidade",
    "Rodas de conversa",
    "Eventos culturais",
  ];

  for (const action of expectedActions) {
    assert.match(actions, new RegExp(action, "i"), action);
  }

  assert.match(actions, /Angela Valentim/);
  assert.match(actions, /Terapia do Esquema de Jeffrey Young/);
  assert.match(actions, /Comissão de Relações Étnico-Raciais do CRP-MG/);
  assert.match(actions, /Galeria completa/i);
  const galleryPhotos = new Set(
    [...actions.matchAll(/\/images\/gallery\/[^"&]+\.jpg/g)].map(
      ([photo]) => photo,
    ),
  );
  assert.equal(
    galleryPhotos.size,
    62,
    "a página deve apresentar os 62 registros da galeria oficial",
  );
});
