import Image from 'next/image';
import { Users, Bed, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RoomCardProps {
  image: string;
  title: string;
  price: number;
  guests: number;
  beds: number;
  bath: number;
  description: string;
}

export default function RoomCard({
  image,
  title,
  price,
  guests,
  beds,
  bath,
  description,
}: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Room Image */}
      <div className="relative h-64">
        <div className="absolute top-4 left-4 bg-[#208F6A] text-white px-3 py-1 rounded text-sm font-semibold z-10">
          ${price} / Night
        </div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Room Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        {/* Amenities */}
        <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#208F6A]" />
            <span>{guests} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-[#208F6A]" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-[#208F6A]" />
            <span>{bath} Bath</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Read More Button */}
        <Button className="bg-[#208F6A] hover:bg-[#1a7755] text-white px-6">
          Read More →
        </Button>
      </div>
    </div>
  );
}
