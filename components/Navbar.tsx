'use client';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/5"
    >
      <div className="font-serif text-2xl font-bold tracking-widest text-gradient cursor-pointer">
        FIG & SHADE
      </div>
      
      {/* Reduced width and overall size for compact, clean look */}
      <button className="bg-[#c5a059] text-black font-semibold px-5 py-2 text-sm rounded-full transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        Find FIG & SHADE
      </button>
    </motion.nav>
  );
}
