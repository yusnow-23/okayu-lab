"use client";

import { Mail, MessageSquare } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto container-padding text-center">
        <div>
          <h2 className="title-cute text-sky-400">お問い合わせ</h2>
          <p className="text-lg text-slate-600 mb-12 font-medium">
            お仕事のご依頼やご相談は、下記よりお気軽にご連絡ください。
            <br />
            一緒に素晴らしいものを作りましょう。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-sky-300 text-white rounded-full hover:bg-sky-400 transition-transform shadow-md hover:-translate-y-1 font-bold tracking-wide"
            >
              <Mail size={20} />
              <span>メールを送る</span>
            </a>

            {/* Example for another contact method */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-sky-300 text-white rounded-full hover:bg-sky-400 transition-transform shadow-md hover:-translate-y-1 font-bold tracking-wide"
            >
              <MessageSquare size={20} />
              <span>InstagramでDM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
