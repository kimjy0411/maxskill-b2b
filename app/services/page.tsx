import PageHero from "@/components/PageHero";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata = {
    title: "업무분야 | MAXSKILL",
  description:
    "Piping Design, Stress Analysis, 3D CAD, 설계 IT 분야의 전문 플랜트 엔지니어링 서비스",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero subtitle="Services" title="업무분야" />

      <ServicesPageContent />
    </main>
  );
}
