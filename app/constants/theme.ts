export const DESIGN = {
// Main Layout & Selection
layout: "min-h-screen font-sans flex flex-col selection:bg-[#6D829B] selection:text-white",
// Backgrounds - #DCD9D8 is the "Gallery Wall" white, #182434 is the "Deep Noir"
bg: "bg-[#DCD9D8] dark:bg-[#182434] transition-colors duration-700",
// Cards - Using Glassmorphism for a premium art feel
bgCard: "bg-[#B3BDCA]/30 dark:bg-[#6D829B]/5 backdrop-blur-md border border-white/20 dark:border-white/5",
// Text Colors - Ensuring high readability
textPrimary: "text-[#182434] dark:text-[#DCD9D8]", // Strong contrast
textMuted: "text-[#6D829B] dark:text-[#A3AFBC]", // Mid-tones for secondary info
textDim: "text-[#8D98AA] dark:text-[#6D829B]/80", // Metadata and footer text
// Accents & Interactive
accent: "text-[#6D829B] dark:text-[#B3BDCA]",
accentHover: "hover:text-[#182434] dark:hover:text-white hover:border-[#182434] dark:hover:border-white transition-all duration-300",
// Borders - Very thin, technical lines
borderSubtle: "border-[#B3BDCA] dark:border-[#8D98AA]/20",
borderStrong: "border-[#182434] dark:border-[#DCD9D8]",
// Typography Presets
label: "text-[9px] tracking-[0.5em] uppercase font-bold opacity-80",
navLink: "text-[11px] tracking-[0.3em] uppercase border-b border-transparent pb-1 hover:border-current transition-all duration-500 cursor-pointer",
// Hero - Using "Leading-tight" and "Tracking-tighter" for that brutalist art look
heroHeading: "text-6xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-[0.85] text-[#182434] dark:text-[#DCD9D8]",
heroSubtext: "text-sm md:text-lg tracking-widest uppercase font-light mt-4 max-w-md",
};