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
          <img src={assetPath("/images/official/rodas-de-conversa.jpg")} alt="Roda de conversa promovida pelo Instituto" />
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
    </main>
  );
}
