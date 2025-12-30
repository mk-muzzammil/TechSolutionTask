import RoomCard from './RoomCard';

const rooms = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
    title: 'Deluxe Rooms',
    price: 640,
    guests: 3,
    beds: 2,
    bath: 1,
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
    title: 'Junior Rooms',
    price: 640,
    guests: 2,
    beds: 1,
    bath: 1,
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074',
    title: 'Family Rooms',
    price: 820,
    guests: 4,
    beds: 2,
    bath: 1,
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
];

export default function RoomsSection() {
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
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
