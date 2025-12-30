import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BookingHeroSection() {
  return (
    <section className="relative h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Booking</h1>
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:text-[#208F6A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#208F6A]">Booking</span>
        </div>
      </div>
    </section>
  );
}
