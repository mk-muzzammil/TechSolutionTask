import { Ship, Home, Palmtree, Building, Hotel, Bed } from 'lucide-react';

export default function ClientsSection() {
  const clients = [
    { Icon: Ship, name: 'Ship' },
    { Icon: Home, name: 'Home' },
    { Icon: Palmtree, name: 'Beach' },
    { Icon: Building, name: 'Building' },
    { Icon: Hotel, name: 'Hotel' },
    { Icon: Bed, name: 'Bed' },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <p className="text-[#208F6A] text-sm md:text-base font-semibold uppercase tracking-wide">
            Our Clients
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
            We Have More Then 150+
            <br />
            Global Clients
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <client.Icon className="w-12 h-12 md:w-16 md:h-16 text-gray-600" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

