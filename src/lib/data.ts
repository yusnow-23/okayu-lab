import { Github, Instagram } from "lucide-react";

export const profile = {
  name: "Yuki",
  role: "Engineer & Designer / Registered Dietitian",
  bio: "感性(ISFP) × 技術(Engineer) × 暮らし(Life). 4年間のエンジニア経験（Python, C#）と管理栄養士としての視点を活かし、機能美と情緒的価値を兼ね備えたWeb制作を行います。",
  email: "contact@example.com", // TODO: Replace with actual email or contact form
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/your-account", // TODO: Update URL
      icon: Instagram,
    },
    {
      name: "GitHub",
      url: "https://github.com/your-account", // TODO: Update URL
      icon: Github,
    },
    // Add more if needed
  ],
};

export const skills = [
  { name: "Python (Django)", level: 80 },
  { name: "C# (WinForms)", level: 80 },
  { name: "TypeScript", level: 40 },
  { name: "React / Next.js", level: 40 },
  { name: "SQL", level: 70 },
  { name: "Canva / Figma", level: 50 },
];

export const portfolioItems = [
  {
    title: "Markvilla Demo",
    description: "不動産運用のデモLP。高級感と信頼感を重視したデザイン。",
    image: "/images/markvilla.jpg", // Placeholder
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://lp-demo-markvilla.vercel.app", // Adjust if deployed elsewhere
  },
  {
    title: "Nurse Introduction",
    description: "看護師紹介LP。安心感と清潔感をテーマにした優しいデザイン。",
    image: "/images/nurse.jpg", // Placeholder
    tags: ["Next.js", "TypeScript", "Responsive"],
    link: "https://lp-nurse-intro.vercel.app", // Adjust if deployed elsewhere
  },
];

export const navigationLinks = [
  { name: "ホーム", href: "#home" },
  { name: "私について", href: "#about" },
  { name: "制作実績", href: "#portfolio" },
  { name: "お問い合わせ", href: "#contact" },
];
