import { careersBannerText } from "@/data/careers";

export default function CareersBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/careers/banner.jpg)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-brand-blue/75" />
      <p className="relative px-6 py-10 text-center text-base font-semibold leading-relaxed text-white sm:px-10 sm:py-12 sm:text-lg">
        {careersBannerText}
      </p>
    </div>
  );
}
