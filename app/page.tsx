import Link from "next/link";
import { assetPath } from "./lib/asset-path";

const highlights = [
  { value: "1.200", label: "pessoas diretamente impactadas" },
  { value: "324", label: "pessoas acolhidas/beneficiadas com as ações de saúde do ITA - Instituto Terra Ancestral", emphasis: "health", badge: "Saúde" },
  { value: "473", label: "participações em oficinas e cursos gratuitos do ITA" },
  { value: "643", label: "participações em eventos culturais e Feira ITA", emphasis: "fair", badge: "Feira ITA" },
];

const featuredActions = [
  {
    index: "01",
    eyebrow: "Cerâmica e patrimônio",
    title: "Animais paleontológicos",
    text: "O barro dá forma à memória do território e aos animais que atravessam sua história paleontológica.",
    image: "/images/official/home-ceramica-paleontologica.jpg",
    imageAlt: "Animais paleontológicos modelados em cerâmica durante formação do ITA",
    href: "/acoes/ceramica",
  },
  {
    index: "02",
    eyebrow: "Agroecologia",
    title: "Remédios da Terra",
    text: "Cultivo, plantas medicinais e saberes ancestrais fortalecem autonomia, cuidado e vínculo com a terra.",
    image: "/images/official/home-agroecologia.jpg",
    imageAlt: "Turma de agroecologia reunida em uma horta",
    href: "/acoes/agroecologia",
  },
  {
    index: "03",
    eyebrow: "Corte e costura",
    title: "Tradições têxteis",
    text: "Criação, técnica e identidade se encontram na produção de peças ligadas às celebrações e tradições culturais.",
    image: "/images/official/home-corte-costura.jpg",
    imageAlt: "Participantes trabalhando com tecidos em atividade de corte e costura",
    href: "/acoes/costura-criativa",
  },
  {
    index: "04",
    eyebrow: "Bonecas ancestrais",
    title: "Memória e identidade",
    text: "Bonecas e figuras simbólicas transformam fibras, tecidos e histórias em tecnologias de cuidado e resistência.",
    image: "/images/official/bonecas-ancestrais.jpg",
    imageAlt: "Boneca ancestral produzida durante formação do ITA",
    href: "/acoes/bonecas-ancestrais",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="home-hero-content">
          <p className="kicker hero-enter">Instituto Terra Ancestral · Pedro Leopoldo, MG</p>
          <h1 className="hero-enter delay-1">Raízes que<br /><em>movem o futuro.</em></h1>
          <p className="hero-lead hero-enter delay-2">
            Cultura, educação e cuidado para fortalecer pessoas, comunidades e territórios.
          </p>
          <div className="hero-actions hero-enter delay-3">
            <Link className="button button-light" href="/acoes">
              Conheça nossas ações <span aria-hidden="true">↗</span>
            </Link>
            <Link className="plain-link" href="/quem-somos">Descubra o ITA</Link>
            <Link className="button button-pink" href="/apoie">
              Apoie o ITA <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>ancestralidade</span><span>pertencimento</span><span>transformação</span>
        </div>
      </section>

      <section className="home-intro section">
        <div className="section-index reveal">01 / Instituto</div>
        <div>
          <p className="display-copy reveal">
            Saberes ancestrais, formação humana e inovação social <strong>em movimento.</strong>
          </p>
          <div className="home-intro-row reveal">
            <p>O ITA é uma organização da sociedade civil com sede em Pedro Leopoldo, Minas Gerais.</p>
            <p>Conectamos cultura, educação, geração de renda e cuidado integral para cultivar o bem viver nos territórios.</p>
            <Link className="circle-link" href="/quem-somos" aria-label="Conheça o Instituto">
              <span>Conheça<br />o Instituto</span><b aria-hidden="true">↗</b>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-feature">
        <div className="feature-photo image-reveal">
          <img src={assetPath("/images/official/logo-1-3-colorida.png")} alt="Identidade visual colorida do Instituto Terra Ancestral" />
        </div>
        <div className="feature-copy">
          <p className="kicker reveal">Cultura viva</p>
          <h2 className="reveal">Formação, produção e transformação de saberes.</h2>
          <p className="reveal">Oficinas, cursos, vivências e encontros construídos com quem guarda, pratica e reinventa os saberes de Minas Gerais.</p>
          <Link className="button button-dark reveal" href="/acoes">Ver todas as frentes</Link>
        </div>
      </section>

      <section className="home-action-highlights section">
        <div className="home-action-highlights-heading reveal">
          <p className="section-index">Formações em destaque</p>
          <h2>Saberes que ganham forma.</h2>
          <p>Conheça quatro experiências que conectam território, criação, ancestralidade e autonomia.</p>
        </div>
        <div className="home-action-grid">
          {featuredActions.map((action) => (
            <Link className="home-action-card reveal" href={action.href} key={action.title}>
              <div className="home-action-image image-reveal">
                <img src={assetPath(action.image)} alt={action.imageAlt} loading="lazy" />
              </div>
              <div className="home-action-card-body">
                <div className="home-action-meta">
                  <span>{action.index}</span>
                  <p>{action.eyebrow}</p>
                </div>
                <h3>{action.title}</h3>
                <p>{action.text}</p>
                <strong>Conheça a formação <span aria-hidden="true">↗</span></strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-impact section">
        <div className="impact-title reveal">
          <p className="kicker">Impacto 2025–2026</p>
          <h2>Presença que transforma.</h2>
        </div>
        <div className="impact-list">
          {highlights.map((item, index) => (
            <article
              className={`reveal delay-${index + 1}${item.emphasis ? ` impact-featured impact-${item.emphasis}` : ""}`}
              key={item.label}
            >
              <div className={`impact-badge-slot${item.badge ? " has-badge" : ""}`}>
                {item.badge && <small className="impact-badge">{item.badge}</small>}
              </div>
              <strong>{item.value}</strong><span>{item.label}</span>
            </article>
          ))}
        </div>
        <Link className="impact-link reveal" href="/impacto">
          Conheça nosso alcance <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="social-strip">
        <div className="social-photo image-reveal">
          <img src={assetPath("/images/official/feira-ita.jpg")} alt="Peças artesanais expostas na Feira ITA" />
        </div>
        <div className="social-copy">
          <span className="social-icon" aria-hidden="true">◎</span>
          <p className="kicker">Acompanhe o cotidiano</p>
          <h2>ITA nas redes</h2>
          <p>Veja de perto as ações, encontros, parcerias e histórias que fazem o Instituto Terra Ancestral.</p>
          <div className="social-links-row">
            <a href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.youtube.com/@itainstitutoterraancestral" target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a>
            <a href="https://www.facebook.com/@itagerais/" target="_blank" rel="noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            <a href="https://www.tiktok.com/@ita.gerais" target="_blank" rel="noreferrer">TikTok <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>
  );
}
