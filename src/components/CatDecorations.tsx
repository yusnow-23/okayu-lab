"use client";

import Image from "next/image";

export default function CatDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Pattern - subtle dots */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(var(--secondary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating Cats */}
      <div className="absolute top-20 left-[5%] opacity-80 animate-float w-32 h-32 md:w-48 md:h-48">
        <Image
          src="/cat-1.png"
          alt="Sitting Cat"
          fill
          style={{ objectFit: "contain" }}
          className="rotate-12"
        />
      </div>

      <div className="absolute top-1/3 right-[5%] opacity-80 animate-float-delayed w-24 h-24 md:w-40 md:h-40">
        <Image
          src="/cat-2.png"
          alt="Stretching Cat"
          fill
          style={{ objectFit: "contain" }}
          className="-rotate-12"
        />
      </div>

      <div className="absolute bottom-20 left-[10%] opacity-80 animate-float w-28 h-28 md:w-44 md:h-44">
        <Image
          src="/cat-3.png"
          alt="Rolling Cat"
          fill
          style={{ objectFit: "contain" }}
          className="rotate-[15deg]"
        />
      </div>

      {/* Extra Cat for balance */}
      <div className="absolute bottom-1/4 right-[10%] opacity-60 animate-pulse w-16 h-16 md:w-24 md:h-24">
        <Image
          src="/cat-1.png"
          alt="Tiny Cat"
          fill
          style={{ objectFit: "contain" }}
          className="-rotate-[5deg]"
        />
      </div>
    </div>
  );
}
