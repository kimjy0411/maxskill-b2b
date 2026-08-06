import SectionHeading from "@/components/SectionHeading";
import HeroSlideshow from "@/components/HeroSlideshow";
import {
  companyInfo,
  history,
  hrStats,
  totalHR,
  capabilities,
} from "@/data/company";

export default function AboutPage() {
  return (
    <main>
      <HeroSlideshow>
        <div className="section-container py-28 sm:py-32 lg:py-36">
          <p className="page-subtitle">About Us</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">회사</span> 소개
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-gray-300 sm:text-lg">
            {companyInfo.description}
          </p>
        </div>
      </HeroSlideshow>

      {/* Vision */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url(/images/about/ceo.png)",
            backgroundPosition: "center calc(50% + 24px)",
          }}
          role="img"
          aria-label="대표이사"
        />
        <div className="absolute inset-0 bg-brand-blue/80" />

        <div className="section-container relative z-10 flex min-h-[420px] flex-col justify-end pb-14 pt-16 text-center sm:min-h-[480px] sm:pb-20 sm:pt-20">
          <p className="page-subtitle text-white/70">Vision</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {companyInfo.vision}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            고객 만족을 통해 &apos;Good Company&apos;가 되겠습니다.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-container py-20 sm:py-28">
        <SectionHeading
          label="History"
          title="회사 연혁"
          description="2004년 설립 이래 플랜트 엔지니어링 분야의 전문성을 쌓아왔습니다."
        />

        <div className="mt-14 space-y-0">
          {history.map((item) => (
            <div
              key={item.year + item.event}
              className="relative flex gap-8 border-l border-brand-card-border pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-blue" />
              <div className="shrink-0">
                <p className="brand-font text-sm text-brand-blue">{item.year}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{item.event}</p>
                <div className="mt-2 h-px w-full bg-brand-card-border" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HR Stats */}
      <section className="border-y border-white/5 bg-brand-card">
        <div className="section-container py-20 sm:py-28">
          <SectionHeading
            label="Human Resource"
            title="인적 역량"
            description={`전체 평균 경력 ${totalHR.avgCareer}, 총 ${totalHR.count}명의 전문 인력이 프로젝트를 수행합니다.`}
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hrStats.map((stat) => (
              <div
                key={stat.role}
                className="rounded-2xl border border-brand-card-border bg-brand-dark p-6 text-center"
              >
                <p className="text-3xl font-bold text-brand-blue">
                  {stat.ratio}
                </p>
                <p className="mt-2 font-semibold text-white">{stat.role}</p>
                <p className="mt-1 text-sm text-gray-400">
                  {stat.years} · {stat.count}명
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability */}
      <section className="section-container py-20 sm:py-28">
        <SectionHeading
          label="Capability"
          title="수행 역량"
          description="연간 처리 가능한 설계 규모"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="rounded-2xl border border-brand-card-border bg-brand-card p-8 text-center"
            >
              <p className="text-4xl font-bold text-brand-blue">
                {cap.value}
                <span className="ml-2 text-lg text-gray-400">{cap.unit}</span>
              </p>
              <p className="mt-3 text-sm text-gray-400">{cap.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
