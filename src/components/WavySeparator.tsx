"use client";

import { useEffect, useState } from "react";

interface WavySeparatorProps {
  color?: string;
  fill?: string;
  height?: number;
  flip?: boolean;
  variant?: 1 | 2 | 3;
}

const PATHS = {
  1: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
  2: "M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0V96Z",
  3: "M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0V64Z",
};

export default function WavySeparator({
  color = "text-white",
  fill = "currentColor",
  height = 50,
  flip = false,
  variant = 1,
}: WavySeparatorProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] transform scale-y-[-1] ${
        flip ? "scale-x-[-1]" : ""
      } ${color}`}
      style={{ height: `${height}px` }}
    >
      <svg
        viewBox={variant === 1 ? "0 0 1200 120" : "0 0 1440 120"}
        preserveAspectRatio="none"
        className="relative block w-full h-full"
        style={{ fill: fill }}
      >
        <path d={PATHS[variant]}></path>
      </svg>
    </div>
  );
}
