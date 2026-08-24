import Link from "next/link";
import { notFound } from "next/navigation";
import CareersBanner from "@/components/CareersBanner";
import { companyInfo } from "@/data/company";
import { getJobPosting, getJobPostings } from "@/lib/jobPostings";

export const revalidate = 300;

interface JobPostingPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const postings = await getJobPostings();
  return postings.map((posting) => ({ id: String(posting.id) }));
}

export async function generateMetadata({ params }: JobPostingPageProps) {
  const posting = await getJobPosting(Number(params.id));
  if (!posting) {
    return { title: "채용정보 | MAXSKILL" };
  }

  return {
    title: `${posting.title} | 채용정보 | MAXSKILL`,
    description: posting.content[0] ?? posting.title,
  };
}

export default async function JobPostingPage({ params }: JobPostingPageProps) {
  const posting = await getJobPosting(Number(params.id));
  if (!posting) notFound();

  const applyHref = `mailto:${companyInfo.email}?subject=${encodeURIComponent(
    `[채용지원] ${posting.title}`,
  )}`;

  return (
    <main>
      <section className="page-hero">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

        <div className="section-container relative py-20 sm:py-28 lg:py-36">
          <p className="page-subtitle">Careers</p>
          <h1 className="page-title mt-5 max-w-4xl break-keep">
            {posting.title}
          </h1>
        </div>
      </section>

      <section className="section-container py-16 sm:py-20">
        <CareersBanner />

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-brand-card sm:mt-12">
          <dl className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-brand-card px-6 py-5">
              <dt className="text-sm font-bold text-brand-blue">공고일자</dt>
              <dd className="mt-2 text-sm text-gray-200">{posting.postedAt}</dd>
            </div>
            <div className="bg-brand-card px-6 py-5">
              <dt className="text-sm font-bold text-brand-blue">접수기간</dt>
              <dd className="mt-2 text-sm text-gray-200">{posting.period}</dd>
            </div>
            <div className="bg-brand-card px-6 py-5">
              <dt className="text-sm font-bold text-brand-blue">상태</dt>
              <dd className="mt-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                    posting.status === "진행중"
                      ? "bg-brand-blue/20 text-brand-blue"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  {posting.status}
                </span>
              </dd>
            </div>
            <div className="bg-brand-card px-6 py-5">
              <dt className="text-sm font-bold text-brand-blue">조회</dt>
              <dd className="mt-2 text-sm text-gray-200">
                {posting.views.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>

        <article className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-brand-card p-8 sm:p-10">
          {posting.content.length > 0 ? (
            posting.content.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="break-keep text-base leading-8 text-gray-300"
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="break-keep text-base leading-8 text-gray-400">
              상세 내용은 이메일로 문의해 주시기 바랍니다.
            </p>
          )}

          <div className="flex flex-wrap gap-3 pt-4">
            {posting.status === "진행중" && (
              <a
                href={applyHref}
                className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:brightness-110"
              >
                이메일로 지원하기
              </a>
            )}
            <Link
              href="/careers"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-gray-200 transition-colors hover:border-white/40"
            >
              목록으로
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
