const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/services.ts");
let content = fs.readFileSync(filePath, "utf8");

content = content.replace(
  /\r?\n        image: \{\r?\n          src: "[^"]+",\r?\n          alt: "[^"]+",\r?\n        \},/g,
  "",
);

if (!content.includes("function serviceBanner")) {
  content = content.replace(
    "export const services: Service[] = [",
    `function serviceBanner(photoId: string) {
  return \`https://images.unsplash.com/\${photoId}?auto=format&fit=crop&w=1600&q=80\`;
}

export const services: Service[] = [`,
  );
}

const bannerReplacements = [
  [
    'image: "/images/services/piping-gallery-1.jpg",\r\n    imageAlt: "야간 조명 아래 화학 플랜트 배관·설비",',
    'image: serviceBanner("photo-1670689334896-8fa8291daa27"),\n    imageAlt: "화학 플랜트 배관·설비 전경 (Unsplash)",',
  ],
  [
    'image: "/images/services/stress-gallery-1.jpg",\r\n    imageAlt: "정유·화학 플랜트 설비 및 배관 구조물",',
    'image: serviceBanner("photo-1596980786765-775174984ec9"),\n    imageAlt: "정유·화학 플랜트 설비 (Unsplash)",',
  ],
  [
    'image: "/images/services/cad-gallery-1.jpg",\r\n    imageAlt: "플랜트 설계용 다중 모니터 엔지니어링 워크스테이션",',
    'image: serviceBanner("photo-1555066931-4365d14bab8c"),\n    imageAlt: "설계 자동화 Programming (Unsplash)",',
  ],
];

for (const [from, to] of bannerReplacements) {
  content = content.replace(from, to);
  content = content.replace(from.replace(/\r\n/g, "\n"), to);
}

fs.writeFileSync(filePath, content.replace(/\r\n/g, "\n"));
console.log(
  "Section images remaining:",
  (content.match(/        image: \{/g) || []).length,
);
