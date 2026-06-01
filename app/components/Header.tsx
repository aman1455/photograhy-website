"use client";

import { useState, useEffect } from "react";
import WhatsAppButton from "./WhatsAppButton";

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#packages", label: "Packages" },
  { href: "#stay", label: "Stay" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-bold text-sm sm:text-base ${scrolled ? "text-gray-900" : "text-white drop-shadow"}`}>
          📸 Rishikesh Pre Wedding
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                scrolled ? "text-gray-700" : "text-white drop-shadow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <WhatsAppButton
            message="Hi! I want to book my pre-wedding shoot in Rishikesh. Please share details."
            className="py-2 px-4 text-sm"
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium py-2 hover:text-purple-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton
            message="Hi! I want to book my pre-wedding shoot in Rishikesh. Please share details."
            className="w-full justify-center py-3 text-sm mt-2"
          />
        </div>
      )}
    </header>
  );
}
