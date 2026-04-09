import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Amenities from '@/components/Amenities';
import NearbyPlaces from '@/components/NearbyPlaces';

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#ededed] overflow-x-hidden selection:bg-[#c5a059] selection:text-black pt-24">
      <Navbar />
      
      {/* Small Hero Header */}
      <section className="py-24 text-center px-6">
        <p className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-semibold mb-4">Discover the Essence</p>
        <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">About FIG & SHADE</h1>
        <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          More than just a stay, an immersion into the untamed beauty of Wayanad wrapped in uncompromising luxury. Discover what makes our sanctuary unique.
        </p>
      </section>

      <Amenities />
      <NearbyPlaces />

      <Footer />
    </main>
  );
}
