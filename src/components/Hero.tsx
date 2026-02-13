"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-32 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-slate-700 mb-8 font-display">
            <span className="block text-sky-400 tracking-widest title-cute">
              OKAYU LAB
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            機能美と情緒的価値を実装するエンジニア。
            <br />
            あなたの「想い」を、やわらかく形にします。
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-full bg-sky-300 text-white font-bold tracking-wide hover:bg-sky-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              制作実績を見る
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-sky-300 text-white font-bold tracking-wide hover:bg-sky-400 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-300" />
      </div>
    </section>
  );
}
