import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ações",
  description: "Conheça os cursos, vivências e eventos formativos do Instituto Terra Ancestral.",
};

const courses = [
  {
    title: "Economia criativa",
    slug: "economia-criativa",
    category: "Arte, negócio e propósito",
    image: "/images/official/economia-criativa.jpg",
    text: "Formação que integra território, identidades, comercialização e valorização do trabalho criativo.",
    meta: "3 turmas · 64 estudantes",
  },
  {
    title: "Agroecologia",
    slug: "agroecologia",
    category: "Remédios da Terra",
    image: "/images/official/home-agroecologia.jpg",
    text: "Cultivo agroecológico, plantas medicinais, compostagem e diálogo entre saberes ancestrais e científicos.",
    meta: "2 turmas · 39 estudantes",
  },
  {
    title: "Bonecas ancestrais",
    slug: "bonecas-ancestrais",
    category: "Memória e identidade",
    image: "/images/official/bonecas-ancestrais.jpg",
    text: "Bonecas de pano, Abayomi e figuras simbólicas como tecnologias ancestrais de cuidado e resistência.",
    meta: "3 turmas · 32 estudantes",
  },
  {
    title: "Biojoias e macramê",
    slug: "biojoias-e-macrame",
    category: "Arte indígena",
    image: "/images/official/biojoias.jpg",
    text: "Criação com sementes, pedras, fibras naturais e técnicas que valorizam natureza e identidade cultural.",
    meta: "2 turmas · 31 estudantes",
  },
  {
    title: "Caderno artesanal",
    slug: "caderno-artesanal",
    category: "Memória em papel",
    image: "/images/official/caderno-artesanal.jpg",
    text: "Encadernação manual, reaproveitamento de materiais e criação de lugares de expressão e registro da vida.",
    meta: "2 turmas · 18 estudantes",
  },
  {
    title: "Cerâmica",
    slug: "ceramica",
    category: "Terra e patrimônio",
    image: "/images/official/ceramica.jpg",
    text: "O barro como matéria de criação, memória e pertencimento, articulando técnicas e identidade territorial.",
    meta: "4 turmas · 54 estudantes",
  },
  {
    title: "Cerveja artesanal",
    slug: "cerveja-artesanal",
    category: "Saberes e experimentação",
    image: "/images/official/cerveja-artesanal.jpg",
    text: "Produção artesanal em diálogo com ingredientes, ervas e especiarias presentes em diferentes culturas.",
    meta: "1 turma · 6 estudantes",
  },
  {
    title: "Costura criativa",
    slug: "costura-criativa",
    category: "Tradições têxteis",
    image: "/images/official/curso-de-costura-criativa.jpeg",
    text: "Modelagem, costura e reaproveitamento de tecidos para peças autorais, festas e celebrações tradicionais.",
    meta: "3 turmas · 31 estudantes",
  },
  {
    title: "Culinária ancestral",
    slug: "culinaria-ancestral",
    category: "Saberes e sabores",
    image: "/images/official/culinaria-ancestral.jpg",
    text: "Receitas e modos de preparo afro-indígenas que reafirmam a cozinha como lugar de cuidado e memória.",
    meta: "3 turmas · 27 estudantes",
  },
  {
    title: "Educação patrimonial e arte",
    slug: "educacao-patrimonial-e-arte",
    category: "Patrimônio vivo",
    image: "/images/official/educacao-patrimonial-e-arte.jpeg",
    text: "Memórias individuais e coletivas transformadas em processos artísticos por meio do fazer manual.",
    meta: "3 turmas · 46 estudantes",
  },
  {
    title: "Grafite",
    slug: "grafite",
    category: "Arte urbana",
    image: "/images/official/grafite.jpg",
    text: "Expressão e ocupação simbólica do território a partir do congado, das tradições negras e da fé.",
    meta: "4 turmas · 46 estudantes",
  },
  {
    title: "Marcenaria criativa",
    slug: "marcenaria-criativa",
    category: "Ofícios tradicionais",
    image: "/images/official/marcenaria-criativa-card.jpeg",
    text: "Trabalho com madeira, sustentabilidade e criação de peças inspiradas nas referências do território.",
    meta: "3 turmas · 18 estudantes",
  },
  {
    title: "Teatro negro",
    slug: "teatro-negro",
    category: "Corpo e identidade",
    image: "/images/official/teatro-negro.jpg",
    text: "Criação coletiva, oralidade e ancestralidade para fortalecer narrativas afro-brasileiras e protagonismo.",
    meta: "3 turmas · 61 estudantes",
  },
];

const culturalInitiatives = [
  {
    title: "Ancestralidade e tradição",
    slug: "ancestralidade-e-tradicao",
    category: "Patrimônio cultural",
    image: "/images/official/ancestralidade-e-tradicao.jpg",
    text: "Salvaguarda e fortalecimento de Congados, Folias de Reis, Candombe, Festas de Terreiros e religiões de matriz africana.",
    meta: "Memória, fé e pertencimento",
  },
  {
    title: "Armazém ITA",
    slug: "armazem-ita",
    category: "Economia solidária",
    image: "/images/official/armazem-ita.jpg",
    text: "Espaço de exposição e comercialização das peças produzidas nos cursos, gerando recursos para novos insumos e ações.",
    meta: "Ciclo de aprendizagem e sustentabilidade",
  },
  {
    title: "Feira ITA",
    slug: "feira-ita",
    category: "Economia criativa",
    image: "/images/official/feira-ita.jpg",
    text: "Encontro de saberes, produtos artesanais, apresentações culturais e fortalecimento das redes locais.",
    meta: "2 edições · cerca de 400 participantes",
  },
  {
    title: "Cine Comunidade",
    slug: "cine-comunidade",
    category: "Cinema e direitos humanos",
    image: "/images/portfolio/page-31-01.jpeg",
    text: "Sessões mensais de cinema acompanhadas de rodas de conversa, formação crítica e programação cultural.",
    meta: "8 sessões · 241 participantes",
  },
  {
    title: "Rodas de conversa",
    slug: "rodas-de-conversa",
    category: "Educação e participação",
    image: "/images/official/rodas-de-conversa.jpg",
    text: "Encontros entre mestres da tradição, pesquisadores, estudantes, artistas, lideranças e moradores.",
    meta: "8 encontros · 213 participantes",
  },
  {
    title: "Apresentações artísticas",
    slug: "eventos-culturais",
    category: "Cultura viva",
    image: "/images/official/congadar.jpg",
    text: "Shows, espetáculos teatrais, palhaçaria, performances artísticas, exposições artísticas, ensaio de blocos de carnaval e escola de samba.",
    meta: "643 participações em eventos culturais e Feira ITA",
  },
];

const healthInitiatives = [
  {
    title: "Círculo Terapêutico",
    slug: "circulo-terapeutico",
    category: "Saúde e bem viver",
    image: "/images/official/circulo-terapeutico.jpg",
    text: "Escuta, acolhimento e práticas coletivas de cuidado comunitário com acompanhamento profissional.",
    meta: "1 turma · 15 mulheres",
  },
  {
    title: "Mutirão de Saúde Visual",
    slug: "mutirao-de-saude-visual",
    category: "Acesso à saúde",
    image: "/images/portfolio/page-28-01.jpeg",
    text: "Exames especializados, atendimento médico, prescrição e encaminhamento para óculos gratuitos.",
    meta: "4 mutirões · 284 atendimentos · 205 óculos",
  },
  {
    title: "Tratamento medicinal de cannabis",
    slug: "tratamento-medicinal-de-cannabis",
    category: "Cuidado integral",
    image: "/images/official/flor-da-vida-ita.png",
    text: "Orientação e acesso responsável ao tratamento, em parceria com a Associação Flor da Vida.",
    meta: "25 pessoas contempladas",
  },
];

const actionHighlights = [
  "Ciclos de Tecnologias Ancestrais em territórios distintos",
  "Oficinas e vivências",
  "Cursos de qualificação profissional",
  "Feiras e exposições",
  "Círculos terapêuticos",
  "Mutirões de Saúde Visual",
  "Acesso ao uso medicinal da cannabis, em parceria com a Associação Flor da Vida",
  "Rodas de conversa reunindo mestres de saberes e culturas afro-brasileiras, pesquisadores, lideranças religiosas e representantes de distintas culturas",
  "Sessões de cinema e debates mobilizando repertórios estéticos, narrativos e territoriais",
];

export default function Acoes() {
  return (
    <main>
      <PageHero
        index="02"
        eyebrow="Ações"
        title="Saberes em"
        accent="movimento."
        description="Cursos, oficinas, vivências, feiras e encontros que conectam formação, cultura, autonomia e cuidado."
        image="/images/official/rodas-de-conversa.jpg"
        imageAlt="Roda de conversa do ITA com participantes, obras artesanais e arte urbana"
        tone="orange"
      />

      <section className="actions-overview section">
        <div className="actions-overview-intro reveal">
          <p className="section-index">Atuação</p>
          <p className="actions-overview-mark" aria-hidden="true">ITA</p>
        </div>
        <div className="actions-overview-copy reveal">
          <p className="kicker">Aqui, no ITA</p>
          <h2>O fazer é<br /><em>coletivo.</em></h2>
          <ul>
            {actionHighlights.map((action, index) => (
              <li key={action}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{action}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="actions-page action-anchor section" id="formacao">
        <div className="actions-page-heading reveal">
          <p className="section-index">Formação e saberes</p>
          <h2>Cursos e formações.<br />Muitos caminhos.</h2>
          <p>Os Ciclos de Tecnologias Ancestrais conectam qualificação profissional, memória, autonomia e economia criativa.</p>
        </div>
        <div className="action-gallery">
          {courses.map((action, index) => (
            <Link className={`gallery-card action-card-link reveal card-${index + 1}`} href={`/acoes/${action.slug}`} key={action.title}>
              <div><img src={assetPath(action.image)} alt={`Registro da ação ${action.title}`} /></div>
              <p className="eyebrow">{action.category}</p>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
              <span className="action-meta">{action.meta}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="initiatives-section action-anchor section" id="saude">
        <div className="initiatives-heading reveal">
          <p className="section-index">Saúde</p>
          <h2>Cuidado integral e bem viver.</h2>
          <p>Ações de acolhimento, acesso à saúde e práticas coletivas fortalecem o cuidado com o corpo, a mente e a comunidade.</p>
        </div>
        <div className="initiative-grid">
          {healthInitiatives.map((initiative) => (
            <Link className="initiative-card action-card-link reveal" href={`/acoes/${initiative.slug}`} key={initiative.title}>
              <div className="initiative-image">
                <img src={assetPath(initiative.image)} alt={`Registro de ${initiative.title}`} />
              </div>
              <div className="initiative-copy">
                <p className="eyebrow">{initiative.category}</p>
                <h3>{initiative.title}</h3>
                <p>{initiative.text}</p>
                <strong>{initiative.meta}</strong>
              </div>
            </Link>
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

      <section className="initiatives-section action-anchor section" id="acoes-culturais">
        <div className="initiatives-heading reveal">
          <p className="section-index">Eventos formativos</p>
          <h2>Cultura, memória e comunidade.</h2>
          <p>Feiras, encontros, cinema e tradições vivas fazem os saberes circularem e fortalecem identidades, redes locais e participação social.</p>
        </div>
        <div className="initiative-grid">
          {culturalInitiatives.map((initiative) => (
            <Link className="initiative-card action-card-link reveal" href={`/acoes/${initiative.slug}`} key={initiative.title}>
              <div className="initiative-image">
                <img src={assetPath(initiative.image)} alt={`Registro de ${initiative.title}`} />
              </div>
              <div className="initiative-copy">
                <p className="eyebrow">{initiative.category}</p>
                <h3 className={initiative.title === "Ancestralidade e tradição" ? "initiative-title-long" : undefined}>
                  {initiative.title}
                </h3>
                <p>{initiative.text}</p>
                <strong>{initiative.meta}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
