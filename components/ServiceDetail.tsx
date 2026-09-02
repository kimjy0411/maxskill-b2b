import Image from "next/image";
import type { Service, ServiceItem } from "@/data/services";
import { getServiceItemImage } from "@/data/serviceItemImages";

interface ServiceDetailProps {
  service: Service;
  sectionId?: string;
}

function renderServiceItemCard(
  serviceId: string,
  item: ServiceItem,
  featured: boolean,
) {
  const itemImage = getServiceItemImage(serviceId, item.name);

  return (
    <div
      key={item.name}
      className="overflow-hidden rounded-xl border border-brand-card-border bg-brand-dark/40"
    >
      {itemImage && (
        featured || itemImage.intrinsic ? (
          <div className="overflow-hidden bg-brand-dark">
            <Image
              src={itemImage.src}
              alt={itemImage.alt}
              width={featured ? 1024 : 1600}
              height={featured ? 682 : 880}
              className="block h-auto w-full"
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 1024px"
                  : "(max-width: 1024px) 100vw, 512px"
              }
              quality={95}
            />
          </div>
        ) : (
        <div
          className={
            itemImage.imageContainerClass ??
            "relative h-56 overflow-hidden bg-brand-dark sm:h-64"
          }
        >
          {itemImage.unoptimized ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={itemImage.src}
              alt={itemImage.alt}
              className={`h-full w-full ${
                itemImage.imageClass ?? "object-cover object-center"
              }`}
            />
          ) : (
            <Image
              src={itemImage.src}
              alt={itemImage.alt}
              fill
              className={itemImage.imageClass ?? "object-cover object-center"}
              sizes="(max-width: 1024px) 100vw, 512px"
              quality={95}
            />
          )}
        </div>
        )
      )}
      <div
        className={
          itemImage?.imageBodyClass ??
          "px-4 pb-5 pt-3 sm:px-5 sm:pb-6 sm:pt-4"
        }
      >
        <p
          className={
            featured
              ? "text-lg font-semibold text-white sm:text-xl"
              : "font-semibold text-white"
          }
        >
          {item.name}
        </p>
        {item.description ? (
          <p className="mt-1.5 break-keep text-xs leading-6 text-gray-400 sm:text-sm">
            {item.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function ServiceDetail({
  service,
  sectionId,
}: ServiceDetailProps) {
  const splitSections =
    service.sectionsLayout === "split"
      ? service.sections.filter((section) => section.display === "list")
      : [];
  const stackedSections =
    service.sectionsLayout === "split"
      ? service.sections.filter((section) => section.display !== "list")
      : service.sections;

  return (
    <article
      id={sectionId}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-brand-card-border bg-brand-card sm:scroll-mt-32"
    >
      <div className="p-8 sm:p-10 lg:p-12">
        <p className="page-subtitle">Service</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {service.title}
        </h2>
        <p className="mt-4 text-base font-medium text-brand-blue sm:text-lg">
          {service.summary}
        </p>
      </div>

      <div
        className={`relative overflow-hidden border-y border-white/10 ${
          service.id === "cad"
            ? "aspect-[16/9] bg-white"
            : service.id === "piping"
              ? "aspect-[16/9] bg-brand-dark"
              : "h-72 sm:h-96"
        }`}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className={
            service.id === "cad" || service.id === "piping"
              ? "object-contain object-center"
              : "object-cover"
          }
          sizes="(max-width: 768px) 100vw, 1024px"
          priority={sectionId === "piping"}
        />
      </div>

      <div className="p-8 sm:p-10 lg:p-12">
        <div className="space-y-5">
          {service.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="break-keep text-base leading-8 text-gray-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {service.highlights.length > 0 && (
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
        )}

        {service.platformLogos && service.platformLogos.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-semibold text-white">3D Platform</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {service.platformLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="flex h-14 items-center justify-center rounded-lg bg-white px-2.5 py-1.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="block h-9 w-auto object-contain object-center sm:h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {splitSections.length > 0 && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {splitSections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-brand-card-border bg-brand-dark/40 px-5 py-6 sm:px-6"
            >
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
              <div className="mt-2 h-px w-full bg-brand-card-border" />
              {section.description ? (
                <p className="mt-4 break-keep text-sm leading-7 text-gray-400">
                  {section.description}
                </p>
              ) : null}

              <ul className="mt-5 space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-3 text-sm leading-7 text-gray-200"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        )}

        {stackedSections.length > 0 && (
          <div className="mt-14 space-y-14">
            {stackedSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                <div className="mt-2 h-px w-full bg-brand-card-border" />
                {section.description ? (
                  <p className="mt-4 break-keep text-sm leading-7 text-gray-400">
                    {section.description}
                  </p>
                ) : null}

                {section.display === "list" ? (
                  <ul className="mt-6 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start gap-3 rounded-xl border border-brand-card-border bg-brand-dark/40 px-4 py-3 text-sm leading-7 text-gray-200"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                        <span>
                          {item.name}
                          {item.description ? (
                            <span className="mt-1 block break-keep text-xs leading-6 text-gray-400 sm:text-sm">
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : section.display === "featured" ? (
                  <div className="mt-6 space-y-5">
                    {section.items[0] &&
                      renderServiceItemCard(service.id, section.items[0], true)}
                    {section.items.length > 1 && (
                      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        {section.items.slice(1).map((item) =>
                          renderServiceItemCard(service.id, item, false),
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={`mt-6 grid grid-cols-1 gap-5 ${
                      section.items.length === 1 ? "" : "lg:grid-cols-2"
                    }`}
                  >
                    {section.items.map((item) =>
                      renderServiceItemCard(service.id, item, false),
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
