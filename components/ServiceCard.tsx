interface ServiceCardProps {
  title: string;
  summary: string;
  items: string[];
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  title,
  summary,
  items,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-card-border bg-brand-card transition-colors hover:border-brand-blue/30">
      <div className="relative h-52 overflow-hidden sm:h-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-brand-blue"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
          {summary}
        </p>

        <ul className="mt-6 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-gray-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
