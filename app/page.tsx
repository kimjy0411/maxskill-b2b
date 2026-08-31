import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BusinessAreaCard from "@/components/BusinessAreaCard";
import { companyInfo, services, getServiceCardItems } from "@/data/company";
import { businessAreas } from "@/data/businessAreas";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Services Preview */}
      <section className="section-container py-20 sm:py-28">
        <SectionHeading
          label="Our Services"
          title="업무분야"
          description="Piping Design, Stress Analysis, 3D CAD, 설계 IT 분야의 전문 엔지니어링 서비스를 제공합니다."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              summary={service.summary}
              items={getServiceCardItems(service)}
              image={service.image}
              imageAlt={service.imageAlt}
              imageContain={service.id === "piping"}
            />
          ))}
        </div>
      </section>

      {/* Blue CTA Banner */}
      <section className="bg-brand-blue">
        <div className="section-container py-20 text-center sm:py-24">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {companyInfo.vision}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            고객 만족을 통해 &apos;Good Company&apos;가 되겠습니다.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full bg-brand-blue-dark px-8 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:brightness-110"
          >
            회사소개 보기
          </Link>
        </div>
      </section>

      {/* Business Areas Preview */}
      <section className="section-container py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Business Areas"
            title="사업분야"
            description="화공, 발전, LNG, 산업설비 분야의 배관 설계 엔지니어링 서비스를 제공합니다."
          />
          <Link
            href="/projects"
            className="brand-font shrink-0 text-sm text-brand-blue hover:text-brand-blue-dark"
          >
            자세히 보기 →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {businessAreas.map((area) => (
            <BusinessAreaCard key={area.id} area={area} />
          ))}
        </div>
      </section>
    </main>
  );
}
