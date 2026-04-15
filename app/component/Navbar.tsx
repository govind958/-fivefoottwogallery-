"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { name: "artists", href: "/Artists" },
    { name: "exhibitions", href: "/exhibitions" },
    { name: "about", href: "/about" },
    { name: "contact", href: "/contact" },
    { name: "opencall", href: "/opencall" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-4" 
            : "bg-transparent py-8 md:py-12"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20">
          
          {/* Logo */}
          <Link href="/" className="z-[110]">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-lg md:text-xl font-light tracking-tighter hover:opacity-50 transition-opacity"
            >
              FiveFootTwo <span className="font-medium text-zinc-400">Gallery</span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-16 text-[10px] tracking-[0.4em] font-light lowercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2 overflow-hidden"
              >
                <span className={`transition-colors duration-500 ${
                  isActive(link.href) ? "text-red-500" : "text-zinc-500 group-hover:text-black dark:group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                
                {/* Animated Underline */}
                {isActive(link.href) ? (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-[1px] w-full bg-red-500"
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-zinc-400 transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
            
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="#" 
              className="ml-4"
            >
              <InstagramIcon />
            </motion.a>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden z-[110] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-[1px] w-full bg-current origin-center transition-transform" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="h-[1px] w-full bg-current transition-all" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-[1px] w-full bg-current origin-center transition-transform" 
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white dark:bg-zinc-950 z-[95] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 md:gap-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className={`text-3xl md:text-5xl tracking-[0.2em] font-extralight lowercase transition-colors ${
                      isActive(link.href) ? "text-red-500" : "text-zinc-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <InstagramIcon size={32} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" 
      className="text-zinc-400 hover:text-[#E1306C] transition-colors"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}