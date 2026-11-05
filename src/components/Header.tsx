"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import ModeToggle from "./ModeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? "is-scrolled border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#home" className="logo font-display text-lg font-bold tracking-tight" aria-label={`${site.name} — home`}>
          {site.initials}
          <span className="text-accent">.</span>
        </a>

        <ul
          id="nav-menu"
          className={`${open ? "flex" : "hidden"} nav-menu absolute inset-x-0 top-16 flex-col gap-1 border-b border-line p-4 md:static md:ml-auto md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <ModeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
