import CareersBanner from "@/components/CareersBanner";
import {
  employeeBenefits,
  salaryComponents,
  salarySystemIntro,
} from "@/data/careers";

export default function CareersHrPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Careers</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">인사</span>제도
          </h1>
        </div>
      </section>

      <section className="section-container py-16 sm:py-20">
        <CareersBanner />

        <div className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
              급여체계
            </h2>
            <p className="mt-4 text-base leading-8 text-gray-300">
              {salarySystemIntro}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-brand-card">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-brand-tan sm:text-base">
                      구분
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-extrabold text-brand-blue sm:text-base">
                      내용
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salaryComponents.map((row, index) => (
                    <tr
                      key={row.category}
                      className={`border-b border-white/5 ${
                        index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                      }`}
                    >
                      <td className="px-6 py-5 align-top text-sm font-semibold text-white sm:text-base">
                        {row.category}
                      </td>
                      <td className="px-6 py-5">
                        <ul className="space-y-2">
                          {row.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm leading-relaxed text-gray-300 sm:text-base"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
              사원복지
            </h2>
            <ul className="mt-6 space-y-3">
              {employeeBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-base leading-relaxed text-gray-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
