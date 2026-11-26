"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/data";
import { Close, Download, Menu } from "./Icons";

const navLinks = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
];

export default function Nav() {
  const pathname = usePathname();
  // The sheet remembers the page it was opened on, so it closes by itself when the route changes.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const isOpen = openOn === pathname;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 pt-3 pb-2 sm:pt-5">
      <div className="wrap">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between rounded-full border border-line bg-paper/90 py-1.5 pr-1.5 pl-2 backdrop-blur"
        >
          <Link href="/" aria-label="Ebunoluwa Amoo, home" className="flex items-center gap-2.5 rounded-full">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-forest font-display text-[22px] text-gold">
              Ẹ
            </span>
            <span className="font-display text-xl font-[650] text-forest">ebun.</span>
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-3 text-[15px] font-semibold transition-colors ${
                  isActive(link.href) ? "bg-gold text-forest" : "text-ink hover:bg-gold-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full px-4 py-3 text-[15px] font-semibold text-ink hover:bg-gold-soft"
            >
              Résumé <Download size={16} />
            </a>
            <a href={profile.calendly} className="btn btn-tangerine ml-1 min-h-[2.875rem]">
              Let’s talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpenOn(isOpen ? null : pathname)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="grid h-12 w-12 place-items-center rounded-full bg-tangerine text-on-tangerine sm:hidden"
          >
            {/* Blur swap: the outgoing icon blurs and fades as the new one comes in */}
            <span className="grid [&>*]:col-start-1 [&>*]:row-start-1 [&>*]:transition-[opacity,filter,transform] [&>*]:duration-200">
              <Menu size={22} className={isOpen ? "scale-75 opacity-0 blur-[4px]" : "opacity-100 blur-0"} />
              <Close size={22} className={isOpen ? "opacity-100 blur-0" : "scale-75 opacity-0 blur-[4px]"} />
            </span>
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-0 z-40 h-dvh sm:hidden" id="mobile-menu">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpenOn(null)}
            className="fade-in absolute inset-0 bg-forest/60"
          />
          <nav
            aria-label="Mobile"
            className="sheet-up absolute inset-x-0 bottom-0 flex flex-col rounded-t-[28px] bg-paper px-5 pt-3 pb-8"
          >
            <span aria-hidden="true" className="mx-auto mb-3 h-1.5 w-11 rounded-full bg-line-strong" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-14 items-center border-b border-line font-display text-[26px]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-between font-display text-[26px]"
            >
              Résumé <Download size={20} />
            </a>
            <a href={profile.calendly} className="btn btn-primary mt-4">
              Book a 15-min call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
