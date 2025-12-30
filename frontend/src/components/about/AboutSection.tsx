import { Waves, Bike, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[#208F6A] text-sm md:text-base font-semibold uppercase tracking-wide">
                Luxury Hotel
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
                We Provide Outdoor Activities To All Visitors
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              There are many variations of passages available but the majority have suffered alteration in some form by
              injected words which don't look even slightly believable.
            </p>

            {/* Activities */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#208F6A]/10 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-[#208F6A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">The Best Swimming Pool</h3>
                  <p className="text-sm text-gray-600">
                    It uses a dic of over 200 Latin words all the at pretium eget enim wisi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#208F6A]/10 rounded-lg flex items-center justify-center">
                  <Bike className="w-6 h-6 text-[#208F6A]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">The Best Stationary Bike</h3>
                  <p className="text-sm text-gray-600">
                    Making this the first true generator on the printing and setting industry.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-[#208F6A] hover:bg-[#1a7755] text-white px-6 py-6 text-base group">
              Discover More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image Gallery */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Main Large Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800"
                alt="Hotel Interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Left Small Image */}
            <div className="absolute top-[10%] left-0 w-[45%] h-[35%] rounded-lg overflow-hidden shadow-lg z-10">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800"
                alt="Hotel Room"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Restaurant Card */}
            <div className="absolute bottom-0 left-[5%] w-[50%] bg-[#1a1a1a] text-white p-6 rounded-lg shadow-xl z-20">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-[#208F6A] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm7 2a3 3 0 100 6 3 3 0 000-6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-center font-semibold text-lg mb-2">Best Restaurants</h3>
              <p className="text-center text-sm text-gray-300">
                Order up to the sky, let's all time delicious is time make their the event.
              </p>
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-[5%] right-0 w-[55%] h-[40%] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800"
                alt="Hotel Pool"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

