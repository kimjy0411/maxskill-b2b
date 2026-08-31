import type { Project, ProjectCategory } from "@/data/projects";

export interface BusinessArea {
  id: ProjectCategory;
  title: string;
  titleEn: string;
  paragraphs: string[];
  featuredNames: string[];
  image: string;
  imageAlt: string;
}

export const businessAreas: BusinessArea[] = [
  {
    id: "화공",
    title: "화공",
    titleEn: "Chemical & Petrochemical",
    paragraphs: [
      "에틸렌 크래커(Ethylene Cracker), 폴리프로필렌(Polypropylene), 암모니아(Ammonia) 등 석유화학 및 Gas 플랜트의 배관 설계에 특화된 엔지니어링 서비스를 제공합니다.",
      "고온·고압 및 저온·저압의 다양한 공정 조건을 고려하여 배관 설계를 수행하며, 배관 스트레스 해석과 서포트 설계를 체계적으로 연계하여 안전성과 신뢰성을 확보한 최적의 배관 설계 솔루션을 제공합니다.",
    ],
    featuredNames: [
      "카타르 RLP Ethylene",
      "멕시코 Pacifico Mexinol",
      "사우디 Aramco FGIP Pkg.1 Gas Processing",
    ],
    image: "/images/hero/lng.jpg",
    imageAlt: "석유화학 플랜트 전경",
  },
  {
    id: "발전",
    title: "발전",
    titleEn: "Power",
    paragraphs: [
      "POWER BLOCK, BOP 및 HRSG를 포함한 발전 플랜트의 배관 설계 서비스를 제공합니다.",
      "발전설비의 운전 조건과 배관 시스템의 특성을 종합적으로 고려하여 배관 배치, 스트레스 해석 및 서포트 설계를 수행하며, 발전 플랜트의 안정적인 운전과 효율적인 설계를 위한 최적의 엔지니어링 솔루션을 제공합니다.",
    ],
    featuredNames: [
      "O Mon IV HRSG",
      "Qatar Facility E IWPP Project",
      "KSA JUBAIL NET COGENERATION IPP Project",
    ],
    image: "/images/hero/power-plant-2.png",
    imageAlt: "발전 플랜트 전경",
  },
  {
    id: "LNG",
    title: "LNG",
    titleEn: "LNG Plant",
    paragraphs: [
      "LNG 인수기지 및 저장·기화·송출 설비의 배관 설계 서비스를 제공합니다.",
      "초저온 및 고압의 극한 운전 조건을 고려한 배관 설계와 응력 해석을 통해 안전성과 신뢰성을 확보하고, LNG 플랜트의 안정적인 운영을 지원하는 배관 설계 솔루션을 제공합니다.",
    ],
    featuredNames: [
      "카타르 LNG NFXP EPC.2 Project",
      "PV Gas Thi Vai LNG Receiving Terminal",
      "Philippines Atimonam One Energy LNG to Power Project",
    ],
    image: "/images/hero/lng-tanks.png",
    imageAlt: "LNG 저장탱크 전경",
  },
  {
    id: "산업설비",
    title: "산업설비",
    titleEn: "Industrial",
    paragraphs: [
      "반도체 FAB, WWT(폐수처리), Utility 및 각종 산업설비를 대상으로 전문적인 배관 설계 서비스를 제공합니다.",
      "복잡한 설비 구성과 다양한 운전 조건을 고려하여 공정 및 유틸리티 배관의 배치, 3D 모델링, 응력 해석 및 서포트 설계를 수행하며, 생산설비의 안정적인 운영과 효율적인 시공을 고려한 최적의 배관 설계 솔루션을 제공합니다.",
    ],
    featuredNames: [],
    image: "/images/hero/industrial-wwt.png",
    imageAlt: "산업 수처리 설비 전경",
  },
];

export function pickFeaturedProjects(
  projects: Project[],
  area: BusinessArea,
  limit = 3,
): Project[] {
  if (area.featuredNames.length === 0) {
    return [];
  }

  const inCategory = projects.filter((project) => project.category === area.id);
  const byName = new Map(inCategory.map((project) => [project.name, project]));
  const featured = area.featuredNames
    .map((name) => byName.get(name))
    .filter((project): project is Project => Boolean(project));

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  const used = new Set(featured.map((project) => project.id));
  const extras = [...inCategory]
    .sort((a, b) => b.year - a.year)
    .filter((project) => !used.has(project.id));

  return [...featured, ...extras].slice(0, limit);
}
