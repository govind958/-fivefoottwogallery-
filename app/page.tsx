"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Capture scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Add a Spring Physics layer (The "Secret Sauce")
  // This smooths out the raw scroll data into a fluid stream.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,   // Lower = more "weight" / slower reaction
    damping: 20,     // Prevents bouncy vibrations
    restDelta: 0.0001
  });

  // Background visual transforms
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 0.8, 0.3]);

  // 3. High-Fidelity Scrubbing Logic
  useEffect(() => {
    let frameId: number;

    const render = () => {
      const video = videoRef.current;
      if (video && video.duration) {
        // Calculate the target time based on the smooth scroll progress
        const targetTime = smoothProgress.get() * video.duration;
        
        // Directly sync the video time. 
        // Modern browsers handle this well if the video is encoded correctly.
        video.currentTime = targetTime;
      }
      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, [smoothProgress]);

  return (
    // Increase 'height' to make the video play slower (more scroll room)
    <div ref={containerRef} className="relative bg-black" style={{ height: "800vh" }}>
      
      {/* FIXED BACKGROUND CONTAINER */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          style={{ scale, opacity: videoOpacity }} 
          className="w-full h-full"
        >
          <video
            ref={videoRef}
            src="/video/video1.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      {/* UI CONTENT LAYER */}
      <div className="relative z-20 flex flex-col">
        <Navbar />

        <main className="flex flex-col items-center">
          {/* First View: Hero Info */}
          <section className="h-screen w-full flex flex-col items-center justify-center px-6 sticky top-0">
            <motion.div 
              style={{ 
                opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
                y: useTransform(smoothProgress, [0, 0.1], [0, -50])
              }}
              className="text-center"
            >
              <h2 className={`${DESIGN.label} mb-6 tracking-[0.4em] uppercase text-white`}>
                Established 2026
              </h2>
              <p className="text-white/60 max-w-sm font-light tracking-widest text-sm uppercase">
                Scroll to navigate time
              </p>
            </motion.div>
          </section>

          {/* This empty space creates the scrolling "track" */}
          <section className="h-[600vh] w-full pointer-events-none" />

          {/* Final View: Closing */}
          <section className="h-screen w-full flex items-center justify-center">
             <motion.div
               style={{ opacity: useTransform(smoothProgress, [0.8, 0.95], [0, 1]) }}
               className="text-white/20 text-xs tracking-[1em] uppercase"
             >
               End of Perspective
             </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}