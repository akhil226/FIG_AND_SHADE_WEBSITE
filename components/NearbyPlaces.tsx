'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const places = [
  { name: "Jain Temple, Sulthan Bathery", distance: "7.2 km", desc: "An ancient architectural marvel, located just minutes away in town." },
  { name: "Edakkal Caves", distance: "4.4 km", desc: "Trek to witness fascinating Neolithic petroglyphs inside dramatic rock formations." },
  { name: "Muthanga Wildlife Sanctuary", distance: "22.2 km", desc: "Guided forest safaris featuring wild elephants, deer, and vibrant birdlife." },
  { name: "Heritage Museum, Ambalavayal", distance: "3.8 km", desc: "Take a step back into the rich tribal history and artifacts of Wayanad." },
  { name: "Karapuzha Dam", distance: "10.9 km", desc: "A scenic reservoir offering beautiful sunset views and manicured gardens." }
];

export default function NearbyPlaces() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* Left Side: Typography & Context */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#c5a059] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Location</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Perfectly Positioned in Wayanad
            </h2>
            <div className="w-16 h-[2px] bg-[#c5a059] mb-6" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Based in the heart of Sulthan Bathery, FIG & SHADE offers serene isolation while keeping you intimately close to Wayanad's most iconic natural and historical destinations. You don't have to choose between convenience and nature.
            </p>

            <a href="https://maps.app.goo.gl/w4v3CeBSoUQ1fKcs7" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent border border-[#c5a059] text-[#c5a059] font-medium px-8 py-3 rounded-full text-sm transition-all hover:bg-[#c5a059] hover:text-black flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Distances List */}
        <div className="flex-[1.2] w-full">
          <div className="relative border-l border-white/10 pl-8 space-y-10">
            {places.map((place, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[37px] top-[6px] w-[10px] h-[10px] rounded-full bg-white/20 group-hover:bg-[#c5a059] transition-colors duration-300 ring-4 ring-black" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#c5a059] transition-colors">
                    {place.name}
                  </h3>
                  <span className="text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded-full text-xs font-semibold tracking-wider self-start sm:self-auto">
                    {place.distance}
                  </span>
                </div>
                <p className="text-gray-400 text-sm max-w-md">
                  {place.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
