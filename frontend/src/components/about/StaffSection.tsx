'use client';

import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useStaff } from '@/hooks';

export default function StaffSection() {
  // Fetch staff data from backend
  const { staff, isLoading, isError } = useStaff();

  // Loading state
  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">Loading staff members...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Failed to load staff members. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
          {staff.map((member) => (
            <div key={member.id} className="group">
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

