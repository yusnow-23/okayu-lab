import { profile } from "@/lib/data";
import { PawPrint } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-sky-500 transition-colors transform hover:-translate-y-1"
            >
              <span className="sr-only">{social.name}</span>
              <social.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 flex items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} OKAYU LAB. All rights reserved.
          </span>
          <PawPrint size={14} className="text-sky-200" />
        </p>
      </div>
    </footer>
  );
}
