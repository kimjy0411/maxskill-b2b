export function getServiceItemImageKey(serviceId: string, itemName: string) {
  return `${serviceId}/${itemName}`;
}

/** Unsplash photo ID → CDN URL (each ID used once across the site) */
function unsplash(photoId: string, width = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export const serviceItemImages: Record<
  string,
  { src: string; alt: string; unsplashId: string }
> = {
  // ── Piping Design ──
  "piping/Project Scheduling": {
    unsplashId: "photo-1721244654394-36a7bc2da288",
    src: unsplash("photo-1721244654394-36a7bc2da288"),
    alt: "건축·플랜트 Blueprint 및 프로젝트 일정 계획",
  },
  "piping/Coordination": {
    unsplashId: "photo-1522071820081-009f0129c71c",
    src: unsplash("photo-1522071820081-009f0129c71c"),
    alt: "공종 간 설계 협업 및 Coordination",
  },
  "piping/Plot Plan": {
    unsplashId: "photo-1509390288171-ce2088f7d08e",
    src: unsplash("photo-1509390288171-ce2088f7d08e"),
    alt: "플랜트 전경 및 Plot Plan 설비 배치",
  },
  "piping/3D Plan Dwg. / ISO Dwg.": {
    unsplashId: "photo-1542274368-443d694d79aa",
    src: unsplash("photo-1542274368-443d694d79aa"),
    alt: "플랜트 배관 및 ISO 도면용 Pipe Detail",
  },
  "piping/Stress ISO Dwg.": {
    unsplashId: "photo-1538474705339-e87de81450e8",
    src: unsplash("photo-1538474705339-e87de81450e8"),
    alt: "플랜트 배관 Stress Analysis 연계 ISO",
  },
  "piping/Support Detail Dwg.": {
    unsplashId: "photo-1694674818352-f6061a0561a1",
    src: unsplash("photo-1694674818352-f6061a0561a1"),
    alt: "배관 Support 및 Pipe Connection Detail",
  },
  "piping/Information Dwg. etc": {
    unsplashId: "photo-1658741629312-caf7be169c02",
    src: unsplash("photo-1658741629312-caf7be169c02"),
    alt: "Engineering Drawing 및 Information 도면",
  },

  // ── Stress Analysis ──
  "stress/Thermal Analysis": {
    unsplashId: "photo-1588011930968-eadac80e6a5a",
    src: unsplash("photo-1588011930968-eadac80e6a5a"),
    alt: "야간 정유·화학 플랜트 Thermal Analysis 대상 설비",
  },
  "stress/Load Case Review": {
    unsplashId: "photo-1607472586893-edb57bdc0e39",
    src: unsplash("photo-1607472586893-edb57bdc0e39"),
    alt: "고압 배관 Load Case 검토",
  },
  "stress/Analysis Report": {
    unsplashId: "photo-1722842895153-ba7bf9d53dfb",
    src: unsplash("photo-1722842895153-ba7bf9d53dfb"),
    alt: "플랜트 설계 Analysis Report 작성",
  },
  "stress/Special Support": {
    unsplashId: "photo-1543674892-7d64d45df18b",
    src: unsplash("photo-1543674892-7d64d45df18b"),
    alt: "Special Support 및 기계 부품",
  },
  "stress/Support Optimization": {
    unsplashId: "photo-1586057285471-2f78bffaf074",
    src: unsplash("photo-1586057285471-2f78bffaf074"),
    alt: "배관 Support 위치 최적화",
  },
  "stress/Trouble Shooting": {
    unsplashId: "photo-1670689334799-cdc6777db8cc",
    src: unsplash("photo-1670689334799-cdc6777db8cc"),
    alt: "야간 운전 플랜트 Trouble Shooting",
  },
  "stress/Field Support": {
    unsplashId: "photo-1639600993675-2281b2c939f0",
    src: unsplash("photo-1639600993675-2281b2c939f0"),
    alt: "현장 배관·설비 Field Support",
  },

  // ── 3D CAD ──
  "cad/S3D / E3D Admin": {
    unsplashId: "photo-1581091226825-a6a2a5aee158",
    src: unsplash("photo-1581091226825-a6a2a5aee158"),
    alt: "3D CAD Admin 및 Engineering Software",
  },
  "cad/P&ID Check Admin.": {
    unsplashId: "photo-1581092160562-40aa08e78837",
    src: unsplash("photo-1581092160562-40aa08e78837"),
    alt: "P&ID Check Admin 및 현장 설계 검토",
  },
  "cad/SPEC / CATA Management": {
    unsplashId: "photo-1601569205943-53aac3dcef67",
    src: unsplash("photo-1601569205943-53aac3dcef67"),
    alt: "화학 플랜트 SPEC·CATA Database 관리",
  },
  "cad/Equip./Structure": {
    unsplashId: "photo-1717386255773-1e3037c81788",
    src: unsplash("photo-1717386255773-1e3037c81788"),
    alt: "Equipment·Structure 3D Modeling",
  },
  "cad/Piping/Support": {
    unsplashId: "photo-1726731782158-fcf6822b6ca4",
    src: unsplash("photo-1726731782158-fcf6822b6ca4"),
    alt: "Piping·Support 3D Modeling",
  },
  "cad/Instrument & Elec.": {
    unsplashId: "photo-1622534376374-fe4480328daa",
    src: unsplash("photo-1622534376374-fe4480328daa"),
    alt: "Instrument·Electrical 3D Modeling",
  },
  "cad/Duct/HVAC Etc.": {
    unsplashId: "photo-1717386255773-a456c611dc4e",
    src: unsplash("photo-1717386255773-a456c611dc4e"),
    alt: "Duct·HVAC 3D Modeling",
  },
  "cad/Clash Check": {
    unsplashId: "photo-1496247749665-49cf5b1022e9",
    src: unsplash("photo-1496247749665-49cf5b1022e9"),
    alt: "3D Clash Check 및 간섭 검토",
  },
  "cad/3D Product Line Check": {
    unsplashId: "photo-1602860109210-b53229378ecf",
    src: unsplash("photo-1602860109210-b53229378ecf"),
    alt: "3D Product Line Check",
  },
  "cad/Maintenance, Operability, Safety Check": {
    unsplashId: "photo-1468787737698-f5c03f0570dd",
    src: unsplash("photo-1468787737698-f5c03f0570dd"),
    alt: "LNG·플랜트 MOS Review",
  },
  "cad/P&ID Check": {
    unsplashId: "photo-1635145613344-3e59b1e8afd0",
    src: unsplash("photo-1635145613344-3e59b1e8afd0"),
    alt: "P&ID Check 3D 모델 정합성",
  },
  "cad/3D Animation & Plant Imaging": {
    unsplashId: "photo-1693907986952-3cd372e4c9d8",
    src: unsplash("photo-1693907986952-3cd372e4c9d8"),
    alt: "3D Animation 및 Plant Imaging",
  },
  "cad/Management Program, BOM, ISO DWG.": {
    unsplashId: "photo-1460925895917-afdab827c52f",
    src: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "BOM·ISO 도면 자동 생성 Management",
  },
  "cad/3D 3rd Party Program": {
    unsplashId: "photo-1498050108023-c5249f4df085",
    src: unsplash("photo-1498050108023-c5249f4df085"),
    alt: "3D 3rd Party Program 연동",
  },

  // ── Programming ──
  "programming/Customizing / Program Develop.": {
    unsplashId: "photo-1517694712202-14dd95308a12",
    src: unsplash("photo-1517694712202-14dd95308a12"),
    alt: "Customizing 및 Program Development",
  },
  "programming/Design Automation": {
    unsplashId: "photo-1461747280688-d54aa2c08665",
    src: unsplash("photo-1461747280688-d54aa2c08665"),
    alt: "Design Automation Workflow",
  },
  "programming/Management Program": {
    unsplashId: "photo-1553877522-43269d4ea984",
    src: unsplash("photo-1553877522-43269d4ea984"),
    alt: "설계 진도 Management Program",
  },
  "programming/Trouble Shooting": {
    unsplashId: "photo-1526374965328-7f61d4dc18c5",
    src: unsplash("photo-1526374965328-7f61d4dc18c5"),
    alt: "Program Trouble Shooting",
  },
  "programming/Performance Optimization": {
    unsplashId: "photo-1507823690283-48b0929e727b",
    src: unsplash("photo-1507823690283-48b0929e727b"),
    alt: "Program Performance Optimization",
  },
  "programming/3rd Party Program": {
    unsplashId: "photo-1559510981-10719ce4266a",
    src: unsplash("photo-1559510981-10719ce4266a"),
    alt: "3rd Party Program·ERP 연동",
  },
  "programming/Data Exchange": {
    unsplashId: "photo-1551288049-bebda4e38f71",
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Data Exchange 및 Format 변환",
  },
};

export function getServiceItemImage(serviceId: string, itemName: string) {
  return serviceItemImages[getServiceItemImageKey(serviceId, itemName)];
}

/** Verify no duplicate Unsplash IDs at build time */
const ids = Object.values(serviceItemImages).map((item) => item.unsplashId);
if (new Set(ids).size !== ids.length) {
  throw new Error("Duplicate Unsplash photo IDs in serviceItemImages");
}
