"use client";

import { setMode, useMode } from "./mode";

export default function ModeToggle() {
  const mode = useMode();
  const space = mode === "space";

  return (
    <button
      type="button"
      onClick={() => setMode(space ? "pro" : "space")}
      aria-pressed={space}
      aria-label={space ? "Switch to professional mode" : "Switch to space mode"}
      title={space ? "Professional mode" : "Space mode"}
      className="mode-toggle group relative inline-flex h-9 w-[4.5rem] shrink-0 items-center rounded-full border border-line bg-card px-1 transition-colors"
    >
      <span
        aria-hidden
        className={`absolute top-1 h-7 w-7 rounded-full bg-accent shadow transition-transform duration-300 ${
          space ? "translate-x-[2.25rem]" : "translate-x-0"
        }`}
      />
      <span aria-hidden className="relative z-10 grid w-7 place-items-center">
        {/* briefcase */}
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${space ? "text-muted" : "text-on-accent"}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
      </span>
      <span aria-hidden className="relative z-10 ml-auto grid w-7 place-items-center">
        {/* planet */}
        <svg viewBox="0 0 24 24" className={`h-4 w-4 ${space ? "text-on-accent" : "text-muted"}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M4.5 16.5C2 18.5 1.6 20 2.3 20.7c1.4 1.4 7-1.6 12.4-7S23.1 4.7 21.7 3.3C21 2.6 19.5 3 17.5 5.5" />
        </svg>
      </span>
    </button>
  );
}
