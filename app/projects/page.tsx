import ProjectsPageContent from "@/components/ProjectsPageContent";
import { getProjectsPageData } from "@/lib/projects";

export const revalidate = 300;

export default async function ProjectsPage() {
  const { groupedProjects, projectStats, source } = await getProjectsPageData();

  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-blue/5 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Projects</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">프로젝트</span>
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-gray-400 sm:text-lg">
            최근 10년간 화공, 발전, LNG 분야에서 수행한 프로젝트 목록입니다.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-brand-card">
        <div className="section-container grid grid-cols-2 divide-x divide-white/5 sm:grid-cols-4">
          {[
            { label: "총 프로젝트", value: projectStats.total },
            { label: "화공", value: projectStats.화공 },
            { label: "발전", value: projectStats.발전 },
            { label: "LNG", value: projectStats.LNG },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center sm:py-10">
              <p className="text-3xl font-bold text-brand-blue sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container-wide py-16 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="page-subtitle">Project List</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              프로젝트 목록
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-400">
            Total {projectStats.total} Projects
            {source === "sheet" && (
              <span className="ml-2 text-brand-blue">· Google Sheet 연동</span>
            )}
          </p>
        </div>

        <ProjectsPageContent groupedProjects={groupedProjects} />

        <p className="mt-8 text-sm text-gray-500">
          M : Modeling · D : Design · S : Stress · C : Construction Supervisor
        </p>
      </section>
    </main>
  );
}
