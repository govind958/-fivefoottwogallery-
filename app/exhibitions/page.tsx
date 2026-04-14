"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

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
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1600px] mx-auto flex-1">
        
        {/* SECTION TITLE */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className={`${DESIGN.label} mb-6`}>
            Programming
          </h2>
          <h1 className={`${DESIGN.heroHeading} mb-12`}>
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
                   <span className={`${DESIGN.label} bg-white/90 dark:bg-black/90 px-4 py-2 text-zinc-500 dark:text-zinc-300 backdrop-blur-sm opacity-100`}>
                     {exhibit.status}
                   </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-4 flex flex-col gap-4 pb-4">
                <h3 className={`${DESIGN.label} ${DESIGN.accentHover} opacity-100`}>
                  {exhibit.artist}
                </h3>
                <h2 className="text-3xl md:text-4xl font-extralight tracking-tighter leading-tight group-hover:italic transition-all duration-500">
                  {exhibit.title}
                </h2>
                <p className={`text-xs tracking-widest ${DESIGN.textMuted} font-light mt-2`}>
                  {exhibit.dates}
                </p>
                
                <div className="mt-8">
                  <Link 
                    href={`/exhibitions/${exhibit.id}`} 
                    className={`${DESIGN.navLink} border-b ${DESIGN.borderSubtle} ${DESIGN.accentHover} pb-2`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* PAST ARCHIVE MINI-GRID */}
        <section className={`mt-60 border-t ${DESIGN.borderSubtle} pt-24 opacity-30`}>
          <h4 className={`${DESIGN.label} mb-16 text-center`}>
            Digital Archive
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale cursor-not-allowed">
             {[1, 2, 3, 4].map((i) => (
               <div 
                 key={i} 
                 className="aspect-square bg-zinc-200 dark:bg-zinc-800" 
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