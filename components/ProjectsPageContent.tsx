"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ProjectTableGroup } from "@/components/ProjectTable";
import type { Project, ProjectCategory } from "@/data/projects";

function scrollToHash(hash: string) {
  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface ProjectsPageContentProps {
  groupedProjects: Record<ProjectCategory, Project[]>;
}

export default function ProjectsPageContent({
  groupedProjects,
}: ProjectsPageContentProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/projects/list") return;

    const hash = window.location.hash;
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHash(hash), 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return <ProjectTableGroup groupedProjects={groupedProjects} />;
}
