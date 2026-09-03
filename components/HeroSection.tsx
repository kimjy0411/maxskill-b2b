"use client";

import { useEffect, useState } from "react";
import { HeroBackgroundSlides } from "@/components/HeroBackgroundSlides";
import { heroSlides, HERO_SLIDE_INTERVAL_MS } from "@/data/heroSlides";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="page-hero">
      <HeroBackgroundSlides slides={heroSlides} activeIndex={activeIndex} />

      <div className="page-hero-inner">
        <div className="page-hero-copy">
          <h1 className="page-title whitespace-nowrap text-[clamp(1.25rem,4.6vw,3.75rem)] [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]">
            플랜트 엔지니어링의{" "}
            <span className="text-brand-blue">미래</span>를 설계합니다
          </h1>
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
