"use client";

import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";

export default function PrivacyPage() {
  const lastUpdated = "April 07, 2026";

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-zinc-100 font-sans flex flex-col selection:bg-red-100 selection:text-red-900">
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1000px] mx-auto flex-1">
        
        {/* HEADER */}
        <header className="mb-24 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h2 className="text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-6 font-medium">
            Legal & Compliance
          </h2>
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none mb-8">
            Privacy <span className="italic font-serif text-zinc-400">Policy.</span>
          </h1>
          <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* CONTENT SECTION */}
        <div className="space-y-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          
          <section>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-red-500 mb-8 font-semibold">01 / Overview</h3>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
              <p className="text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300 italic font-serif">
                FiveFootTwo Gallery ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This policy outlines our practices regarding data collection through our London gallery and digital platform.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-8 font-semibold">02 / Data Collection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-light leading-loose text-zinc-500">
              <div className="space-y-4">
                <p className="text-zinc-800 dark:text-zinc-100 uppercase tracking-widest text-[11px]">Direct Interactions</p>
                <p>When you contact us via our website, subscribe to our newsletter, or submit work for an Open Call, we collect your name, email address, and professional portfolio data.</p>
              </div>
              <div className="space-y-4">
                <p className="text-zinc-800 dark:text-zinc-100 uppercase tracking-widest text-[11px]">Automated Technologies</p>
                <p>As you interact with our site, we may automatically collect technical data about your equipment and browsing patterns through cookies and similar technologies.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-8 font-semibold">03 / Usage of Information</h3>
            <p className="text-sm font-light leading-loose text-zinc-500 max-w-2xl">
              We process your data to manage exhibition inquiries, fulfill print acquisitions, and provide updates on the gallery's seasonal programming. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>
          </section>

          <section className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
            <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 mb-8 font-semibold">04 / Rights & Contact</h3>
            <p className="text-sm font-light leading-loose text-zinc-500 mb-8">
              Under GDPR and other international privacy laws, you have the right to access, correct, or erase your personal data at any time. 
            </p>
            <a 
              href="mailto:privacy@fivefoottwo.com" 
              className="text-[10px] tracking-[0.4em] uppercase border-b border-red-500 pb-2 hover:text-red-500 transition-colors"
            >
              Contact Privacy Officer
            </a>
          </section>

        </div>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}