"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smoother scaling and opacity for the immersive feel
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "8px"]);

  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary} relative`}>
      
      {/* IMMERSIVE BACKGROUND LAYER */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <motion.div 
          style={{ scale, opacity, filter: `blur(${blur})` }} 
          className="w-full h-full transition-transform duration-700"
        >
          <video
            src="/video/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to help text readability without killing immersion */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" /> 
        </motion.div>
      </div>

      <Navbar />

      <main ref={containerRef} className="pt-40 md:pt-60 flex-1 flex flex-col items-center px-6 z-10 relative">
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col items-center">
          
          <h2 className={`${DESIGN.label} mb-8 opacity-80`}>
            Established 2026
          </h2>
          
          <h1 className={`${DESIGN.heroHeading} text-center max-w-6xl tracking-tight`}>
            Pure <br /> <span className="italic font-serif">Perspective.</span>
          </h1>
          
          <p className={`mt-12 text-sm md:text-base ${DESIGN.textMuted} max-w-lg text-center font-light leading-relaxed tracking-wide`}>
            A sanctuary for emerging visual storytellers. We curate raw, human narratives through the lens of contemporary photography.
          </p>

          <div className="mt-16 flex gap-8">
             <Link 
               href="/photographers" 
               className={`${DESIGN.navLink} ${DESIGN.borderSubtle} ${DESIGN.accentHover} backdrop-blur-md bg-white/5 px-8 py-3`}
             >
               Enter Gallery
             </Link>
          </div>
        </div>

        {/* HERO VIDEO SECTION - Enhanced blending */}
        <div className="mt-32 w-full max-w-[1400px] px-4 pb-24">
          <Link href="/photographers" className="block relative group overflow-hidden rounded-sm shadow-2xl aspect-[16/9]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <video
              src="/video/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 scale-[1.02] group-hover:scale-100 transition-all duration-[2000ms] ease-out"
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}