import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { actionDetails } from "../action-details";
import { assetPath } from "../../lib/asset-path";

type ActionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return actionDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ActionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const action = actionDetails.find((item) => item.slug === slug);
  return action ? { title: action.title, description: action.summary } : {};
}

export default async function ActionPage({ params }: ActionPageProps) {
  const { slug } = await params;
  const action = actionDetails.find((item) => item.slug === slug);
  if (!action) notFound();

  return (
    <main className="action-detail">
      <section className="action-detail-hero">
        <div className="action-detail-copy">
          <Link className="plain-link" href="/acoes">← Todas as ações</Link>
          <p className="kicker">{action.category}</p>
          <h1>{action.title}</h1>
          <p>{action.summary}</p>
          <strong>{action.meta}</strong>
        </div>
        <img src={assetPath(action.image)} alt={`Registro da ação ${action.title}`} />
      </section>

      <section className="action-story section">
        <div className="action-story-heading">
          <p className="section-index">Como acontece</p>
          <h2>Saberes que viram prática.</h2>
        </div>
        <div className="action-story-copy">
          {action.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {action.credit && (
            <aside className="action-credit">
              <p className="eyebrow">{action.credit.label}</p>
              <h3>{action.credit.title}</h3>
              <p>{action.credit.text}</p>
            </aside>
          )}
        </div>
      </section>

      {action.photos.length > 0 && (
        <section className="action-album section">
          <div className="action-album-heading">
            <p className="section-index">Memória em imagens</p>
            <h2>Álbum da ação.</h2>
          </div>
          <div className="action-album-grid">
            {action.photos.map((photo, index) => {
              const caption = action.photoCaptions?.[photo];
              return (
                <figure key={photo}>
                  <img
                    src={assetPath(photo)}
                    alt={caption ? `${caption} em apresentação cultural` : `${action.title} — foto ${index + 1}`}
                    loading="lazy"
                  />
                  {caption && <figcaption>{caption}</figcaption>}
                </figure>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
