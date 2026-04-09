'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface VideoSectionProps {
  videos: string[];
  title?: string;
  subtitle?: string;
  reverse?: boolean;
}

export default function VideoSection({ videos, title, subtitle, reverse }: VideoSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className={`relative py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
      {/* Text Content */}
      {title && (
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white">{title}</h2>
          {subtitle && <p className="text-gray-400 text-lg leading-relaxed text-balance">{subtitle}</p>}
        </motion.div>
      )}

      {/* Video Grid */}
      <div className={`flex-1 grid gap-4 w-full ${videos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {videos.map((video, idx) => (
          <motion.div 
            key={video}
            style={{ y: idx % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]) }}
            className={`rounded-2xl overflow-hidden shadow-2xl relative ${videos.length === 1 ? 'aspect-video' : 'aspect-[4/5]'}`}
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
              src={`/animations/${video}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
