"use client";

import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

export default function OpenCallPage() {
  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1600px] mx-auto flex-1">
        
        {/* HERO SECTION */}
        <header className="mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <h2 className={`${DESIGN.label} mb-6`}>Active Brief — Vol. 01</h2>
              <h1 className={`${DESIGN.heroHeading} leading-[0.85] mb-8`}>
                Field <br /> <span className="italic font-serif">Notes.</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className={`${DESIGN.label} ${DESIGN.accentHover} opacity-100 font-bold mb-2`}>Deadline</p>
              <p className="text-xl font-light tracking-tight italic">May 24, 2026</p>
            </div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Imagery & Mood */}
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            <div className={`relative aspect-[4/5] ${DESIGN.bg} overflow-hidden border ${DESIGN.borderSubtle}`}>
              <Image 
                src="/opencall-hero.jpg" 
                alt="Atmospheric Landscape" 
                fill 
                className="object-cover grayscale"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className={`aspect-square ${DESIGN.bg} relative overflow-hidden border ${DESIGN.borderSubtle}`}>
                <Image src="/mood-1.jpg" alt="Mood" fill className="object-cover opacity-60 grayscale" />
              </div>
              <div className={`aspect-square ${DESIGN.bg} relative overflow-hidden border ${DESIGN.borderSubtle}`}>
                <Image src="/mood-2.jpg" alt="Mood" fill className="object-cover opacity-60 grayscale" />
              </div>
            </div>
          </div>

          {/* Right Column: Textual Details */}
          <div className="lg:col-span-5 space-y-16 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            
            <section>
              <h3 className={`${DESIGN.label} mb-6`}>The Concept</h3>
              <p className={`text-xl font-light leading-relaxed ${DESIGN.textMuted}`}>
                We are seeking artists series that document the periphery—the overlooked details of our changing environments. "Field Notes" is an exploration of the quiet transitions between the urban and the wild.
              </p>
            </section>

            <section>
              <h3 className={`${DESIGN.label} mb-6`}>Submission Requirements</h3>
              <ul className={`space-y-6 text-sm font-light ${DESIGN.textMuted} leading-relaxed border-l ${DESIGN.borderSubtle} pl-8`}>
                <li>
                  <span className={`${DESIGN.textPrimary} block mb-1 font-medium`}>Portfolio</span>
                  A cohesive series of 8–12 images in high-resolution JPG format.
                </li>
                <li>
                  <span className={`${DESIGN.textPrimary} block mb-1 font-medium`}>Artist Statement</span>
                  A 300-word maximum text explaining the narrative behind the work.
                </li>
                <li>
                  <span className={`${DESIGN.textPrimary} block mb-1 font-medium`}>Biography</span>
                  A brief professional CV and links to your current digital presence.
                </li>
              </ul>
            </section>

            <section className="pt-8">
              <div className={`p-12 border ${DESIGN.borderSubtle} flex flex-col items-center text-center`}>
                <h4 className="text-2xl font-extralight tracking-tighter mb-8 italic font-serif">Ready to submit?</h4>
                <a 
                  href="mailto:submissions@fivefoottwo.com" 
                  className={`w-full py-4 text-center border ${DESIGN.borderSubtle} ${DESIGN.navLink} ${DESIGN.accentHover} transition-all duration-500`}
                >
                  Submit Portfolio
                </a>
                <p className={`mt-6 ${DESIGN.label} opacity-40 uppercase`}>
                  No entry fee required.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}