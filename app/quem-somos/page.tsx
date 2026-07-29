import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Quem somos",
  description: "Conheça a missão, os valores e a atuação territorial do Instituto Terra Ancestral.",
};

const values = [
  ["01", "Ancestralidade", "Valorizamos os saberes ancestrais como patrimônio vivo, fonte de conhecimento, inovação e transformação."],
  ["02", "Pertencimento", "Fortalecemos identidades, memórias e vínculos com os territórios, promovendo o protagonismo das comunidades."],
  ["03", "Educação", "Acreditamos na educação como caminho para a autonomia, a formação profissional e o desenvolvimento humano."],
  ["04", "Cuidado integral", "Promovemos o bem viver por meio da integração entre saúde, cultura, espiritualidade, natureza e relações humanas."],
  ["05", "Cooperação", "Atuamos em rede, valorizando o diálogo, as parcerias e a construção coletiva."],
  ["06", "Diversidade", "Respeitamos e valorizamos a pluralidade de pessoas, culturas, saberes e modos de vida."],
  ["07", "Sustentabilidade", "Assumimos o compromisso com o cuidado dos territórios, dos recursos naturais e das futuras gerações."],
  ["08", "Ética e transparência", "Conduzimos nossas ações com integridade, responsabilidade e compromisso público."],
];

const actionAreas = [
  ["01", "Educação Popular"],
  ["02", "Saúde Coletiva"],
  ["03", "Educação Socioambiental"],
  ["04", "Saberes Ancestrais"],
  ["05", "Justiça e Direitos"],
  ["06", "Cultura e Identidade"],
  [
    "07",
    "Soberania Alimentar",
    "Produção de xaropes, repelentes, produtos de limpeza e higiene pessoal, entre outros produtos agroecológicos.",
  ],
  ["08", "Economia Criativa"],
  ["09", "Lazer e Articulação Comunitária"],
  ["10", "Pesquisa e Políticas Públicas"],
];

const actionPrograms = [
  {
    number: "A",
    title: "Educação Popular e Formação Profissional",
    lead: "Ofícios que unem tradição e inovação.",
    items: [
      "Corte, costura e estamparia",
      "Panificação, alimentação ancestral e quitandas",
      "Marcenaria e mobiliário sustentável",
      "Artesanato, cerâmica e agroecologia",
      "Aulas voltadas à economia solidária, ao cooperativismo e à justiça ambiental",
    ],
  },
  {
    number: "B",
    title: "Saúde Coletiva e Farmácias Vivas",
    lead: "Saúde como direito coletivo.",
    items: [
      "Integração entre saberes tradicionais, SUS e práticas como reiki, auriculoterapia, yoga e musicoterapia",
      "Rodas de escuta, saúde mental popular e autocuidado",
      "Farmácias Vivas que reúnem benzedeiras, raizeiras, parteiras e hortas medicinais",
    ],
  },
  {
    number: "C",
    title: "Comunidades Tradicionais e Defesa de Direitos",
    lead: "Apoio técnico e jurídico para povos e comunidades tradicionais.",
    items: [
      "Mapeamento territorial",
      "Assessoria jurídica e formação em direitos humanos",
      "Defesa da identidade, do território e da autodeterminação",
      "Luta por justiça para mulheres, LGBTQIAPN+, povos de terreiro e indígenas",
      "Produção de diagnósticos técnicos e promoção do diálogo comunitário",
    ],
  },
  {
    number: "D",
    title: "Cultura e Expressões Ancestrais",
    lead: "Cultura como direito.",
    items: [
      "Oficinas de tambor, grafite, capoeira, dança afro e teatro",
      "Artes visuais a partir da reciclagem",
      "Celebrações, rituais sagrados e tradições orais",
      "Apoio a artistas periféricos e comunidades tradicionais",
    ],
  },
  {
    number: "E",
    title: "Soberania Alimentar e Economia Criativa",
    lead: "Autonomia territorial, produção e geração de renda.",
    items: [
      "Hortas comunitárias interligadas, quintais produtivos e feiras agroecológicas",
      "Criação de cooperativas, redes de troca e moedas sociais",
      "Gastronomia ancestral como geração de renda",
      "Produção com identidade cultural e autonomia territorial",
    ],
  },
  {
    number: "F",
    title: "Lazer, Comunidade e Educação",
    lead: "Encontro, aprendizagem e cuidado em comunidade.",
    items: [
      "Cineclubes, rodas de conversa e eventos intergeracionais",
      "Esporte comunitário: caminhadas ecológicas, judô, muay thai e funcional",
      "Cursinho preparatório para o ENEM com abordagem crítica e inclusiva",
      "Espaço educativo para filhos e filhas das cursistas, garantindo permanência e cuidado",
    ],
  },
];

const actionPrinciples = [
  "Equidade e inclusão",
  "Valorização da ancestralidade",
  "Inovação com raízes culturais",
  "Lei 10.639/03 em todas as formações",
];

const actionImpacts = [
  "Protagonismo, empoderamento e transformação social",
  "Desenvolvimento econômico com relações de trabalho harmoniosas e sustentáveis com o meio ambiente",
  "Saúde do corpo e da mente",
  "Fortalecimento do pertencimento e da identidade coletiva",
  "Redes de apoio que podem reduzir a vulnerabilidade social",
  "Confiança mútua e participação cidadã",
  "Intercâmbio de saberes e experiências",
];

export default function QuemSomos() {
  return (
    <main>
      <PageHero
        index="01"
        eyebrow="Quem somos"
        title="Memória que"
        accent="abre caminhos."
        description="Uma organização da sociedade civil que difunde, articula e fortalece as culturas afro-indígenas."
        image="/images/official/ancestralidade.jpg"
        imageAlt="Instrumentos e objetos ligados às tradições ancestrais"
        tone="pink"
      />

      <section className="why-ita section">
        <div className="why-ita-heading reveal">
          <p className="section-index">Origem do nome</p>
          <h2>POR QUE<br /><em>ITA?</em></h2>
        </div>
        <div className="why-ita-copy">
          <p className="reveal">&ldquo;ITA&rdquo; vem do Tupi-Guarani e significa pedra.</p>
          <p className="reveal">Representa força, resistência e ancestralidade.</p>
          <p className="reveal">Na tradição africana, as pedras são guardiãs da sabedoria ancestral.</p>
          <p className="reveal">
            O ITA é a pedra fundamental de uma sociedade que respeita o passado
            como fonte de conhecimento e que mira num futuro de bem viver.
          </p>
        </div>
      </section>

      <section className="manifesto section">
        <p className="section-index reveal">Nossa história</p>
        <div>
          <p className="display-copy reveal">Cultura viva, saberes ancestrais e articulação em rede.</p>
          <div className="two-columns reveal">
            <p>
              O Instituto Terra Ancestral (ITA) é uma organização da sociedade civil que atua na difusão, articulação e fortalecimento das culturas afro-indígenas, promovendo o diálogo entre coletivos, grupos culturais, artistas, mestres da cultura popular e instituições parceiras em diferentes territórios da Região Metropolitana de Belo Horizonte e entorno.
            </p>
            <p>
              Com sede em Pedro Leopoldo (MG), o ITA desenvolve ações orientadas pelos princípios da Cultura Viva, da valorização dos saberes ancestrais, da diversidade cultural e do intercâmbio dos agentes culturais locais, consolidando-se como um articulador regional em rede, contribuindo para o aumento do senso de pertencimento comunitário e a geração de renda.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-block">
        <div className="mission-photo image-reveal">
          <img src={assetPath("/images/official/depoimento-barbara-ione-estudantes.jpg")} alt="Bárbara e Ione, estudantes do ITA, em um abraço" />
        </div>
        <div className="mission-text">
          <p className="kicker reveal">Nossa missão</p>
          <h2 className="reveal">Fortalecer quem faz o território florescer.</h2>
          <p className="reveal">
            Promover o fortalecimento de pessoas, comunidades e territórios por
            meio da educação, da cultura, da valorização dos saberes ancestrais
            e do cuidado integral, cultivando pertencimento, autonomia e
            cooperação para impulsionar o desenvolvimento social, econômico e
            sustentável. O ITA atua conectando ancestralidade, inovação e
            formação humana para ampliar oportunidades, fortalecer identidades
            e contribuir para a construção de uma sociedade mais justa, diversa
            e comprometida com o bem viver.
          </p>
        </div>
      </section>

      <section className="values-section section">
        <div className="values-heading reveal">
          <p className="section-index">O que nos orienta</p>
          <h2>Valores que viram prática.</h2>
        </div>
        <div className="values-grid">
          {values.map(([number, title, text]) => (
            <article className="value-card reveal" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="acting-section section">
        <div className="acting-heading reveal">
          <p className="section-index">Nossa atuação</p>
          <div>
            <h2>Muitas frentes.<br /><em>Um compromisso.</em></h2>
            <p>
              O ITA atua em diversas frentes conectadas, com base no respeito
              aos saberes populares, à ancestralidade e ao bem viver.
            </p>
          </div>
        </div>
        <div className="acting-areas">
          {actionAreas.map(([number, title, detail]) => (
            <article className="acting-area reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              {detail && <p>{detail}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="acting-programs section">
        <div className="acting-programs-heading reveal">
          <p className="section-index">Frentes em prática</p>
          <h2>Atuação que transforma territórios.</h2>
        </div>
        <div className="acting-program-grid">
          {actionPrograms.map(({ number, title, lead, items }) => (
            <article className="acting-program-card reveal" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p className="acting-program-lead">{lead}</p>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="acting-commitment section">
        <div className="acting-principles reveal">
          <p className="section-index">Princípios e público-alvo</p>
          <h2>Para quem fazemos.</h2>
          <ul>
            {actionPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
          <p className="acting-audience">
            Mulheres, negritudes, pessoas LGBTQIAPN+, povos tradicionais,
            indígenas e comunidades periféricas.
          </p>
        </div>
        <div className="acting-impact reveal">
          <p className="section-index">Impacto e compromisso</p>
          <h2>Nosso impacto vai além da técnica.</h2>
          <ul>
            {actionImpacts.map((impact) => <li key={impact}>{impact}</li>)}
          </ul>
          <p className="acting-closing">
            Com sede em Pedro Leopoldo — MG, atuamos por uma sociedade mais
            justa, solidária e sustentável.
          </p>
        </div>
      </section>
    </main>
  );
}
