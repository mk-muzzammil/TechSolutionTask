import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ErrorContent() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="relative w-full max-w-lg mx-auto mb-8">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/error.webp"
                alt="404 Error"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ohh! Page Not Found
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
            We are sorry, but we were not able to find the page you requested. The page might be because you have typed the web address incorrectly.
          </p>

          {/* Back to Home Button */}
          <Link href="/">
            <Button className="bg-[#208F6A] hover:bg-[#1a7755] text-white px-8 py-3 text-base font-semibold">
              Back To Home →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
