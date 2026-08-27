import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import HeroSlideshow from "@/components/HeroSlideshow";
import { companyInfo, history } from "@/data/company";

export default function AboutPage() {
  return (
    <main>
      <HeroSlideshow>
        <div className="section-container py-28 sm:py-32 lg:py-36">
          <p className="page-subtitle">About Us</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">회사</span>소개
          </h1>
          <p className="mt-6 max-w-4xl break-keep text-base leading-8 text-gray-300 sm:text-lg">
            화공, 발전, LNG 분야 플랜트 엔지니어링 전문기업으로 Piping Design,
            Stress Analysis, 3D CAD,
            <br />
            설계 IT 분야의 축적된 기술력을 바탕으로 최고의 솔루션을
            제공합니다.
          </p>
        </div>
      </HeroSlideshow>

      {/* Vision */}
      <section className="overflow-hidden bg-brand-dark">
        <div className="flex items-stretch">
          <div className="relative h-[260px] w-[42%] min-w-[220px] max-w-[560px] shrink-0 overflow-hidden sm:h-[300px] lg:h-[340px]">
            <Image
              src="/images/about/ceo.png"
              alt={`${companyInfo.ceoTitle} ${companyInfo.ceoName}`}
              fill
              quality={95}
              className="origin-[52%_42%] scale-[1.45] object-cover object-[52%_42%]"
              sizes="(min-width: 1024px) 560px, 42vw"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center px-6 py-8 text-center sm:px-10 lg:px-16">
            <div>
              <p className="page-subtitle">Vision</p>
              <h2 className="mt-3 whitespace-nowrap text-[clamp(0.85rem,2.1vw,1.85rem)] font-bold text-white">
                {companyInfo.vision}
              </h2>
              <p className="mt-3 whitespace-nowrap break-keep text-sm text-gray-300 sm:text-base">
                고객 만족을 통해 &apos;Good Company&apos;가 되겠습니다.
              </p>
              <div className="mt-6 flex flex-col items-center">
                <Image
                  src="/images/about/ceo-signature.png"
                  alt={`${companyInfo.ceoName} 서명`}
                  width={200}
                  height={46}
                  unoptimized
                  className="h-10 w-auto sm:h-11"
                />
                <p className="mt-2 text-sm font-medium text-gray-200 sm:text-base">
                  {companyInfo.ceoTitle} {companyInfo.ceoName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-container py-20 sm:py-28">
        <SectionHeading
          label="History"
          title="회사 연혁"
          description="2004년 설립 이래 플랜트 엔지니어링 분야의 전문성을 쌓아왔습니다."
        />

        <div className="mt-14 space-y-0">
          {history.map((item) => (
            <div
              key={item.year + item.event}
              className="relative flex gap-8 border-l border-brand-card-border pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-blue" />
              <div className="shrink-0">
                <p className="brand-font text-sm text-brand-blue">{item.year}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{item.event}</p>
                <div className="mt-2 h-px w-full bg-brand-card-border" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
