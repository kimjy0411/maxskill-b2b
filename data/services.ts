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
      "맥스킬은 화공·발전·LNG 플랜트 프로젝트에서 배관 설계(Piping Design) 전 공정을 수행합니다. 숙련된 Piping Designer가 Project Scheduling·Coordination부터 Detail Design 도면까지 일관된 품질 기준으로 프로젝트를 지원합니다.",
      "Planning 단계에서는 WBS·마일스톤 기반 일정 수립과 Mechanical, Instrument, Electrical, Civil 등 유관 공종 간 인터페이스를 조율합니다. Basic Design에서는 Plot Plan을 통해 배관 라우팅·설비 배치·공간 활용을 최적화하고, Detail Design에서는 3D Plan/ISO, Stress ISO, Support Detail, Information 도면까지 실무에 바로 적용 가능한 산출물을 제공합니다.",
      "국내외 대형 EPC 프로젝트에서 축적된 설계 경험을 바탕으로, 설계 변경·현장 대응·재작업을 최소화하는 실용적인 배관 설계 솔루션을 제공합니다.",
    ],
    highlights: [
      "Planning → Basic Design → Detail Design 단계별 체계적 수행",
      "3D Plan / ISO / Stress ISO / Support Detail 도면 일괄 제공",
      "화공·발전·LNG 분야 대형 프로젝트 다수 수행",
      "숙련된 Piping Designer 전문 인력",
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
    imageAlt: "화학 플랜트 배관·설비 전경",
  },
  {
    id: "stress",
    title: "Stress Analysis",
    summary:
      "Thermal Analysis · Special Support · Trouble Shooting — 배관 응력 해석 전문",
    intro: [
      "맥스킬 Stress Analysis 팀은 고경력의 Stress Engineer가 Thermal Analysis, Special Support 설계, Trouble Shooting을 수행합니다. CAESAR II 등 업계 표준 해석 도구를 활용하여 배관 관련 안전성·신뢰성을 검증합니다.",
      "설계 단계에서 Operating·Transient·Occasional Load Case를 검토하고, 현장에서 발생하는 Support 이슈·진동·Leak 등 긴급 문제에 대해서도 신속한 해석·대안 제시가 가능합니다. Piping Design과 유기적으로 연계되어 Stress ISO 도면까지 일관된 품질로 제공합니다.",
      "국내외 화공·발전·LNG 프로젝트에서 High Temperature·High Pressure 배관, Critical Line에 대한 해석 경험을 보유하고 있으며, Owner·EPC·Contractor 요구 Specification에 맞춘 해석 보고서를 작성합니다.",
    ],
    highlights: [
      "Thermal·Sustained·Occasional Load Case 종합 검토",
      "Special Support·Spring Hanger·Expansion Joint 설계",
      "현장 Trouble Shooting 및 긴급 해석 대응",
      "고경력 Stress Engineer 전문 인력",
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
    imageAlt: "정유·화학 플랜트 설비",
  },
  {
    id: "cad",
    title: "3D CAD",
    summary:
      "S3D·E3D·SP3D 기반 3D Modeling, Review, Clash Check 및 Plant Imaging",
    intro: [
      "맥스킬 3D CAD 팀은 Smart 3D(S3D), E3D, PDS/PDMS, SP3D 등 주요 3D CAD 플랫폼에서 Admin, Modeling, Model Review, Clash Check 업무를 수행합니다. 평균 15.2년 경력의 3D Admin 5명이 SPEC/CATA 관리와 프로젝트 3D 환경 구축을 담당합니다.",
      "Equipment/Structure, Piping/Support, Instrument & Electrical, Duct/HVAC 등 전 공종 3D 모델링과 Clash Check, 3D Product Line Check, Maintenance·Operability·Safety(MOS) Review, P&ID Check를 통해 설계 품질을 사전에 검증합니다.",
      "3D Animation & Plant Imaging, BOM·ISO 도면 자동 생성 Management Program, 3rd Party Program 연동까지 지원하여 설계-시공-운영 전 단계에서 3D 모델의 활용도를 극대화합니다.",
    ],
    highlights: [
      "S3D / E3D / PDS·PDMS / SP3D 다중 플랫폼 운영",
      "전 공종 3D Modeling 및 Multi-discipline Clash Check",
      "MOS·P&ID·Product Line Check 등 Model Review",
      "3D Animation · Plant Imaging · BOM/ISO 자동화",
    ],
    sections: [
      {
        title: "Admin",
        description:
          "프로젝트 3D 환경 구축 및 SPEC/CATA/P&ID 데이터베이스 관리를 담당합니다.",
        items: [
          {
            name: "S3D / E3D Admin",
            description:
              "Project Setup, Catalog/Spec 관리, Naming Rule·Weight/CG Rule 설정. PDS/PDMS, E3D, SP3D 환경 Migration 및 Custom Report 설정.",
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
          "3D 모델 기반 설계 검토를 통해 Clash, 시공성, 운전·정비 접근성, P&ID 정합성을 확인합니다.",
        items: [
          {
            name: "Clash Check",
            description:
              "Hard Clash, Soft Clash, Clearance Check 등 Multi-discipline 간섭 검토. Clash Report 작성 및 Design Resolution Tracking.",
          },
          {
            name: "3D Product Line Check",
            description:
              "Line-by-line 3D 모델 완성도 검토. Missing Component, Wrong Spec, Routing Error 식별.",
          },
          {
            name: "Maintenance, Operability, Safety Check",
            description:
              "Valve Access, Instrument Access, Lifting Route, Escape Route, Maintenance Space 등 MOS Review.",
          },
          {
            name: "P&ID Check",
            description:
              "P&ID 대비 3D 모델 정합성 검토. Line, Valve, Instrument, Equipment Tag 일치 여부 확인.",
          },
        ],
      },
      {
        title: "Visualization & Output",
        description:
          "3D 모델을 활용한 시각화 및 설계 산출물 자동화를 지원합니다.",
        items: [
          {
            name: "3D Animation & Plant Imaging",
            description:
              "공정 흐름, Maintenance Scenario, Safety Training용 3D Animation 및 Plant Walk-through 영상 제작.",
          },
          {
            name: "Management Program, BOM, ISO DWG.",
            description:
              "Material Take-off, BOM, ISO/Plan 도면 자동 생성 Management Program 운영. Custom Report, Weight/CG Report, Progress Report.",
          },
        ],
      },
      {
        title: "Integration",
        description:
          "타 시스템·프로그램과의 연동을 통해 3D 데이터 활용 범위를 확장합니다.",
        items: [
          {
            name: "3D 3rd Party Program",
            description:
              "Navisworks, Revit, ERP, Document Management System 등 외부 프로그램과 3D Model·Attribute 연동. API 기반 Custom Interface 개발.",
          },
        ],
      },
    ],
    image: serviceBanner("cad.jpg"),
    imageAlt: "엔지니어들이 컴퓨터에서 설계 도면을 검토하는 모습",
  },
  {
    id: "programming",
    title: "Programming",
    summary:
      "Customizing · Program Development · 3rd Party 연동 — 설계 생산성 자동화",
    intro: [
      "맥스킬 Programming 서비스는 플랜트 설계·시공·운영 현장의 반복 업무를 자동화하고, 3D CAD·Piping Design·Stress Analysis 업무와 연계되는 맞춤형 프로그램을 개발합니다.",
      "P&ID Check, BOM·ISO 도면 자동 생성, Management Program, 3D 3rd Party Program 연동 등 실무에서 즉시 활용 가능한 솔루션을 제공하며, 기존 Commercial Software의 Customizing과 신규 Program Development, Trouble Shooting까지 One-Stop으로 지원합니다.",
      "프로젝트별 Workflow·Specification·산출물 형식에 맞춘 프로그램을 개발하여 설계 오류를 줄이고, M/H 절감과 납기 단축에 기여합니다. 축적된 설계 프로젝트 경험을 바탕으로 현장 요구에 부합하는 실용적인 프로그램을 제공합니다.",
    ],
    highlights: [
      "3D CAD·Piping·Stress 업무 연계 맞춤 개발",
      "BOM / ISO / Report 자동화 Program",
      "Commercial Software Customizing",
      "3rd Party Program·ERP·DMS 연동",
    ],
    sections: [
      {
        title: "Customizing / Program Develop.",
        description:
          "기존 설계 소프트웨어 및 사내 업무 프로세스에 맞춘 프로그램을 개발·커스터마이징합니다.",
        items: [
          {
            name: "Customizing / Program Develop.",
            description:
              "S3D, E3D, PDMS, AutoCAD, Excel/VBA 등 플랫폼 기반 Custom Macro, Report, Interface 개발. 프로젝트 Standard·Template·Check List 자동화.",
          },
          {
            name: "Design Automation",
            description:
              "Line List → 3D Model → ISO/BOM 자동 생성 Workflow. P&ID Tag Check, Spec Validation, Duplicate Line Check 자동화.",
          },
          {
            name: "Management Program",
            description:
              "설계 진도·공정·M/H 관리, Drawing Status Tracking, Transmittal Management, Revision Control 프로그램 개발.",
          },
        ],
      },
      {
        title: "Trouble Shooting",
        description:
          "기존 프로그램·인터페이스의 오류 수정 및 성능 개선을 지원합니다.",
        items: [
          {
            name: "Trouble Shooting",
            description:
              "Program Bug Fix, Data Migration Error, Report Format Issue, API 연동 오류 등 긴급·반복 이슈 해결. Legacy Program 유지보수.",
          },
          {
            name: "Performance Optimization",
            description:
              "대용량 3D Model·Database 처리 속도 개선, Batch Process 최적화, Server/Client 환경 튜닝.",
          },
        ],
      },
      {
        title: "3rd Party Program",
        description:
          "외부 시스템과의 연동을 통해 설계 데이터의 활용 범위를 확장합니다.",
        items: [
          {
            name: "3rd Party Program",
            description:
              "ERP, SAP, Document Management, PM Tool, Navisworks, Power BI 등 외부 시스템과 설계 데이터 연동. Open API·Database Interface 개발.",
          },
          {
            name: "Data Exchange",
            description:
              "IFC, STEP, PCF, IDF, CSV/XML 등 표준·비표준 Format 간 데이터 변환 프로그램. Vendor Data → 3D Model 자동 반영.",
          },
        ],
      },
    ],
    image: serviceBanner("programming.jpg"),
    imageAlt: "설계 자동화 Programming",
  },
];

export function getServiceCardItems(service: Service) {
  return service.highlights.slice(0, 3);
}
