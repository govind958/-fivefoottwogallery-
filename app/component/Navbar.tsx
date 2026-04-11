"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effect to handle blur/border on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
     { name: "artist", href: "/Artists" },
    { name: "exhibitions", href: "/exhibitions" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "opencall", href: "/opencall" },
  ];

  // Helper to check if a link is active based on current URL
  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-10"
      }`}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-8 md:px-12">
          
          {/* Logo */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl font-light tracking-[-0.02em] hover:opacity-50 transition-opacity cursor-pointer z-50">
              FiveFootTwo <span className="font-medium text-zinc-500">Gallery</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 text-[11px] tracking-[0.3em] font-light lowercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <span className={`transition-colors duration-500 ${isActive(link.href) ? "text-zinc-400" : "group-hover:text-zinc-400"}`}>
                  {link.name}
                </span>
                {/* The Red Underline */}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-red-500 transition-all duration-500 ease-out ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-1/2"
                }`} />
              </Link>
            ))}
            
            <a href="#" className="hover:scale-110 transition-transform ml-2">
              <InstagramIcon />
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden z-50 flex flex-col gap-1.5 p-2">
            <div className={`h-[1px] w-6 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-[1px] w-6 bg-current transition-all ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-[1px] w-6 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-[90] flex items-center justify-center transition-all duration-700 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}>
        <div className="flex flex-col items-center gap-10 text-2xl tracking-[0.4em] font-extralight lowercase">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`transition-colors ${isActive(link.href) ? "text-red-500" : "hover:text-red-500"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" height="18" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" 
      className="text-zinc-500 hover:text-[#E1306C] transition-colors"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}