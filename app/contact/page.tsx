"use client";

import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import { DESIGN } from "@/app/constants/theme"; // Import your palette

export default function ContactPage() {
  return (
    <div className={`${DESIGN.layout} ${DESIGN.bg} ${DESIGN.textPrimary}`}>
      
      {/* SHARED NAVBAR */}
      <Navbar />

      <main className="pt-48 md:pt-64 pb-32 px-8 md:px-12 max-w-[1600px] mx-auto flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          
          {/* LEFT SIDE: INFO & MAP BRUTALISM */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className={`${DESIGN.label} mb-8`}>Get in Touch</h2>
            <h1 className={`${DESIGN.heroHeading} mb-12`}>
              Connect <br /> <span className="italic font-serif">With Us.</span>
            </h1>

            <div className="space-y-12 mt-20">
              <div>
                <h4 className={`${DESIGN.label} ${DESIGN.accentHover} mb-4 opacity-100`}>Location</h4>
                <p className={`text-sm font-light ${DESIGN.textMuted} leading-relaxed`}>
                  42 Bruton Place, Mayfair<br />
                  London, W1J 6NP<br />
                  United Kingdom
                </p>
              </div>

              <div>
                <h4 className={`${DESIGN.label} ${DESIGN.accentHover} mb-4 opacity-100`}>Inquiries</h4>
                <p className={`text-sm font-light ${DESIGN.textMuted} leading-relaxed`}>
                  General: hello@fivefoottwo.com<br />
                  Press: media@fivefoottwo.com<br />
                  Sales: collections@fivefoottwo.com
                </p>
              </div>

              {/* Minimalist Map Placeholder */}
              <div className={`relative w-full h-64 ${DESIGN.bg} border ${DESIGN.borderSubtle} overflow-hidden group`}>
                 <div className="absolute inset-0 opacity-20 grayscale group-hover:opacity-40 transition-opacity duration-700 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=51.5100,-0.1470&zoom=14&size=600x300&style=element:geometry%7Ccolor:0x212121&style=element:labels.text.stroke%7Ccolor:0x212121&style=element:labels.text.fill%7Ccolor:0x757575&key=YOUR_KEY')] bg-cover bg-center" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-current opacity-50 rounded-full animate-ping" />
                    <div className="w-2 h-2 bg-current rounded-full absolute" />
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <form className="space-y-12">
              <div className={`group relative border-b ${DESIGN.borderSubtle} focus-within:border-current transition-colors`}>
                <label className={`${DESIGN.label} block mb-1`}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className={`w-full bg-transparent py-4 text-sm font-light outline-none placeholder:opacity-20`}
                />
              </div>

              <div className={`group relative border-b ${DESIGN.borderSubtle} focus-within:border-current transition-colors`}>
                <label className={`${DESIGN.label} block mb-1`}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className={`w-full bg-transparent py-4 text-sm font-light outline-none placeholder:opacity-20`}
                />
              </div>

              <div className={`group relative border-b ${DESIGN.borderSubtle} focus-within:border-current transition-colors`}>
                <label className={`${DESIGN.label} block mb-1`}>Subject</label>
                <select className="w-full bg-transparent py-4 text-sm font-light outline-none appearance-none cursor-pointer">
                  <option className="bg-white dark:bg-black">General Inquiry</option>
                  <option className="bg-white dark:bg-black">Print Acquisition</option>
                  <option className="bg-white dark:bg-black">Artist Submission</option>
                  <option className="bg-white dark:bg-black">Press</option>
                </select>
              </div>

              <div className={`group relative border-b ${DESIGN.borderSubtle} focus-within:border-current transition-colors`}>
                <label className={`${DESIGN.label} block mb-1`}>Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help?"
                  className={`w-full bg-transparent py-4 text-sm font-light outline-none resize-none placeholder:opacity-20`}
                />
              </div>

              <button className={`w-full lg:w-auto px-12 py-4 border ${DESIGN.borderSubtle} ${DESIGN.navLink} ${DESIGN.accentHover} transition-all duration-500`}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>

      {/* SHARED FOOTER */}
      <Footer />
    </div>
  );
}