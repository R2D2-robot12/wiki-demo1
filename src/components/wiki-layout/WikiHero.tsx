type WikiHeroProps = {
  title: string;
  image: string;
  alt?: string;
  subtitle?: string;
};

const WikiHero = ({ title, image, alt, subtitle }: WikiHeroProps) => {
  return (
    <section className="wiki-hero" aria-label={`${title} hero`}>
      <div className="wiki-hero-card">
        <img src={image} alt={alt ?? title} />
        <div className="wiki-hero-overlay" aria-hidden="true" />
        <h1 className="wiki-hero-title">{title}</h1>
        {subtitle ? <p className="wiki-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
};

export default WikiHero;
