interface PageHeroProps {
  subtitle: string;
  title: string;
  titleClassName?: string;
  extraBlurs?: boolean;
}

export default function PageHero({
  subtitle,
  title,
  titleClassName = "max-w-3xl",
  extraBlurs = false,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />
      {extraBlurs && (
        <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-3xl" />
      )}

      <div className="page-hero-inner">
        <div className="page-hero-copy">
          <p className="page-subtitle">{subtitle}</p>
          <h1 className={`page-title mt-5 ${titleClassName}`}>{title}</h1>
        </div>
      </div>
    </section>
  );
}
