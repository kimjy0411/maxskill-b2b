export const careersBannerText =
  "미소짓는 든든한 친구같은 회사 언제나 열린마음으로 작은소리까지 귀 기울여 듣겠습니다.";

export const careersNav = [
  { href: "/careers/hr", label: "인사제도" },
  { href: "/careers", label: "채용정보" },
] as const;

export const salarySystemIntro =
  "맥스킬은 모든 직원의 연봉제를 시행하고 있습니다.";

export const salaryComponents = [
  {
    category: "기본급",
    items: ["연봉의 90%를 기본급으로 지급"],
  },
  {
    category: "상여금",
    items: [
      "명절 상여금 (200%)",
      "생산성향상장려금",
      "경영성과급 (Profit Sharing)",
      "생산성 장려금 (Productivity Incentive)",
      "특별상여금 (Special Bonus)",
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
  status: JobPostingStatus;
  views: number;
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    postedAt: "2026-03-08",
    title: "배관설계",
    period: "2026.03.08 ~ 2026.12.18",
    status: "진행중",
    views: 4417,
  },
  {
    id: 2,
    postedAt: "2026-03-02",
    title: "3D Model 경력 사원 모집 공고",
    period: "2026.03.02 ~ 2026.12.30",
    status: "진행중",
    views: 88,
  },
  {
    id: 3,
    postedAt: "2005-03-26",
    title: "국내 대기업 플랜트 엔지니어링 건축 설계부문",
    period: "2005.03.25 ~ 2005.04.10",
    status: "진행중",
    views: 3381,
  },
];
