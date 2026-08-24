import CareersBanner from "@/components/CareersBanner";
import JobPostingTable from "@/components/JobPostingTable";
import { getJobPostings } from "@/lib/jobPostings";

export const revalidate = 300;

export default async function CareersPage() {
  const postings = await getJobPostings();

  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Careers</p>
          <h1 className="page-title mt-5 max-w-3xl">
            <span className="text-brand-blue">채용</span>정보
          </h1>
        </div>
      </section>

      <section className="section-container py-16 sm:py-20">
        <CareersBanner />

        <p className="mt-10 text-sm text-gray-400 sm:mt-12">
          상세한 정보를 원하시면 해당 채용명을 클릭하시기 바랍니다.
        </p>

        <div className="mt-6">
          <JobPostingTable postings={postings} />
        </div>
      </section>
    </main>
  );
}
