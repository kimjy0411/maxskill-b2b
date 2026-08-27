import { companyInfo } from "@/data/company";

const mapQuery = "서울특별시 성동구 성수이로 66 서울숲드림타워";
const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&hl=ko&z=16&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Contact Us</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">문의</span>하기
          </h1>
          <p className="mt-6 max-w-2xl break-keep text-base leading-8 text-gray-400 sm:text-lg">
            프로젝트 문의, 협력 제안 등 무엇이든 편하게 연락해 주세요.
          </p>
        </div>
      </section>

      <section className="section-container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white">연락처 정보</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-400">Address</p>
                <p className="mt-1 break-keep text-white">{companyInfo.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Email</p>
                <p className="mt-1 text-white">{companyInfo.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Phone</p>
                <p className="mt-1 text-white">T {companyInfo.tel}</p>
                <p className="text-white">F {companyInfo.fax}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">오시는 길</h2>
            <p className="mt-3 break-keep text-sm text-gray-400">
              {companyInfo.address}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-brand-card">
              <iframe
                title="맥스킬 오시는 길"
                src={mapEmbedSrc}
                className="h-[280px] w-full sm:h-[360px] lg:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-brand-blue hover:underline"
            >
              크게 보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
