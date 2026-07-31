import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Acompanhe as aparições do Instituto Terra Ancestral na imprensa e em veículos de comunicação.",
};

const news = [
  {
    source: "POR DENTRO DE TUDO",
    date: "27 JUN 2026",
    dateTime: "2026-06-27",
    title: "MARÃIWÁ – Feira ITA reúne cultura, ancestralidade e empreendedorismo",
    summary: "A imprensa local destaca a programação gratuita da Feira ITA, com apresentações artísticas, artesanato indígena, gastronomia afro-brasileira, exposições, cinema, roda de conversa e produções dos cursos do Instituto.",
    href: "https://www.instagram.com/reel/DaF7XQ0Oabg/",
  },
  {
    source: "POR DENTRO DE TUDO",
    date: "26 JUN 2026",
    dateTime: "2026-06-26",
    title: "Pedro Leopoldo recebe a MARÃIWÁ – Feira ITA",
    summary: "A notícia apresenta a Feira ITA como um encontro gratuito de arte, cultura, ancestralidade, economia criativa, gastronomia, cinema, sarau e formação comunitária.",
    href: "https://www.instagram.com/reel/DaD3he0BXVC/",
  },
  {
    source: "O TEMPO",
    date: "25 SET 2025",
    dateTime: "2025-09-25",
    title: "Instituto inaugura sede com programação cultural",
    summary: "A reportagem apresenta a inauguração da sede do ITA na Grande BH e a programação cultural preparada para celebrar esse novo ciclo.",
    href: "https://www.otempo.com.br/entretenimento/2025/9/25/instituto-de-promove-ancestralidade-na-grande-bh-inaugura-sede-com-programacao-cultural",
  },
  {
    source: "ITATIAIA",
    date: "10 SET 2025",
    dateTime: "2025-09-10",
    title: "Entrevista do ITA no programa Rádio Vivo",
    summary: "Participação do Instituto Terra Ancestral no Rádio Vivo, da Itatiaia, em uma conversa sobre sua atuação, seus projetos e o impacto construído nos territórios.",
    href: "https://www.youtube.com/live/_1HxDAnnRPA?si=h-OHmxHDjzQ6mG0v&t=114",
  },
  {
    source: "O TEMPO",
    date: "05 SET 2025",
    dateTime: "2025-09-05",
    title: "Projeto promove ancestralidade com cursos gratuitos e contínuos",
    summary: "A matéria destaca a formação oferecida pelo Instituto, com cursos gratuitos que conectam ancestralidade, território e geração de oportunidades.",
    href: "https://www.otempo.com.br/entretenimento/2025/9/5/projeto-promove-a-ancestralidade-com-cursos-gratuitos-e-continuos-na-grande-bh",
  },
  {
    source: "O TEMPO",
    date: "26 JUN 2025",
    dateTime: "2025-06-26",
    title: "Evento em Pedro Leopoldo propaga saberes ancestrais",
    summary: "A cobertura anuncia uma programação do ITA dedicada à circulação de saberes ancestrais e à valorização das memórias culturais em Pedro Leopoldo.",
    href: "https://www.otempo.com.br/cidades/2025/6/26/evento-em-pedro-leopoldo-propaga-saberes-ancestrais-no-proximo-sabado",
  },
];

export default function Noticias() {
  return (
    <main className="news-page">
      <PageHero
        index="06"
        eyebrow="Notícias"
        title="ITA na"
        accent="mídia."
        description="Reportagens e publicações que ajudam a ampliar a voz, a presença e o impacto do Instituto Terra Ancestral."
        image="/images/official/teatro-negro.jpg"
        imageAlt="Participantes unidos em uma atividade do Instituto Terra Ancestral"
        tone="blue"
      />

      <section className="news-section section">
        <div className="news-intro">
          <p className="section-index reveal">Imprensa e repercussão</p>
          <div>
            <h2 className="reveal">Onde o ITA<br />ganhou voz.</h2>
            <p className="reveal">
              Reunimos aqui matérias que registram as ações, conquistas e caminhos
              construídos pelo Instituto junto à comunidade.
            </p>
          </div>
        </div>

        <div className="news-list">
          {news.map((item, index) => (
            <a
              className={`news-card reveal delay-${index + 1}`}
              href={item.href}
              key={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Ler no ${item.source}: ${item.title}`}
            >
              <span className="news-index">0{index + 1}</span>
              <div className="news-meta">
                <strong>{item.source}</strong>
                <time dateTime={item.dateTime}>{item.date}</time>
              </div>
              <div className="news-story">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
              <span className="news-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
