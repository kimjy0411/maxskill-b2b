import Link from "next/link";
import BusinessAreasContent from "@/components/BusinessAreasContent";
import { businessAreas, pickFeaturedProjects } from "@/data/businessAreas";
import { getProjects } from "@/lib/projects";

export const revalidate = 300;

export const metadata = {
  title: "사업분야 | MAXSKILL",
  description:
    "화공, 발전, LNG, 산업설비 분야의 배관 설계 엔지니어링 서비스를 제공합니다.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  const areas = businessAreas.map((area) => ({
    ...area,
    featured: pickFeaturedProjects(projects, area),
  }));

  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Business Areas</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">사업</span>분야
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-gray-400 sm:text-lg">
            화공, 발전, LNG, 산업설비 분야의 배관 설계 엔지니어링 서비스를
            제공합니다.
          </p>
          <Link
            href="/projects/list"
            className="mt-8 inline-flex rounded-full bg-brand-blue px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
          >
            프로젝트 리스트
          </Link>
        </div>
      </section>

      <BusinessAreasContent areas={areas} />
    </main>
  );
}
