"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function TopNav() {
  return (
    <header className="h-[48px] border-b border-border bg-background sticky top-0 z-50 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-sm">
          <span className="w-5 h-5 bg-foreground rounded-sm" />
          <span>Design System</span>
        </Link>
        <span className="text-border">/</span>
        <span className="text-muted text-sm">Docs</span>
      </div>

      <div className="flex items-center gap-3">
        <SearchButton />
        <ThemeToggle />
      </div>
    </header>
  );
}

function SearchButton() {
  return (
    <button
      className="flex items-center gap-2 h-8 px-3 text-sm text-muted border border-border rounded-md hover:border-foreground/20 transition-colors bg-background"
      onClick={() => {
        // TODO: implement search
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <span>Search...</span>
      <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[10px] font-mono text-muted">
        ⌘K
      </kbd>
    </button>
  );
}
