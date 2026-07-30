import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o Instituto Terra Ancestral e acompanhe suas redes sociais.",
};

const spacePhotos = [
  {
    src: "/images/gallery/contato/01-teatro-negro.webp",
    alt: "Participantes reunidos em abraço durante o curso de Teatro Negro",
  },
  {
    src: "/images/gallery/contato/02-circulo-terapeutico.webp",
    alt: "Participantes em atividade coletiva no espaço do Instituto Terra Ancestral",
  },
  {
    src: "/images/gallery/contato/03-ceramica-oficina.webp",
    alt: "Oficina de cerâmica realizada no Instituto Terra Ancestral",
  },
  {
    src: "/images/gallery/contato/04-ceramica-turma.webp",
    alt: "Turma de cerâmica apresenta as peças produzidas durante a formação",
  },
  {
    src: "/images/gallery/contato/05-caderno-artesanal.webp",
    alt: "Participantes exibem trabalhos produzidos na oficina de caderno artesanal",
  },
  {
    src: "/images/gallery/contato/06-agroecologia.webp",
    alt: "Turma da ação de agroecologia realizada em parceria pelo ITA",
  },
];

export default function Contato() {
  return (
    <main>
      <PageHero
        index="05"
        eyebrow="Contato"
        title="Vamos construir"
        accent="juntos?"
        description="Proponha uma parceria, apoie uma ação ou venha conhecer mais de perto o Instituto Terra Ancestral."
        image="/images/official/armazem-ita.jpg"
        imageAlt="Espaço do Armazém ITA"
        tone="pink"
      />

      <section className="contact-page section">
        <div className="contact-lead reveal">
          <p className="section-index">Fale com a gente</p>
          <h2>Uma conversa pode abrir muitos caminhos.</h2>
        </div>
        <div className="contact-cards">
          <a className="contact-card reveal" href="mailto:institutoita.gerais@gmail.com">
            <span>E-mail</span><strong>institutoita.gerais@gmail.com</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card reveal" href="tel:+5531972432240">
            <span>Telefone / WhatsApp</span><strong>(31) 97243.2240</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card reveal" href="https://www.institutoterraancestral.com.br">
            <span>Site</span><strong>www.institutoterraancestral.com.br</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card social-card reveal" href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">
            <span>Instagram</span><strong>@ita.gerais</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card youtube-card reveal" href="https://www.youtube.com/@itainstitutoterraancestral" target="_blank" rel="noreferrer">
            <span>YouTube</span><strong>ITA Instituto Terra Ancestral</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card facebook-card reveal" href="https://www.facebook.com/@itagerais/" target="_blank" rel="noreferrer">
            <span>Facebook</span><strong>ITA - Instituto Terra Ancestral</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card tiktok-card reveal" href="https://www.tiktok.com/@ita.gerais" target="_blank" rel="noreferrer">
            <span>TikTok</span><strong>@ita.gerais</strong><b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-image image-reveal">
          <img src={assetPath("/images/official/sede.jpg")} alt="Entrada do Instituto Terra Ancestral" />
        </div>
        <div className="visit-copy reveal">
          <p className="kicker">Nossa sede</p>
          <h2>Venha encontrar o ITA.</h2>
          <address>
            Rua Jornalista Nicolau Neto, 293<br />
            Portal das Acácias<br />
            Pedro Leopoldo · MG · 33254-226
          </address>
          <a
            className="visit-map-link"
            href="https://www.google.com/maps/search/?api=1&query=Rua%20Jornalista%20Nicolau%20Neto%2C%20293%2C%20Pedro%20Leopoldo%2C%20MG%2C%2033254-226"
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps ↗
          </a>
          <div className="visit-map">
            <iframe
              title="Localização do Instituto Terra Ancestral"
              src="https://www.google.com/maps?q=Rua%20Jornalista%20Nicolau%20Neto%2C%20293%2C%20Pedro%20Leopoldo%2C%20MG%2C%2033254-226&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="space-gallery section">
        <div className="space-gallery-heading reveal">
          <p className="section-index">Espaço ITA</p>
          <h2>Uma casa de encontros.</h2>
        </div>
        <div className="space-gallery-grid">
          {spacePhotos.map((photo) => (
            <figure className="image-reveal" key={photo.src}>
              <img src={assetPath(photo.src)} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
