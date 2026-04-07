"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";

const exhibitions = [
  {
    id: 1,
    status: "Current",
    title: "Shadows of the Proletariat",
    artist: "Elena Rossi",
    dates: "March 12 — May 04, 2026",
    image: "/exhibit-1.jpg",
  },
  {
    id: 2,
    status: "Upcoming",
    title: "The Silent Dialogue",
    artist: "Suki Han",
    dates: "June 15 — July 30, 2026",
    image: "/exhibit-2.jpg",
  },
  {
    id: 3,
    status: "Past",
    title: "Concrete Veins",
    artist: "Marcus Thorne",
    dates: "Jan 05 — Feb 28, 2026",
    image: "/exhibit-3.jpg",
  },
];

export default function ExhibitionsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1600px] mx-auto flex-1">
        
        {/* SECTION TITLE */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-6 font-medium">
            Programming
          </h2>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none mb-12">
            Seasonal <span className="italic font-serif">Shows.</span>
          </h1>
        </header>

        {/* EXHIBITIONS LIST */}
        <div className="flex flex-col gap-32">
          {exhibitions.map((exhibit, index) => (
            <section 
              key={exhibit.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-end animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Side */}
              <div className="lg:col-span-8 overflow-hidden relative aspect-[16/8] bg-zinc-100 dark:bg-zinc-900">
                <Image 
                  src={exhibit.image}
                  alt={exhibit.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                />
                <div className="absolute top-6 left-6">
                   <span className="text-[9px] tracking-[0.4em] uppercase bg-white/90 dark:bg-black/90 px-4 py-2 text-zinc-500 dark:text-zinc-300 backdrop-blur-sm">
                     {exhibit.status}
                   </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-4 flex flex-col gap-4 pb-4">
                <h3 className="text-[10px] tracking-[0.5em] uppercase text-red-500 font-medium">
                  {exhibit.artist}
                </h3>
                <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter leading-tight group-hover:italic transition-all duration-500">
                  {exhibit.title}
                </h2>
                <p className="text-xs tracking-widest text-zinc-400 font-light mt-2">
                  {exhibit.dates}
                </p>
                
                <div className="mt-8">
                  <Link 
                    href={`/exhibitions/${exhibit.id}`} 
                    className="text-[9px] tracking-[0.4em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2 hover:border-red-500 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* PAST ARCHIVE MINI-GRID */}
        <section className="mt-60 border-t border-zinc-100 dark:border-zinc-900 pt-24">
          <h4 className="text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-16 text-center">
            Digital Archive
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
             {[1, 2, 3, 4].map((i) => (
               <div 
                 key={i} 
                 className="aspect-square bg-zinc-200 dark:bg-zinc-800 grayscale cursor-not-allowed" 
               />
             ))}
          </div>
        </section>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}