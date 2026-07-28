import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Quem somos",
  description: "Conheça a missão, os valores e a atuação territorial do Instituto Terra Ancestral.",
};

const values = [
  ["01", "Ancestralidade", "Reconhecemos as memórias e os saberes que atravessam gerações."],
  ["02", "Pertencimento", "Criamos espaços onde identidades e vínculos comunitários podem florescer."],
  ["03", "Educação", "Aprendemos com a experiência, a troca e a diversidade de conhecimentos."],
  ["04", "Cuidado integral", "Entendemos corpo, mente, cultura e território como dimensões conectadas."],
  ["05", "Cooperação", "Construímos em rede, com escuta, reciprocidade e responsabilidade."],
  ["06", "Ética e transparência", "Cuidamos das relações e dos recursos com seriedade e clareza."],
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
