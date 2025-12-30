'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-20 md:py-32 bg-[#208F6A]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-white/90 text-sm md:text-base font-semibold uppercase tracking-wide">
            Welcome & Enjoy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Relax And Enjoy With Our Hotel & Resort
          </h2>

          {/* Play Button */}
          <div className="pt-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl"
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 text-[#208F6A] ml-1" fill="currentColor" />
              
              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

