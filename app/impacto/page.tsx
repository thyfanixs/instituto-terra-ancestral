import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Impacto",
  description: "Veja o alcance social e territorial das ações do Instituto Terra Ancestral.",
};

const territories = ["Pedro Leopoldo", "Belo Horizonte", "Sete Lagoas", "Confins", "Matozinhos", "Capim Branco", "Jequitibá"];

const institutionalPartnerships = [
  {
    territory: "Belo Horizonte",
    partners: ["Associação QuinTao das Artes", "Companhia artística teAtodo amanhã", "MandakNega — espaço gastronômico, cultural e afro-brasileiro", "G.E.S.T.O UFMG — Grupo de Estudos do Simbólico e Técnico da Olaria"],
  },
  { territory: "Sete Lagoas", partners: ["Alcunha Negada — espaço gastronômico, cultural e afro-brasileiro"] },
  { territory: "Confins", partners: ["CERC"], note: "Parceiro institucional na realização de cursos de Cerâmica, Grafite e Artesanato de Bonecas." },
  {
    territory: "Matozinhos",
    partners: ["Terreiro de Umbanda TUFF", "Quintal das Pretas e Companhia Pé de Pano", "Quintal das Marias", "Garagem Cultural"],
  },
  { territory: "Capim Branco", partners: ["Eco das Artes", "KombiCine e Cultura em Rota"] },
  { territory: "Jequitibá", partners: ["Guarda de Massambique Nossa Senhora do Santíssimo Sacramento", "Guardas da Irmandade do Rosário de Jequitibá/MG"] },
  {
    territory: "Pedro Leopoldo",
    partners: ["Festas de Congado e Folias de Reis e Guarda Congo Nossa Senhora do Rosário", "SEABRA — Coletivo de Empreendedores Negros", "Secretaria de Bem Estar e Cultura de Pedro Leopoldo", "Poesia a La Carte", "Grupo Ancês de Teatro Negro", "Ceramistas Maria Quem Dera"],
  },
];

const partnershipPhotos = [
  { src: "/images/gallery/parcerias/01.jpg", caption: "Jequitibá · Guardas da Irmandade do Rosário" },
  { src: "/images/gallery/parcerias/02.jpg", caption: "Sete Lagoas · Alcunha Negada" },
  { src: "/images/gallery/parcerias/03.jpg", caption: "Confins · CERC" },
  { src: "/images/gallery/parcerias/04.jpg", caption: "Confins · CERC" },
  { src: "/images/gallery/parcerias/05.jpg", caption: "Confins · CERC" },
  { src: "/images/gallery/parcerias/06.jpg", caption: "Confins · CERC" },
  { src: "/images/gallery/parcerias/07.jpg", caption: "Capim Branco · Eco das Artes" },
  { src: "/images/gallery/parcerias/08.jpg", caption: "Capim Branco · Eco das Artes" },
  { src: "/images/gallery/parcerias/09.jpg", caption: "Capim Branco · Eco das Artes" },
  { src: "/images/gallery/parcerias/10.jpg", caption: "Matozinhos · Garagem Cultural" },
  { src: "/images/gallery/parcerias/11.jpg", caption: "Matozinhos · Garagem Cultural" },
  { src: "/images/gallery/parcerias/12.jpg", caption: "Belo Horizonte · GESTO UFMG" },
  { src: "/images/gallery/parcerias/13.jpg", caption: "Matozinhos · Quintal das Pretas" },
  { src: "/images/gallery/parcerias/14.jpg", caption: "Belo Horizonte · QuinTao das Artes" },
  { src: "/images/gallery/parcerias/15.jpg", caption: "Belo Horizonte · QuinTao das Artes" },
  { src: "/images/gallery/parcerias/16.jpg", caption: "Belo Horizonte · QuinTao das Artes" },
  { src: "/images/gallery/parcerias/17.jpg", caption: "Matozinhos · Terreiro de Umbanda TUFF" },
];

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
          <article className="reveal"><strong>259</strong><span>pessoas acolhidas/beneficiadas com as ações de saúde do ITA - Instituto Terra Ancestral</span></article>
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
          <img src={assetPath("/images/official/parceria-jequitiba.jpg")} alt="Encontro realizado em parceria institucional" />
        </div>
      </section>

      <section className="institutional-partnerships section">
        <div className="institutional-partnerships-heading reveal">
          <p className="section-index">Relações institucionais</p>
          <div>
            <p className="kicker">Parcerias por território</p>
            <h2>Uma rede que faz acontecer.</h2>
            <p>O ITA atua em aliança com coletivos, espaços culturais, grupos tradicionais, universidades e instituições públicas.</p>
          </div>
        </div>
        <div className="partnership-territories">
          {institutionalPartnerships.map((item, index) => (
            <article className="partnership-territory reveal" key={item.territory}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.territory}</h3>
              <ul>
                {item.partners.map((partner) => <li key={partner}>{partner}</li>)}
              </ul>
              {item.note && <p>{item.note}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="partnership-gallery section">
        <div className="partnership-gallery-heading reveal">
          <p className="section-index">Parcerias em imagens</p>
          <h2>Territórios conectados.</h2>
          <p>Registros das instituições, coletivos e grupos que constroem ações junto com o ITA.</p>
        </div>
        <div className="partnership-photo-grid">
          {partnershipPhotos.map((photo) => (
            <figure className="reveal" key={photo.src}>
              <img src={assetPath(photo.src)} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="impact-quote section">
        <blockquote className="reveal">“O impacto acontece quando o conhecimento encontra espaço para circular.”</blockquote>
      </section>
    </main>
  );
}
