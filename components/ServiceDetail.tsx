import Image from "next/image";
import type { Service } from "@/data/services";
import { getServiceItemImage } from "@/data/serviceItemImages";

interface ServiceDetailProps {
  service: Service;
  sectionId?: string;
}

export default function ServiceDetail({
  service,
  sectionId,
}: ServiceDetailProps) {
  return (
    <article
      id={sectionId}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-brand-card-border bg-brand-card sm:scroll-mt-32"
    >
      <div className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
          priority={sectionId === "piping"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/30 to-transparent" />
      </div>

      <div className="p-8 sm:p-10 lg:p-12">
        <p className="page-subtitle">Service</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {service.title}
        </h2>
        <p className="mt-4 text-base font-medium text-brand-blue sm:text-lg">
          {service.summary}
        </p>

        <div className="mt-8 space-y-5">
          {service.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="break-keep text-base leading-8 text-gray-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 rounded-xl border border-brand-card-border bg-brand-dark/50 px-4 py-3 text-sm leading-7 text-gray-200"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-14 space-y-14">
          {service.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
              <div className="mt-2 h-px w-full bg-brand-card-border" />
              <p className="mt-4 break-keep text-sm leading-7 text-gray-400">
                {section.description}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  const itemImage = getServiceItemImage(
                    service.id,
                    item.name,
                  );

                  return (
                    <div
                      key={item.name}
                      className="overflow-hidden rounded-xl border border-brand-card-border bg-brand-dark/40"
                    >
                      {itemImage && (
                        <div
                          className={
                            itemImage.imageContainerClass ??
                            "relative h-56 overflow-hidden bg-brand-dark sm:h-64"
                          }
                        >
                          <Image
                            src={itemImage.src}
                            alt={itemImage.alt}
                            fill
                            className={
                              itemImage.imageClass ?? "object-cover object-center"
                            }
                            sizes="(max-width: 1024px) 100vw, 512px"
                          />
                        </div>
                      )}
                      <div
                        className={
                          itemImage.imageBodyClass ??
                          "px-4 pb-5 pt-3 sm:px-5 sm:pb-6 sm:pt-4"
                        }
                      >
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="mt-1.5 break-keep text-xs leading-6 text-gray-400 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
