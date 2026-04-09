'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    adults: 1,
    children: 0,
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hardcoded owner number
  const OWNER_WHATSAPP = "919847811838";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      
    // Format the WhatsApp message securely
    const rawMessage = `*New Booking Inquiry - FIG & SHADE*\n\n` +
                       `*Name:* ${formData.name}\n` +
                       `*WhatsApp:* ${formData.whatsapp}\n` +
                       `*Adults:* ${formData.adults}\n` +
                       `*Children:* ${formData.children}\n` +
                       `*Date:* ${formData.date}\n` +
                       `*Time:* ${formData.time}\n\n` +
                       `Please let me know the availability and confirmation.`;

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(rawMessage)}`;

    // Show success state
    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset after a delay and close
    setTimeout(() => {
       setIsSubmitted(false);
       onClose();
       // reset form
       setFormData({
          name: '', whatsapp: '', adults: 1, children: 0, date: '', time: ''
       });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <h2 className="text-2xl font-serif text-[#c5a059] tracking-wide">Plan Your Stay</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={64} className="text-[#c5a059] mb-6" />
                  <h3 className="text-2xl text-white font-medium mb-2">Redirecting to WhatsApp!</h3>
                  <p className="text-gray-400 leading-relaxed">Your secure inquiry receipt has been generated. Please hit send in your WhatsApp to confirm your interest directly with us.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                    <input 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">WhatsApp Number *</label>
                    <input 
                      required 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      type="tel" 
                      className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      placeholder="+91 ...."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Adults *</label>
                      <input 
                        required 
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        type="number" 
                        min="1"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Children</label>
                      <input 
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        type="number" 
                        min="0"
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Check-in Date *</label>
                      <input 
                        required 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        type="date" 
                        style={{ colorScheme: 'dark' }}
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Expected Time *</label>
                      <input 
                        required 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        type="time" 
                        style={{ colorScheme: 'dark' }}
                        className="w-full bg-zinc-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#c5a059] text-black font-semibold rounded-lg px-4 py-4 mt-4 transition-all hover:bg-[#d8b060] hover:scale-[1.02] shadow-[0_0_15px_rgba(197,160,89,0.2)] flex items-center justify-center gap-2"
                  >
                    Confirm via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
