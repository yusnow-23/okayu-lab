import { Github, Instagram } from "lucide-react";

export const profile = {
  name: "Yuki",
  like: "Cat, Anime, Manga, Karaoke, Idols",
  bio: "神奈川県在住のエンジニア。新卒で管理栄養士として働いていた際、日々の業務で使うシステムの仕組みに興味を持ったことがきっかけでITに興味を持つ。ITスクールでの学習と独学を経て、27歳でエンジニアとしてのキャリアをスタート。Python/Djangoを用いたWeb開発、C#による業務システムの改修・開発などの一連の業務を経験。",
  email: "sn.ow.swnt@gmail.com", // TODO: Replace with actual email or contact form
  socials: [
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/your-account", // TODO: Update URL
    //   icon: Instagram,
    // },
    {
      name: "GitHub",
      url: "https://github.com/yusnow-23", // TODO: Update URL
      icon: Github,
    },
    // Add more if needed
  ],
};

export const skills = [
  { name: "Python (Django)", level: 40 },
  { name: "C# (WinForms)", level: 70 },
  { name: "TypeScript", level: 40 },
  { name: "React / Next.js", level: 40 },
  { name: "SQL", level: 70 },
  //{ name: "Canva / Figma", level: 50 },
];

export const portfolioItems = [
  {
    title: "Nyan Stay",
    description: "猫専用ペットシッターのホームページ。安心感をテーマにした優しいデザイン。",
    image: "/nyanstay.png",
    tags: ["Next.js", "TypeScript", "Responsive"],
    link: "https://cat-sitter-one.vercel.app",
  },
  {
    title: "Markvilla Demo",
    description: "不動産運用のデモLP。高級感と信頼感を重視したデザイン。",
    image: "/markvilla.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://lp-demo-markvilla.vercel.app",
  },
  {
    title: "Nurse Introduction",
    description: "看護師紹介LP。安心感と清潔感をテーマにした優しいデザイン。",
    image: "/nurse-intro.png",
    tags: ["Next.js", "TypeScript", "Responsive"],
    link: "https://hp-nurse-intro.vercel.app",
  },
  {
    title: "Okayu LAB",
    description: "メインポートフォリオサイト",
    image: "/okayulab.png",
    tags: ["Next.js", "TypeScript", "Responsive"],
    link: "https://okayu-lab.vercel.app/",
  },
];

export const navigationLinks = [
  { name: "ホーム", href: "#home" },
  { name: "私について", href: "#about" },
  { name: "制作実績", href: "#portfolio" },
  { name: "お問い合わせ", href: "#contact" },
];
