import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function StaffSection() {
  const staffMembers = [
    {
      name: 'Michael Dean',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
    },
    {
      name: 'Arnold Taylor',
      role: 'Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
    {
      name: 'Michael Dean',
      role: 'Chef',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    },
    {
      name: 'Michael Dean',
      role: 'Receptionist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <p className="text-[#208F6A] text-sm md:text-base font-semibold uppercase tracking-wide">
            Popular Staff
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
            Expert Staff Persons
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Social Media Overlay */}
                <div className="absolute inset-0 bg-[#208F6A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="absolute bottom-4 left-4 bg-[#208F6A] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {member.role}
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-lg text-[#1a1a1a]">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

