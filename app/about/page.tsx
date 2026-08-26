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
          <div className="relative h-[180px] w-[160px] shrink-0 sm:h-[210px] sm:w-[200px] lg:h-[230px] lg:w-[240px]">
            <Image
              src="/images/about/ceo.png"
              alt="대표이사"
              fill
              className="object-cover object-[52%_18%]"
              sizes="240px"
              priority
            />
          </div>

          <div className="flex flex-1 items-center px-5 py-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="page-subtitle">Vision</p>
              <h2 className="mt-2 text-lg font-bold leading-snug text-white sm:mt-3 sm:text-2xl lg:text-3xl">
                {companyInfo.vision}
              </h2>
              <p className="mt-2 break-keep text-sm text-gray-300 sm:mt-3 sm:text-base">
                고객 만족을 통해 &apos;Good Company&apos;가 되겠습니다.
              </p>
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
