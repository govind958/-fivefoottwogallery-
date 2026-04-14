"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

export default function AboutPage() {
  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-40 md:pt-60 pb-32 flex-1">
        {/* HERO SECTION - Large Typography */}
        <section className="px-8 md:px-12 max-w-[1600px] mx-auto mb-32">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className={`${DESIGN.label} mb-8`}>
              The Vision
            </h2>
            <h1 className={`${DESIGN.heroHeading} lg:text-[10rem] leading-[0.85] max-w-5xl`}>
              Elevating <br /> 
              <span className="italic font-serif">The Frame.</span>
            </h1>
          </div>
        </section>

        {/* IMAGE & TEXT SPLIT - Editorial Layout */}
        <section className="px-8 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-40">
          <div className="lg:col-span-7 relative aspect-[16/10] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
            <Image 
              src="/gallery-space.jpg" 
              alt="Gallery Space" 
              fill 
              className="object-cover scale-110"
            />
          </div>
          <div className="lg:col-span-5 lg:pl-12 flex flex-col gap-8">
            <p className={`text-xl md:text-2xl font-light leading-relaxed tracking-tight ${DESIGN.textMuted}`}>
              Founded in 2026, FiveFootTwo Gallery serves as a bridge between raw human experience and contemporary visual art. 
            </p>
            <div className={`h-[1px] w-20 bg-current opacity-30 ${DESIGN.borderSubtle}`} />
            <p className={`text-sm font-light leading-loose italic ${DESIGN.textMuted}`}>
              "We believe that photography is not just about capturing a moment, but about translating the silent dialogue between the subject and the lens."
            </p>
          </div>
        </section>

        {/* STATS / VALUES SECTION - Minimalist Grid */}
        <section className="bg-zinc-100 dark:bg-zinc-900/50 py-32 px-8 md:px-12">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div>
              <h4 className={`${DESIGN.label} ${DESIGN.accentHover} mb-6 opacity-100`}>Curatorial Rigor</h4>
              <p className={`text-sm font-light leading-relaxed ${DESIGN.textMuted}`}>
                Every exhibition is a deliberate narrative, curated over months to ensure a cohesive and challenging experience for our visitors.
              </p>
            </div>
            <div>
              <h4 className={`${DESIGN.label} ${DESIGN.accentHover} mb-6 opacity-100`}>Emerging Voices</h4>
              <p className={`text-sm font-light leading-relaxed ${DESIGN.textMuted}`}>
                Our primary mission is to provide a platform for the next generation of visual storytellers from across the globe.
              </p>
            </div>
            <div>
              <h4 className={`${DESIGN.label} ${DESIGN.accentHover} mb-6 opacity-100`}>Physical & Digital</h4>
              <p className={`text-sm font-light leading-relaxed ${DESIGN.textMuted}`}>
                A hybrid sanctuary. Located in the heart of London, but accessible to the global community through immersive digital archives.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="pt-40 text-center px-8">
          <h3 className="text-3xl md:text-5xl font-extralight tracking-tighter mb-12">Join our journey.</h3>
          <div className="flex justify-center gap-12">
            <Link 
              href="/contact" 
              className={`${DESIGN.navLink} border-b ${DESIGN.borderSubtle} ${DESIGN.accentHover} pb-2`}
            >
              Contact Us
            </Link>
            <Link 
              href="/open-call" 
              className={`${DESIGN.navLink} border-b ${DESIGN.borderSubtle} ${DESIGN.accentHover} pb-2`}
            >
              Submit Work
            </Link>
          </div>
        </section>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}