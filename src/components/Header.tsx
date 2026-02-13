"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cat } from "lucide-react";
import { navigationLinks } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-sky-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-700 hover:text-sky-400 transition-colors group"
            >
              <div className="bg-sky-50 p-1.5 rounded-full group-hover:bg-sky-100 transition-colors">
                <Cat size={24} className="text-sky-400" />
              </div>
              <span
                className="font-display"
                style={{ fontFamily: "var(--font-Capriola)" }}
              >
                OKAYU LAB
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 hover:bg-sky-50 hover:text-sky-400 transition-all"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-sky-50 text-slate-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 md:hidden shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-900"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
