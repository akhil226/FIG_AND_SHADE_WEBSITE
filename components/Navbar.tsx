'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-[#c5a059] hover:text-white transition-colors cursor-pointer block">
        FIG & SHADE
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="/about" className="text-white hover:text-[#c5a059] font-medium text-sm transition-colors uppercase tracking-wider hidden md:block">
          About Us
        </Link>

        {/* Reduced width and overall size for compact, clean look */}
        <a href="https://maps.app.goo.gl/w4v3CeBSoUQ1fKcs7" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#c5a059] text-black font-semibold px-5 py-2 text-sm rounded-full transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Find FIG & SHADE
          </button>
        </a>
      </div>
    </motion.nav>
  );
}
