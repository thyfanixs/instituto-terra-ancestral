const programs = [
  {
    number: "01",
    title: "Formação e trabalho",
    text: "Cursos que unem arte, negócio e propósito, fortalecendo autonomia, geração de renda e a transmissão de saberes.",
    tone: "orange",
  },
  {
    number: "02",
    title: "Ancestralidade e cultura",
    text: "Ações de salvaguarda das tradições afro-indígenas, festas populares, religiosidade, memória e patrimônio vivo.",
    tone: "pink",
  },
  {
    number: "03",
    title: "Saúde e bem viver",
    text: "Cuidado integral, escuta comunitária, saúde visual e acesso responsável a práticas de promoção do bem-estar.",
    tone: "olive",
  },
  {
    number: "04",
    title: "Arte e comunidade",
    text: "Cinema, rodas de conversa, feiras e eventos que ampliam o acesso à arte e fortalecem redes locais.",
    tone: "blue",
  },
];

const featuredActions = [
  {
    eyebrow: "Formação",
    title: "Economia criativa",
    text: "Arte, negócio e propósito conectados ao território, às identidades e à comercialização do trabalho criativo.",
    image: "/images/portfolio/page-07-01.jpeg",
    alt: "Encontro de formação do curso de Economia Criativa",
  },
  {
    eyebrow: "Terra e cuidado",
    title: "Agroecologia",
    text: "Saberes ancestrais e científicos reunidos em práticas de cultivo, compostagem e uso de plantas medicinais.",
    image: "/images/portfolio/page-08-02.jpeg",
    alt: "Turma do curso de Agroecologia reunida",
  },
  {
    eyebrow: "Memória e identidade",
    title: "Culinária ancestral",
    text: "Receitas, ingredientes e modos de preparo afro-indígenas transmitidos entre gerações.",
    image: "/images/portfolio/page-15-01.jpeg",
    alt: "Participantes durante atividade de culinária ancestral",
  },
  {
    eyebrow: "Economia solidária",
    title: "Feira ITA",
    text: "Circulação de saberes, produtos artesanais, apresentações culturais e fortalecimento das redes locais.",
    image: "/images/portfolio/page-21-01.jpeg",
    alt: "Artesanatos e biojoias expostos na Feira ITA",
  },
];

const values = [
  "Ancestralidade",
  "Pertencimento",
  "Educação",
  "Cuidado integral",
  "Cooperação",
  "Diversidade",
  "Sustentabilidade",
  "Ética e transparência",
];

const territories = [
  "Pedro Leopoldo",
  "Belo Horizonte",
  "Sete Lagoas",
  "Confins",
  "Matozinhos",
  "Capim Branco",
  "Jequitibá",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Instituto Terra Ancestral - início">
          <img src="/images/portfolio/page-01-02.png" alt="" />
          <span>
            <strong>Instituto</strong>
            Terra Ancestral
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Quem somos</a>
          <a href="#atuacao">Atuação</a>
          <a href="#impacto">Impacto</a>
          <a href="#territorios">Territórios</a>
        </nav>
        <a className="header-cta" href="#contato">
          Faça parte
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-rings rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content">
          <p className="kicker">Instituto Terra Ancestral · Pedro Leopoldo, MG</p>
          <h1>
            Raízes que
            <br />
            <em>movem o futuro.</em>
          </h1>
          <p className="hero-copy">
            Cultura, educação e cuidado para fortalecer pessoas, comunidades e
            territórios.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#atuacao">
              Conheça nossas ações
            </a>
            <a className="text-link" href="#sobre">
              Descubra o ITA <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-note">Ancestralidade · pertencimento · transformação</p>
      </section>

      <section className="intro section" id="sobre">
        <div className="section-label">
          <span>01</span>
          Quem somos
        </div>
        <div className="intro-content">
          <p className="display-copy">
            Somos uma organização da sociedade civil que conecta{" "}
            <strong>saberes ancestrais</strong>, formação humana e inovação social.
          </p>
          <div className="intro-grid">
            <p>
              Com sede em Pedro Leopoldo, o ITA atua na difusão, articulação e
              fortalecimento das culturas afro-indígenas em diferentes territórios
              da Região Metropolitana de Belo Horizonte e entorno.
            </p>
            <p>
              Articulamos coletivos, artistas, mestres da cultura popular e
              instituições parceiras para ampliar oportunidades, fortalecer
              identidades e cultivar o bem viver.
            </p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="mission-image">
          <img
            src="/images/portfolio/page-06-01.jpeg"
            alt="Roda de conversa reunindo participantes do Instituto Terra Ancestral"
          />
          <div className="image-stamp" aria-hidden="true">
            ITA
          </div>
        </div>
        <div className="mission-copy">
          <p className="kicker">Nossa missão</p>
          <h2>Fortalecer quem faz o território florescer.</h2>
          <p>
            Promover o fortalecimento de pessoas, comunidades e territórios por
            meio da educação, da cultura, da valorização dos saberes ancestrais e
            do cuidado integral.
          </p>
          <blockquote>
            “Ancestralidade, inovação e formação humana para uma sociedade mais
            justa, diversa e comprometida com o bem viver.”
          </blockquote>
        </div>
      </section>

      <section className="programs section" id="atuacao">
        <div className="section-heading">
          <div className="section-label section-label-light">
            <span>02</span>
            Como atuamos
          </div>
          <h2>Muitos caminhos.<br />Um mesmo propósito.</h2>
          <p>
            Ações conectadas que reconhecem cultura, saúde, educação e economia
            como dimensões inseparáveis da vida comunitária.
          </p>
        </div>
        <div className="program-grid">
          {programs.map((program) => (
            <article className={`program-card ${program.tone}`} key={program.number}>
              <span>{program.number}</span>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
              <div className="card-mark" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="actions section">
        <div className="actions-heading">
          <div>
            <div className="section-label">
              <span>03</span>
              Ações em destaque
            </div>
            <h2>Saberes que se tornam experiência.</h2>
          </div>
          <p>
            Oficinas, cursos, vivências e encontros construídos com quem guarda e
            reinventa os saberes dos territórios.
          </p>
        </div>
        <div className="action-grid">
          {featuredActions.map((action) => (
            <article className="action-card" key={action.title}>
              <div className="action-image">
                <img src={action.image} alt={action.alt} />
              </div>
              <p className="eyebrow">{action.eyebrow}</p>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
            </article>
          ))}
        </div>
        <p className="actions-footnote">
          O portfólio institucional apresenta também formações em cerâmica,
          costura criativa, grafite, teatro negro, marcenaria, biojoias, bonecas
          ancestrais e outros fazeres.
        </p>
      </section>

      <section className="impact" id="impacto">
        <div className="impact-rings rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="impact-heading">
          <p className="kicker">Impacto 2025–2026</p>
          <h2>Presença que transforma.</h2>
          <p>
            Formação, cultura, cuidado, economia e ancestralidade circulando em
            rede.
          </p>
        </div>
        <div className="stats">
          <div>
            <strong>1.200</strong>
            <span>pessoas diretamente impactadas</span>
          </div>
          <div>
            <strong>205</strong>
            <span>óculos entregues gratuitamente</span>
          </div>
          <div>
            <strong>643</strong>
            <span>participantes em eventos culturais</span>
          </div>
          <div>
            <strong>13</strong>
            <span>formações apresentadas no portfólio</span>
          </div>
        </div>
        <p className="source-note">Dados do portfólio institucional do ITA.</p>
      </section>

      <section className="values section">
        <div className="values-copy">
          <div className="section-label">
            <span>04</span>
            O que nos orienta
          </div>
          <h2>Valores que viram prática.</h2>
          <p>
            Cada ação nasce do respeito às memórias, às pessoas e aos modos de
            vida que sustentam os territórios.
          </p>
        </div>
        <ol className="value-list">
          {values.map((value, index) => (
            <li key={value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {value}
            </li>
          ))}
        </ol>
      </section>

      <section className="territories" id="territorios">
        <div className="territory-photo">
          <img
            src="/images/portfolio/page-02-01.jpeg"
            alt="Mestra tocando tambor em uma atividade cultural"
          />
        </div>
        <div className="territory-content">
          <p className="kicker">Articulação territorial</p>
          <h2>Uma rede com raízes em Minas Gerais.</h2>
          <p>
            O ITA constrói parcerias com coletivos, terreiros, grupos culturais,
            universidades, equipamentos públicos e organizações comunitárias.
          </p>
          <div className="territory-tags" aria-label="Territórios de atuação">
            {territories.map((territory) => (
              <span key={territory}>{territory}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-mark">
          <img src="/images/portfolio/page-01-02.png" alt="" />
        </div>
        <div className="contact-copy">
          <p className="kicker">Construa essa história com a gente</p>
          <h2>Vamos fortalecer territórios juntos?</h2>
          <p>
            Para propor uma parceria, apoiar uma ação ou conhecer melhor o
            Instituto Terra Ancestral, entre em contato.
          </p>
          <div className="contact-actions">
            <a className="button button-dark" href="mailto:institutoita.gerais@gmail.com">
              Enviar uma mensagem
            </a>
            <a className="phone-link" href="tel:+5531972432240">
              (31) 97243-2240
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <strong>Instituto Terra Ancestral</strong>
          <span>Cultura · educação · cuidado</span>
        </div>
        <address>
          Rua Jornalista Nicolau Neto, 293, Portal das Acácias
          <br />
          Pedro Leopoldo · MG · 33254-226
        </address>
        <a href="mailto:institutoita.gerais@gmail.com">
          institutoita.gerais@gmail.com
        </a>
        <p>© 2026 ITA</p>
      </footer>
    </main>
  );
}
