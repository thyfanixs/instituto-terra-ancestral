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
    partners: ["Associação QuinTao das Artes", "Companhia artística teAtodo amanhã", "MandakNega — espaço gastronômico, cultural e afro-brasileiro", "G.E.S.T.O UFMG — Grupo de Estudos do Simbólico e Técnico da Olaria", "Comitê de Cultura de Minas Gerais"],
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
  { src: "/images/gallery/parcerias/17.jpg", caption: "Matozinhos · Terreiro de Umbanda TUFF" },
];

const testimonials = [
  {
    name: "Rafaela Carneiro",
    course: "Cerâmica e Economia Criativa",
    image: "/images/testimonials/rafaela.webp",
    quote: "Sinto que há uma liberdade para a criação e para adotarmos o ritmo de aprendizado mais coerente com nossas habilidades. Além disso, expandiu-se minha percepção sobre temas e conceitos que estavam engessados dentro do meu repertório. O curso de cerâmica vai muito além das técnicas de modelagem do barro. Resgatou em mim um olhar contemplativo, a possibilidade de seguir um ritmo de produção leve e conectado com minha criatividade, possibilitou que eu criasse vínculos com pessoas incríveis, me oportunizou escutar e aprender com as histórias e experiências dos colegas, além de me possibilitar sentir pertencente a um grupo no qual as diferenças são tesouros e não problemas.",
  },
  {
    name: "Bárbara",
    course: "Cerâmica, Economia Criativa, Biojoias Indígenas e Macramê",
    image: "/images/testimonials/barbara.webp",
    quote: "O ITA é ótimo, muito organizado e ambiente acolhedor. Professoras capacitadas e pacientes. Recursos de qualidade e com a quantidade suficiente. A estrutura é muito boa e tem uma ótima localização. Pessoas boas existem, e lugares acolhedores também! Minha vida mudou depois que comecei os cursos no ITA. Os encontros em dias de estudo geram muito aprendizado. Sinto que estarei capacitada para desenvolver as atividades ensinadas e estar no local é muito bom, ambiente muito agradável!",
  },
  {
    name: "Iorrany",
    course: "Grafite e Economia Criativa",
    image: "/images/testimonials/iorrany.webp",
    quote: "É um curso que aprimora meu lado artístico, aqui no ITA tenho possibilidade de crescer e desenvolver habilidades e oportunidade de me expressar! O ITA é um lugar super acolhedor além de ajudar a expandir muitos horizontes, conhecer pessoas de todos os tipos e desenvolver seu intelecto de uma forma incrível. Felicidade e admiração.",
  },
  {
    name: "Isabella",
    course: "Cerâmica, Biojoias Indígenas, Macramê e Economia Criativa",
    image: "/images/testimonials/isabella.webp",
    quote: "O ITA oferece curso de qualidade e dispõe de professoras e equipe muito bem qualificadas. Além de se possuir um ambiente que atende totalmente as necessidades dos cursos ofertados. O futuro é coletivo. No ITA tive a oportunidade de desenvolver habilidades manuais, o que no mercado formal de trabalho, não é possível. O trabalho desenvolvido no Instituto é muito sério e acredito que poderei colocar em prática tudo o que estou aprendendo, de forma profissional.",
  },
  {
    name: "Marcelo",
    course: "Cerâmica, Teatro Negro e Economia Criativa",
    image: "/images/testimonials/marcelo.webp",
    quote: "As pessoas envolvidas nas atividades, além de profissionais, são muito atenciosas. A maneira que somos recebidos é de um carinho enorme, as professoras são muito competentes. Resgate a cultura da nossa cidade.",
  },
  {
    name: "Natasha",
    course: "Teatro Negro, Cerâmica e Economia Criativa",
    image: "/images/testimonials/natasha.webp",
    quote: "É tudo muito organizado, com professoras qualificadas e atividades bem projetadas. O ITA é muito acolhedor. Aqui, eu posso ser Natasha 100%, sem me esconder, sem me omitir.",
  },
  {
    name: "Vitória",
    course: "Teatro Negro · parceria com o Grupo Ancês",
    image: "/images/testimonials/vitoria.webp",
    quote: "As aulas têm sido incríveis! A didática do curso e espaço são acolhedores, permitindo aprender diferentes técnicas e tornando a experiência ainda melhor. O curso está contribuindo muito para a minha formação e atuação artística/profissional. Sim, eu pretendo continuar minha trajetória artística/cultural após o curso de Teatro Negro. Em uma escala de 0 a 10: 10. Eu indico os cursos e atividades do ITA para outras pessoas. Renascimento. O curso tem sido um reencontro com diversas possibilidades e aprendizados que carrego para a minha vida pessoal e profissional!",
  },
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
          <article className="reveal"><strong>324</strong><span>pessoas acolhidas/beneficiadas com as ações de saúde do ITA - Instituto Terra Ancestral</span></article>
          <article className="reveal"><strong>473</strong><span>participações em oficinas e cursos gratuitos do ITA</span></article>
          <article className="reveal"><strong>643</strong><span>participações em eventos culturais e Feira ITA</span></article>
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

      <section className="testimonials-section section">
        <div className="testimonials-heading reveal">
          <p className="section-index">Vozes do ITA</p>
          <div>
            <p className="kicker">Depoimentos</p>
            <h2>Impacto contado por quem vive.</h2>
            <p>Os resultados também aparecem nas trajetórias de quem encontra no ITA um espaço de formação, expressão, acolhimento e pertencimento.</p>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article
              className={`testimonial-card reveal${index === 0 ? " testimonial-featured" : ""}`}
              key={testimonial.name}
            >
              <div className="testimonial-media">
                <img
                  src={assetPath(testimonial.image)}
                  alt={`Retrato de ${testimonial.name}, estudante do ITA`}
                  loading="lazy"
                />
              </div>
              <div className="testimonial-copy">
                <span className="testimonial-number">{String(index + 1).padStart(2, "0")}</span>
                <blockquote>{testimonial.quote}</blockquote>
                <footer>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.course}</span>
                  </div>
                  <p><span>Indicaria o ITA</span><strong>10/10</strong></p>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
