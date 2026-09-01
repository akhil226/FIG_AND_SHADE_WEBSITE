'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-[60] px-4 md:px-6 py-4 flex justify-between items-center bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
      >
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="font-serif text-xl md:text-2xl font-bold tracking-widest text-[#c5a059] hover:text-white transition-colors cursor-pointer block whitespace-nowrap"
        >
          FIG & SHADE
        </Link>
        
        {/* Desktop Menu - completely hidden on mobile (< 768px) to prevent squeezing */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-white hover:text-[#c5a059] font-medium text-sm transition-colors uppercase tracking-wider whitespace-nowrap">
            About Us
          </Link>

          <a href="https://maps.app.goo.gl/w4v3CeBSoUQ1fKcs7" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#c5a059] text-black font-semibold px-5 py-2 text-sm rounded-full transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] whitespace-nowrap flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Find FIG & SHADE
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle (only visible on mobile) */}
        <button 
          className="md:hidden text-white hover:text-[#c5a059] transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-3xl text-white hover:text-[#c5a059] transition-colors"
            >
              About Us
            </Link>
            
            <a href="https://maps.app.goo.gl/w4v3CeBSoUQ1fKcs7" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="mt-8 bg-[#c5a059] text-black font-semibold px-8 py-4 rounded-full transition-all text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                <MapPin className="w-5 h-5" /> Open in Google Maps
              </button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
