export const careersBannerText =
  "맥스킬에서는 함께 할 유능한 인재를 찾고 있습니다.";

export const careersNav = [
  { href: "/careers", label: "채용정보" },
] as const;

export const salarySystemIntro =
  "당사는 전직원에게 연봉제를 실시하고 있습니다.";

export interface SalaryTableRow {
  label: string;
  items: string[];
}

export interface SalaryTableGroup {
  category: string;
  rows: SalaryTableRow[];
}

export const salaryTable: SalaryTableGroup[] = [
  {
    category: "연봉",
    rows: [
      {
        label: "월급여",
        items: [
          "기본급 (직급별 표준 금액)",
          "능력급 (기준능력급 + 개인별 능력 가감급)",
          "조정급 (직급별 표준 금액)",
        ],
      },
      {
        label: "설날/추석 상여 (200%)",
        items: [],
      },
    ],
  },
  {
    category: "성과급",
    rows: [
      {
        label: "집단 성과급 (P.I + P.S)",
        items: [],
      },
      {
        label: "생산성 격려금",
        items: ["경영목표 달성도에 따라 반기별로 지급"],
      },
      {
        label: "이익 배분 제도",
        items: [
          "경영 성과를 EVA라는 지표를 통해 평가하여 지급 (지급시기 : 년1회)",
        ],
      },
    ],
  },
];

export const employeeBenefits = [
  "노사협의회 운영",
  "취미활동 지원 (축구, 스포츠, 사진 등)",
  "건강검진",
  "자녀 학자금 (고등학교, 대학교)",
  "5일 근무제",
  "마일리지 제도 (구내식당형)",
  "개인형 퇴직연금",
];

export type JobPostingStatus = "진행중" | "마감";

export interface JobPosting {
  id: number;
  postedAt: string;
  title: string;
  period: string;
  periodEnd?: string;
  status: JobPostingStatus;
  views: number;
  content: string[];
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    postedAt: "2026-03-08",
    title: "배관설계",
    period: "2026.03.08 ~ 2026.12.18",
    periodEnd: "2026-12-18",
    status: "진행중",
    views: 4417,
    content: [
      "화공·발전·LNG 플랜트 프로젝트의 배관 설계(Piping Design) 업무를 수행할 인재를 모집합니다.",
      "Planning부터 Detail Design까지 배관 설계 전 공정을 경험할 수 있으며, Plot Plan, ISO, Stress ISO, Support Detail 도면 작성 및 유관 공종 Coordination 업무를 담당합니다.",
      "지원 자격: 배관 설계 유경험자. AutoCAD, 3D CAD(S3D/E3D/PDMS) 사용 가능자 우대.",
      "접수 방법: 아래 이메일로 이력서와 경력기술서를 보내 주시기 바랍니다.",
    ],
  },
  {
    id: 2,
    postedAt: "2026-03-02",
    title: "3D Model 경력 사원 모집 공고",
    period: "2026.03.02 ~ 2026.12.30",
    periodEnd: "2026-12-30",
    status: "진행중",
    views: 88,
    content: [
      "S3D, E3D, PDS/PDMS, SP3D 등 3D CAD 플랫폼에서 Modeling 및 Model Review를 수행할 경력 사원을 모집합니다.",
      "Equipment/Structure, Piping/Support 등 전 공종 3D 모델링과 Clash Check, 3D 3rd Party Program(Navisworks 등) 연동 리뷰 업무를 담당합니다.",
      "지원 자격: 3D Plant Modeling 경력자. S3D/E3D Admin 또는 Clash Check 경험자 우대.",
      "접수 방법: 아래 이메일로 이력서와 경력기술서를 보내 주시기 바랍니다.",
    ],
  },
  {
    id: 3,
    postedAt: "2005-03-26",
    title: "국내 대기업 플랜트 엔지니어링 건축 설계부문",
    period: "2005.03.25 ~ 2005.04.10",
    periodEnd: "2005-04-10",
    status: "마감",
    views: 3381,
    content: [
      "국내 대기업 플랜트 엔지니어링 건축 설계부문 채용 공고입니다.",
      "본 공고는 접수기간이 종료되어 마감되었습니다.",
    ],
  },
];
