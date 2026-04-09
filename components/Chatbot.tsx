'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const faqs = [
  { question: "What time is check-in / check-out?", answer: "Check-in time is at exactly 11:00 AM. Check-out is at 11:00 AM." },
  { question: "Is food included in the tariff?", answer: "Food is paid additionally. Breakfast, lunch, and dinner are available but must be informed and pre-ordered while booking." },
  { question: "How far are the tourist spots?", answer: "We are centrally located! Edakkal Caves is 4 km away, Muthanga Sanctuary is 20 km away, and the Jain Temple is just 7 km away." },
  { question: "Is there parking available?", answer: "Absolutely. We offer complimentary, secure private parking right on the premises for all our guests." }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hello! Welcome to FIG & SHADE. How can I help you today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFAQClick = (faq: typeof faqs[0]) => {
    setMessages(prev => [...prev, { sender: 'user', text: faq.question }]);

    // Simulate thinking delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: faq.answer }]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-[#c5a059] p-4 flex justify-between items-center h-[60px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-900 rounded-full animate-pulse" />
                <span className="text-black font-semibold">FIG & SHADE Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-black/70 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[350px] bg-[#0a0a0a]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                      ? 'bg-[#c5a059] text-black rounded-tr-sm'
                      : 'bg-[#222] text-white rounded-tl-sm border border-white/5'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Buttons (Dummy Input Area) */}
            <div className="p-4 bg-[#111] border-t border-white/5">
              <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">Suggested Questions</p>
              <div className="flex flex-wrap gap-2">
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleFAQClick(faq)}
                    className="text-left text-xs bg-black border border-white/10 text-gray-300 hover:text-[#c5a059] hover:border-[#c5a059]/50 px-3 py-2 rounded-full transition-all"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#c5a059] text-black rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] flex items-center justify-center z-50 hover:bg-white transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
