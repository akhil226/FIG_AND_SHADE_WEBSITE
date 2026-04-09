'use client';
import { spacesData } from '@/data/spaces';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import BookingModal from '@/components/BookingModal';

export default function SpaceClient({ slug }: { slug: string }) {
  const space = spacesData.find(s => s.slug === slug);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!space) {
    return (
      <div className="min-h-screen flex text-white flex-col items-center justify-center bg-[#0a0a0a]">
         <h1 className="text-4xl font-serif text-[#c5a059] mb-4">Space Not Found</h1>
         <Link href="/"><button className="border border-white/20 px-6 py-2 rounded-full">Go Back Home</button></Link>
      </div>
    );
  }

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed] overflow-x-hidden selection:bg-[#c5a059] selection:text-black">
      <Navbar />

      {/* Cinematic Hero */}
      <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            src={`/animations/${space.videoUrl}`}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-[#0a0a0a]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4 flex flex-col items-center"
        >
          <div className="text-[#c5a059] tracking-[0.3em] uppercase text-sm font-semibold mb-6">Discover</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
            {space.title}
          </h1>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent z-20"
        />
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-20 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-[2px] bg-[#c5a059] mx-auto mb-10" />
          <p className="text-xl md:text-3xl font-light text-gray-300 leading-[1.8] font-serif">
            {space.longDesc}
          </p>
        </motion.div>
      </section>

      {/* Curated Gallery */}
      <section className="py-16 px-6 max-w-[1400px] mx-auto relative z-20">
        <div className="text-center mb-16">
          <p className="text-[#c5a059] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Gallery</p>
          <h2 className="font-serif text-4xl text-white">Glimpses of {space.title}</h2>
        </div>
        
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {space.gallery.map((imgSrc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
            >
              <img 
                src={`/${imgSrc}`}
                alt={`${space.title} view ${i}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-100"
                style={{ aspectRatio: i % 3 === 0 ? '4/5' : '16/9' }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 mb-12 text-center relative z-20 border-t border-white/5 mt-12 bg-gradient-to-t from-[#c5a059]/5 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl text-white mb-8">Ready to escape?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
            <Link href="/">
              <button className="w-full sm:w-auto bg-transparent border border-[#c5a059] text-[#c5a059] font-medium px-8 py-3 rounded-full text-lg transition-all hover:bg-[#c5a059] hover:text-black">
                Return to Directory
              </button>
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#c5a059] border border-[#c5a059] text-black font-medium px-8 py-3 rounded-full text-lg transition-all hover:bg-[#a68241] shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              Reserve Your Stay
            </button>
          </div>
        </motion.div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </main>
  );
}
