import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";

const columns = [
  { key: "name", label: "프로젝트", accent: "text-brand-tan" },
  { key: "client", label: "발주처", accent: "text-brand-blue" },
  { key: "category", label: "분야", accent: "text-brand-blue" },
  { key: "year", label: "Year", accent: "text-brand-blue" },
  { key: "location", label: "Location", accent: "text-brand-blue" },
  { key: "service", label: "Service", accent: "text-brand-blue" },
  { key: "tool", label: "Tool", accent: "text-brand-blue" },
] as const;

const categoryLabels: Record<
  ProjectCategory,
  { ko: string; en: string; badge: string }
> = {
  화공: { ko: "화공", en: "Petrochemical Plant", badge: "bg-brand-tan text-black" },
  발전: { ko: "발전", en: "Power Plant", badge: "bg-brand-blue text-white" },
  LNG: { ko: "LNG", en: "LNG Plant", badge: "bg-emerald-500 text-white" },
  산업설비: {
    ko: "산업설비",
    en: "Industrial Facilities",
    badge: "bg-violet-500 text-white",
  },
};

interface ProjectTableProps {
  projects: Project[];
  showCategoryBadge?: boolean;
  category?: ProjectCategory;
}

function TableHeader() {
  return (
    <thead>
      <tr className="border-b border-white/10">
        {columns.map((col) => (
          <th
            key={col.key}
            className={`whitespace-nowrap px-5 py-4 text-left text-sm font-extrabold tracking-wide sm:px-6 sm:text-base ${col.accent}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody({ projects }: { projects: Project[] }) {
  return (
    <tbody>
      {projects.map((project, index) => (
        <tr
          key={project.id}
          className={`border-b border-white/5 transition-colors hover:bg-white/[0.03] ${
            index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
          }`}
        >
          <td className="px-5 py-4 text-sm font-semibold leading-relaxed text-white sm:px-6 sm:text-base">
            {project.name}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-300 sm:px-6 sm:text-base">
            {project.client}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-300 sm:px-6 sm:text-base">
            {project.category}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-300 sm:px-6 sm:text-base">
            {project.year}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-300 sm:px-6 sm:text-base">
            {project.location}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-300 sm:px-6 sm:text-base">
            {project.service ?? "-"}
          </td>
          <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-300 sm:px-6 sm:text-base">
            {project.tool ?? "-"}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default function ProjectTable({
  projects,
  showCategoryBadge = false,
  category,
}: ProjectTableProps) {
  const label = category ? categoryLabels[category] : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-card">
      {showCategoryBadge && label && (
        <div className="border-b border-white/10 px-6 py-4">
          <span
            className={`inline-block rounded-lg px-4 py-2 text-sm font-extrabold tracking-wide sm:text-base ${label.badge}`}
          >
            {label.ko} {label.en}
          </span>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1280px] table-fixed border-collapse">
          <colgroup>
            <col style={{ width: "32%" }} />
            <col style={{ width: "22%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: "9%" }} />
          </colgroup>
          <TableHeader />
          <TableBody projects={projects} />
        </table>
      </div>
    </div>
  );
}

export function ProjectTableGroup({
  groupedProjects,
}: {
  groupedProjects: Record<ProjectCategory, Project[]>;
}) {
  return (
    <div className="space-y-10 sm:space-y-14">
      {projectCategories.map((category) => {
        const items = groupedProjects[category] ?? [];
        const label = categoryLabels[category];

        return (
          <div
            key={category}
            id={category}
            className="scroll-mt-28 sm:scroll-mt-32"
          >
            {items.length > 0 ? (
              <ProjectTable
                projects={items}
                category={category}
                showCategoryBadge
              />
            ) : (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-card">
                <div className="border-b border-white/10 px-6 py-4">
                  <span
                    className={`inline-block rounded-lg px-4 py-2 text-sm font-extrabold tracking-wide sm:text-base ${label.badge}`}
                  >
                    {label.ko} {label.en}
                  </span>
                </div>
                <p className="px-6 py-8 text-sm text-gray-400">
                  등록된 프로젝트가 없습니다.
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
