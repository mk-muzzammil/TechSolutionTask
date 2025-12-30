import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function HeroSection({ 
  title, 
  breadcrumb,
  backgroundImage = 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925'
}: HeroSectionProps) {
  return (
    <section className="relative h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <Link href="/" className="hover:text-[#208F6A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#208F6A]">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
