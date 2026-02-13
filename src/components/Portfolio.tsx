"use client";

import { ExternalLink } from "lucide-react";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="title-cute text-sky-400">制作実績</h2>
          <p className="text-slate-500">これまでの制作物</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="card-base overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-48 bg-sky-50 overflow-hidden flex items-center justify-center">
                {/* Visual placeholder with cute colors */}
                <div className="text-sky-300 opacity-50 font-bold text-xl">
                  準備中...
                </div>

                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full text-sky-400 shadow-lg hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-700 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 mb-4 line-clamp-2 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sky-50 text-xs font-bold text-sky-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
