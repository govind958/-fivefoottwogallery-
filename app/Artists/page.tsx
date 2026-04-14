"use client";

import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

// Mock data remains local to the page as it defines the content
const photographers = [
  { id: 1, name: "Elena Rossi", specialty: "Architectural Noir", image: "/p1.jpg" },
  { id: 2, name: "Marcus Thorne", specialty: "Human Narrative", image: "/p2.jpg" },
  { id: 3, name: "Suki Han", specialty: "Urban Solitude", image: "/p3.jpg" },
  { id: 4, name: "Julian Vance", specialty: "Abstract Form", image: "/p4.jpg" },
  { id: 5, name: "Amara Okoro", specialty: "Editorial Landscape", image: "/p5.jpg" },
  { id: 6, name: "Lukas Weber", specialty: "Minimalist Still Life", image: "/p6.jpg" },
];

export default function PhotographersPage() {
  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      {/* SHARED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-48 md:pt-64 px-8 md:px-12 max-w-[1600px] mx-auto pb-32 flex-1">
        
        {/* Header Section */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className={`${DESIGN.label} mb-6`}>
            The Collective
          </h2>
          <h1 className={`${DESIGN.heroHeading} mb-8`}>
            Our <span className="italic font-serif">Artists.</span>
          </h1>
          <div className={`h-[1px] w-24 mb-8 bg-current opacity-30 ${DESIGN.borderSubtle}`} />
          <p className={`max-w-md ${DESIGN.textMuted} font-light leading-relaxed tracking-wide`}>
            A curated selection of photographers pushing the boundaries of visual language and emotional depth.
          </p>
        </header>

        {/* Photographers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {photographers.map((artist, index) => (
            <div 
              key={artist.id} 
              className="group cursor-pointer animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 dark:bg-zinc-900 mb-6">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
                />
                {/* Subtle Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Artist Info */}
              <div className="flex flex-col gap-1">
                <h3 className={`text-lg font-light tracking-tight transition-colors duration-300 uppercase ${DESIGN.accentHover}`}>
                  {artist.name}
                </h3>
                <p className={`${DESIGN.label} italic opacity-70`}>
                  {artist.specialty}
                </p>
              </div>
              
              <div className="mt-4 overflow-hidden">
                <div className={`h-[1px] w-0 ${DESIGN.borderSubtle} bg-current group-hover:w-full transition-all duration-700 opacity-20`} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}