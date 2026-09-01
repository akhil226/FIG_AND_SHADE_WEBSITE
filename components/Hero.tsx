'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';

export default function Hero() {
  const { scrollY } = useScroll();
  // Adjusted parallax to avoid showing background cutoffs on tall mobile screens
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video - Removed constrained paddings and margins for full bleed */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/animations/logointro.mp4"
        />
      </motion.div>

      {/* Hero Content - Positioned at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center px-4 flex flex-col items-center justify-end h-full pb-[15vh]"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black/40 backdrop-blur-sm border-2 border-[#c5a059] text-[#c5a059] font-medium px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 hover:bg-[#c5a059] hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]"
        >
          Book Your Stay
        </button>
      </motion.div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/50 to-transparent"
      />
    </section>
  );
}
