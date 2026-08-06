export default function CareersBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-brand-blue/75" />
      <p className="relative px-6 py-10 text-center text-base font-semibold leading-relaxed text-white sm:px-10 sm:py-12 sm:text-lg">
        미소짓는 든든한 친구같은 회사
        <br />
        언제나 열린마음으로 작은소리까지 귀 기울여 듣겠습니다.
      </p>
    </div>
  );
}
