import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Gallery from '@/components/Gallery';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed] overflow-x-hidden selection:bg-[#c5a059] selection:text-black">
      <Navbar />
      
      <Hero />
      
      {/* Visual Story / Craftsmanship Pre-video */}
      <VideoSection 
        videos={['Animation_of_swing.mp4', 'Hanging_tyre_and_202604082029.mp4']}
        title="Craftsmanship & Serenity"
        subtitle="Every detail in FIG & SHADE is curated to provide a harmonious blend of luxury and natural beauty. Experience true peace disconnected from the world."
      />

      <Showcase />

      {/* Visual Gallery showcasing the resort */}
      <Gallery />

      {/* Pre-footer Sunrise Video */}
      <VideoSection 
        videos={['Trees_waving_in_sun raise.mp4']}
        title="Wake Up to the Extraordinary"
        subtitle="Experience the golden hour like never before, right from the comfort of your private luxury retreat."
        reverse={true}
      />

      <Footer />
      
      {/* Global Interactive Elements */}
      <Chatbot />
    </main>
  );
}
