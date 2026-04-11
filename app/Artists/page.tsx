"use client";

import Image from "next/image";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";

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
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      
      {/* SHARED NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-48 md:pt-64 px-8 md:px-12 max-w-[1600px] mx-auto pb-32 flex-1">
        
        {/* Header Section */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-6 font-medium">
            The Collective
          </h2>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none mb-8">
            Our <span className="italic font-serif">Artists.</span>
          </h1>
          <div className="h-[1px] w-24 bg-red-500 mb-8" />
          <p className="max-w-md text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed tracking-wide">
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
                <h3 className="text-lg font-light tracking-tight group-hover:text-red-500 transition-colors duration-300 uppercase">
                  {artist.name}
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium italic">
                  {artist.specialty}
                </p>
              </div>
              
              <div className="mt-4 overflow-hidden">
                <div className="h-[1px] w-0 bg-zinc-300 dark:bg-zinc-800 group-hover:w-full transition-all duration-700" />
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
