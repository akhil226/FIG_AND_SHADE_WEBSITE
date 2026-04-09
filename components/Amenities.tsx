'use client';
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Wind, Bath, ShieldCheck } from 'lucide-react';

const amenitiesList = [
  { icon: <Wifi className="w-6 h-6" />, title: "High-Speed Wi-Fi", desc: "Stay seamlessly connected even in the woods." },
  { icon: <Car className="w-6 h-6" />, title: "Secure Parking", desc: "Complimentary private parking on the premises." },
  { icon: <Coffee className="w-6 h-6" />, title: "Fine Dining Available", desc: "Breakfast, lunch, and dinner available. Must be pre-ordered while booking." },
  { icon: <Wind className="w-6 h-6" />, title: "Air Conditioning", desc: "Climate control for your ultimate comfort." },
  { icon: <Bath className="w-6 h-6" />, title: "Luxury Toiletries", desc: "Premium, organic bath essentials provided." },
  { icon: <ShieldCheck className="w-6 h-6" />, title: "24/7 Security", desc: "Complete peace of mind during your serene stay." },
];

export default function Amenities() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c5a059] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Included Value</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Exceptional Amenities</h2>
          <p className="text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
            Everything you need for an uncompromising, comfortable escape into nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#c5a059]/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#c5a059] mb-6 p-4 bg-[#c5a059]/10 rounded-full inline-block group-hover:bg-[#c5a059] group-hover:text-black transition-colors duration-500">
                {amenity.icon}
              </div>
              <h3 className="font-serif text-2xl text-white mb-3">{amenity.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{amenity.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
