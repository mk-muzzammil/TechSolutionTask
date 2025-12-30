import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-white">Flay</span>
                <span className="text-[#208F6A]">land</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              There are many variations of passages of available but the majority have suffered.
            </p>
            <div className="flex gap-3 pt-2">
              <button className="w-10 h-10 bg-white/10 hover:bg-[#208F6A] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#208F6A] rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#208F6A] rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-[#208F6A] rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-4">EXPLORE</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#208F6A] transition-colors">
                  About Hotel
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#208F6A] transition-colors">
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#208F6A] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="hover:text-[#208F6A] transition-colors">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/spa" className="hover:text-[#208F6A] transition-colors">
                  Spa & Wellness
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#208F6A] flex-shrink-0 mt-0.5" />
                <span>123 Beach Drive, FL 33020, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#208F6A] flex-shrink-0" />
                <span>(+1) 999 888 7777</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#208F6A] flex-shrink-0" />
                <span>info@floyland.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to get updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded text-sm focus:outline-none focus:border-[#208F6A]"
              />
              <Button className="bg-[#208F6A] hover:bg-[#1a7755] text-white px-6">
                →
              </Button>
            </div>
            <div className="flex items-start gap-2 mt-4">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree" className="text-gray-400 text-xs">
                I agree to all terms and conditions
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Copyright 2025. Floyland. All Rights Reserved</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-[#208F6A] transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-[#208F6A] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

