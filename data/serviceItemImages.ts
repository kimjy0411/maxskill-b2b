export function getServiceItemImageKey(serviceId: string, itemName: string) {
  return `${serviceId}/${itemName}`;
}

/** serviceId + itemName → local image path (public/images/services/items/) */
export const serviceItemImages: Record<
  string,
  { src: string; alt: string }
> = {
  // Piping Design
  "piping/Project Scheduling": {
    src: "/images/services/items/piping-project-scheduling.jpg",
    alt: "프로젝트 일정 및 WBS 계획",
  },
  "piping/Coordination": {
    src: "/images/services/items/piping-coordination.jpg",
    alt: "공종 간 설계 협업 및 조율",
  },
  "piping/Plot Plan": {
    src: "/images/services/items/piping-plot-plan.jpg",
    alt: "플랜트 Plot Plan 및 설비 배치",
  },
  "piping/3D Plan Dwg. / ISO Dwg.": {
    src: "/images/services/items/piping-iso-dwg.jpg",
    alt: "배관 ISO 및 Plan 도면",
  },
  "piping/Stress ISO Dwg.": {
    src: "/images/services/items/piping-stress-iso.jpg",
    alt: "Stress Analysis 연계 ISO 도면",
  },
  "piping/Support Detail Dwg.": {
    src: "/images/services/items/piping-support-detail.jpg",
    alt: "배관 Support Detail 도면",
  },
  "piping/Information Dwg. etc": {
    src: "/images/services/items/piping-information-dwg.jpg",
    alt: "Line List 등 배관 Information 도면",
  },
  // Stress Analysis
  "stress/Thermal Analysis": {
    src: "/images/services/items/stress-thermal-analysis.jpg",
    alt: "배관 Thermal Stress Analysis",
  },
  "stress/Load Case Review": {
    src: "/images/services/items/stress-load-case.jpg",
    alt: "Load Case 검토 및 해석",
  },
  "stress/Analysis Report": {
    src: "/images/services/items/stress-analysis-report.jpg",
    alt: "Stress Analysis 해석 보고서",
  },
  "stress/Special Support": {
    src: "/images/services/items/stress-special-support.jpg",
    alt: "Special Support 및 Spring Hanger",
  },
  "stress/Support Optimization": {
    src: "/images/services/items/stress-support-optimization.jpg",
    alt: "Support 위치 최적화",
  },
  "stress/Trouble Shooting": {
    src: "/images/services/items/stress-trouble-shooting.jpg",
    alt: "배관 Stress Trouble Shooting",
  },
  "stress/Field Support": {
    src: "/images/services/items/stress-field-support.jpg",
    alt: "현장 Stress Analysis 기술 지원",
  },
  // 3D CAD
  "cad/S3D / E3D Admin": {
    src: "/images/services/items/cad-s3d-admin.jpg",
    alt: "S3D E3D Admin 및 Catalog 관리",
  },
  "cad/P&ID Check Admin.": {
    src: "/images/services/items/cad-pid-admin.jpg",
    alt: "P&ID Check Admin 설정",
  },
  "cad/SPEC / CATA Management": {
    src: "/images/services/items/cad-spec-cata.jpg",
    alt: "SPEC CATA 데이터베이스 관리",
  },
  "cad/Equip./Structure": {
    src: "/images/services/items/cad-equip-structure.jpg",
    alt: "Equipment Structure 3D Modeling",
  },
  "cad/Piping/Support": {
    src: "/images/services/items/cad-piping-support.jpg",
    alt: "Piping Support 3D Modeling",
  },
  "cad/Instrument & Elec.": {
    src: "/images/services/items/cad-instrument-elec.jpg",
    alt: "Instrument Electrical 3D Modeling",
  },
  "cad/Duct/HVAC Etc.": {
    src: "/images/services/items/cad-duct-hvac.jpg",
    alt: "Duct HVAC 3D Modeling",
  },
  "cad/Clash Check": {
    src: "/images/services/items/cad-clash-check.jpg",
    alt: "3D Clash Check 및 간섭 검토",
  },
  "cad/3D Product Line Check": {
    src: "/images/services/items/cad-product-line-check.jpg",
    alt: "3D Product Line Check",
  },
  "cad/Maintenance, Operability, Safety Check": {
    src: "/images/services/items/cad-mos-check.jpg",
    alt: "MOS Maintenance Operability Safety Review",
  },
  "cad/P&ID Check": {
    src: "/images/services/items/cad-pid-check.jpg",
    alt: "P&ID Check 3D 모델 정합성",
  },
  "cad/3D Animation & Plant Imaging": {
    src: "/images/services/items/cad-plant-imaging.jpg",
    alt: "3D Animation Plant Imaging",
  },
  "cad/Management Program, BOM, ISO DWG.": {
    src: "/images/services/items/cad-bom-iso.jpg",
    alt: "BOM ISO 도면 자동 생성",
  },
  "cad/3D 3rd Party Program": {
    src: "/images/services/items/cad-3rd-party.jpg",
    alt: "3D 3rd Party Program 연동",
  },
  // Programming
  "programming/Customizing / Program Develop.": {
    src: "/images/services/items/programming-customizing.jpg",
    alt: "Customizing Program Development",
  },
  "programming/Design Automation": {
    src: "/images/services/items/programming-design-automation.jpg",
    alt: "Design Automation Workflow",
  },
  "programming/Management Program": {
    src: "/images/services/items/programming-management.jpg",
    alt: "설계 진도 Management Program",
  },
  "programming/Trouble Shooting": {
    src: "/images/services/items/programming-trouble-shooting.jpg",
    alt: "Program Trouble Shooting",
  },
  "programming/Performance Optimization": {
    src: "/images/services/items/programming-performance.jpg",
    alt: "Program Performance Optimization",
  },
  "programming/3rd Party Program": {
    src: "/images/services/items/programming-3rd-party.jpg",
    alt: "3rd Party Program ERP 연동",
  },
  "programming/Data Exchange": {
    src: "/images/services/items/programming-data-exchange.jpg",
    alt: "Data Exchange Format 변환",
  },
};

export function getServiceItemImage(serviceId: string, itemName: string) {
  return serviceItemImages[getServiceItemImageKey(serviceId, itemName)];
}
