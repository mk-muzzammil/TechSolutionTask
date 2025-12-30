'use client';

import RoomCard from './RoomCard';
import { useHotels } from '@/hooks';

export default function RoomsSection() {
  // Fetch hotels data from backend
  const { hotels, isLoading, isError } = useHotels();

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16 md:py-20 bg-[#208F6A]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Loading rooms...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="py-16 md:py-20 bg-[#208F6A]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p>Failed to load rooms. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-[#208F6A]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-white text-sm uppercase tracking-wider mb-2">
            OUR BEST ROOMS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Luxury Rooms and Resort
          </h2>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hotels.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
