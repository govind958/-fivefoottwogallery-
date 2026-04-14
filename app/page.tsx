"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

export default function Home() {
  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      <Navbar />

      <main className="pt-40 md:pt-60 flex-1 flex flex-col items-center px-6">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
          
          {/* Using Label and Muted Text */}
          <h2 className={`${DESIGN.label} ${DESIGN.label} mb-8`}>
            Established 2026
          </h2>
          
          <h1 className={`${DESIGN.heroHeading} text-center max-w-6xl`}>
            Pure <br /> <span className="italic font-serif">Perspective.</span>
          </h1>
          
          <p className={`mt-12 text-sm md:text-base ${DESIGN.textMuted} max-w-lg text-center font-light leading-relaxed tracking-wide`}>
            A sanctuary for emerging visual storytellers. We curate raw, human narratives through the lens of contemporary photography.
          </p>

          <div className="mt-16 flex gap-8">
             <Link 
               href="/photographers" 
               className={`${DESIGN.navLink} ${DESIGN.borderSubtle} ${DESIGN.accentHover}`}
             >
               Enter Gallery
             </Link>
             <Link 
               href="/exhibitions" 
               className={`${DESIGN.navLink} ${DESIGN.borderSubtle} ${DESIGN.accentHover}`}
             >
               Exhibitions
             </Link>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-32 w-full max-w-[1600px] px-4 md:px-12 pb-24">
          <Link href="/photographers" className="block relative group overflow-hidden aspect-[16/10] md:aspect-[21/9]">
            <Image
              src="/art.jpg" 
              alt="Gallery"
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
               <span className="text-white text-[10px] tracking-[0.5em] uppercase border border-white/40 px-8 py-3 backdrop-blur-sm">
                 View Work
               </span>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}