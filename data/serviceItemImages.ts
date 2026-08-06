export function getServiceItemImageKey(serviceId: string, itemName: string) {
  return `${serviceId}/${itemName}`;
}

const ITEMS_BASE = "/images/services/items";

function itemImage(filename: string, alt: string) {
  return { src: `${ITEMS_BASE}/${filename}`, alt, filename };
}

/** 로컬 public/images/services/items/ 파일 — GitHub에서 같은 이름으로 교체 가능 */
export const serviceItemImages: Record<
  string,
  { src: string; alt: string; filename: string }
> = {
  // ── Piping Design ──
  "piping/Project Scheduling": itemImage(
    "piping-project-scheduling.jpg",
    "건축·플랜트 Blueprint 및 프로젝트 일정 계획",
  ),
  "piping/Coordination": itemImage(
    "piping-coordination.jpg",
    "공종 간 설계 협업 및 Coordination",
  ),
  "piping/Plot Plan": itemImage(
    "piping-plot-plan.jpg",
    "플랜트 전경 및 Plot Plan 설비 배치",
  ),
  "piping/3D Plan Dwg. / ISO Dwg.": itemImage(
    "piping-iso-dwg.jpg",
    "플랜트 배관 및 ISO 도면용 Pipe Detail",
  ),
  "piping/Stress ISO Dwg.": itemImage(
    "piping-stress-iso.jpg",
    "플랜트 배관 Stress Analysis 연계 ISO",
  ),
  "piping/Support Detail Dwg.": itemImage(
    "piping-support-detail.jpg",
    "배관 Support 및 Pipe Connection Detail",
  ),
  "piping/Information Dwg. etc": itemImage(
    "piping-information-dwg.jpg",
    "Engineering Drawing 및 Information 도면",
  ),

  // ── Stress Analysis ──
  "stress/Thermal Analysis": itemImage(
    "stress-thermal-analysis.jpg",
    "야간 정유·화학 플랜트 Thermal Analysis 대상 설비",
  ),
  "stress/Load Case Review": itemImage(
    "stress-load-case.jpg",
    "고압 배관 Load Case 검토",
  ),
  "stress/Analysis Report": itemImage(
    "stress-analysis-report.jpg",
    "플랜트 설계 Analysis Report 작성",
  ),
  "stress/Special Support": itemImage(
    "stress-special-support.jpg",
    "Special Support 및 기계 부품",
  ),
  "stress/Support Optimization": itemImage(
    "stress-support-optimization.jpg",
    "배관 Support 위치 최적화",
  ),
  "stress/Trouble Shooting": itemImage(
    "stress-trouble-shooting.jpg",
    "야간 운전 플랜트 Trouble Shooting",
  ),
  "stress/Field Support": itemImage(
    "stress-field-support.jpg",
    "현장 배관·설비 Field Support",
  ),

  // ── 3D CAD ──
  "cad/S3D / E3D Admin": itemImage(
    "cad-s3d-admin.jpg",
    "3D CAD Admin 및 Engineering Software",
  ),
  "cad/P&ID Check Admin.": itemImage(
    "cad-pid-admin.jpg",
    "P&ID Check Admin 및 현장 설계 검토",
  ),
  "cad/SPEC / CATA Management": itemImage(
    "cad-spec-cata.jpg",
    "화학 플랜트 SPEC·CATA Database 관리",
  ),
  "cad/Equip./Structure": itemImage(
    "cad-equip-structure.jpg",
    "Equipment·Structure 3D Modeling",
  ),
  "cad/Piping/Support": itemImage(
    "cad-piping-support.jpg",
    "Piping·Support 3D Modeling",
  ),
  "cad/Instrument & Elec.": itemImage(
    "cad-instrument-elec.jpg",
    "Instrument·Electrical 3D Modeling",
  ),
  "cad/Duct/HVAC Etc.": itemImage(
    "cad-duct-hvac.jpg",
    "Duct·HVAC 3D Modeling",
  ),
  "cad/Clash Check": itemImage(
    "cad-clash-check.jpg",
    "3D Clash Check 및 간섭 검토",
  ),
  "cad/3D Product Line Check": itemImage(
    "cad-product-line-check.jpg",
    "3D Product Line Check",
  ),
  "cad/Maintenance, Operability, Safety Check": itemImage(
    "cad-mos-check.jpg",
    "LNG·플랜트 MOS Review",
  ),
  "cad/P&ID Check": itemImage(
    "cad-pid-check.jpg",
    "P&ID Check 3D 모델 정합성",
  ),
  "cad/3D Animation & Plant Imaging": itemImage(
    "cad-plant-imaging.jpg",
    "3D Animation 및 Plant Imaging",
  ),
  "cad/Management Program, BOM, ISO DWG.": itemImage(
    "cad-bom-iso.jpg",
    "BOM·ISO 도면 자동 생성 Management",
  ),
  "cad/3D 3rd Party Program": itemImage(
    "cad-3rd-party.jpg",
    "3D 3rd Party Program 연동",
  ),

  // ── Programming ──
  "programming/Customizing / Program Develop.": itemImage(
    "programming-customizing.jpg",
    "Customizing 및 Program Development",
  ),
  "programming/Design Automation": itemImage(
    "programming-design-automation.jpg",
    "Design Automation Workflow",
  ),
  "programming/Management Program": itemImage(
    "programming-management.jpg",
    "설계 진도 Management Program",
  ),
  "programming/Trouble Shooting": itemImage(
    "programming-trouble-shooting.jpg",
    "Program Trouble Shooting",
  ),
  "programming/Performance Optimization": itemImage(
    "programming-performance.jpg",
    "Program Performance Optimization",
  ),
  "programming/3rd Party Program": itemImage(
    "programming-3rd-party.jpg",
    "3rd Party Program·ERP 연동",
  ),
  "programming/Data Exchange": itemImage(
    "programming-data-exchange.jpg",
    "Data Exchange 및 Format 변환",
  ),
};

export function getServiceItemImage(serviceId: string, itemName: string) {
  return serviceItemImages[getServiceItemImageKey(serviceId, itemName)];
}

/** Verify no duplicate filenames at build time */
const filenames = Object.values(serviceItemImages).map((item) => item.filename);
if (new Set(filenames).size !== filenames.length) {
  throw new Error("Duplicate service item image filenames");
}
