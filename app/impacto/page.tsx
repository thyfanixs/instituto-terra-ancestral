import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Impacto",
  description: "Veja o alcance social e territorial das ações do Instituto Terra Ancestral.",
};

const territories = ["Pedro Leopoldo", "Belo Horizonte", "Sete Lagoas", "Confins", "Matozinhos", "Capim Branco", "Jequitibá"];

export default function Impacto() {
  return (
    <main>
      <PageHero
        index="03"
        eyebrow="Impacto"
        title="Presença que"
        accent="transforma."
        description="Formação, cultura, cuidado, economia e ancestralidade circulando em rede por Minas Gerais."
        image="/images/official/sede.jpg"
        imageAlt="Fachada da sede do Instituto Terra Ancestral"
        tone="blue"
      />

      <section className="numbers-section section">
        <div className="numbers-heading reveal">
          <p className="section-index">Impacto 2025–2026</p>
          <h2>Resultados que têm rosto, história e território.</h2>
        </div>
        <div className="big-numbers">
          <article className="reveal"><strong>1.200</strong><span>pessoas diretamente impactadas</span></article>
          <article className="reveal"><strong>205</strong><span>óculos entregues gratuitamente</span></article>
          <article className="reveal"><strong>643</strong><span>participantes em eventos culturais</span></article>
          <article className="reveal"><strong>13</strong><span>formações apresentadas no portfólio</span></article>
        </div>
        <p className="source-note">Fonte: portfólio institucional do Instituto Terra Ancestral.</p>
      </section>

      <section className="territory-section">
        <div className="territory-copy">
          <p className="kicker reveal">Articulação territorial</p>
          <h2 className="reveal">Uma rede com raízes em Minas Gerais.</h2>
          <p className="reveal">O ITA constrói parcerias com coletivos, grupos culturais, universidades, equipamentos públicos e organizações comunitárias.</p>
          <div className="territory-tags reveal">
            {territories.map((territory) => <span key={territory}>{territory}</span>)}
          </div>
        </div>
        <div className="territory-image image-reveal">
          <img src="/images/official/parceria-jequitiba.jpg" alt="Encontro realizado em parceria institucional" />
        </div>
      </section>

      <section className="impact-quote section">
        <blockquote className="reveal">“O impacto acontece quando o conhecimento encontra espaço para circular.”</blockquote>
      </section>
    </main>
  );
}
