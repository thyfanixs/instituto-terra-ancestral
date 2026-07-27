import Link from "next/link";

const highlights = [
  { value: "1.200", label: "pessoas diretamente impactadas" },
  { value: "205", label: "óculos entregues gratuitamente" },
  { value: "643", label: "participantes em eventos culturais" },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="orbit orbit-hero" aria-hidden="true"><i /><i /><i /></div>
        <div className="home-hero-content">
          <p className="kicker reveal">Instituto Terra Ancestral · Pedro Leopoldo, MG</p>
          <h1 className="reveal delay-1">Raízes que<br /><em>movem o futuro.</em></h1>
          <p className="hero-lead reveal delay-2">
            Cultura, educação e cuidado para fortalecer pessoas, comunidades e territórios.
          </p>
          <div className="hero-actions reveal delay-3">
            <Link className="button button-light" href="/acoes">
              Conheça nossas ações <span aria-hidden="true">↗</span>
            </Link>
            <Link className="plain-link" href="/quem-somos">Descubra o ITA</Link>
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
          <img src="/images/official/culinaria-ancestral.jpg" alt="Atividade de culinária ancestral do ITA" />
        </div>
        <div className="feature-copy">
          <p className="kicker reveal">Cultura viva</p>
          <h2 className="reveal">O território ensina. A gente faz circular.</h2>
          <p className="reveal">Oficinas, cursos, vivências e encontros construídos com quem guarda, pratica e reinventa os saberes de Minas Gerais.</p>
          <Link className="button button-dark reveal" href="/acoes">Ver todas as frentes</Link>
        </div>
      </section>

      <section className="home-impact section">
        <div className="impact-title reveal">
          <p className="kicker">Impacto 2025–2026</p>
          <h2>Presença que transforma.</h2>
        </div>
        <div className="impact-list">
          {highlights.map((item, index) => (
            <article className={`reveal delay-${index + 1}`} key={item.label}>
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
          <img src="/images/official/feira-ita.jpg" alt="Peças artesanais expostas na Feira ITA" />
        </div>
        <div className="social-copy">
          <span className="social-icon" aria-hidden="true">◎</span>
          <p className="kicker">Acompanhe o cotidiano</p>
          <h2>@ita.gerais</h2>
          <p>Veja de perto as ações, encontros, parcerias e histórias que fazem o Instituto Terra Ancestral.</p>
          <a className="button button-pink" href="https://www.instagram.com/ita.gerais/" target="_blank" rel="noreferrer">
            Seguir no Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
