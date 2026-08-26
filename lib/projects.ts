import { projects as fallbackProjects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";
import { fetchProjectsFromGoogleSheet } from "@/lib/googleSheetProjects";

export function computeProjectStats(projectList: Project[]) {
  return {
    total: projectList.length,
    화공: projectList.filter((p) => p.category === "화공").length,
    발전: projectList.filter((p) => p.category === "발전").length,
    LNG: projectList.filter((p) => p.category === "LNG").length,
    산업설비: projectList.filter((p) => p.category === "산업설비").length,
  };
}

export function groupProjects(
  projectList: Project[],
): Record<ProjectCategory, Project[]> {
  return {
    화공: projectList.filter((p) => p.category === "화공"),
    발전: projectList.filter((p) => p.category === "발전"),
    LNG: projectList.filter((p) => p.category === "LNG"),
    산업설비: projectList.filter((p) => p.category === "산업설비"),
  };
}

export async function getProjects(): Promise<Project[]> {
  const csvUrl = process.env.GOOGLE_SHEETS_PROJECTS_CSV_URL;

  if (!csvUrl) {
    return fallbackProjects;
  }

  try {
    const sheetProjects = await fetchProjectsFromGoogleSheet(csvUrl);
    if (sheetProjects.length === 0) {
      console.warn(
        "Google Sheet returned no valid projects; using local fallback.",
      );
      return fallbackProjects;
    }
    return sheetProjects;
  } catch (error) {
    console.error("Failed to load projects from Google Sheet:", error);
    return fallbackProjects;
  }
}

export async function getProjectsPageData() {
  const projectList = await getProjects();

  return {
    projects: projectList,
    groupedProjects: groupProjects(projectList),
    projectStats: computeProjectStats(projectList),
    source: process.env.GOOGLE_SHEETS_PROJECTS_CSV_URL ? "sheet" : "local",
  } as const;
}
