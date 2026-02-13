"use client";

import { profile, skills } from "@/lib/data";

import WavySeparator from "./WavySeparator";

export default function About() {
  return (
    <section id="about" className="relative mt-24">
      <WavySeparator fill="#ffffff" variant={1} />
      <div className="bg-white section-padding relative overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute -left-20 top-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div>
              <h2 className="title-cute text-sky-400">私について</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                {profile.bio}
              </p>
              <div className="space-y-4 bg-sky-50 p-6 rounded-3xl border border-sky-100">
                <div className="flex items-center space-x-4">
                  <span className="w-24 font-bold text-sky-400">役割</span>
                  <span className="text-slate-700">{profile.role}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-24 font-bold text-sky-400">拠点</span>
                  <span className="text-slate-700">Japan</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="card-base p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-700 flex items-center gap-2">
                <span className="w-2 h-6 bg-purple-300 rounded-full"></span>
                スキル
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-600 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sky-400 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="bg-gradient-to-r from-sky-300 to-purple-300 h-3 rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
