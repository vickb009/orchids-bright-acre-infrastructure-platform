"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/focus-areas", label: "Focus Areas" },
  { href: "/partnership", label: "Partnership" },
  { href: "/landowners", label: "Landowners" },
  { href: "/contact", label: "Contact" },
];

function BrandWordmark() {
  return (
    <span className="text-2xl font-bold text-[#0B3C89] tracking-tight leading-none">
      Br
      <span className="relative inline-block">
        i
        {/* Golden dot on the i */}
        <span
          className="absolute left-1/2 -translate-x-1/2 -top-[2px] w-[6px] h-[6px] rounded-full bg-[#D9A441]"
          aria-hidden="true"
        />
      </span>
      ght Acre
    </span>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo + wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="Bright Acre"
            width={180}
            height={54}
            className="h-14 w-auto"
            priority
          />
          <BrandWordmark />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#0B3C89] border-b-2 border-[#D9A441] pb-0.5"
                  : "text-[#4A5568] hover:text-[#0B3C89]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#0B3C89]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-[#E2E8F0] px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#0B3C89]"
                  : "text-[#4A5568] hover:text-[#0B3C89]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
