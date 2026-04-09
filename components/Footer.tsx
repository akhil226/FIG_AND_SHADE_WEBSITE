'use client';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
        {/* Brand Info */}
        <div className="flex-[2] space-y-4">
          <h3 className="font-serif text-2xl tracking-widest text-[#c5a059]">FIG & SHADE</h3>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            A premium hill retreat nestled in the luxurious greens of Wayanad, offering a cinematic home stay experience. Disconnect from the chaos, reconnect with nature.
          </p>
        </div>

        {/* Product Links */}
        <div className="flex-1 space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Explore</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-[#c5a059] transition-colors">The Rooms</a></li>
            <li><a href="#" className="hover:text-[#c5a059] transition-colors">Amenities & Dining</a></li>
            <li><a href="#" className="hover:text-[#c5a059] transition-colors">Craftsmanship Focus</a></li>
            <li><a href="#" className="hover:text-[#c5a059] transition-colors">Visual Story</a></li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="flex-1 space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm">Contact</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li>Sulthan Bathery, Wayanad</li>
            <li>Kerala, India</li>
            <li><a href="mailto:figandshade@gmail.com" className="hover:text-[#c5a059] transition-colors">figandshade@gmail.com</a></li>
            <li><a href="tel:+919847811838" className="hover:text-[#c5a059] transition-colors">+91 9847811838</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-gray-600 text-xs border-t border-white/10 pt-8">
        &copy; {new Date().getFullYear()} FIG & SHADE.Rooted in the hills of Sulthan Bathery. Under the shade, above the clouds. All rights reserved.
      </div>
    </footer>
  );
}
