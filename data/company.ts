export const companyInfo = {
  name: "주식회사 맥스킬",
  nameEn: "MAXSKILL",
  website: "www.maxskill.co.kr",
  email: "maxskill@maxskill.co.kr",
  tel: "070-4490-1500",
  fax: "02-568-3666",
  address: "서울특별시 성동구 성수이로 66 서울숲드림타워 703호",
  vision:
    'Be a "Good Company" through Customer\'s Satisfaction',
  description:
    "화공, 발전, LNG 분야 플랜트 엔지니어링 전문기업으로 Piping Design, Stress Analysis, 3D CAD, Programming 분야의 축적된 기술력을 바탕으로 최고의 솔루션을 제공합니다.",
};

export const history = [
  { year: "2004.10", event: "회사 설립" },
  { year: "2004.12", event: "고용노동부 인력파견업 등록" },
  { year: "2004.12", event: "한국엔지니어링협회 등록" },
  { year: "2010.05", event: "KSA 품질경영 ISO9001 인증 획득" },
  { year: "2025.05", event: "아키텍처 연구개발실 설립" },
];

export const capabilities = [
  { value: "35,000", unit: "Lines", label: "연간 처리 라인" },
  { value: "1,000", unit: "System", label: "연간 시스템" },
  { value: "170,000", unit: "M/H", label: "연간 공수" },
];

export const hrStats = [
  { role: "Piping Designer", years: "19.4년", count: 57, ratio: "84%" },
  { role: "Stress Eng'r", years: "20.3년", count: 5, ratio: "7%" },
  { role: "3D Admin", years: "15.2년", count: 5, ratio: "7%" },
  { role: "HR", years: "32.2년", count: 1, ratio: "2%" },
];

export const totalHR = {
  avgCareer: "21.7년",
  count: 68,
};

export { services, getServiceCardItems } from "@/data/services";
export type { Service, ServiceSection } from "@/data/services";
