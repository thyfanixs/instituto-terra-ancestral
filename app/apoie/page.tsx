import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import { assetPath } from "../lib/asset-path";

export const metadata: Metadata = {
  title: "Apoie",
  description: "Conheça formas de apoiar as ações do Instituto Terra Ancestral.",
};

const supportWays = [
  { number: "01", title: "Incentivo fiscal", text: "Destine parte do imposto devido a projetos aprovados do Instituto, conforme o mecanismo, os limites e o período de captação aplicáveis." },
  { number: "02", title: "Parceria institucional", text: "Some recursos, conhecimento, estrutura ou oportunidades a uma ação construída com o território." },
  { number: "03", title: "Apoio direto", text: "Contribua para cursos, eventos, cuidado comunitário e manutenção das atividades do Instituto." },
  { number: "04", title: "Bazar ITA", text: "O Bazar Beneficente Reconvexo fortalece e ajuda a garantir a continuidade das ações do Instituto." },
];

const partnershipLinks = [
  { label: "E-mail", value: "institutoita.gerais@gmail.com", href: "mailto:institutoita.gerais@gmail.com" },
  { label: "WhatsApp", value: "(31) 97243-2240", href: "https://wa.me/5531972432240" },
  { label: "Instagram", value: "@ita.gerais", href: "https://www.instagram.com/ita.gerais/" },
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
        image="/images/official/thayna-vini-feira-ita.jpg"
        imageAlt="Thayná e Vini durante a Feira ITA"
        tone="wine"
      />

      <section className="support-intro section">
        <div className="support-intro-copy reveal">
          <p className="section-index">Apoie o ITA</p>
          <h2>Faça parte dessa transformação.</h2>
        </div>
        <p className="reveal">
          Apoie o Instituto Terra Ancestral e faça parte da transformação que a
          cultura, a educação e a economia criativa promovem em nossa
          comunidade.
        </p>
      </section>

      <section className="pix-section">
        <div className="pix-heading reveal">
          <p className="kicker">Contribuição direta</p>
          <h2>PIX CNPJ</h2>
          <strong>60.485.003/0001-94</strong>
        </div>
        <div className="pix-copy reveal">
          <p>
            Empresas, empreendedores(as) e pessoas que acreditam no poder da
            arte como ferramenta de inclusão, geração de oportunidades e
            fortalecimento dos territórios podem caminhar conosco nessa missão.
          </p>
          <p>
            Sua contribuição ajuda a manter e ampliar nossas ações, cursos
            gratuitos e projetos de impacto social.
          </p>
          <p><strong>Contribua via PIX (CNPJ): 60.485.003/0001-94.</strong></p>
          <div className="pix-actions">
            <div>
              <span>Chave PIX · CNPJ</span>
              <strong>60.485.003/0001-94</strong>
            </div>
          </div>
          <div className="partnership-links">
            <p className="kicker">Obter parceria</p>
            <p>Quer construir uma ação conosco? Escolha o melhor canal para conversar com o ITA.</p>
            <div>
              {partnershipLinks.map((contact) => (
                <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span>{contact.label}</span><strong>{contact.value}</strong><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="support-ways section">
        {supportWays.map((way) => (
          <article className="support-card reveal" key={way.number}>
            <span>{way.number}</span><h3>{way.title}</h3><p>{way.text}</p>
          </article>
        ))}
      </section>

      <section className="bazar-section">
        <div className="bazar-image image-reveal">
          <img src={assetPath("/images/official/armazem-ita.jpg")} alt="Espaço do Armazém ITA" />
        </div>
        <div className="bazar-copy">
          <p className="kicker reveal">Bazar ITA</p>
          <h2 className="reveal">Bazar Beneficente Reconvexo.</h2>
          <p className="reveal">
            O Bazar Beneficente Reconvexo nasceu da iniciativa, produção e
            organização de estudantes do Instituto Terra Ancestral (ITA),
            movidos pelo desejo de fortalecer e garantir a continuidade das
            ações do Instituto.
          </p>
          <p className="reveal">
            Cada peça adquirida representa um gesto de apoio à cultura, à
            educação e à transformação social que o ITA promove em seu
            território. Todo o valor arrecadado é integralmente destinado à
            manutenção e ao fortalecimento das ações, projetos e atividades
            desenvolvidos pelo Instituto Terra Ancestral.
          </p>
          <a className="button button-dark reveal" href="tel:+5531972432240">
            Falar com o ITA
          </a>
        </div>
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
          <div className="partnership-links partnership-links-light">
            <p className="kicker">Vamos conversar</p>
            <div>
              {partnershipLinks.map((contact) => (
                <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                  <span>{contact.label}</span><strong>{contact.value}</strong><b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
