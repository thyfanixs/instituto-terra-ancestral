type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  tone?: "orange" | "pink" | "blue" | "wine";
};

export default function PageHero({ index, eyebrow, title, accent, description, image, imageAlt, tone = "orange" }: PageHeroProps) {
  return (
    <section className={`page-hero tone-${tone}`}>
      <div className="page-hero-copy">
        <div className="section-index reveal">{index} / {eyebrow}</div>
        <h1 className="reveal delay-1">{title}<br /><em>{accent}</em></h1>
        <p className="reveal delay-2">{description}</p>
      </div>
      <div className="page-hero-image image-reveal">
        <img src={image} alt={imageAlt} /><span aria-hidden="true">ITA</span>
      </div>
    </section>
  );
}
