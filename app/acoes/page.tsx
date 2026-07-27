import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Ações",
  description: "Conheça os cursos, vivências, eventos e ações culturais do Instituto Terra Ancestral.",
};

const courses = [
  {
    title: "Economia criativa",
    category: "Arte, negócio e propósito",
    image: "/images/official/economia-criativa.jpg",
    text: "Formação que integra território, identidades, comercialização e valorização do trabalho criativo.",
    meta: "3 turmas · 64 estudantes",
  },
  {
    title: "Agroecologia",
    category: "Remédios da Terra",
    image: "/images/official/agroecologia.jpg",
    text: "Cultivo agroecológico, plantas medicinais, compostagem e diálogo entre saberes ancestrais e científicos.",
    meta: "2 turmas · 39 estudantes",
  },
  {
    title: "Bonecas ancestrais",
    category: "Memória e identidade",
    image: "/images/official/bonecas-ancestrais.jpg",
    text: "Bonecas de pano, Abayomi e figuras simbólicas como tecnologias ancestrais de cuidado e resistência.",
    meta: "3 turmas · 32 estudantes",
  },
  {
    title: "Biojoias e macramê",
    category: "Arte indígena",
    image: "/images/official/biojoias.jpg",
    text: "Criação com sementes, pedras, fibras naturais e técnicas que valorizam natureza e identidade cultural.",
    meta: "2 turmas · 31 estudantes",
  },
  {
    title: "Caderno artesanal",
    category: "Memória em papel",
    image: "/images/official/caderno-artesanal.jpg",
    text: "Encadernação manual, reaproveitamento de materiais e criação de lugares de expressão e registro da vida.",
    meta: "2 turmas · 18 estudantes",
  },
  {
    title: "Cerâmica",
    category: "Terra e patrimônio",
    image: "/images/official/ceramica.jpg",
    text: "O barro como matéria de criação, memória e pertencimento, articulando técnicas e identidade territorial.",
    meta: "4 turmas · 54 estudantes",
  },
  {
    title: "Cerveja artesanal",
    category: "Saberes e experimentação",
    image: "/images/official/cerveja-artesanal.jpg",
    text: "Produção artesanal em diálogo com ingredientes, ervas e especiarias presentes em diferentes culturas.",
    meta: "1 turma · 6 estudantes",
  },
  {
    title: "Costura criativa",
    category: "Tradições têxteis",
    image: "/images/official/costura-criativa.jpg",
    text: "Modelagem, costura e reaproveitamento de tecidos para peças autorais, festas e celebrações tradicionais.",
    meta: "3 turmas · 31 estudantes",
  },
  {
    title: "Culinária ancestral",
    category: "Saberes e sabores",
    image: "/images/official/culinaria-ancestral.jpg",
    text: "Receitas e modos de preparo afro-indígenas que reafirmam a cozinha como lugar de cuidado e memória.",
    meta: "3 turmas · 27 estudantes",
  },
  {
    title: "Educação patrimonial e arte",
    category: "Patrimônio vivo",
    image: "/images/official/ancestralidade.jpg",
    text: "Memórias individuais e coletivas transformadas em processos artísticos por meio do fazer manual.",
    meta: "3 turmas · 46 estudantes",
  },
  {
    title: "Grafite",
    category: "Arte urbana",
    image: "/images/official/grafite.jpg",
    text: "Expressão e ocupação simbólica do território a partir do congado, das tradições negras e da fé.",
    meta: "4 turmas · 46 estudantes",
  },
  {
    title: "Marcenaria criativa",
    category: "Ofícios tradicionais",
    image: "/images/official/marcenaria-criativa.jpg",
    text: "Trabalho com madeira, sustentabilidade e criação de peças inspiradas nas referências do território.",
    meta: "3 turmas · 18 estudantes",
  },
  {
    title: "Teatro negro",
    category: "Corpo e identidade",
    image: "/images/official/teatro-negro.jpg",
    text: "Criação coletiva, oralidade e ancestralidade para fortalecer narrativas afro-brasileiras e protagonismo.",
    meta: "3 turmas · 61 estudantes",
  },
];

const initiatives = [
  {
    title: "Armazém ITA",
    category: "Economia solidária",
    image: "/images/official/armazem-ita.jpg",
    text: "Espaço de exposição e comercialização das peças produzidas nos cursos, gerando recursos para novos insumos e ações.",
    meta: "Ciclo de aprendizagem e sustentabilidade",
  },
  {
    title: "Feira ITA",
    category: "Economia criativa",
    image: "/images/official/feira-ita.jpg",
    text: "Encontro de saberes, produtos artesanais, apresentações culturais e fortalecimento das redes locais.",
    meta: "2 edições · cerca de 400 participantes",
  },
  {
    title: "Ancestralidade e tradição",
    category: "Patrimônio cultural",
    image: "/images/official/ancestralidade.jpg",
    text: "Salvaguarda e fortalecimento de Congados, Folias de Reis, Candombe, Festas de Terreiros e religiões de matriz africana.",
    meta: "Memória, fé e pertencimento",
  },
  {
    title: "Círculo Terapêutico",
    category: "Saúde e bem viver",
    image: "/images/official/circulo-terapeutico.jpg",
    text: "Escuta, acolhimento e práticas coletivas de cuidado comunitário com acompanhamento profissional.",
    meta: "1 turma · 15 mulheres",
  },
  {
    title: "Mutirão de Saúde Visual",
    category: "Acesso à saúde",
    image: "/images/portfolio/page-28-01.jpeg",
    text: "Exames especializados, atendimento médico, prescrição e encaminhamento para óculos gratuitos.",
    meta: "4 mutirões · 284 atendimentos · 205 óculos",
  },
  {
    title: "Tratamento medicinal de cannabis",
    category: "Cuidado integral",
    image: "/images/portfolio/page-26-02.jpeg",
    text: "Orientação e acesso responsável ao tratamento, em parceria com a Associação Flor da Vida.",
    meta: "25 pessoas contempladas",
  },
  {
    title: "Cine Comunidade",
    category: "Cinema e direitos humanos",
    image: "/images/portfolio/page-31-01.jpeg",
    text: "Sessões mensais de cinema acompanhadas de rodas de conversa, formação crítica e programação cultural.",
    meta: "8 sessões · 241 participantes",
  },
  {
    title: "Rodas de conversa",
    category: "Educação e participação",
    image: "/images/official/rodas-de-conversa.jpg",
    text: "Encontros entre mestres da tradição, pesquisadores, estudantes, artistas, lideranças e moradores.",
    meta: "8 encontros · 213 participantes",
  },
  {
    title: "Eventos culturais",
    category: "Cultura viva",
    image: "/images/official/congadar.jpg",
    text: "Apresentações, feiras, vivências e experiências gastronômicas que celebram a diversidade cultural.",
    meta: "11 eventos · cerca de 643 participantes",
  },
];

const galleryGroups = [
  { title: "Ancestralidade e tradição", folder: "ancestralidade", count: 9 },
  { title: "Armazém ITA", folder: "armazem", count: 1 },
  { title: "Círculo Terapêutico", folder: "circulo-terapeutico", count: 2 },
  { title: "Agroecologia", folder: "agroecologia", count: 4 },
  { title: "Biojoias indígenas e macramê", folder: "biojoias-macrame", count: 1 },
  { title: "Bonecas ancestrais", folder: "bonecas-ancestrais", count: 4 },
  { title: "Caderno artesanal", folder: "caderno-artesanal", count: 1 },
  { title: "Cerâmica", folder: "ceramica", count: 8 },
  { title: "Cerveja artesanal", folder: "cerveja-artesanal", count: 1 },
  { title: "Costura criativa", folder: "costura-criativa", count: 1 },
  { title: "Culinária ancestral", folder: "culinaria-ancestral", count: 1 },
  { title: "Economia criativa", folder: "economia-criativa", count: 2 },
  { title: "Grafite", folder: "grafite", count: 1 },
  { title: "Marcenaria criativa", folder: "marcenaria-criativa", count: 1 },
  { title: "Teatro negro", folder: "teatro-negro", count: 2 },
  { title: "Eventos culturais e Feira ITA", folder: "eventos-culturais", count: 3 },
  { title: "Espaço ITA", folder: "espaco-ita", count: 2 },
  { title: "Parcerias institucionais", folder: "parcerias", count: 17 },
  { title: "Rodas de conversa", folder: "rodas-de-conversa", count: 1 },
];

function galleryPhotos(folder: string, count: number, title: string) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: `/images/gallery/${folder}/${number}.jpg`,
      alt: `${title} — registro ${index + 1}`,
    };
  });
}

export default function Acoes() {
  return (
    <main>
      <PageHero
        index="02"
        eyebrow="Ações"
        title="Saberes em"
        accent="movimento."
        description="Cursos, oficinas, vivências, feiras e encontros que conectam formação, cultura, autonomia e cuidado."
        image="/images/official/teatro-negro.jpg"
        imageAlt="Participantes em atividade do curso de teatro negro"
        tone="orange"
      />

      <section className="actions-page section">
        <div className="actions-page-heading reveal">
          <p className="section-index">Formação e saberes</p>
          <h2>13 cursos.<br />Muitos caminhos.</h2>
          <p>Os Ciclos de Tecnologias Ancestrais conectam qualificação profissional, memória, autonomia e economia criativa.</p>
        </div>
        <div className="action-gallery">
          {courses.map((action, index) => (
            <article className={`gallery-card reveal card-${index + 1}`} key={action.title}>
              <div><img src={assetPath(action.image)} alt={`Registro da ação ${action.title}`} /></div>
              <p className="eyebrow">{action.category}</p>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
              <span className="action-meta">{action.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="initiatives-section section">
        <div className="initiatives-heading reveal">
          <p className="section-index">Outras frentes de atuação</p>
          <h2>Cultura, cuidado e comunidade.</h2>
          <p>Além das formações, o ITA mantém ações permanentes de circulação cultural, saúde, economia solidária e participação social.</p>
        </div>
        <div className="initiative-grid">
          {initiatives.map((initiative) => (
            <article className="initiative-card reveal" key={initiative.title}>
              <div className="initiative-image">
                <img src={assetPath(initiative.image)} alt={`Registro de ${initiative.title}`} />
              </div>
              <div className="initiative-copy">
                <p className="eyebrow">{initiative.category}</p>
                <h3>{initiative.title}</h3>
                <p>{initiative.text}</p>
                <strong>{initiative.meta}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="circle-spotlight">
        <div className="circle-spotlight-image image-reveal">
          <img
            src={assetPath("/images/gallery/circulo-terapeutico/01.jpg")}
            alt="Participantes do Círculo Terapêutico em uma dinâmica coletiva"
            loading="lazy"
          />
        </div>
        <div className="circle-spotlight-copy reveal">
          <p className="kicker">Saúde mental e bem viver</p>
          <h2>Círculo Terapêutico.</h2>
          <p>
            Com acolhimento profissional da Psicologia, a ação promove práticas
            coletivas de escuta e cuidado comunitário. Rodas de conversa,
            exercícios de respiração, autoconhecimento, expressão corporal e
            reflexão coletiva fortalecem vínculos, pertencimento e redes de
            cuidado no território.
          </p>
          <div className="circle-stat">
            <strong>1 turma</strong>
            <span>15 mulheres em Pedro Leopoldo</span>
          </div>
          <div className="facilitator-profile">
            <p className="eyebrow">Mediação</p>
            <h3>Angela Valentim</h3>
            <p>
              Mulher negra, psicóloga, terapeuta cognitivo-comportamental e
              especialista em Habilidades Sociais. É conselheira do Conselho
              Regional de Psicologia de Minas Gerais e do Conselho Estadual de
              Direitos Humanos, presidenta da Comissão de Relações
              Étnico-Raciais do CRP-MG, atua na Assistência Social, no SUS, na
              Educação e na clínica, e é especializanda em Terapia do Esquema
              de Jeffrey Young.
            </p>
          </div>
        </div>
      </section>

      <section className="complete-gallery section" aria-labelledby="galeria-completa">
        <div className="complete-gallery-heading reveal">
          <div>
            <p className="section-index">Memória em imagens</p>
            <h2 id="galeria-completa">Galeria completa.</h2>
          </div>
          <p>
            62 registros das formações, encontros, celebrações, parcerias e
            ações que fazem o Instituto Terra Ancestral acontecer.
          </p>
        </div>

        <div className="gallery-groups">
          {galleryGroups.map((group, groupIndex) => (
            <section className="gallery-group reveal" key={group.folder}>
              <header>
                <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <p>{group.count} {group.count === 1 ? "registro" : "registros"}</p>
              </header>
              <div className={`photo-mosaic photo-count-${group.count}`}>
                {galleryPhotos(group.folder, group.count, group.title).map((photo) => (
                  <figure key={photo.src}>
                    <img
                      src={assetPath(photo.src)}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="culture-banner">
        <div className="culture-banner-photo image-reveal">
          <img src={assetPath("/images/official/congadar.jpg")} alt="Evento cultural com participação do Congadar" />
        </div>
        <div className="culture-banner-copy reveal">
          <p className="kicker">Cultura viva</p>
          <h2>Encontro é também tecnologia social.</h2>
          <p>Eventos culturais, rodas de conversa e articulações fortalecem redes, celebram identidades e fazem os saberes circularem.</p>
        </div>
      </section>
    </main>
  );
}
