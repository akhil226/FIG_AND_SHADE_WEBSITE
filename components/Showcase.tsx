'use client';
import { motion } from 'framer-motion';
import { MapPin, Wind, Coffee } from 'lucide-react';
import Link from 'next/link';
import { spacesData } from '@/data/spaces';

const icons: Record<string, JSX.Element> = {
  "the-hill-suite": <MapPin className="w-5 h-5 text-[#c5a059]" />,
  "serene-villa": <Wind className="w-5 h-5 text-[#c5a059]" />,
  "luxury-cabin": <Coffee className="w-5 h-5 text-[#c5a059]" />
};

export default function Showcase() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 bg-[#0a0a0a]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Our Spaces</h2>
        <p className="text-gray-400 font-light tracking-wide">Discover comfort wrapped in the embrace of nature.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {spacesData.map((room, i) => (
          <Link href={`/spaces/${room.slug}`} key={room.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-[#151515] border border-white/5 aspect-[3/4] flex flex-col justify-end p-6 cursor-pointer transform-gpu [perspective:1000px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Background Image */}
              <div className="absolute inset-0">
                 <img 
                   src={`/api/media?path=${encodeURIComponent(room.coverImage)}`} 
                   alt={room.title}
                   className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 [transform:translateZ(50px)] transition-transform duration-500 group-hover:translate-y-[-10px]">
                 <div className="flex items-center gap-3 mb-3">
                    {icons[room.slug]}
                    <h3 className="font-serif text-2xl text-white">{room.title}</h3>
                 </div>
                 <p className="text-gray-300 text-sm leading-relaxed">{room.shortDesc}</p>
                 
                 <div 
                   className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c5a059] text-sm uppercase tracking-wider font-semibold inline-block"
                 >
                   Explore {room.title} &rarr;
                 </div>
              </div>
              
              {/* Hover splash effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c5a059]/30 rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
