import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectTable from "@/components/ProjectTable";
import { companyInfo, capabilities, services, getServiceCardItems } from "@/data/company";
import { getProjects } from "@/lib/projects";

export const revalidate = 300;

export default async function HomePage() {
  const projects = await getProjects();
  const featuredProjects = projects.slice(0, 5);

  return (
    <main>
      <HeroSection />
      {/* Capability Stats */}
      <section className="border-y border-white/5 bg-brand-card">
        <div className="section-container grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {capabilities.map((cap) => (
            <div key={cap.label} className="px-4 py-10 text-center">
              <p className="text-3xl font-bold text-brand-blue sm:text-4xl">
                {cap.value}
                <span className="ml-1 text-lg text-gray-400">{cap.unit}</span>
              </p>
              <p className="mt-2 text-sm text-gray-400">{cap.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-container py-20 sm:py-28">
        <SectionHeading
          label="Our Services"
          title="사업 영역"
          description="Piping Design, Stress Analysis, 3D CAD, Programming 분야의 전문 엔지니어링 서비스를 제공합니다."
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
            회사 소개 보기
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-container-wide py-20 sm:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Projects"
            title="프로젝트"
            description="화공, 발전, LNG 분야에서 축적된 프로젝트 경험"
          />
          <Link
            href="/projects"
            className="brand-font shrink-0 text-sm text-brand-blue hover:text-brand-blue-dark"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="mt-14 -mx-2 sm:mx-0">
          <ProjectTable projects={featuredProjects} />
        </div>
      </section>
    </main>
  );
}
