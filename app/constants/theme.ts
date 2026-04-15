export const DESIGN = {
  // Main Layout & Selection - High contrast selection using the new Navy
  layout: "min-h-screen font-sans flex flex-col selection:bg-[#2F4156] selection:text-white",

  // Backgrounds - Pure White #FFFFFF primary, Navy #2F4156 for Dark Mode
  bg: "bg-[#FFFFFF] dark:bg-[#2F4156] transition-colors duration-700",

  // Cards - Balanced with subtle Navy tints and soft shadows for depth on white
  bgCard: "bg-[#2F4156]/5 dark:bg-[#FFFFFF]/5 backdrop-blur-md border border-[#2F4156]/10 dark:border-white/10 shadow-sm",

  // Text Colors - Primary is now your Navy #2F4156
  textPrimary: "text-[#2F4156] dark:text-[#FFFFFF]", // Absolute contrast
  textMuted: "text-[#4A5E73] dark:text-[#CBD5E1]",   // Desaturated navy for secondary
  textDim: "text-[#708499] dark:text-[#94A3B8]",     // Lighter slate for metadata

  // Accents & Interactive - Using a mid-tone navy to bridge the gap
  accent: "text-[#2F4156] dark:text-[#FFFFFF]",
  accentHover: "hover:text-[#4A5E73] dark:hover:text-[#CBD5E1] transition-all duration-300",

  // Borders - Precision lines using the Navy at low opacity
  borderSubtle: "border-[#2F4156]/10 dark:border-white/10",
  borderStrong: "border-[#2F4156] dark:border-[#FFFFFF]",

  // Typography Presets
  label: "text-[9px] tracking-[0.5em] uppercase font-bold opacity-70",
  navLink: "text-[11px] tracking-[0.3em] uppercase border-b border-transparent pb-1 hover:border-[#2F4156] dark:hover:border-white transition-all duration-500 cursor-pointer",

  // Hero - Maximum impact with the new Navy #2F4156
  heroHeading: "text-6xl md:text-9xl lg:text-[12rem] font-light tracking-tighter leading-[0.85] text-[#2F4156] dark:text-[#FFFFFF]",
  heroSubtext: "text-sm md:text-lg tracking-widest uppercase font-light mt-4 max-w-md",
};