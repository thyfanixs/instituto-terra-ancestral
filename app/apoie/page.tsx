import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Apoie",
  description: "Conheça formas de apoiar as ações do Instituto Terra Ancestral.",
};

const supportWays = [
  { number: "01", title: "Incentivo fiscal", text: "Destine parte do imposto devido a projetos aprovados do Instituto, conforme o mecanismo, os limites e o período de captação aplicáveis." },
  { number: "02", title: "Parceria institucional", text: "Some recursos, conhecimento, estrutura ou oportunidades a uma ação construída com o território." },
  { number: "03", title: "Apoio direto", text: "Contribua para cursos, eventos, cuidado comunitário e manutenção das atividades do Instituto." },
];

export default function Apoie() {
  return (
    <main>
      <PageHero
        index="04"
        eyebrow="Apoie"
        title="Sua escolha"
        accent="move territórios."
        description="Pessoas e organizações podem ajudar o ITA a ampliar o acesso à cultura, à formação e ao cuidado."
        image="/images/official/biojoias.jpg"
        imageAlt="Biojoias e artesanatos produzidos em atividades do Instituto"
        tone="wine"
      />

      <section className="support-intro section">
        <div className="support-intro-copy reveal">
          <p className="section-index">Faça parte</p>
          <h2>Transforme imposto em impacto social.</h2>
        </div>
        <p className="reveal">
          Empresas e pessoas físicas podem apoiar projetos sociais por meio de
          mecanismos de incentivo fiscal, quando houver projeto aprovado e
          captação vigente. O ITA orienta o apoiador com os dados oficiais de
          cada oportunidade.
        </p>
      </section>

      <section className="support-ways section">
        {supportWays.map((way) => (
          <article className="support-card reveal" key={way.number}>
            <span>{way.number}</span><h3>{way.title}</h3><p>{way.text}</p>
          </article>
        ))}
      </section>

      <section className="incentive-panel">
        <div className="incentive-art" aria-hidden="true">
          <span>IMPACTO</span><span>IMPACTO</span><span>IMPACTO</span>
        </div>
        <div className="incentive-content reveal">
          <p className="kicker">Projeto incentivado</p>
          <h2>Fale com o ITA antes de destinar.</h2>
          <p>
            O mecanismo legal, o número de aprovação, o período de captação e os
            dados bancários devem sempre ser confirmados nos documentos oficiais
            do projeto vigente.
          </p>
          <div className="info-note">
            <strong>Transparência em primeiro lugar</strong>
            <span>Esta página não substitui orientação contábil ou tributária.</span>
          </div>
          <Link className="button button-light" href="/contato">Quero apoiar</Link>
        </div>
      </section>
    </main>
  );
}
