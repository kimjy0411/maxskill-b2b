export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceSection {
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  intro: string[];
  highlights: string[];
  sections: ServiceSection[];
  image: string;
  imageAlt: string;
}

/** public/images/services/ — GitHub에서 같은 이름으로 교체 가능 */
function serviceBanner(filename: string) {
  return `/images/services/${filename}`;
}

export const services: Service[] = [
  {
    id: "piping",
    title: "Piping Design",
    summary:
      "Planning · Basic Design · Detail Design — 배관 설계 전 공정 One-Stop 수행",
    intro: [
      "Planning 단계에서는 WBS·마일스톤 기반 일정 수립과 Mechanical, Instrument, Electrical, Civil 등 유관 공종 간 인터페이스를 조율합니다. Basic Design에서는 Plot Plan을 통해 배관 라우팅·설비 배치·공간 활용을 최적화하고, Detail Design에서는 3D Plan/ISO, Stress ISO, Support Detail, Information 도면까지 실무에 바로 적용 가능한 산출물을 제공합니다.",
      "국내외 대형 EPC 프로젝트에서 축적된 설계 경험을 바탕으로, 설계 변경·현장 대응·재작업을 최소화하는 실용적인 배관 설계 솔루션을 제공합니다.",
    ],
    highlights: [
      "Planning → Basic Design → Detail Design 단계별 체계적 수행",
      "3D Plan / ISO / Stress ISO / Support Detail 도면 일괄 제공",
      "화공·발전·LNG 분야 대형 프로젝트 다수 수행",
      "다공종 Coordination 및 설계 변경 대응",
    ],
    sections: [
      {
        title: "Planning",
        description:
          "프로젝트 착수 초기부터 설계 일정·공정·협업 체계를 수립하여 이후 설계 단계의 품질과 납기를 확보합니다.",
        items: [
          {
            name: "Project Scheduling",
            description:
              "설계 WBS에 의한 배관설계 마일스톤, M/H 산출 및 일정 관리를 수행합니다.",
          },
          {
            name: "Coordination",
            description:
              "Mechanical, Instrument, Electrical, Civil, HVAC 등 타 공종과의 인터페이스 조율. 3D 모델·P&ID·Plot Plan 간 정합성 검토 및 설계 변경 사항 공유 체계를 운영합니다.",
          },
        ],
      },
      {
        title: "Basic Design",
        description:
          "플랜트 전체 배관·설비 배치의 기본 골격을 확정하는 단계로, 이후 Detail Design의 기준이 됩니다.",
        items: [
          {
            name: "Plot Plan",
            description:
              "Equipment, Structure, Pipe Rack, Utility, Roadway 등을 반영한 설비 배치도, Pipe Routing, Valve Access, Maintenance Space 및 향후 확장성을 고려한 최적 배치안을 제시합니다.",
          },
        ],
      },
      {
        title: "Detail Design",
        description:
          "현장 시공·Stress Analysis·3D 모델링에 직접 연계되는 상세 설계 도면을 작성합니다.",
        items: [
          {
            name: "3D Plan Dwg. / ISO Dwg.",
            description:
              "3D 모델 기반 Plan 도면 및 Isometric 도면 작성. Line Number, Material, Insulation, Testing 정보를 포함한 시공용 ISO 도면을 제공합니다.",
          },
          {
            name: "Stress ISO Dwg.",
            description:
              "Stress Analysis 결과를 반영한 ISO 도면 작성. Support 위치, Expansion Joint, Special Item 등 해석 결과 연계 사항을 도면에 명확히 표기합니다.",
          },
          {
            name: "Support Detail Dwg.",
            description:
              "Pipe Support, Guide, Anchor, Spring Hanger 등 지지대 상세 도면. Standard Support 및 Special Support 설계를 포함합니다.",
          },
          {
            name: "Information Dwg. etc",
            description:
              "Line List, Valve List, Material Take-off, Tie-in List 등 배관 설계 부속 문서. 프로젝트 요구에 따른 Information Sheet 및 기타 참조 도면을 제공합니다.",
          },
        ],
      },
    ],
    image: serviceBanner("piping.jpg"),
    imageAlt: "Piping Design — P&ID 배관 상세 도면",
  },
  {
    id: "stress",
    title: "Stress Analysis",
    summary:
      "Thermal Analysis · Special Support · Trouble Shooting — 배관 응력 해석 전문",
    intro: [
      "설계 단계에서 Operating·Transient·Occasional Load Case를 검토하고, 현장에서 발생하는 Support 이슈·진동·Leak 등 긴급 문제에 대해서도 신속한 해석·대안 제시가 가능합니다. Piping Design과 유기적으로 연계되어 Stress ISO 도면까지 일관된 품질로 제공합니다.",
      "국내외 화공·발전·LNG 프로젝트에서 High Temperature·High Pressure 배관, Critical Line에 대한 해석 경험을 보유하고 있으며, Owner·EPC·Contractor 요구 Specification에 맞춘 해석 보고서를 작성합니다.",
    ],
    highlights: [
      "Thermal·Sustained·Occasional Load Case 종합 검토",
      "Special Support·Spring Hanger·Expansion Joint 설계",
      "현장 Trouble Shooting 및 긴급 해석 대응",
      "CAESAR II 기반 Stress 해석 및 보고서 작성",
    ],
    sections: [
      {
        title: "Thermal Analysis",
        description:
          "온도 변화에 따른 배관 관련 열팽창·응력·변위를 해석하여 안전한 배관 설계를 지원합니다.",
        items: [
          {
            name: "Thermal Analysis",
            description:
              "Operating, Design, Hydro Test, Upset Condition 등 Load Case별 응력·변위 해석. ASME B31.3/B31.1 기준 Allowable Stress 검토, Nozzle Load Check, Flange Leakage 검토를 수행합니다.",
          },
          {
            name: "Load Case Review",
            description:
              "Sustained, Expansion, Occasional(Wind, Seismic, Water Hammer) Load 조합 검토. Support Gap, Cold Spring, Expansion Loop 적정성 평가를 수행합니다.",
          },
          {
            name: "Analysis Report",
            description:
              "Stress Mark-up, Support Load Summary, Nozzle Load Table, Critical Line List 등 해석 보고서 및 Piping Design 연계 산출물을 제공합니다.",
          },
        ],
      },
      {
        title: "Special Support",
        description:
          "일반 Standard Support로 해결되지 않는 구간에 대한 특수 지지대·Spring Hanger 설계를 수행합니다.",
        items: [
          {
            name: "Special Support",
            description:
              "Spring Hanger, Constant Support, Guide, Anchor, Expansion Joint 등 Special Support 선정 및 Detail Design. Manufacturer Catalogue와 연계하여 Custom Support를 설계합니다.",
          },
          {
            name: "Support Optimization",
            description:
              "Support 수량·위치 최적화를 통한 응력·변위 만족 및 경제성 확보. Existing Plant Tie-in 구간 Support Review를 수행합니다.",
          },
        ],
      },
      {
        title: "Trouble Shooting",
        description:
          "시공·운전 중 발생하는 배관 관련 이슈에 대한 신속한 원인 분석 및 해결책을 제시합니다.",
        items: [
          {
            name: "Trouble Shooting",
            description:
              "Support Damage, Vibration, Leak, Misalignment 등 현장 이슈 긴급 해석. Root Cause Analysis 및 Retrofit Support 설계, As-built 조건 반영 Re-analysis를 수행합니다.",
          },
          {
            name: "Field Support",
            description:
              "현장 실측 데이터 반영, Hot/Cold Position Check, Spring Hanger Setting Verification 등 시공·Commissioning 단계 기술을 지원합니다.",
          },
        ],
      },
    ],
    image: serviceBanner("stress.jpg"),
    imageAlt: "Stress Analysis — SIGMA 3D Pipe Stress·Thermal 해석",
  },
  {
    id: "cad",
    title: "3D CAD",
    summary:
      "S3D·E3D 기반 3D Modeling, Model Review, Clash Check",
    intro: [
      "Equipment/Structure, Piping/Support, Instrument & Electrical, Duct/HVAC 등 전 공종 3D 모델링과 Clash Check를 통해 설계 품질을 사전에 검증합니다.",
      "Navisworks 등 3D 3rd Party Program 연동으로 Multi-discipline 모델을 통합 리뷰하고, 설계 이슈를 Tracking합니다.",
    ],
    highlights: [
      "S3D, E3D 등 다중 플랫폼 운영",
      "전 공종 3D Modeling 및 Multi-discipline Clash Check",
      "3D 3rd Party Program 연동 (Navisworks 등)",
    ],
    sections: [
      {
        title: "Modeling",
        description:
          "전 공종 3D 모델을 작성하여 설계 간 간섭을 사전에 확인하고 시공성·유지보수성을 확보합니다.",
        items: [
          {
            name: "Equip./Structure",
            description:
              "Pressure Vessel, Heat Exchanger, Pump, Compressor, Steel Structure, Pipe Rack 등 Equipment·Structure 3D 모델링.",
          },
          {
            name: "Piping/Support",
            description:
              "Piping Route, Valve, Flange, In-line Item, Pipe Support 3D 모델링. ISO 도면 자동 생성을 위한 Attribute 관리.",
          },
          {
            name: "Instrument & Elec.",
            description:
              "Instrument, Cable Tray, Conduit, Junction Box, Panel 등 Instrument·Electrical 3D 모델링.",
          },
          {
            name: "Duct/HVAC Etc.",
            description:
              "Duct, HVAC Equipment, Fire Protection, Architectural Element 등 부 공종 3D 모델링.",
          },
        ],
      },
      {
        title: "Model Review",
        description:
          "3D 모델 간섭 검토와 외부 프로그램 연동을 통해 설계 품질을 확인합니다.",
        items: [
          {
            name: "Clash Check",
            description:
              "Hard Clash, Soft Clash, Clearance Check 등 Multi-discipline 간섭 검토. Clash Report 작성 및 Design Resolution Tracking.",
          },
          {
            name: "3D 3rd Party Program",
            description:
              "Navisworks 등 외부 프로그램으로 3D 모델을 통합 리뷰합니다. Multi-discipline 모델 취합, Clash·Walk-through 검토, 설계 이슈 Tracking을 지원합니다.",
          },
        ],
      },
    ],
    image: serviceBanner("cad.jpg"),
    imageAlt: "3D CAD Clash Check — 배관·구조 간섭 검토",
  },
  {
    id: "programming",
    title: "설계 IT",
    summary: "Admin · Programming — 3D 설계 환경과 맞춤형 프로그램 개발",
    intro: [
      "Admin에서는 프로젝트 3D 환경 구축과 SPEC/CATA/P&ID 데이터베이스를 담당합니다. S3D, E3D의 Project Setup, Catalog/Spec, Naming Rule 설정부터 P&ID와 3D 모델 정합성 기준까지 설계 기반을 제공합니다.",
      "Programming에서는 S3D, E3D, AutoCAD, Excel/VBA 등 플랫폼에 맞춘 Custom Macro, Report, Interface와 Line List → 3D Model → ISO/BOM 자동 생성 Workflow를 제공합니다.",
    ],
    highlights: [
      "S3D / E3D Admin",
      "P&ID Check · SPEC / CATA",
      "Customizing / Program Develop.",
    ],
    sections: [
      {
        title: "Admin",
        description:
          "프로젝트 3D 환경 구축 및 SPEC/CATA/P&ID 데이터베이스를 담당합니다.",
        items: [
          {
            name: "S3D / E3D Admin",
            description:
              "Project Setup, Catalog/Spec 관리, Naming Rule·Weight/CG Rule 설정. S3D, E3D 환경 Migration 및 Custom Report 설정.",
          },
          {
            name: "P&ID Check Admin.",
            description:
              "P&ID와 3D 모델 간 Line Number, Valve, Instrument, Equipment Tag 정합성 검토 기준 설정. P&ID Update 연동 Admin.",
          },
          {
            name: "SPEC / CATA Management",
            description:
              "Material Class, Pipe Support, Instrument, Equipment Spec 관리. Project Standard 반영 및 Vendor Data 연계.",
          },
        ],
      },
      {
        title: "Programming",
        description:
          "기존 설계 소프트웨어와 프로젝트 프로세스에 맞춘 프로그램을 개발·커스터마이징합니다.",
        items: [
          {
            name: "Customizing / Program Develop.",
            description:
              "S3D, E3D, AutoCAD, Excel/VBA 등 플랫폼 기반 Custom Macro, Report, Interface 개발. 프로젝트 Standard·Template·Check List 자동화와 Line List → 3D Model → ISO/BOM 자동 생성 Workflow를 지원합니다.",
          },
        ],
      },
    ],
    image: serviceBanner("programming.jpg"),
    imageAlt: "설계 IT — Admin · Programming",
  },
];

export function getServiceCardItems(service: Service) {
  return service.highlights.slice(0, 3);
}
