"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 flex flex-col items-center gap-6 border-t border-zinc-100 dark:border-zinc-900 bg-[#fafafa] dark:bg-[#0a0a0a]">
      {/* Social & Legal Links */}
      <div className="flex gap-8 text-[9px] tracking-[0.3em] uppercase text-zinc-400">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-red-500 transition-colors"
        >
          Instagram
        </a>
        <a 
          href="https://artsy.net" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-red-500 transition-colors"
        >
          Artsy
        </a>
        <Link 
          href="/privacy" 
          className="hover:text-red-500 transition-colors"
        >
          Privacy
        </Link>
      </div>

      {/* Copyright Notice */}
      <p className="text-[9px] tracking-[0.5em] uppercase text-zinc-300">
        © 2026 FiveFootTwo Gallery | All Rights Reserved
      </p>
    </footer>
  );
}