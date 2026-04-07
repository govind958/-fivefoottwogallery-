"use client";

import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";

export default function OpenCallPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1600px] mx-auto flex-1">
        
        {/* HERO SECTION */}
        <header className="mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <h2 className="text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-6 font-medium">Active Brief — Vol. 01</h2>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tighter leading-[0.85] mb-8">
                Field <br /> <span className="italic font-serif">Notes.</span>
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-bold mb-2">Deadline</p>
              <p className="text-xl font-light tracking-tight italic">May 24, 2026</p>
            </div>
          </div>
        </header>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Imagery & Mood */}
          <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            <div className="relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
              <Image 
                src="/opencall-hero.jpg" 
                alt="Atmospheric Landscape" 
                fill 
                className="object-cover grayscale"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                <Image src="/mood-1.jpg" alt="Mood" fill className="object-cover opacity-60" />
              </div>
              <div className="aspect-square bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                <Image src="/mood-2.jpg" alt="Mood" fill className="object-cover opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Column: Textual Details */}
          <div className="lg:col-span-5 space-y-16 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            
            <section>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-6 font-semibold">The Concept</h3>
              <p className="text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
                We are seeking photographic series that document the periphery—the overlooked details of our changing environments. "Field Notes" is an exploration of the quiet transitions between the urban and the wild.
              </p>
            </section>

            <section>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-6 font-semibold">Submission Requirements</h3>
              <ul className="space-y-6 text-sm font-light text-zinc-500 leading-relaxed border-l border-zinc-200 dark:border-zinc-800 pl-8">
                <li>
                  <span className="text-zinc-800 dark:text-zinc-100 block mb-1">Portfolio</span>
                  A cohesive series of 8–12 images in high-resolution JPG format.
                </li>
                <li>
                  <span className="text-zinc-800 dark:text-zinc-100 block mb-1">Artist Statement</span>
                  A 300-word maximum text explaining the narrative behind the work.
                </li>
                <li>
                  <span className="text-zinc-800 dark:text-zinc-100 block mb-1">Biography</span>
                  A brief professional CV and links to your current digital presence.
                </li>
              </ul>
            </section>

            <section className="pt-8">
              <div className="p-12 border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
                <h4 className="text-2xl font-extralight tracking-tighter mb-8 italic font-serif">Ready to submit?</h4>
                <a 
                  href="mailto:submissions@fivefoottwo.com" 
                  className="w-full py-4 bg-[#1a1a1a] dark:bg-zinc-100 text-white dark:text-black text-[10px] tracking-[0.5em] uppercase hover:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white transition-all duration-500"
                >
                  Submit Portfolio
                </a>
                <p className="mt-6 text-[9px] tracking-widest text-zinc-400 uppercase">
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