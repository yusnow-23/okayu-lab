import type { Metadata } from "next";
import { Capriola } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatDecorations from "@/components/CatDecorations";

const capriola = Capriola({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-capriola",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OKAYU LAB | Engineer & Designer",
  description:
    "Portfolio of Okayu, an Engineer & Designer bridging sensibility, technology, and life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${capriola.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <CatDecorations />
        <Header />
        <main className="min-h-screen pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
