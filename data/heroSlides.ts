export const heroSlides = [
  {
    category: "화공",
    label: "Petrochemical Plant",
    src: "/images/hero/plant-night.jpg",
    alt: "야간 석유화학 플랜트 전경",
  },
  {
    category: "발전",
    label: "Power Plant",
    src: "/images/hero/chemical.jpg",
    alt: "정유 플랜트 전경",
  },
  {
    category: "LNG",
    label: "LNG Plant",
    src: "/images/hero/lng.jpg",
    alt: "원거리 LNG 플랜트 전경",
  },
] as const;

export type HeroSlide = (typeof heroSlides)[number];

export const HERO_SLIDE_INTERVAL_MS = 5000;
