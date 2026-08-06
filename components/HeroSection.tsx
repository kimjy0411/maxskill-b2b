"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroBackgroundSlides } from "@/components/HeroBackgroundSlides";
import { heroSlides, HERO_SLIDE_INTERVAL_MS } from "@/data/heroSlides";

function HeroDescription() {
  return (
    <p className="max-w-3xl break-keep text-base leading-8 text-gray-100 sm:text-lg sm:leading-9 [text-shadow:0_2px_16px_rgba(0,0,0,0.65)]">
      <span className="font-semibold text-brand-blue">화공</span>,{" "}
      <span className="font-semibold text-brand-blue">발전</span>,{" "}
      <span className="font-semibold text-brand-blue">LNG</span> 분야 플랜트
      엔지니어링 전문기업으로 Piping Design, Stress Analysis, 3D CAD,
      Programming 분야의 축적된 기술력을 바탕으로 최고의 솔루션을 제공합니다.
    </p>
  );
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackgroundSlides slides={heroSlides} activeIndex={activeIndex} />

      <div className="section-container relative z-10 flex w-full flex-col justify-center py-28 sm:py-32 lg:py-36">
        <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:text-left">
          <p className="page-subtitle [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            About Us
          </p>

          <h1 className="page-title mt-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]">
            플랜트 엔지니어링의{" "}
            <span className="text-brand-blue">미래</span>를 설계합니다
          </h1>

          <div className="mt-6">
            <HeroDescription />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/projects"
              className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/contact"
              className="brand-font rounded-full border border-white/30 px-8 py-3.5 text-sm text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-10">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.category}
            type="button"
            aria-label={`${slide.category} 배경 보기`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "h-2.5 w-10 bg-brand-blue"
                : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
