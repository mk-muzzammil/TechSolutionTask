'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Flay</span>
              <span className="text-[#208F6A]">land</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#208F6A] transition-colors">
              Home
            </Link>
            <Link href="/pages" className="hover:text-[#208F6A] transition-colors">
              Pages
            </Link>
            <Link href="/rooms" className="hover:text-[#208F6A] transition-colors">
              Rooms & Suites
            </Link>
            <Link href="/services" className="hover:text-[#208F6A] transition-colors">
              Services
            </Link>
            <Link href="/blog" className="hover:text-[#208F6A] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#208F6A] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <Button className="hidden md:flex bg-[#208F6A] hover:bg-[#1a7755] text-white px-6">
              Book Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-[#208F6A] transition-colors py-2">
                Home
              </Link>
              <Link href="/pages" className="hover:text-[#208F6A] transition-colors py-2">
                Pages
              </Link>
              <Link href="/rooms" className="hover:text-[#208F6A] transition-colors py-2">
                Rooms & Suites
              </Link>
              <Link href="/services" className="hover:text-[#208F6A] transition-colors py-2">
                Services
              </Link>
              <Link href="/blog" className="hover:text-[#208F6A] transition-colors py-2">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-[#208F6A] transition-colors py-2">
                Contact
              </Link>
              <Button className="bg-[#208F6A] hover:bg-[#1a7755] text-white w-full">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

