"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 flex flex-col items-center gap-8 border-t border-zinc-100 dark:border-zinc-900 bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* Social & Legal Links */}
      <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[min(2.5vw,10px)] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-zinc-400">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-red-500 transition-colors whitespace-nowrap"
        >
          Instagram
        </a>
        <a 
          href="https://artsy.net" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-red-500 transition-colors whitespace-nowrap"
        >
          Artsy
        </a>
        <Link 
          href="/privacy" 
          className="hover:text-red-500 transition-colors whitespace-nowrap"
        >
          Privacy
        </Link>
      </nav>

      {/* Copyright Notice */}
      <p className="text-center text-[min(2vw,9px)] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.5em] uppercase text-zinc-300 px-4">
        © 2026 FiveFootTwo Gallery <span className="hidden xs:inline">|</span> <br className="xs:hidden" /> All Rights Reserved
      </p>
    </footer>
  );
}