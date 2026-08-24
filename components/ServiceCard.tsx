import Image from "next/image";

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
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <h3 className="whitespace-nowrap text-xl font-bold text-white">{title}</h3>
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
