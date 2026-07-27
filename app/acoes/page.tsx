import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Ações",
  description: "Conheça os cursos, vivências, eventos e ações culturais do Instituto Terra Ancestral.",
};

const actions = [
  { title: "Agroecologia", category: "Terra e cuidado", image: "/images/official/agroecologia.jpg", text: "Cultivo, compostagem, plantas medicinais e saberes que aproximam pessoas e território." },
  { title: "Cerâmica", category: "Arte e memória", image: "/images/official/ceramica.jpg", text: "Criação com a terra, expressão artística e transmissão de técnicas ancestrais." },
  { title: "Culinária ancestral", category: "Saberes e sabores", image: "/images/official/culinaria-ancestral.jpg", text: "Receitas, ingredientes e modos de preparo afro-indígenas compartilhados entre gerações." },
  { title: "Teatro negro", category: "Corpo e identidade", image: "/images/official/teatro-negro.jpg", text: "Expressão, presença e reconhecimento das narrativas negras em cena." },
  { title: "Biojoias e macramê", category: "Economia criativa", image: "/images/official/biojoias.jpg", text: "Fazer artesanal, identidade e geração de renda conectados em cada peça." },
  { title: "Grafite", category: "Arte urbana", image: "/images/official/grafite.jpg", text: "Juventude, território e memória transformando espaços por meio da arte." },
  { title: "Caderno artesanal", category: "Formação", image: "/images/official/caderno-artesanal.jpg", text: "Criação manual, autonomia produtiva e circulação de conhecimentos." },
  { title: "Feira ITA", category: "Cultura em rede", image: "/images/official/feira-ita.jpg", text: "Artesanato, apresentações, encontros e fortalecimento da economia local." },
];

export default function Acoes() {
  return (
    <main>
      <PageHero
        index="02"
        eyebrow="Ações"
        title="Saberes em"
        accent="movimento."
        description="Cursos, oficinas, vivências, feiras e encontros que conectam formação, cultura, autonomia e cuidado."
        image="/images/official/teatro-negro.jpg"
        imageAlt="Participantes em atividade do curso de teatro negro"
        tone="orange"
      />

      <section className="actions-page section">
        <div className="actions-page-heading reveal">
          <p className="section-index">Experiências que transformam</p>
          <h2>Muitos caminhos.<br />Um mesmo propósito.</h2>
          <p>As ações do ITA reconhecem cultura, saúde, educação e economia como dimensões inseparáveis da vida comunitária.</p>
        </div>
        <div className="action-gallery">
          {actions.map((action, index) => (
            <article className={`gallery-card reveal card-${index + 1}`} key={action.title}>
              <div><img src={action.image} alt={`Registro da ação ${action.title}`} /></div>
              <p className="eyebrow">{action.category}</p>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="culture-banner">
        <div className="culture-banner-photo image-reveal">
          <img src="/images/official/congadar.jpg" alt="Evento cultural com participação do Congadar" />
        </div>
        <div className="culture-banner-copy reveal">
          <p className="kicker">Cultura viva</p>
          <h2>Encontro é também tecnologia social.</h2>
          <p>Eventos culturais, rodas de conversa e articulações fortalecem redes, celebram identidades e fazem os saberes circularem.</p>
        </div>
      </section>
    </main>
  );
}
