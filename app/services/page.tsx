import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata = {
    title: "업무분야 | MAXSKILL",
  description:
    "Piping Design, Stress Analysis, 3D CAD, 설계 IT 분야의 전문 플랜트 엔지니어링 서비스",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Services</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">업무</span>분야
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-gray-400 sm:text-lg">
            Piping Design, Stress Analysis, 3D CAD, 설계 IT 분야의
            전문 엔지니어링 서비스를 제공합니다.
          </p>
        </div>
      </section>

      <ServicesPageContent />
    </main>
  );
}
