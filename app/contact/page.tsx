import EmailActionButton from "@/components/EmailActionButton";
import { companyInfo } from "@/data/company";

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
        <div className="max-w-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white">연락처 정보</h2>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-400">Address</p>
                <p className="mt-1 text-white">{companyInfo.address}</p>
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
              <div>
                <p className="text-sm font-medium text-gray-400">Website</p>
                <p className="mt-1 text-brand-blue">{companyInfo.website}</p>
              </div>
            </div>

            <div className="mt-10">
              <EmailActionButton
                email={companyInfo.email}
                label="이메일 보내기"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
