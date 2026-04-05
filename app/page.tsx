import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white font-sans flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          
          <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
            FiveFootTwo Gallery
          </h1>

          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#" className="hover:opacity-60 transition">Artists</a>
            <a href="#" className="hover:opacity-60 transition">Exhibitions</a>
            <a href="#" className="hover:opacity-60 transition">About</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight max-w-4xl">
          A Space for Emerging Art.
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
          FiveFootTwo Gallery is a curated platform for emerging artists —
          intimate, raw, and deeply human stories told through contemporary art.
        </p>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition text-sm sm:text-base"
          >
            Explore Gallery
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm sm:text-base"
          >
            View Exhibitions
          </a>
        </div>

        {/* HERO IMAGE */}
        <div className="mt-12 sm:mt-16 w-full max-w-5xl">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
            <Image
              src="/art.jpg"
              alt="Gallery Artwork"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </main>

      {/* FEATURE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        
        {/* Artists */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Curated Artists
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-5 sm:mb-6">
            Discover a carefully selected group of emerging artists pushing the boundaries
            of visual storytelling.
          </p>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/artist.jpg"
              alt="Artists"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Exhibitions */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Exhibitions
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-5 sm:mb-6">
            Explore digital exhibitions that blend narrative, emotion, and experimental formats.
          </p>

          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/exhibition.jpg"
              alt="Exhibitions"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5 dark:border-white/10 text-center py-6 text-xs sm:text-sm text-zinc-500">
        © 2026 FiveFootTwo Gallery
      </footer>

    </div>
  );
}