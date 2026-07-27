import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com o Instituto Terra Ancestral e acompanhe suas redes sociais.",
};

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
          <a className="contact-card social-card reveal" href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">
            <span>Instagram</span><strong>@ita.gerais</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card youtube-card reveal" href="https://www.youtube.com/@itainstitutoterraancestral" target="_blank" rel="noreferrer">
            <span>YouTube</span><strong>ITA Instituto Terra Ancestral</strong><b aria-hidden="true">↗</b>
          </a>
          <a className="contact-card facebook-card reveal" href="https://www.facebook.com/@itagerais/" target="_blank" rel="noreferrer">
            <span>Facebook</span><strong>ITA - Instituto Terra Ancestral</strong><b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-image image-reveal">
          <img src="/images/official/sede.jpg" alt="Entrada do Instituto Terra Ancestral" />
        </div>
        <div className="visit-copy reveal">
          <p className="kicker">Nossa sede</p>
          <h2>Venha encontrar o ITA.</h2>
          <address>
            Rua Jornalista Nicolau Neto, 293<br />
            Portal das Acácias<br />
            Pedro Leopoldo · MG · 33254-226
          </address>
        </div>
      </section>
    </main>
  );
}
