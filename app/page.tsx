import Link from "next/link";
import { assetPath } from "./lib/asset-path";

const highlights = [
  { value: "1.200", label: "pessoas diretamente impactadas" },
  { value: "324", label: "pessoas acolhidas/beneficiadas com as ações de saúde do ITA - Instituto Terra Ancestral", emphasis: "health", badge: "Saúde" },
  { value: "473", label: "pessoas em oficinas e cursos gratuitos do ITA" },
  { value: "643", label: "pessoas em eventos culturais e Feira ITA", emphasis: "fair", badge: "Feira ITA" },
];

const featuredActions = [
  {
    index: "01",
    eyebrow: "Cerâmica",
    title: "Cotidiano e patrimônio",
    text: "O barro dá forma à memória do território e aos animais que atravessam sua história paleontológica.",
    image: "/images/official/home-ceramica-paleontologica.jpg",
    imageAlt: "Peças de cerâmica produzidas durante formação do ITA",
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
  {
    index: "05",
    eyebrow: "Ofícios tradicionais",
    title: "Marcenaria criativa",
    text: "Madeira, sustentabilidade e reaproveitamento se encontram na criação de peças autorais inspiradas no território.",
    image: "/images/official/marcenaria-criativa-card.jpeg",
    imageAlt: "Participante trabalhando a madeira durante formação de marcenaria criativa",
    href: "/acoes/marcenaria-criativa",
  },
  {
    index: "06",
    eyebrow: "Arte indígena",
    title: "Biojoias indígenas e macramê",
    text: "Sementes, pedras, fibras naturais e técnicas de macramê valorizam natureza, identidade cultural e saberes indígenas.",
    image: "/images/official/biojoias.jpg",
    imageAlt: "Produção de biojoias indígenas e peças em macramê durante formação do ITA",
    href: "/acoes/biojoias-e-macrame",
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
          <h1 className="hero-enter delay-1">Saberes Ancestrais,<br /><em>Caminhos Para o Futuro!</em></h1>
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
          <img src={assetPath("/images/official/home-ceramica.webp")} alt="Mestra ceramista apresentando uma peça produzida em barro" />
        </div>
        <div className="feature-copy">
          <p className="kicker reveal">Cultura viva</p>
          <h2 className="reveal">Transmissão, produção e transformação de saberes.</h2>
          <p className="reveal">Oficinas, cursos, vivências e encontros construídos com quem guarda, pratica e reinventa os saberes de Minas Gerais.</p>
          <Link className="button button-dark reveal" href="/acoes">Ver todas as frentes</Link>
        </div>
      </section>

      <section className="home-action-highlights section">
        <div className="home-action-highlights-heading reveal">
          <p className="section-index">Formações em destaque</p>
          <h2>Saberes que ganham forma.</h2>
          <p>Conheça as experiências que conectam território, criação, ancestralidade e autonomia.</p>
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

      <section className="home-testimonial-spotlight">
        <div className="home-testimonial-image image-reveal">
          <img
            src={assetPath("/images/testimonials/natasha.webp")}
            alt="Natasha, estudante do ITA, durante uma atividade de cerâmica"
            loading="lazy"
          />
        </div>
        <div className="home-testimonial-copy reveal">
          <p className="kicker">Vozes do ITA</p>
          <span className="home-testimonial-mark" aria-hidden="true">“</span>
          <blockquote>
            Aqui, eu posso ser Natasha 100%, sem me esconder, sem me omitir.
          </blockquote>
          <div>
            <p><strong>Natasha</strong><span>Teatro Negro, Cerâmica e Economia Criativa</span></p>
            <Link className="button button-light" href="/impacto/#depoimentos">
              Conheça todos os depoimentos <span aria-hidden="true">↗</span>
            </Link>
          </div>
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
        <div className="impact-actions reveal">
          <Link className="impact-link" href="/impacto">
            Conheça nosso alcance <span aria-hidden="true">→</span>
          </Link>
          <Link className="impact-testimonials-link" href="/impacto/#depoimentos">
            <span>Vozes do ITA</span>
            <strong>Conheça os depoimentos</strong>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
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
