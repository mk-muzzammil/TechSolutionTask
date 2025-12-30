import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactCard() {
  return (
    <div className="bg-[#208F6A] rounded-lg overflow-hidden shadow-lg">
      {/* Room Image */}
      <div className="relative h-48 md:h-56">
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
          alt="Luxury Room"
          fill
          className="object-cover"
        />
      </div>

      {/* Contact Info */}
      <div className="p-6 md:p-8 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Phone className="w-6 h-6" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-2">(+1) 987 654 3210</h3>
        <p className="text-sm mb-1">Mon-Fri 7:00 am-3:00 pm</p>
        <p className="text-sm mb-6">24/7 Service Available</p>
        <Button className="bg-[#FDB913] hover:bg-[#e5a70f] text-black font-semibold px-6 w-full md:w-auto">
          Call Us Now →
        </Button>
      </div>
    </div>
  );
}
