'use client';
import { motion } from 'framer-motion';

// Combining images from both 'img' and 'regenerated images' folders
const images = [
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.39 PM (1).jpeg", alt: "Retreat View", size: "tall" },
  { src: "regenerated images/Gemini_Generated_Image_3dtsle3dtsle3dts.png", alt: "Conceptual Design", size: "square" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.40 PM.jpeg", alt: "Serene Exterior", size: "wide" },
  { src: "regenerated images/Post-processing_overhaul_for_202604081637.jpeg", alt: "Enhanced Vision", size: "tall" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.43 PM.jpeg", alt: "Lush Surroundings", size: "wide" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.44 PM (1).jpeg", alt: "Harmony", size: "square" },
  { src: "regenerated images/Post-processing_overhaul_for_202604081951.jpeg", alt: "Sunset Glow", size: "tall" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.48 PM.jpeg", alt: "Cosy Cabin Front", size: "wide" },
  { src: "regenerated images/This_image_needs_202604081634.png", alt: "Architectural Focus", size: "tall" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.49 PM (1).jpeg", alt: "Luxurious Setting", size: "square" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.50 PM.jpeg", alt: "Natural Lighting", size: "tall" },
  { src: "regenerated images/Post-processing_overhaul_for_202604082027.jpeg", alt: "Finer Details", size: "wide" },
  { src: "img/WhatsApp Image 2026-04-08 at 3.58.52 PM (1).jpeg", alt: "Dusk Transition", size: "square" },
  { src: "regenerated images/Post-processing_overhaul_for_202604082002 (1).jpeg", alt: "Night Elegance", size: "tall" }
];

export default function Gallery() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Ambient Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[80%] -left-[10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c5a059] uppercase tracking-[0.2em] text-sm font-semibold mb-4"
          >
            A Visual Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight"
          >
            Capturing the Essence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A curated gallery merging original captures and enhanced visualizations of FIG & SHADE, reflecting our breathtaking environment.
          </motion.p>
        </div>

        {/* Masonry CSS Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.6, delay: (Math.min(i % 4, 3)) * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer break-inside-avoid shadow-2xl transition-shadow duration-500 hover:shadow-[#c5a059]/20
                ${img.size === 'tall' ? 'aspect-[3/4]' : img.size === 'wide' ? 'aspect-video' : 'aspect-square'}
              `}
            >
              <img 
                src={`/api/media?path=${encodeURIComponent(img.src)}`}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 filter brightness-[0.85] group-hover:brightness-100"
              />
              
              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white font-serif text-2xl md:text-3xl mb-2 drop-shadow-md">{img.alt}</p>
                <div className="h-[2px] w-12 bg-[#c5a059] rounded-full shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
